import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Story(){
    return(
        <div className="story-container">

            <div className="header-story">
                <p className="title">COMIC STORY</p>
                <p className="text-main">SpacelonX: the true story behind the new Mars world</p>
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
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src="blank.png" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="blank.png" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="blank.png" alt="Image 3"/>
      </SplideSlide>

    
    </Splide>
                </div>
                <div className="right-p">
                    <p className="text-main">SpacelonX comic #1</p>
                    <p className="text-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit loortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriuire dolor in hendrerit in vulputate velit
                    esse molestie consequat, vel illum</p>
                </div>
            </div>

        </div>
    )
}