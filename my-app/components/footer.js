function footer2(){
    return(
        <div className="footer">
            <button>BUTTON</button>

            <div className="mini-section">
                <p className="text-normal">Lorem ipsum dolor sit</p>
                <p className="text-normal">Lorem ipsum dolor sit</p>
            </div>

            <div className="mini-section">
                <p className="text-normal">Lorem ipsum dolor sit</p>
                <p className="text-normal">Lorem ipsum dolor sit</p>
            </div>

            <div className="mini-section">
                <p className="text-normal">Lorem ipsum dolor sit</p>
                <div className="icons-footer">
                <img src="icon.png" alt="icon" />
                <img src="icon.png" alt="icon" />
                <img src="icon.png" alt="icon" />
                </div>
            </div>

            

           


        </div>
    )
}



export default function footer(){
    return(
        <div className="footer py-4">
            <div className="max-width-760 container pb-3">
        <div className="row">
            <div className="col-md-4">
                <h3>Contacts Us</h3>
                info@spacelonx.io
                
            </div>
            <div className="col-md-4">  
            <h3>Link</h3>
            <a href="privacy-policy" className="text-white">Privacy Policy</a> - <a className="text-white" href="terms-and-conditions">Terms and Conditions</a></div>
            <div className="col-md-4">
            <h3>Follow us!</h3>
               <a href="https://www.instagram.com/spacelonx_"><img src="/images/social/ig.png" alt=""/></a>
               <a href="https://twitter.com/spacelonx" className="px-4"><img src="/images/social/tw.png" alt=""/></a>
               <a href="https://t.me/spacelonx_international"><img src="/images/social/tg.png" alt=""/></a>
        </div> <div> 
</div></div>
        </div>
        <hr className="footer-divider" />
        <div className="pt-4 text-center">Spacelonx | 2022</div>
        </div>
    )
}