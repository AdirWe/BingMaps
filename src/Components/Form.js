import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Elements/Input";
import Select from "../Elements/Select";
import { useStore } from "../Store";

const Form = () => {
  const [selectedFormat, setSelectedFormat] = useState("Cords");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [place, setPlace] = useState("");
  const add = useStore((state) => state.add);

  const addCoord = () => {
    add("poligons", {
      center: [x, y],
      radius: 30,
      points: 30,
      option: { fillColor: "green", strokeThickness: 2 },
    });
    setX(0);
    setY(0);
    setPlace("");
  };
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
      {selectedFormat == "Cords" ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input type="number" value={x} setValue={setX} />
          <Input type="number" value={y} setValue={setY} />
        </div>
      ) : (
        <Input
          value={place}
          setValue={setPlace}
          placeholder="choose a place.. (to be continued)"
        />
        //The idea was that when choosing a place it will add the x,y coordinates and the when submiting add it.
      )}

      <Button onClick={() => addCoord()}>Submit Coords</Button>
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

const Button = styled.div`
  padding: 0.5rem 1rem;
  background-color: blue;
  color: white;
  border-radius: 3px;
  padding-top: 2rem;
  &:hover {
    transform: scale(1.05);
  }
`;
