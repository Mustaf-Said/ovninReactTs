import "../../scss/test.scss";
/* import { MouseEventHandler, useState } from "react";


interface V7FrProps {
  name: string;
  age: number;
  handClick: MouseEventHandler;
}

function V7Fr(props: V7FrProps) {
  return (
    <div className="btnV7Fr">
      <h5>Test off {props.name}</h5>
      <h5>Test off {props.age}</h5>
      <button type="button" onClick={props.handClick}>
        Clic me
      </button>
    </div>
  );
}

function V7Fr2() {
  const [get, getSet] = useState(0);
  return (
    <div>
      <V7Fr
        name="Musse"
        age={43}
        handClick={() => {
          alert("Bara kolla om props funkar..");
        }}
      />{" "}
      <br />
      <h1>Counter: {get}</h1>
    <button type="button" onClick={() => { getSet(get + 1); }}>
      Plus 1
    </button> <br />
    <button type="button" onClick={() => { getSet(get - 1); }}>
      Minus 1
    </button>
    </div>
  );
}

export default V7Fr2;
 */

//-------------------------------------------------------------

import React, { useState, FormEvent } from "react";

const Test: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");
  const [submittedAge, setSubmittedAge] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedName(name);
    setSubmittedAge(age);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name" className="btn1">
          Write your name here:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age"> Write your age here:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="btn2"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>{submittedName}</p>
        <span>{submittedAge}</span>
      </div>
    </div>
  );
};

export default Test;
