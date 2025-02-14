import { MouseEventHandler, useState } from "react";
import "../../scss/test.scss";

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
