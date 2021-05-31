import React, { useEffect } from "react";
import styled from "styled-components";
import { useStore } from "./Store";
import MyMap from "./Components/MyMap";
import Form from "./Components/Form";
const App = () => {
  const init = useStore((state) => state.init);
  // useEffect(() => {
  //   //reset poligons with initial value...
  //   init("poligons", [
  //     {
  //       center: [70.0827, 80.2707],
  //       radius: 10,
  //       points: 10,
  //       option: { fillColor: "green", strokeThickness: 2 },
  //     },
  //     {
  //       center: [30.0827, 10.2707],
  //       radius: 30,
  //       points: 30,
  //       option: { fillColor: "green", strokeThickness: 2 },
  //     },
  //     {
  //       center: [6.0827, 40.2707],
  //       radius: 5,
  //       points: 3,
  //       option: { fillColor: "green", strokeThickness: 2 },
  //     },
  //     {
  //       center: [40.0827, 90.2707],
  //       radius: 54,
  //       points: 10,
  //       option: { fillColor: "green", strokeThickness: 2 },
  //     },
  //   ]);
  // }, []);
  return (
    <AppWrapper>
      <Form />
      <MyMap />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100vh;
`;
