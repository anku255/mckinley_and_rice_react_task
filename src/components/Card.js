import React from "react";

export default function Card(props) {
  return (
    <div className="card" style={{ maxWidth: "15rem" }}>
      <header className="card-header">
        <h2 className="title is-size-4">{props.name}</h2>
      </header>

      <footer className="card-footer">
        {/* eslint-disable */}
        <span href="#" className="card-footer-item">
          type: {props.type}
        </span>
        <span
          href="#"
          style={{ background: props.color }}
          className="card-footer-item"
        >
          color: {props.color}
        </span>
        <span href="#" className="card-footer-item">
          pantone value: {props.pantone_value}
        </span>
      </footer>
    </div>
  );
}
