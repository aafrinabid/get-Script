import React, { useEffect, useState } from "react";
import { Navigation,Pagination,A11y,Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import classes from './Rows.module.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useHistory} from 'react-router-dom'
import { LineAxisSharp } from "@mui/icons-material";
import axios from "axios";

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
  // console.log(props)

  const [isLoading,setIsLoading]=useState(false)
  const [scripts,setScripts]=useState([])
  const [genre,setGenre]=useState('')
  // console.log(scripts)
  const backgroundChanger=(url)=>{
    const divImage =  {
    
      backgroundImage: `linear-gradient(180deg, rgba(1, 3, 15, 0.252), rgba(73, 69, 68, 0.64)), url(${url})`,
         height:'110px',
      //    marginTop:'-70px',
      //    fontSize:'50px',
         backgroundSize: '100%',
         backgroundRepeat: 'no-repeat',
     };
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
    'scriptid':props.scriptId
  }
}).then((res)=>{

  
  // console.log(res.data)

  setScripts([...res.data.result])
 setGenre(res.data.genre)
setIsLoading(false)
}).catch((e)=>{
  console.log(e)
  setIsLoading(false)
})
},[])
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

>
  {isLoading && <h1>loading ...</h1>}
  {!isLoading && scripts.map(script=>(
 <SwiperSlide><div className={classes.poster}style={backgroundChanger(script.script_poster)} onClick={details.bind(null,script.script_id)}>{
  script.featured?<h3 style={{color:'red',textAlign:'end'}}>FEATURED</h3>:''
 } <h1 className="text-white">{script.script_title}</h1></div> </SwiperSlide>
//  <SwiperSlide><div className={classes.poster}  onClick={details.bind(null,script.script_id)}> </div> </SwiperSlide>
))}
    {/* <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide> */}
        
  </Swiper>
  </div>
);
};


export default Rows