import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
const Form = () => {
  const [selectedFormat, setSelectedFormat] = useState("Cords");
  return (
    <Wrapper>
      <Title>Coordinates Form</Title>
      <Select
        value={selectedFormat}
        setValue={setSelectedFormat}
        options={[
          { id: "Cords", name: "Add by Cords" },
          { id: "Place", name: "Add by Place" },
        ]}
      />
      <Input />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
`;
