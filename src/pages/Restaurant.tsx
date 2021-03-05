import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Person, DateRange, Schedule } from '@material-ui/icons';
import AvailableTimeTable from '../components/AvailableTimeTable/AvailableTimeTable';
import { IReservation } from '../models/IReservation';

type Props = {
  saveReservation: (reservation: IReservation | any) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      borderRadius: 0,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    form: {
      border: "1px solid #eee",
      padding: "1.5rem",
      width: "50%",
      boxSizing: "border-box",
      margin: "0 auto",
    }
  }),
);

const  Restaurant: React.FC<Props> = ({ saveReservation }) =>  {
  
  const [reservation, setReservation] = React.useState<IReservation | {}>();

  //TODO
  const [state, setState] = React.useState<
  { 
      totalReservation: number;
      date: string;
      hour:  string;
      hourSlot: string;
  }
  >({
    totalReservation: 2,
    date: "",
    hour: "",
    hourSlot: ""
  });


  const ocupants = Array.from(Array(50).keys()).map(i => i + 1);

  // const handleReservationData = (e: React.FormEvent<HTMLInputElement>) => {
  //   debugger
  //   setReservation({
  //     ...reservation,
  //     [e.currentTarget.id]: e.currentTarget.value,
  //   })
  // }

  // const addNewReservation = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const tempResevation: IReservation = {
  //     Id: Math.random(),
  //     Date: new Date(),
  //     Hour: `${Math.random()}hh`,
  //     ReservedTo: { 
  //         Id: 2, 
  //         Email: "pqhqs@g.com",
  //         FirsName: "Paulo",
  //         LastName: "Queiroz",
  //         Phone: 5585242343423
  //     },
  //     TotalOcupants: 2,     
  //   };
    
  //   saveReservation(tempResevation)
  //   //saveReservation(reservation);
  // }

  const classes = useStyles();

 //TODO
  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    debugger
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.form}>
       <FormControl variant="outlined" className={classes.formControl}>
          <Select
            IconComponent = {Person}
            native
            value={state.totalReservation}
            onChange={handleChange}
            inputProps={{
              name: 'totalReservation',
              id: 'outlined-totalReservation',
            }}
          >
            {ocupants.map(item => <option value={item}> {item}</option>)}
          </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
        IconComponent={DateRange}
          native
          value={state.date}
          onChange={handleChange}
          label="Date"
          inputProps={{
            name: 'date',
            id: 'outlined-date',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          native
          IconComponent={Schedule}
          value={state.hour}
          onChange={handleChange}
          label="Hour"
          inputProps={{
            name: 'hour',
            id: 'outlined-hour',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <Button variant="contained">Serch</Button>
      {/* <Button onClick={addNewReservation} variant="contained">ADD STORE [TEMPORATIO]</Button> */}
      <AvailableTimeTable/>
    </div>
  );
}

export default Restaurant;
