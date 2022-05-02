import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCustom = props => {
  const { label, data, defaultValue = 0, style = { width: '30%' } } = props;

  return (
    <FormControl
      style={style}
      size='small'
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        defaultValue={defaultValue}
        {...props}
      >
        {
          data.map(d => {
            return d.visible !== false &&
              <MenuItem
                key={d.id}
                value={d.id}>
                {d.value}
              </MenuItem>
          })
        }
      </Select>
    </FormControl>
  );
};

export default SelectCustom;