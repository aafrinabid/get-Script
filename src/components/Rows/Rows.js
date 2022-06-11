import React from "react";
import { Navigation,Pagination,A11y,Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import classes from './Rows.module.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useHistory} from 'react-router-dom'
function Rows() {
const history =useHistory()
const details=()=>{
  history.push('/details')
}
  return (
<div className={classes.rows}>
  <div className={classes.rowtitle}>
    <h2> Trending Now</h2>
  </div>
    <Swiper 
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={1}
    slidesPerView={6}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
>
      <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
    <SwiperSlide><div className={classes.poster} onClick={details}> <img className={classes.imageTitle} src="https://occ-0-6058-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUJuexBo9PcuDem99SxCIRkLb6vllV0EfehwnalimUa6Wqqm8gSFD8zkIjAUzPt4byng_57yB8mtGQQOkeE7tXaj6vT7kcZPjWYLARDnTtWQ0BpJg-XYmiEXRN1IcSPFw4iAb9b9vIDg9ggS79aLU8shH8gk_YsyLIAnQfKPgyreG6t667uzow.png?r=e43"></img></div> </SwiperSlide>
        
  </Swiper>
  </div>
);
};


export default Rows