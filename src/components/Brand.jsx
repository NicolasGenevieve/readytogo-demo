import "./Brand.css";
import logo from "../../src/assets/logo.png";

const Brand = () => {
  return (
    <div className="brand">
      <img src={logo} alt="calculatrice" />
      <span>Ready To Go</span>
    </div>
  );
};

export default Brand;
