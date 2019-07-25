import React, { useEffect, useState } from "react";

const Calculator: React.FC = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);
  const [wasm, setWasm] = useState<any>(null);

  const load = async () => {
    setWasm(await import("calculator"));
  };
  load();
  useEffect(() => {
    if (wasm) {
      setSum(wasm.add(a, b));
    }
  }, [a, b, wasm]);

  return (
    <div className="calculator">
      <input
        className="calculator-input"
        type="number"
        value={a}
        onChange={e => setA(parseInt(e.target.value))}
      />
      +
      <input
        className="calculator-input"
        type="number"
        value={b}
        onChange={e => setB(parseInt(e.target.value))}
      />
      =<span className="calculator-output">{sum}</span>
    </div>
  );
};

export default Calculator;
