import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    availableSlot: {
      backgroundColor: "#91C864",
      color: "white",
      border: 0,
      margin: '.5rem',
      borderRadius: '.2rem',
      padding: '.9rem'
    },
    notAvailableSlot: {
      backgroundColor: "#eee",
      color: "black",
      border: 0,
      margin: '.5rem',
      borderRadius: '.2rem',
      padding: '.9rem'
    },
    hoursContainer: {
      padding: ".5rem",
      backgroundColor: "#8080800f",
      flexDirection: "column"
    },
    textSection:{
      margin: '1rem',
    },
    availableSection:{
      marginBottom: '1rem',
    },
    
  }),
);

type Props = {
  slothour: (value: string) => void,
  hourSlotOpening: any[]
}

const AvailableTimeTable: React.FC<Props> = ({ slothour, hourSlotOpening }) => {
    
    const classes = useStyles();
  
    const handleChange: (value: string) => void = (value: string) => {
      slothour(value);
    }

    return (
     <div className={classes.hoursContainer}>
         <div className={classes.textSection}>Available Openning, please select a time to reserve:</div>
         <div className={classes.availableSection}>
           {hourSlotOpening && hourSlotOpening.length && (
             hourSlotOpening.map(ele => <button key={ele.id} onClick={() => handleChange(ele.attributes.label)} className={ele.attributes.available ? classes.availableSlot:classes.notAvailableSlot}>{ele.attributes.label}</button>)
           )}
         </div>
       </div> 
  );
};

  export default AvailableTimeTable;
