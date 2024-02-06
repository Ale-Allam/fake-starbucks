import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft,FaShoppingCart} from "react-icons/fa";
import drinksMenu from "./components/data/menuOrder";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import BagItem from "./components/props-data/BagItem";
import { FaPlus} from "react-icons/fa";

const getLocalStorage = () => {
  let bagItems = localStorage.getItem('bagItems');
  if (bagItems) {
    return (bagItems = JSON.parse(localStorage.getItem('bagItems')));
  } else {
    return [];
  }
};

const DrinksPage = () => {
  const [getItems, setGetItems] = useState(drinksMenu);
  const [bagItems, setBagItems] = useState(getLocalStorage());
  const [totalPrice, setITotalPrice] = useState();
  const [totalMuch, setTotalMuch] = useState();
  const [hideBag, setHideBag] = useState(false)
  // const [bagHeight,setBagHeight] = useState();

  const bagRefHeight = useRef(null)

  const { id } = useParams();

  useEffect(() => {
    setGetItems((prevEl) => {
      return prevEl
        .map((el) => {
          return el.category === id
            ? {
                ...el,
                drinkName: el.drinkName,
                drinkImg: el.drinkImg,
                itemID: el.itemID,
              }
            : "";
        })
        .filter((el) => el !== "");
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    if (bagItems.length) {
      setITotalPrice(bagItems.map(el => el.multiPrice).reduce((acc,curr) => acc+ curr).toFixed(2))
      setTotalMuch(bagItems.map(el => el.much).reduce((acc,curr) => acc+ curr))
    }else {
      setTotalMuch(0)
      setITotalPrice(0)
    }
    bagRefHeight.current.scrollTo(0, bagRefHeight.current.scrollHeight)
  },[bagItems])

  function createItem(img, drinkName, price, itemID) {
    if (bagItems.length === 0) {
      setBagItems((prev) => [
        ...prev,
        {
          img: img,
          drinkName: drinkName,
          price: price,
          multiPrice:'',
          itemID: itemID,
          much: 1,
        },
      ]);
    } else {
      if (bagItems.some(el => el.itemID === itemID)) {
        setBagItems(prev => 
          prev.map(el => el.itemID === itemID ? {...el, much: el.much + 1} : el))
      } else {
        setBagItems([
          ...bagItems,
          {
            img: img,
            drinkName: drinkName,
            price: price,
            multiPrice: price,
            itemID: itemID,
            much: 1,
          },
        ]);
      }
    }
  }

  function removeFun(itemID) {
    setBagItems(bagItems.filter((el) => el.itemID !== itemID));
  }
  function plusFun(index) {
    setBagItems((prev) => {
      const newArray = [...prev];
      newArray[index] = {
        ...newArray[index],
        multiPrice: newArray[index].much * newArray[index].price,
        much: newArray[index].much + 1,
      };
      return newArray;
    });

  }
  function minusFun(index) {
    setBagItems((prev) => {
      const newArray = [...prev];
      if (newArray[index].much > 1) {
        newArray[index] = {
          ...newArray[index],
          multiPrice: newArray[index].much * newArray[index].price,
          much: newArray[index].much - 1,
        };
      }
      return newArray;
    });
  }
  return (
    <>
      <Header />
      <div className="menu container">
        <nav className="menu__nav">
          <Link to="/menu">
            <h2 title="Back to menu" className="menu__nav--header menu__nav--header2">
              <FaLongArrowAltLeft/>
              </h2>
          </Link>
        </nav>
        <div className="drinks">
          {getItems.map((el) => {
            return (
              <div className="drinks__item" key={el.drinkName}>
                <img
                  className="drinks__img"
                  src={el.drinkImg}
                  alt={el.drinkName}
                />
                <h2 title={el.drinkName} className="drinks__name">
                  {el.drinkName}
                </h2>
                <div className="drinks__awesom">
                  <div style={{display:'flex', alignItems:'center'}}>
                    <span className="drinks__star">{el.star}</span>
                    <span className="drinks__price">${el.price}</span>
                  </div>
                    <span className="drinks__description">{el.description}</span>
                  <FaPlus
                    className="drinks__add"
                    onClick={() => 
                      createItem(
                        el.drinkImg,
                        el.drinkName,
                        el.price,
                        el.itemID
                      )
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
          <div style={{transform: hideBag ? 'translate(0, -50%)' :'translate(-100%, -50%)'}} className="all-bag">
          <div onClick={() => setHideBag(!hideBag)} className="items-number"> {totalMuch} </div>
      <div ref={bagRefHeight} className="bag">
        {bagItems.map((el, index) => (
          <BagItem
            key={el.itemID}
            {...el}
            multiPrice={(el.multiPrice = el.price * el.much).toFixed(2)}
            removeFun={removeFun}
            plusFun={() => plusFun(index)}
            minusFun={() => minusFun(index)}
            />
        ))}
            {<div className="bag__total">
              {totalMuch === 0 ? 'price: 00' :  totalMuch === 1 ? `Price: $${totalPrice}`: `Total price: $${totalPrice}` }
              </div>}
      </div>
          </div>
      </div>
    </>
  );
};

export default DrinksPage;
