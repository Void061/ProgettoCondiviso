

export default function community() {
    return (
        <div className="community-container">

            <div className="card">
                <p className="title">JOIN SPACELON X COMMUNITY</p>
                <p className="text-secondary text-center">JOIN OUR COMMUNITY AND WE’LL GO TOGETHER TO THE MOON </p>

                <div className="icons">
                   <a href="#"><img src="/images/social/fb.png" alt=""/></a>
                    <a href="#"><img src="/images/social/tw.png" alt=""/></a>
                    <a href="#"><img src="/images/social/tg.png" alt=""/></a>
                </div>
            </div>

           <div className="container">
               <div class="row">
                   <div class="col-md-4">
                   <div class="card-new">
                       <a href="/documents/whitepaper.pdf">
                           <img src="/images/document/whitepaper.png" />
                           <div class="title-card">White Paper</div>
                           <div class="button">DOWNLOAD</div>
                           </a>
                   </div>
                   </div>
                   <div class="col-md-4">
                   <div class="card-new">
                       <a href="/documents/whitepaper.pdf">
                           <img src="/images/document/kyc.png" />
                       <div class="title-card">KYC</div>
                        <div class="button">DOWNLOAD</div>
                   </a>
                   </div>
                   </div>
                
                   <div class="col-md-4">
                       <div class="card-new">
                           <a href="/documents/whitepaper.pdf">
                            <img src="/images/document/audit.png" />
                           <div class="title-card">Audit</div>
                           <div class="button">DOWNLOAD</div>
                           </a>
                        </div>
                   </div>
                  
               </div>
           </div>
            
        </div>
    )
}