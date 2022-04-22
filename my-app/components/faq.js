import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export default function Faq(){


    //Hooks per gestire le icone
    const [ac1, setAc1] = useState(0);
    const [ac2, setAc2] = useState(0);
    const [ac3, setAc3] = useState(0);
    const [ac4, setAc4] = useState(0);
    const [ac5, setAc5] = useState(0);
   

    return(
        <div className="container-faq">
            <p className="title">Faq</p>
            <p className="text-main">Any questions?</p>
            <p className="text-main">Read faQ or text us</p>

            {/* ACCORDITIONS */}
            <Accordion className="title-accordition">
        <AccordionSummary onClick={ () => setAc1(!ac1)}
          expandIcon={!ac1 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion  className="title-accordition">
        <AccordionSummary onClick={ () => setAc2(!ac2)}
          expandIcon={!ac2 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    


      <Accordion  className="title-accordition">
        <AccordionSummary onClick={ () => setAc3(!ac3)}
          expandIcon={!ac3 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    


      <Accordion className="title-accordition">
        <AccordionSummary onClick={ () => setAc4(!ac4)}
          expandIcon={!ac4 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    


      <Accordion  className="title-accordition">
        <AccordionSummary onClick={ () => setAc5(!ac5)}
          expandIcon={!ac5 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">Accordion 5</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    

      
        </div>
    )
}