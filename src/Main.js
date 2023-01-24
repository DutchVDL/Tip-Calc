import Output from "./Output";
import Input from "./Input";
import React from "react";

export default function Main() {
  const [output, setOutput] = React.useState(0.0);
  const [totalOutput, setTotalOutput] = React.useState(0.0);

  const [reset, setReset] = React.useState(true);
  const toReset = (e) => {
    setReset(e);
  };

  const handleInput = (x, z) => {
    setOutput(x);
    setTotalOutput(z);
  };

  return (
    <div className="container">
      <Input inputAmount={handleInput} reset={reset} />
      <Output output={output} totalOutput={totalOutput} handleReset={toReset} />
    </div>
  );
}
