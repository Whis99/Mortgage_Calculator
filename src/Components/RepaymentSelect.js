import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//Drop down list of loan's year engagement
const RepaymentTime = ({ data, setData }) => {

    const handleChange = (event) => {
      setData({...data, loanTerm: event.target.value});
    };
  
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Repayment Time</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.loanTerm}
                label="Repayment time"
                defaultValue={3}
                onChange={handleChange}
                >
            
            <MenuItem value={3}>3 years</MenuItem>
            <MenuItem value={5}>5 years</MenuItem>
            <MenuItem value={10}>10 years</MenuItem>
            <MenuItem value={15}>15 years</MenuItem>
            <MenuItem value={20}>20 years</MenuItem>
            <MenuItem value={25}>25 years</MenuItem>
            </Select>
        </FormControl>
    );
  };
  
  export default RepaymentTime;