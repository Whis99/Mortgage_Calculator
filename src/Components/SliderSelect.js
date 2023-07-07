import React from "react";
import SliderComponent from "./Common/SliderComponent";
import { Stack } from "@mui/material";
import RepaymentTime from "./RepaymentSelect";
import "../style.css";


const SliderSelect = ({ data, setData }) => {
    const bank_limit = 50000;
    return (
      <div className = "card">
        <Stack direction="row" justifyContent="space-between">

          {/* The initial loan value component */}
          <SliderComponent
            onChange={(e, value) => {
              setData({
                ...data,
                homeValue: value.toFixed(0),
                downPayment: (0.2 * value).toFixed(0),
                loanAmount: (0.8 * value).toFixed(0),
              });
            }}
            defaultValue={data.homeValue}
            min={1000}
            max={bank_limit}
            steps={100}
            unit="$"
            amount={data.homeValue}
            label="Initial Value"
            value={data.homeValue}
          />

          {/* Down payment component */}
          <SliderComponent
              onChange={(e, value) =>
              setData({
                  ...data,
                  downPayment: value.toFixed(0),
                  loanAmount: (data.homeValue - value).toFixed(0),
              })
              }
              defaultValue={data.downPayment}
              min={0}
              max={data.homeValue}
              steps={100}
              unit="$"
              amount={data.downPayment}
              label="Down Payment"
              value={data.downPayment}
          />
        </Stack>

        <Stack direction="row" gap = {15}>
          {/* Interest rate component */}
          <SliderComponent
              onChange={(e, value) =>
              setData({
                  ...data,
                  interestRate: value,
              })
              }
              defaultValue={data.interestRate}
              min={2}
              max={18}
              steps={0.5}
              unit="%"
              amount={data.interestRate}
              label="Interest Rate %"
              value={data.interestRate}
          />

          {/* Component to select the tenure of the loan. */}
          <RepaymentTime data={data} setData={setData}/>

        </Stack>

        {/* Loan amount value component */}
        <SliderComponent
            onChange={(e, value) =>
            setData({
                ...data,
                loanAmount: value.toFixed(0),
                downPayment: (data.homeValue - value).toFixed(0),
            })
            }
            defaultValue={data.loanAmount}
            min={0}
            max={data.homeValue}
            steps={100}
            unit="$"
            amount={data.loanAmount}
            label="Loan Amount"
            value={data.loanAmount}
        />

        

      </div>
    );
  };

export default SliderSelect;