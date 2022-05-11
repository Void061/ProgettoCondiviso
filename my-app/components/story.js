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

                <div className="left-p">
                <Splide
      options={ {
      
          loop: true,
            perPage: 1,
        rewind: true,
        gap   : '1rem',
      } }
      aria-label="ComicsSpacelonX"
    >
      <SplideSlide>
        <img src="/images/comics/01/entry.jpg" alt="Image0"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/comics/01/01.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/comics/01/02.jpg" alt="Image2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/comics/01/03.jpg" alt="Image3"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/comics/01/04.jpg" alt="Image4"/>
      </SplideSlide>
    </Splide>
                </div>
                <div className="right-p">
                    <p className="text-main text-left">SpacelonX comic #1</p>
                    <p className="text-normal">Read the true story of the colonization of Mars and how Spacelon X helped save the world. <br /> The truth is about to be revealed, nothing will ever be the same again. <br /> <br />

WARNING! <br /> <br />

Not suitable for the faint of heart.</p>
                </div>
            </div>

        </div>
    )
}