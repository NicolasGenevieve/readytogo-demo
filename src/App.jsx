import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [isOff1, setIsOff1] = useState(false);
  const [isOff2, setIsOff2] = useState(false);
  const [isOff3, setIsOff3] = useState(false);
  // const allOn = isOff1 && isOff2 & isOff3;
  // console.log(isOff);
  console.log(isOff1, isOff2, isOff3);

  return (
    <>
      <Header />
      <Main
        isOff1={isOff1}
        setIsOff1={setIsOff1}
        isOff2={isOff2}
        setIsOff2={setIsOff2}
        isOff3={isOff3}
        setIsOff3={setIsOff3}
      />
      <Footer />
    </>
  );
}

export default App;
