import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const BagItem = ({ img, drinkName, price, itemID, removeFun,much, plusFun, minusFun,multiPrice }) => {
  // const [clearPrice, setClearPrice] = useState('')
  return (
    <div className="bag__item">
            <FaTimes onClick={() => removeFun(itemID)} className="bag__item--mark bag__item--remove"/>
      <img className="bag__item--img" src={img} alt={drinkName} />
      <div>
        <h2 title={drinkName} className="bag__item--name">
          {drinkName}
        </h2>
        <span className="bag__item--price">${multiPrice}</span>
        <div className="bag__item--plumin">
          <FaPlus onClick={plusFun} className="bag__item--mark" />
          <span className="bag__item--much">{much}</span>
          <FaMinus onClick={minusFun} className="bag__item--mark"/>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
