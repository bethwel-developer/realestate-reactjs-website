import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import './value.css';
import data from '../../utils/accordion';
import { MdOutlineArrowDropDown } from "react-icons/md";






function Value () {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
              {/*---left side-- */}
          <div className="image-container">
            <img src="./value.png" alt=""/>
          </div>

          
          {/*---right side-- */}
          <div className="flexColStart v-right">
            <span className=" orangeText">Our value</span>
              <span className="primaryText">Value we give to you</span>
              <span className="secondaryText">we are always ready to provide you the best services<br/>we believe a good place can make your life better</span>
              

              
              <Accordion className="accordion" allowZeroExpanded>
    {data.map((item) => (
        <AccordionItem className="accordion-item" key={item.uuid}>
            <AccordionItemHeading >
                <AccordionItemButton className="flexCenter  accordion-button">

               


                  <div className="flexCenter icons ">{item.icon}</div>
                  <span className="primaryText accordion-headings">{item.heading}</span>
                  <div className="flexCenter">
                    <MdOutlineArrowDropDown size={25}/>
                  </div>
                    
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="accordion-info secondaryText">{item.detail}</p>
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>

            
          </div>
      </div>
    </section>

  
  );
  };
  export default Value;