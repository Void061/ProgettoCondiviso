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
            <p className="text-main">Welcome to Spacelon X, a community driven token. Learn the true story of the colonization of
Mars and how Spacelon X helped to save the world.</p>

            <p className="title">ECOSYSTEM</p>
            <div className="features">

            <div onClick={() => setSlider(1)} className={current_tab == 1 ? "feature active" : "feature"}>
                    <div className={current_tab == 1 ? "active-circle circle" : "circle" }></div>
                    <p className={current_tab == 1 ? "active-text" : null}>SPACELON DEX</p>
                </div>

                <div onClick={() => setSlider(2)} className={current_tab == 2 ? "feature active" : "feature"}>
                    <div className={current_tab == 2 ? "active-circle circle" : "circle" }></div>
                    <p className={current_tab == 2 ? "active-text" : null}>SPACELON MASK</p>
                </div>

                <div onClick={() => setSlider(3)} className={current_tab == 3 ? "feature active" : "feature"}>
                    <div className={current_tab == 3 ? "active-circle circle" : "circle" }></div>
                    <p className={current_tab == 3 ? "active-text" : null}>SPX FINANCIAL ACADEMY</p>
                </div>

                
            </div>

            {/* CAROUSEL "drag":*/ }
            
            <Splide ref={ sp } data-splide={ `{"pagination": false, "drag": false}`} hasTrack={ false } aria-label="...">

                
  <SplideTrack>
    <SplideSlide><h3>Safe and decentralized where it will be possible to trade $SPX, tokens and coins. Read more</h3></SplideSlide>
    <SplideSlide><h3>A safe and smart wallet that will allow the community to store their digital assets like $SPX</h3></SplideSlide>
    <SplideSlide><h3>A training academy, accessible to all $SPX holders.</h3></SplideSlide>
  </SplideTrack>

  <div className="splide__arrows">
    <button id="prev" onClick={() => ManageSlider("prev")} className="splide__arrow splide__arrow--prev"><NavigateNextIcon sx={{Fill: 'white'}}/></button>
    <button id="next" onClick={() => ManageSlider("next")} className="splide__arrow splide__arrow--next"><NavigateNextIcon  /></button>
    
  </div>
</Splide>




        </div>
    )
}



