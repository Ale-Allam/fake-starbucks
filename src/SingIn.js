import { useEffect, useRef, useState } from "react";
import { FaTimesCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
const SingIn = () => {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    keepMeSing: false,
  });

  const [showPass, setShowPass] = useState(false);

  const labelRefs = useRef([]);
  const inputRefs = useRef([]);
  const borderRefs = useRef([]);
  const warningRefs = useRef([]);

  const labelStyle =
    "scale: .7; transform: translate(0, -40px); transform-origin: left; transition: .2s";
  const resetLabelStyle =
    "scale: 1; transform: translate(0, 0); transform-origin: center; transition: .2s";
  const resetInputBoxShadow = "0 0 0 1px rgba(0, 0, 0, 0.4)";
  const inputBoxShadow = "0 0 0 2px #d62b1f";

  function handelChange(event) {

    const { name, value, type, checked } = event.target;
    const prevFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormData(prevFormData);
  }

  function focusElement(element) {
    labelRefs.current[element].style.cssText = labelStyle;
    if (
      getComputedStyle(labelRefs.current[element]).color === "rgb(214, 43, 31)"
    ) {
      labelRefs.current[element].style.color = "rgb(214 43 31)";
    }
  }

  function onChangeForBorder(element) {
    if (inputRefs.current[element].value === "") {
      borderRefs.current[element].style.boxShadow = inputBoxShadow;
      labelRefs.current[element].style.color = "#d62b1f";
      warningRefs.current[element].style.height = "22px";
    } else {
      borderRefs.current[element].style.boxShadow = resetInputBoxShadow;
      labelRefs.current[element].style.color = "#00754a";
      warningRefs.current[element].style.height = "0px";
    }
  }

  function blurElement(event, element) {
    if (inputRefs.current[element].value !== "") {
      labelRefs.current[element].style.cssText = labelStyle;
      borderRefs.current[element].style.boxShadow = resetInputBoxShadow;
      warningRefs.current[element].style.height = "0px";
    } else {
      labelRefs.current[element].style.cssText = resetLabelStyle;
      labelRefs.current[element].style.color = "#d62b1f";
      borderRefs.current[element].style.boxShadow = inputBoxShadow;
      warningRefs.current[element].style.height = "22px";
    }
  }

  async function Submit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <header className="header">
        <nav className="header__nav container">
          <div className="header__logo">
            <Link to="/">
              <img
                className="header__img"
                src="https://companieslogo.com/img/orig/SBUX-0200dcbd.png?t=1633439375"
                alt="img"
              />
            </Link>
          </div>
        </nav>
      </header>
      <h1 className="form-h1">Sign in or create an account</h1>
      <div className="container form">
        <h2 className="form__header">* indicates required field</h2>
        <form className="form__style" action="" onSubmit={Submit}>
          <div className="form__main--inputdiv">
            <div
              className="form__inputdiv"
              ref={(element) => (borderRefs.current[0] = element)}
            >
              <label
                ref={(element) => (labelRefs.current[0] = element)}
                className="form__label"
                htmlFor="name"
              >
                * Username or email adress
              </label>
              <input
                id="name"
                onFocus={() => focusElement(0)}
                onBlur={(e) => blurElement(e, 0)}
                onChange={(e) => {
                  handelChange(e);
                  onChangeForBorder(0);
                }}
                ref={(element) => (inputRefs.current[0] = element)}
                className="form__input"
                type="text"
                name="name"
                value={formData.name}
              />
            </div>
            <p
              className="form__warning"
              style={{ height: "0" }}
              ref={(element) => (warningRefs.current[0] = element)}
            >
              <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
              Enter an email/username.
            </p>
          </div>
          <div className="form__main--inputdiv">
            <div
              className="form__inputdiv"
              ref={(element) => (borderRefs.current[1] = element)}
            >
              <label
                ref={(element) => (labelRefs.current[1] = element)}
                className="form__label"
                htmlFor="password"
              >
                * Password
              </label>
              <span
                onClick={() => setShowPass((prevVale) => !prevVale)}
                className="form__passwordshow"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                onFocus={() => focusElement(1)}
                onBlur={(e) => blurElement(e, 1)}
                onChange={(e) => {
                  handelChange(e);
                  onChangeForBorder(1);
                }}
                ref={(element) => (inputRefs.current[1] = element)}
                className="form__input"
                id="password"
                type={showPass ? "text" : "password"}
                name="password"
                value={formData.password}
              />
            </div>
            <p
              className="form__warning"
              style={{ height: "0" }}
              ref={(element) => (warningRefs.current[1] = element)}
            >
              <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
              Enter a password
            </p>
          </div>

          <div className="form__checkbox">
            <input
              onChange={handelChange}
              className="form__custominput"
              type="checkbox"
              id="keepSign"
              checked={formData.keepMeSing}
              name="keepMeSing"
            />
            <label className="form__customlabel" htmlFor="keepSign">
              <span className="form__checkbox--yes">Keep me signed in.</span>
              <span className="form__checkbox--details form-text-underlin">
                Details
              </span>
            </label>
          </div>

          <p className="form__forgetname form-text-underlin">
            Forgot your username?
          </p>
          <p className="form__forgetpass form-text-underlin">
            Forgot your password?
          </p>
          <button className="form__btn" type="submit">
            Sing In
          </button>
        </form>
      </div>
      <div className="joinRewards container">
        <h2 className="joinRewards__header">JOIN STARBUCKS® REWARDS</h2>
        <p className="joinRewards__details">
          Join Starbucks® Rewards to earn free food and <br /> drinks, get free
          refills, pay and order with your <br /> phone, and more.
        </p>
        <button className="joinRewards__btn">
          <Link to="/joinNow">Join now</Link>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default SingIn;
