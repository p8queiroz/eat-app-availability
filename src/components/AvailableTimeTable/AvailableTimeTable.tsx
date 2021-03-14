import React from 'react';
import styles from  './AvailableTimeTable.module.scss';

type Props = {
  slothour: (value: string) => void,
  hourSlotOpening: any[]
}

const AvailableTimeTable: React.FC<Props> = ({ slothour, hourSlotOpening }) => {
      
    const handleChange: (value: string) => void = (value: string) => {
      slothour(value);
    }

    const hours = hourSlotOpening && hourSlotOpening.length;

    return (
     <div className={styles.hoursContainer}>
         <div className={styles.textSection}>Available Openning, please select a time to reserve:</div>
         <div className={styles.availableSection}>
           {hours && (
             hourSlotOpening.map(ele => <button key={ele.id} onClick={() => handleChange(ele.attributes.label)} className={ele.attributes.available ? '' : styles.notAvailableSlot}>{ele.attributes.label}</button>)
           )}
         </div>
       </div> 
  );
};

  export default AvailableTimeTable;
