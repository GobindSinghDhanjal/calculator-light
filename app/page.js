"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "./components/Button";
import { DisplayBox } from "./components/DisplayBox";
import { OperationButton } from "./components/OperationButton";

export default function Home() {
  const renderComponents = () => {
    const components = [];

    for (let i = 1; i < 10; i++) {
      components.push(<Button key={i} number={i} />);
    }

    return components;
  };

  const operations = ["+", "-", "\\", "*"];

  return (
    <div className="row">
      CALCULATOR
      <Grid container>
        <Grid xs={0} md={2} lg={4}></Grid>
        <Grid xs={12} md={8} lg={4}>
          <DisplayBox />
          <div className="buttons">{renderComponents()}</div>
          <br />
          <div className="buttons">

    
          {operations.map((operation) => {
            return <OperationButton operation={operation} />;
          })}
          </div>
        </Grid>
        <Grid xs={0} md={2} lg={4}></Grid>
      </Grid>
    </div>
  );
}
