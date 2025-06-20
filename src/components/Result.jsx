import "./Result.css";

const Result = ({
  isOff1,
  setIsOff1,
  isOff2,
  setIsOff2,
  isOff3,
  setIsOff3,
}) => {
  return (
    <div className={isOff1 && isOff2 && isOff3 ? "result2" : "result"}>
      {isOff1 && isOff2 && isOff3 ? "Go !" : "No Way !"}
    </div>
  );
};

export default Result;
