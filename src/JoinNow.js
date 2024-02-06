import { useEffect, useRef, useState } from "react";
import { FaTimesCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "./components/Footer";
import PasswordHints from "./components/props-data/PasswordHints";
import { Link } from "react-router-dom";
const JoinNow = () => {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAgree: false,
    isAllFormTrue: false,
  });

  const [passwordOwnState, setPasswordOwnState] = useState({
    password: "",
    PasswordHints: {
      eightTo25: false,
      hasNumber: false,
      capitalLetter: false,
      lowerCaseLetter: false,
      specialCharacter: false,
    },
    isAllTrueOrFalse: true,
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
    const { name, type, checked, value } = event.target;
    const firstName = formData.firstName.length > 1;
    const lastName = formData.lastName.length > 1;
    const email = formData.email.length > 0;
    const isAllFormTrue = firstName && lastName && email;
    const prevFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value.trim(),
      isAllFormTrue,
    };
    setFormData(prevFormData);
  }

  function handelPassowrd(event) {
    const password = event.target.value;
    const eightTo25 =
      event.target.value.length >= 8 && event.target.value.length <= 25;
    const capitalLetter = /[A-Z]/.test(password);
    const lowerCaseLetter = /[a-z]/.test(password);
    const specialCharacter = /[^0-9a-zA-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isAllTrueOrFalse =
      eightTo25 &&
      capitalLetter &&
      lowerCaseLetter &&
      specialCharacter &&
      hasNumber;

    const prevFormData = {
      ...formData,
      PasswordHints: {
        ...formData,
        eightTo25,
        hasNumber,
        capitalLetter,
        lowerCaseLetter,
        specialCharacter,
      },
      isAllTrueOrFalse,
    };

    setPasswordOwnState(prevFormData);
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
      if (inputRefs.current[element].name !== 'password') {
          warningRefs.current[element].style.height = "22px";
        }
    } else {
      borderRefs.current[element].style.boxShadow = resetInputBoxShadow;
      labelRefs.current[element].style.color = "#00754a";
      if (inputRefs.current[element].name !== 'password') {
        warningRefs.current[element].style.height = "0px";
      }
    }
  }

  function blurElement(event, element) {
    if (inputRefs.current[element].value !== "") {
      labelRefs.current[element].style.cssText = labelStyle;
      borderRefs.current[element].style.boxShadow = resetInputBoxShadow;
      if (inputRefs.current[element].name !== 'password') {
        warningRefs.current[element].style.height = "0px";
      }
    } else {
      labelRefs.current[element].style.cssText = resetLabelStyle;
      labelRefs.current[element].style.color = "#d62b1f";
      borderRefs.current[element].style.boxShadow = inputBoxShadow;
      if (inputRefs.current[element].name !== 'password') {
        warningRefs.current[element].style.height = "22px";
      }
    }
  }

  async function Submit(e) {
    e.preventDefault();
    if (formData.isAllFormTrue && passwordOwnState.isAllTrueOrFalse) {
      window.location.pathname = "/menu";
    }
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
      <h1 className="form-h1">Create an account</h1>
      <h2 className="h2-join-page"> STARBUCKS® REWARDS</h2>
      <p className="p-join-page">
        Join Starbucks Rewards to earn Stars for free food and drinks, any way
        you pay. Get access to mobile ordering, a birthday Reward, and moremore.{" "}
      </p>
      <div
        className="container form"
        style={{
          width: "clamp(300px, 100%, 550px)",
          padding: "75px",
          marginBottom: "60px",
        }}
      >
        <h2 className="form__header">* indicates required field</h2>
        <h3 className="form__personal--info">Personal information</h3>
        <form className="form__style" action="" onSubmit={Submit}>
          <div className="form__main--inputdiv">
            <div
              className="form__inputdiv"
              ref={(element) => (borderRefs.current[0] = element)}
            >
              <label
                ref={(element) => (labelRefs.current[0] = element)}
                className="form__label"
                htmlFor="firstName"
              >
                * First name
              </label>
              <input
                id="firstName"
                onFocus={() => focusElement(0)}
                onBlur={(e) => blurElement(e, 0)}
                onChange={(e) => {
                  handelChange(e);
                  onChangeForBorder(0);
                }}
                ref={(element) => (inputRefs.current[0] = element)}
                className="form__input"
                type="text"
                name="firstName"
              />
            </div>
            <p
              className="form__warning"
              style={{ height: "0" }}
              ref={(element) => (warningRefs.current[0] = element)}
            >
              <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
              Enter your first name
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
                htmlFor="lastName"
              >
                * Last name
              </label>
              <input
                id="lastName"
                onFocus={() => focusElement(1)}
                onBlur={(e) => blurElement(e, 1)}
                onChange={(e) => {
                  handelChange(e);
                  onChangeForBorder(1);
                }}
                ref={(element) => (inputRefs.current[1] = element)}
                className="form__input"
                type="text"
                name="lastName"
              />
            </div>
            <p
              className="form__warning"
              style={{ height: "0" }}
              ref={(element) => (warningRefs.current[1] = element)}
            >
              <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
              Enter your last name
            </p>
          </div>
          <h3 className="form__account--secuirty">Account Security</h3>
          <div className="form__main--inputdiv">
            <div
              className="form__inputdiv"
              ref={(element) => (borderRefs.current[2] = element)}
            >
              <label
                ref={(element) => (labelRefs.current[2] = element)}
                className="form__label"
                htmlFor="email"
              >
                * Email address
              </label>
              <input
                required
                id="email"
                onFocus={() => focusElement(2)}
                onBlur={(e) => blurElement(e, 2)}
                onChange={(e) => {
                  handelChange(e);
                  onChangeForBorder(2);
                }}
                ref={(element) => (inputRefs.current[2] = element)}
                className="form__input"
                type="email"
                name="email"
              />
            </div>
            <p
              className="form__warning"
              style={{ height: "0" }}
              ref={(element) => (warningRefs.current[2] = element)}
            >
              <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
              Please enter your email address.
            </p>
          </div>

          <div className="form__main--inputdiv">
            <div
              className="form__inputdiv"
              ref={(element) => (borderRefs.current[3] = element)}
            >
              <label
                ref={(element) => (labelRefs.current[3] = element)}
                className="form__label"
                htmlFor="passowrd"
              >
                * Passowrd
              </label>
              <span
                onClick={() => setShowPass((prevVale) => !prevVale)}
                className="form__passwordshow"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
              <input
                id="passowrd"
                onFocus={() => focusElement(3)}
                onBlur={(e) => blurElement(e, 3)}
                onChange={(e) => {
                  handelPassowrd(e);
                  onChangeForBorder(3);
                }}
                ref={(element) => (inputRefs.current[3] = element)}
                className="form__input"
                type={showPass ? "text" : "password"}
                name="password"
              />
            </div>
            <div
              className="form__passwordhit"
              style={{ height: passwordOwnState.isAllTrueOrFalse ? "0" : '100px' }}
              ref={(element) => (warningRefs.current[3] = element)}
            >
              <PasswordHints {...passwordOwnState.PasswordHints} />
            </div>
          </div>
          <p className="form__aboutpassword">
            Create a password 8 to 25 characters long that includes at least 1
            uppercase and 1 lowercase letter, 1 number and 1 special character
            like an exclamation point or asterisk.
          </p>

          <div className="form__footer">
            <p className="form__forgetname">
              Already have a Starbucks gift card?
            </p>
            <h3 className="form__reward--header">
              {" "}
              COLLECT MORE STARS & EARN REWARDS{" "}
            </h3>
            <p className="form__wtsnew">
              Email is a great way to know about offers and what’s new from
              Starbucks.
            </p>

            <div className="form__checkbox">
              <input
                className="form__custominput"
                type="checkbox"
                id="chekchek"
              />
              <label className="form__customlabel" htmlFor="chekchek">
                <span className="form__checkbox--yes">
                  Yes, I’d like email from Starbucks
                </span>
                <p className="form__product">
                  Know about initiatives, announcements and product offers.
                </p>
              </label>
            </div>

            <p className="form__reward--header">TERMS OF USE</p>
            <div className="form__checkbox">
              <input
                onChange={handelChange}
                className="form__custominput"
                type="checkbox"
                id="isAgree"
                name="isAgree"
                checked={formData.isAgree}
              />
              <label className="form__customlabel" htmlFor="isAgree">
                <span className="form__agree">
                  * I agree to the Starbucks® Rewards Terms and the Starbucks
                  Card Terms and have read the Starbucks Privacy Statement.
                </span>
              </label>
            </div>
          </div>
          <button className="form__btn" type="submit">
            Create account
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default JoinNow;
