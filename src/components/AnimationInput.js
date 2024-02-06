import { useRef, useState } from "react";
const AnimationInput = ({inputState}) => {
  const [name, setName] = useState("");
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.style.color = 'red';
  };

  return (
    <div className="form__inputdiv">
    <label ref={ref} className="form__label" htmlFor="name">* Username or email adress</label>
      <input
      onFocus={handleClick}
        className="form__input"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </div>
  )
}

export default AnimationInput
