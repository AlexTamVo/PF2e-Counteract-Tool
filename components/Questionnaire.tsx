import { Fragment, useState } from 'react';
import styles from '../css/Questionnaire.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

function CounterType() {
  return (
    <>
      <h1 className={styles.header}>Let's get started</h1>
      <p className={styles.para}>What are you counteracting?</p>'
      <SelectAutoWidth/>
    </>
  )
}

export function Questionnaire() {
  const [active, setActive] = useState<string>("CounterType");

  return (
    <div>
      {active === "CounterType" && <CounterType />}
    </div>
  );
}
