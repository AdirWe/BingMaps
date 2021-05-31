import React from "react";
import { ReactBingmaps } from "react-bingmaps";
import { useStore } from "../Store";

const MyMap = () => {
  const poligons = useStore((state) => state.poligons);

  return (
    <ReactBingmaps
      bingmapKey="AngZHmF1U7M21dm6VsNBBhRZMIDvB7TxbHJ4btAMLg9UXBzhexz7DjhQ66k2rZWe"
      // center={[13.0827, 80.2707]}
      zoom={1}
      generalizable={true}
      // cursor="pointer"
      strokeColor="black"
      strokeThickness={2}
      strokeDashArray="1 4 2 1"
      fillColor="red"
      regularPolygons={poligons}
      // boundary={{
      //   search: "India",
      //   option: {
      //     entityType: "PopulatedPlace",
      //   },
      //   polygonStyle: {
      //     fillColor: "rgba(161,224,255,0.4)",
      //     strokeColor: "#a495b2",
      //     strokeThickness: 2,
      //   },
      // }}
    ></ReactBingmaps>
  );
};

export default MyMap;
