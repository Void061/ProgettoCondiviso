import { useState } from "react"
import { useEffect } from "react"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import { useRef } from "react";

export default function Welcome(){
   
    
    
    
    const [tab1, setTab1] = useState(1);
    const [tab2, setTab2] = useState(0);
    const [tab3, setTab3] = useState(0);

    let sp = useRef();

    const [current_tab, set_currentTab] = useState(1);
    
    


    async function ManageSlider(e){

        if(e == "next" && current_tab != 3){set_currentTab(current_tab+1)}
        if(e == "prev" && current_tab != 1){set_currentTab(current_tab-1)}
        

        
    }

    async function setSlider(e){
        sp.current.splide.go(e-1);
        set_currentTab(e);
    }
    

    return(
        <div className="container-welcome">
            <p className="title">Title</p>
            <p className="text-main">Lorem ipsum dolor sit amet</p>

            <div className="features">

            <div onClick={() => setSlider(1)} className={current_tab == 1 ? "feature active" : "feature"}>
                    <div className={current_tab == 1 ? "active-circle circle" : "circle" }></div>
                    <p className={current_tab == 1 ? "active-text" : null}>SOLUTIONS</p>
                </div>

                <div onClick={() => setSlider(2)} className={current_tab == 2 ? "feature active" : "feature"}>
                    <div className={current_tab == 2 ? "active-circle circle" : "circle" }></div>
                    <p className={current_tab == 2 ? "active-text" : null}>SOLUTIONS</p>
                </div>

                <div onClick={() => setSlider(3)} className={current_tab == 3 ? "feature active" : "feature"}>
                    <div className={current_tab == 3 ? "active-circle circle" : "circle" }></div>
                    <p className={current_tab == 3 ? "active-text" : null}>SOLUTIONS</p>
                </div>


         
                

                
               
                
            </div>

            {/* CAROUSEL "drag":*/ }
            
            <Splide ref={ sp } data-splide={ `{"drag": false}`} hasTrack={ false } aria-label="...">

                
  <SplideTrack>
    <SplideSlide>CONTENUTO SLIDE 1</SplideSlide>
    <SplideSlide>CONTENUTO SLIDE 2</SplideSlide>
    <SplideSlide>CONTENUTO SLIDE 3</SplideSlide>
  </SplideTrack>

  <div className="splide__arrows">
    <button id="prev" onClick={() => ManageSlider("prev")} className="splide__arrow splide__arrow--prev"><NavigateNextIcon sx={{Fill: 'white'}}/></button>
    <button id="next" onClick={() => ManageSlider("next")} className="splide__arrow splide__arrow--next"><NavigateNextIcon  /></button>
    
  </div>
</Splide>




        </div>
    )
}



