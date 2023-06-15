import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function BasicSelect() {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Affliction</MenuItem>
          <MenuItem value={20}>Spell</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}