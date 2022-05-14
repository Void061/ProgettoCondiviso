import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Story(){
    return(
        <div id="comics" className="story-container">

            <div className="header-story">
                <p className="title">COMIC STORY</p>
                <p className="text-main mt-0">SpacelonX: <br /> the true story behind the new Mars world</p>
            </div>

            <div className="panels">
 <Splide
      options={ {
      
          loop: true,
            perPage: 1,
        rewind: true,
        gap   : '3rem',
      } }
      aria-label="ComicsSpacelonX"
    >
               
               
      <SplideSlide> 
        <div className="row">
        <div className="col-md-6">
          <img src="/images/comics/01/entry.jpg" alt="Image 1"/> 
        </div> 
        <div className="col-md-6 right-p">
            <p className="text-main text-left">SpacelonX comic #1</p>
            <p className="text-normal">Read the true story of the colonization of Mars and how Spacelon X helped save the world. <br /> The truth is about to be revealed, nothing will ever be the same again. <br /> <br />
                    WARNING! <br /> <br />
                    Not suitable for the faint of heart.
            </p></div>
          </div>
      </SplideSlide> 
      <SplideSlide>
        <div className="row">
        <div className="col-md-6">
          <img src="/images/comics/01/01.jpg" alt="Image 1"/> 
        </div> 
        <div className="col-md-6 right-p">
            <p className="text-normal">Mars 2448, The children are peaceful and all play together, but they still do not know the adversity faced to get here. <br />
It is Doge&apos;s duty to tell everything.
            </p>
          </div>
          </div>
      </SplideSlide>
      <SplideSlide>
      <div className="row">
        <div className="col-md-6">
          <img src="/images/comics/01/02.jpg" alt="Image 1"/> 
        </div> 
        <div className="col-md-6 right-p">
            <p className="text-normal">2400 - The world is about to implode, the apocalypse is upon us, everyone is looking for a refuge and a solution to survive.
Who will be able to find it? <br /> <br /> 

The discovery of a large meteorite that is about to hit the Earth violently shocks everyone.
            </p>
          </div>
          </div>
      </SplideSlide>
      <SplideSlide>
      
      <div className="row">
        <div className="col-md-6">
          <img src="/images/comics/01/03.jpg" alt="Image 1"/> 
        </div> 
        <div className="col-md-6 right-p">
            <p className="text-normal ">It is up to the CEO to announce the sad news, but... a solution has already been thought of. <br /><br />

The solution does not reassure panicked people despite the fact that an evacuation plan already exists.
            </p>
          </div>
          </div>
      </SplideSlide>
      <SplideSlide>
      
      <div className="row">
        <div className="col-md-6">
          <img src="/images/comics/01/04.jpg" alt="Image 1"/> 
        </div> 
        <div className="col-md-6 right-p">
            <p className="text-normal">
The day of departure arrived the Earth is about to be destroyed.
<br /> <br/>
Upon their arrival on Mars they find a deserted place.
But thanks to their willpower they were able to transform Mars into the fantastic and habitable place it is today
            </p>
          </div>
          </div>
      </SplideSlide>
      

    
    </Splide>
               
            </div>

        </div>
    )
}