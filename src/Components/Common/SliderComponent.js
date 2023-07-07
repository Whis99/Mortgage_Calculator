import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
  }) => {
    return (
      // Title and amount of the slider
      <Stack my={1.4}>
        <Stack direction="row" gap={2.5}>
            <Typography variant="h5">{label}: </Typography>
            <Typography variant="h5">
                {unit} {amount}
            </Typography>
        </Stack>

        <Slider
            min={min}
            max={max}
            defaultValue={defaultValue}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={onChange}
            value={value}
            marks
            step={steps}
        />

        {/* Min and max label */}
        <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="blue">
            {unit} {min}
        </Typography>
        <Typography variant="caption" color="red">
            {unit} {max}
        </Typography>
        </Stack>
      </Stack>
    )
  }
  
  export default SliderComponent