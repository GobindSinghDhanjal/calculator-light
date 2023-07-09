"use client";
import { Col, Row, Typography } from "antd";
import { Button } from "./components/Button";
import { DisplayBox } from "./components/DisplayBox";
import { OperationButton } from "./components/OperationButton";

const { Title } = Typography;

export default function Home() {
  const renderComponents = () => {
    const components = [];

    for (let i = 1; i < 10; i++) {
      components.push(<Button key={i} number={i} />);
    }

    return components;
  };

  const operations=["+","-","\\","*"];

  return (
    <div className="row">
      <Title>CALCULATOR</Title>
      <Row>
        <Col xs={2} md={6} lg={8}></Col>
        <Col xs={20} md={10} lg={8}>
          <DisplayBox />
          {renderComponents()}
          <br />
          {
            operations.map((operation)=>{
              return(<OperationButton operation={operation}/>)
            })
          }
        </Col>
        <Col xs={2} md={6} lg={8}></Col>
      </Row>
    </div>
  );
}
