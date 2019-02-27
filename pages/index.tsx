import React from "react";
import styled from "@emotion/styled";
import { Button, Input } from "antd";
const StyledDiv = styled.div`
  width: 100px;
  background: red;
  height: 100px;
`;

const Index: React.FC = () => {
  return (
    <div>
      <StyledDiv />
      <Button>Works</Button>
      <Input />
      works
    </div>
  );
};

export default Index;
