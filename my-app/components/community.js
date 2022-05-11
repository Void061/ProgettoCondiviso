

export default function community() {
    return (
        <div className="community-container">

            <div className="card">
                <p className="title">JOIN SPACELON X COMMUNITY</p>
                <p className="text-secondary text-center">JOIN OUR COMMUNITY AND WE’LL GO TOGETHER TO THE MOON </p>

                <div className="icons">
                   <a href="https://www.instagram.com/spacelonx_"><img src="/images/social/ig.png" alt=""/></a>
                    <a href="https://twitter.com/spacelonx"><img src="/images/social/tw.png" alt=""/></a>
                    <a href="https://t.me/spacelonx_international"><img src="/images/social/tg.png" alt=""/></a>
                </div>
            </div>

           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-4">
                   <div className="card-new">
                       <a target="_blank" href="/documents/whitepaper.pdf">
                           <img src="/images/document/whitepaper.png" />
                           <div className="title-card">White Paper</div>
                           <div  className="button">DOWNLOAD</div>
                           </a>
                   </div>
                   </div>
                   <div className="col-md-4">
                   <div className="card-new">
                       <a target="_blank" href="/documents/kyc.png">
                           <img src="/images/document/kyc.png" />
                       <div  className="title-card">KYC</div>
                        <div  className="button">DOWNLOAD</div>
                   </a>
                   </div>
                   </div>
                
                   <div  className="col-md-4">
                       <div  className="card-new">
                           <a target="_blank" href="/documents/audit.pdf">
                            <img src="/images/document/audit.png" />
                           <div  className="title-card">Audit</div>
                           <div  className="button">DOWNLOAD</div>
                           </a>
                        </div>
                   </div>
                  
               </div>
           </div>
            
        </div>
    )
}