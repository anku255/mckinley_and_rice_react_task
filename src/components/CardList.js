import React from "react";
import Card from "./Card";

export default function CardList(props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
        justifyContent: "flex-start"
      }}
    >
      {props.data.map(item => {
        return (
          <div style={{ margin: "1rem" }} key={item.id}>
            <Card {...item} />
          </div>
        );
      })}
    </div>
  );
}
