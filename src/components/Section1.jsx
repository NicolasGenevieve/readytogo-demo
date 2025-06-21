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
      <Switcher state={isOff1} setState={setIsOff1} />
      <Switcher state={isOff2} setState={setIsOff2} />
      <Switcher state={isOff3} setState={setIsOff3} />
    </section>
  );
};

export default Section1;
