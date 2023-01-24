import React from "react";

export default function Output(props) {
  const [empty, setEmpty] = React.useState(false);

  const resetClick = () => {
    setEmpty((prev) => !prev);

    props.handleReset(empty);
  };

  return (
    <div className="output">
      <div className="output-first">
        <div className="tip-amount">
          <h1>Tip Amount</h1>
          <p>/person</p>
        </div>
        <h1>${isNaN(props.output) || empty ? 0 : props.output.toFixed(2)}</h1>
      </div>

      <div className="output-first">
        <div className="tip-amount">
          <h1>Total</h1>
          <p>/person</p>
        </div>
        <h1>
          $
          <span className="dollar">
            {isNaN(props.output) || empty
              ? 0
              : (props.output * props.totalOutput).toFixed(2)}
          </span>
        </h1>
      </div>

      <button onClick={resetClick}>{empty ? "START" : "RESET"}</button>
    </div>
  );
}
