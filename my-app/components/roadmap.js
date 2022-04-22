import { useState } from "react"

export default function Roadmap(){

    const [map1, setMap1] = useState(1);
    const [map2, setMap2] = useState(0);
    const [map3, setMap3] = useState(0);
    const [map4, setMap4] = useState(0);


    function ManageMaps(e){
        if(e == "map1"){
            setMap1(1);
            setMap2(0);
            setMap3(0);
            setMap4(0);
        }
        if(e == "map2"){
            setMap1(0);
            setMap2(1);
            setMap3(0);
            setMap4(0);
        }
        if(e == "map3"){
            setMap1(0);
            setMap2(0);
            setMap3(3);
            setMap4(0);
        }
        if(e == "map4"){
            setMap1(0);
            setMap2(0);
            setMap3(0);
            setMap4(1);
        }
    }
    return(
        <div className="roadmap-container">
            <p className="title">Roadmap</p>
            <p className="text-main">Get ready lorem ipsum</p>
            <p className="text-main">read our Roadmap</p>


            <div className="roadmap">
                <div onClick={() => ManageMaps('map1')} className={map1 ? "map map-active" : "map"}>
                    <p className="text-secondary">Titolo</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur </p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal last">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              
                <div onClick={() => ManageMaps('map2')} className={map2 ? "map map-active" : "map"}>
                    <p className="text-secondary">Titolo</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur </p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal last">Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div onClick={() => ManageMaps('map3')} className={map3 ? "map map-active" : "map"}>
                    <p className="text-secondary">Titolo</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur </p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal last">Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div onClick={() => ManageMaps('map4')} className={map4 ? "map map-active" : "map"}>
                    <p className="text-secondary">Titolo</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur </p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetur</p>
                    <p className="text-normal last">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                
            </div>
        </div>
    )
}