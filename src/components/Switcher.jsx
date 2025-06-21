import "./Switcher.css";
import "./Result.css";

const Switcher = ({ state, setState }) => {
  return (
    <>
      <div className="switcher">
        <button
          onClick={() => {
            setState(true);
          }}
          className={state ? "push" : ""}
        >
          On
        </button>
        <button
          onClick={() => {
            setState(false);
          }}
          className={!state ? "push" : ""}
        >
          Off
        </button>
      </div>
    </>
  );
};

export default Switcher;
