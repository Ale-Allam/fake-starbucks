import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
const PasswordHints = (props) => {
  return (
    <div>
      <div>
        <div>
          {props.eightTo25 ? (
            <FaCheckCircle
              style={{ color: "#00754a", marginRight: "5px" }}
            />
          ) : (
            <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
          )}
          <span style={{ color: props.eightTo25 ? "#00754a" : "#d62b1f" }}>
            From 8 to 25 character
          </span>
        </div>
      </div>
      <div>
        <div>
          {props.hasNumber ? (
            <FaCheckCircle
              style={{ color: "#00754a", marginRight: "5px" }}
            />
          ) : (
            <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
          )}
          <span style={{ color: props.hasNumber ? "#00754a" : "#d62b1f" }}>
            At least one number
          </span>
        </div>
      </div>

      <div>
        <div>
          {props.capitalLetter ? (
            <FaCheckCircle
              style={{ color: "#00754a", marginRight: "5px" }}
            />
          ) : (
            <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
          )}
          <span style={{ color: props.capitalLetter ? "#00754a" : "#d62b1f" }}>
            At least one capital letter
          </span>
        </div>
      </div>
      <div>
        <div>
          {props.lowerCaseLetter ? (
            <FaCheckCircle
              style={{ color: "#00754a", marginRight: "5px" }}
            />
          ) : (
            <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
          )}
          <span
            style={{ color: props.lowerCaseLetter ? "#00754a" : "#d62b1f" }}
          >
            At least one lowercase letter
          </span>
        </div>
      </div>
      <div>
        <div>
          {props.specialCharacter ? (
            <FaCheckCircle
              style={{ color: "#00754a", marginRight: "5px" }}
            />
          ) : (
            <FaTimesCircle style={{ color: "#d62b1f", marginRight: "5px" }} />
          )}
          <span
            style={{ color: props.specialCharacter ? "#00754a" : "#d62b1f" }}
          >
            At least one special character
          </span>
        </div>
      </div>
    </div>
  );
};

export default PasswordHints;
