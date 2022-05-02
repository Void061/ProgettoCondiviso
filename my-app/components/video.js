

export default function video(){
    return (
        <div id="how-to-buy" className="video">
            <p className="title">HOW TO BUY</p>
            <p className="text-main mb-40">Discover how to buy our token
</p>

         <video poster="/images/poster.jpg" controls>
         <source src="/video/how-to-buy.mp4" type="video/mp4"  />
         </video>
        </div>
    )
}