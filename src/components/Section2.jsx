import "./Section2.css";
import Result from "./Result";

const Section2 = ({
  isOff1,
  setIsOff1,
  isOff2,
  setIsOff2,
  isOff3,
  setIsOff3,
}) => {
  return (
    <section className="section2">
      <Result
        isOff1={isOff1}
        setIsOff1={setIsOff1}
        isOff2={isOff2}
        setIsOff2={setIsOff2}
        isOff3={isOff3}
        setIsOff3={setIsOff3}
      />
    </section>
  );
};

export default Section2;
