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
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const  Restaurant: React.FC<Props> = ({ saveReservation }) =>  {
  
  const [reservation, setReservation] = React.useState<IReservation | {}>()

  const handleReservationData = (e: React.FormEvent<HTMLInputElement>) => {
    setReservation({
      ...reservation,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const tempResevation: IReservation = {
      Id: Math.random(),
      Date: new Date(),
      Hour: `${Math.random()}hh`,
      ReservedTo: { 
          Id: 2, 
          Email: "pqhqs@g.com",
          FirsName: "Paulo",
          LastName: "Queiroz",
          Phone: 5585242343423
      },
      TotalOcupants: 2,     
    };
    
    saveReservation(tempResevation)
    //saveReservation(reservation);
  }

  const classes = useStyles();

  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <>
       <FormControl variant="outlined" className={classes.formControl}>
        <Select
           IconComponent = {Person}
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
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
        IconComponent={DateRange}
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
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
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <Button variant="contained">Serch</Button>
      <Button onClick={addNewReservation} variant="contained">ADD STORE [TEMPORATIO]</Button>
      <AvailableTimeTable/>
      </>
  );
}

export default Restaurant;
