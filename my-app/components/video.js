

export default function video(){
    return (
        <div className="video">
            <p className="title">Title</p>
            <p className="text-main">How to buy</p>

         <video controls>
         <source src="https://www.youtube.com/watch?v=" type="video/mp4" />
         </video>
        </div>
    )
}