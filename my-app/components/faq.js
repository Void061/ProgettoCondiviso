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
        <div id="faq" className="container-faq">
            <p className="title">FAQ</p>
            <p className="text-main">Frequently Asked Questions</p>

            {/* ACCORDITIONS */}
            <Accordion className="title-accordition">
        <AccordionSummary onClick={ () => setAc1(!ac1)}
          expandIcon={!ac1 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">What is the slippage ?</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
          Buy and Sell 10%
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion  className="title-accordition">
        <AccordionSummary onClick={ () => setAc2(!ac2)}
          expandIcon={!ac2 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">How holders dividends work</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
          Each holders will automatically receive in their wallet, WBNB, simply by adding the following
contract : 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
          </Typography>
        </AccordionDetails>
      </Accordion>
    


      <Accordion  className="title-accordition">
        <AccordionSummary onClick={ () => setAc3(!ac3)}
          expandIcon={!ac3 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">What are the fees?</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>Every transaction has a 10% fee with 2% going to the holders, 4% going to Pancakeswap
liquidity pool and 4% going to marketing wallet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    


      <Accordion className="title-accordition">
        <AccordionSummary onClick={ () => setAc4(!ac4)}
          expandIcon={!ac4 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">Will the Dev own tokens?</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
          Yes, the dev will have a minimum part of tokens that will be used for future burns and
listings on CEXs. Everything else will be locked.
          </Typography>
        </AccordionDetails>
      </Accordion>
    


      <Accordion  className="title-accordition">
        <AccordionSummary onClick={ () => setAc5(!ac5)}
          expandIcon={!ac5 ? <AddIcon sx={{color: "white"}} /> : <RemoveIcon sx={{color: 'white'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className="text-accordition">Where can I contact you for a collaboration?</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordition-details">
          <Typography>
          To collaborate with us or fill a job role in our team, contact us at this address : info@spacelonx.io
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    

      
        </div>
    )
}