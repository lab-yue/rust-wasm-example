import React, { useEffect, useState } from "react";
//import load from "../../calculator/src/lib.rs";
import load from "../../calculator/src/lib.rs";
type Add = ((a: number, b: number) => number) | undefined;

const Calculator: React.FC = () => {
  let add: Add = undefined;

  useEffect(() => {
    load().then((result: any) => {
      add = result.instance.exports.add;
    });
  }, []);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = () => {
    if (!add) {
      return "";
    }
    return add(a, b);
  };

  return (
    <>
      <input type="number" onChange={e => setA(parseInt(e.target.value))} />
      +
      <input type="number" onChange={e => setB(parseInt(e.target.value))} />=
      {sum()}
    </>
  );
};

export default Calculator;
