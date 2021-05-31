import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
const Form = () => {
  const [selectedFormat, setSelectedFormat] = useState("Cords");
  const [x, setX] = useState(0);

  const [y, setY] = useState(0);

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
      <Input type="number" value={x} setValue={setX} />
      <Input type="number" value={y} setValue={setY} />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  border-top: 1px solid black;
  padding: 2rem;
`;

const Title = styled.div`
  font-weight: bold;
`;
