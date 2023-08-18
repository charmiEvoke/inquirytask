import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks(props) {

    console.log("props in dropdown",props);
 const [selectedValue,setSelectedValue] = React.useState([]);

  const handleChange = (event) => {
    console.log("calling handlechange");
      setSelectedValue(event.target.value)
      console.log("selectedValue",event.target.value,selectedValue);
      props?.parentCallback(event.target.value);
   
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={selectedValue}
          onChange={handleChange}
          MenuProps={MenuProps}
          style={{background:"#FFFFFF"}}
        >
          {props?.arrData?.map((item) => (
            <MenuItem key={item} value={item}>
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}