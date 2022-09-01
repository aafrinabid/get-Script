import React, { useEffect, useState } from "react";
import { Navigation,Pagination,A11y,Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import classes from './Rows.module.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useHistory, useParams} from 'react-router-dom'
import { LineAxisSharp } from "@mui/icons-material";
import axios from "axios";
import { borderColor } from "@mui/system";

const genres=['Action Genre',
'Animation Genre',
'Comedy Genre',
    'Crime Genre',
    'Drama Genre',
    'Experimental Genre',
    'Fantasy Genre',
    'Historical Genre',
    'Horror Genre',
    'Romance Genre',
    'Science Fiction Genre',
    'Thriller Genre',
    'Western Genre',
    'Other Genres',]

function Rows(props) {

  const params = useParams()
  const {type}=params
  const [isLoading,setIsLoading]=useState(false)
  const [scripts,setScripts]=useState([])
  const [genre,setGenre]=useState('')
  const [episode,setEpisode]=useState(0)
  const [season,setSeaosn]=useState(0)
  const backgroundChanger=(url,featured)=>{
    let divImage ={}
    if(!featured){
      divImage={
    
        backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.252), rgba(73, 69, 68, 0.64)), url(${url})`,
           height:'110px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
          //  backgroundSize: '111%'
           
       };
    }  else{
      divImage={
    
        backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.252), rgba(73, 69, 68, 0.64)), url(${url})`,
           height:'110px',
        //    marginTop:'-70px',
        //    fontSize:'50px',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
          //  borderRadius:'1px',
          //  borderColor:'red'
          border:'1px solid red',
          display:'grid',
          gridTemplateColumns:'1fr',
          gridTemplateRows:'80% 18% 2%'
          // backgroundSize: '111%'

       };

    }
     return divImage
  }


  


const history =useHistory()
const details=(id)=>{
  history.push(`/details/${id}`)
}


useEffect(()=>{
  setIsLoading(true)
axios.get('http://localhost:3500/fetchscript',{
  headers:{
    'genre':props.genre,
    'indetail':props.inDetail,
    'scriptid':props.scriptId,
    'type':type,
    'episodes':props.episodes
  }
}).then((res)=>{

  

  setScripts([...res.data.result])
 setGenre(res.data.genre)
setIsLoading(false)
}).catch((e)=>{
  console.log(e)
  setIsLoading(false)
}).catch(e=>{
  console.log(e)
})
},[type])
  return (
<div className={`${classes.rows} bg-inherit`}>
  <div className={classes.rowtitle}>
    <h2>{genre}</h2>
  </div>
    <Swiper 
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={1}
    slidesPerView={props.screenper}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{background:'inherit'}}

>
  {isLoading && <h1>loading ...</h1>}
  {!isLoading && scripts.map(script=>(
 <SwiperSlide >
  {/* <div style={{borderRadius:'2px',borderColor:'red'}}> */}
  <div className={classes.poster}style={backgroundChanger(script.script_poster,script.featured)} onClick={details.bind(null,script.script_id)}>
  {/* <div style={{display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'2fr 1fr'}}> */}
 <h1 className="text-white">{script.script_title}</h1>
 {
  props.episodes?<div style={{width:'100%',color:'white',borderRadius:'5px'}}>
    {/* <h3 style={{color:'black',textAlign:'end',backgroundColor:'red',marginRight:'110px',paddingBottom:'50px'}}> */}
      {/* {season} {episode} */}
    <h1 style={{    fontSize: '29px',}}>{`S${script.season} E${script.episode}`}</h1>
      {/* </h3> */}
      </div>:''
 }

 {
  script.featured && props.episodes!==true?<div style={{width:'100%',color:'red',backgroundColor:'#0000008c',borderRadius:'5px'}}>
    {/* <h3 style={{color:'black',textAlign:'end',backgroundColor:'red',marginRight:'110px',paddingBottom:'50px'}}> */}
      FEATURED
      {/* </h3> */}
      </div>:''
 }

 {/* </div> */}
 {/* </div>  */}
 </div>
 {/* </div> */}
  </SwiperSlide>
))}
   
        
  </Swiper>
  </div>
);
};


export default Rows