import React from 'react';
import  './AvailableTimeTable.css';

type Props = {
  slothour: (value: string) => void,
  hourSlotOpening: any[]
}

const AvailableTimeTable: React.FC<Props> = ({ slothour, hourSlotOpening }) => {
      
    const handleChange: (value: string) => void = (value: string) => {
      slothour(value);
    }

    return (
     <div className="hours-container">
         <div className="text-section">Available Openning, please select a time to reserve:</div>
         <div className="available-section">
           {hourSlotOpening && hourSlotOpening.length && (
             hourSlotOpening.map(ele => <button key={ele.id} onClick={() => handleChange(ele.attributes.label)} className={ele.attributes.available ? '' : 'not-available-slot'}>{ele.attributes.label}</button>)
           )}
         </div>
       </div> 
  );
};

  export default AvailableTimeTable;
