import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import RepaymentTime from "./Components/RepaymentSelect";

function App() {

  const [data, setData] = useState({
    homeValue: 10000,
    downPayment: 10000 * 0.2,
    loanAmount: 10000 * 0.8,
    loanTerm: 3,
    interestRate: 5,
  })

  return (
    <div className="App">
    <Navbar />
    <Container maxWidth="xl" sx={{marginTop:4}}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}>

        {/* Component to initialize the value of diferrents slides */}
        <SliderSelect data={data} setData={setData}/>

        {/* Component to select the tenure of the loan. */}
        <RepaymentTime data={data} setData={setData}/>

        </Grid>
        <Grid item xs={12} md={6}>

          {/* Component to display the loan installment per month */}
          <Result data={data}/>
        </Grid>
      </Grid>
    </Container>
  </div>
  );
}

export default App;
