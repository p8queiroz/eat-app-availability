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
  slothour: (value: string) => void
}

const AvailableTimeTable: React.FC<Props> = ({ slothour }) => {
    const classes = useStyles();
  
    const handleChange: (value: string) => void = (value: string) => {
      slothour(value);
    }

    return (
     <div className={classes.hoursContainer}>
         <div className={classes.textSection}>Available Openning, please select a time to reserve:</div>
         <div className={classes.availableSection}>
              <button onClick={() => handleChange('11:40')} className={classes.notAvailableSlot}>11:40</button>
              <button onClick={() => handleChange('11:45')} className={classes.availableSlot}>11:45</button>
              <button onClick={() => handleChange('11:50')} className={classes.availableSlot}>11:50</button>
              <button onClick={() => handleChange('11:55')} className={classes.availableSlot}>11:55</button>
         </div>
       </div> 
  );
};

  export default AvailableTimeTable;
