import React from 'react';
import "./about.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';

export const Accordion = ({title, active, setActive, contents, imgsrc}) => {
    return (
        <>
        <div className="accordion">
  <div className="accordionHeading">
    <div className="container">
   <p> <img src={imgsrc} className="img-fluid animated" alt="Commonimg" />{title}</p>
      <span onClick={() => setActive(title)}>{active === title ?  <span className="icon_add_bg"><RemoveIcon className="icon_remove" /></span> : <span className="icon_add_bg"><AddIcon className="icon_add" /> </span> }</span>
    </div>
  </div>
  <div className={(active === title ? "show" : "")  + " accordionContent"}>
    <div className="container">
      <p>{contents}</p>
    </div>
  </div>
</div>
            
        </>
    )
}
export default Accordion;
