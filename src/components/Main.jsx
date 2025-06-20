import "./Main.css";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Main = ({ isOff1, setIsOff1, isOff2, setIsOff2, isOff3, setIsOff3 }) => {
  return (
    <main>
      <Section1
        isOff1={isOff1}
        setIsOff1={setIsOff1}
        isOff2={isOff2}
        setIsOff2={setIsOff2}
        isOff3={isOff3}
        setIsOff3={setIsOff3}
      />
      <Section2
        isOff1={isOff1}
        setIsOff1={setIsOff1}
        isOff2={isOff2}
        setIsOff2={setIsOff2}
        isOff3={isOff3}
        setIsOff3={setIsOff3}
      />
    </main>
  );
};

export default Main;
