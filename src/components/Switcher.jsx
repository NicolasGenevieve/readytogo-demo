import "./Switcher.css";
import "./Result.css";

const Switcher = ({
  isOff1,
  setIsOff1,
  isOff2,
  setIsOff2,
  isOff3,
  setIsOff3,
}) => {
  return (
    <>
      <div className="switcher">
        <button
          onClick={() => {
            setIsOff1(true);
          }}
          className={isOff1 === true ? "push" : ""}
        >
          On
        </button>
        <button
          onClick={() => {
            setIsOff1(false);
          }}
          className={isOff1 === false ? "push" : ""}
        >
          Off
        </button>
      </div>
      <div className="switcher">
        <button
          onClick={() => {
            setIsOff2(true);
          }}
          className={isOff2 === true ? "push" : ""}
        >
          On
        </button>
        <button
          onClick={() => {
            setIsOff2(false);
          }}
          className={isOff2 === false ? "push" : ""}
        >
          Off
        </button>
      </div>
      <div className="switcher">
        <button
          onClick={() => {
            setIsOff3(true);
          }}
          className={isOff3 === true ? "push" : ""}
        >
          On
        </button>
        <button
          onClick={() => {
            setIsOff3(false);
          }}
          className={isOff3 === false ? "push" : ""}
        >
          Off
        </button>
      </div>
    </>
  );
};

export default Switcher;
