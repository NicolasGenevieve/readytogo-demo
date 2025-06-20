import "./Section1.css";
import Switcher from "./Switcher";

const Section1 = ({
  isOff1,
  setIsOff1,
  isOff2,
  setIsOff2,
  isOff3,
  setIsOff3,
}) => {
  return (
    <section className="section1">
      <Switcher
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

export default Section1;
