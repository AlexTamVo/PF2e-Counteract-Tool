import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BasicSelectProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export function BasicSelect(props: BasicSelectProps) {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedType = event.target.value as string;
    setType(selectedType);
    props.setActive(selectedType);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={type}
          label='type'
          onChange={handleChange}
        >
          <MenuItem value={'CounterAffliction'}>Affliction</MenuItem>
          <MenuItem value={'CounterSpell'}>Spell</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}