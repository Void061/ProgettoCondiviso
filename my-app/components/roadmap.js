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
        <div id="roadmap" className="roadmap-container">
            <p className="title">Roadmap</p>
            <p className="text-main">Get ready, read our roadmap</p>


            <div className="roadmap">
                <div onClick={() => ManageMaps('map1')} className={map1 ? "map map-active" : "map"}>
                    <p className="text-secondary">PHASE 1</p>
                    <p className="text-normal">Website development</p>
                    <p className="text-normal">Setup Social Media</p>
                    <p className="text-normal">Smart contract development</p>
                    <p className="text-normal">KYC & AUDIT</p>
                    <p className="text-normal last">TIME SQUARE BILLBOARD</p>
                </div>
              
                <div onClick={() => ManageMaps('map2')} className={map2 ? "map map-active" : "map"}>
                    <p className="text-secondary">PHASE 2</p>
                    <p className="text-normal">Launch on PancakeSwap</p>
                    <p className="text-normal">AMA’s</p>
                    <p className="text-normal">Coingecko</p>
                    <p className="text-normal">CMC</p>
                    <p className="text-normal last">Official merchandise store</p>
                </div>

                <div onClick={() => ManageMaps('map3')} className={map3 ? "map map-active" : "map"}>
                    <p className="text-secondary">PHASE 3</p>
                    <p className="text-normal">Airdrop event </p>
                    <p className="text-normal">CEX LISTING </p>
                    <p className="text-normal">Influencer marketing </p>
                    <p className="text-normal last">Start of SPX ecosystem development</p>
                </div>

                <div onClick={() => ManageMaps('map4')} className={map4 ? "map map-active" : "map"}>
                    <p className="text-secondary">PHASE 4</p>
                    <p className="text-normal">Spacelon DEX </p>
                    <p className="text-normal">Spacelon Mask </p>
                    <p className="text-normal">SPX Financial Academy</p>
                    <p className="text-normal">Charity</p>
                    <p className="text-normal last">Wallet and Dex Certik</p>
                </div>
                
            </div>
        </div>
    )
}