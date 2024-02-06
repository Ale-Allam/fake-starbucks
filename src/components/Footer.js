import { useRef } from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  const listItemsRef = useRef([]);
  const listHeight = useRef([]);
  const arrow = useRef([]);

  function addListHeight(element) {
    const listItemHeight =
      listHeight.current[element].getBoundingClientRect().height;
    if (getComputedStyle(listItemsRef.current[element]).height === "0px") {
      listItemsRef.current[element].style.height = `${listItemHeight}px`;
      arrow.current[element].style.rotate = "0deg";
    } else {
      listItemsRef.current[element].style.height = `${0}px`;
      arrow.current[element].style.rotate = "180deg";
    }
  }

  return (
    <footer className="footer">
      <div className="footer__parent container">
        <div className="footer__links--parent" onClick={() => addListHeight(0)}>
          <img
            className="footer__arrow"
            src="https://www.svgrepo.com/show/93813/up-arrow.svg"
            ref={(element) => (arrow.current[0] = element)}
            alt="ArrowUp"
          />
          <h3>About Us</h3>
          <div
            className="footer__links"
            ref={(element) => (listItemsRef.current[0] = element)}
          >
            <ul
              className="footer__list"
              ref={(element) => (listHeight.current[0] = element)}
            >
              <li className="footer__item">
                <a href="any">Our Company</a>
              </li>
              <li className="footer__item">
                <a href="any"> Our Coffee</a>
              </li>
              <li className="footer__item">
                <a href="any"> Stories and News</a>
              </li>
              <li className="footer__item">
                <a href="any">Starbucks Archive </a>
              </li>
              <li className="footer__item">
                <a href="any">Investor Relations </a>
              </li>
              <li className="footer__item">
                <a href="any"> Customer Service</a>
              </li>
              <li className="footer__item">
                <a href="any">Contact Us </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__links--parent" onClick={() => addListHeight(1)}>
          <img
            className="footer__arrow"
            src="https://www.svgrepo.com/show/93813/up-arrow.svg"
            ref={(element) => (arrow.current[1] = element)}
            alt="ArrowUp"
          />
          <h3>Careers</h3>
          <div
            className="footer__links"
            ref={(element) => (listItemsRef.current[1] = element)}
          >
            <ul
              className="footer__list"
              ref={(element) => (listHeight.current[1] = element)}
            >
              <li className="footer__item">
                <a href="any">Culture and Values</a>
              </li>
              <li className="footer__item">
                <a href="any"> Inclusion, Diversity, and Equity</a>
              </li>
              <li className="footer__item">
                <a href="any"> College Achievement Plan</a>
              </li>
              <li className="footer__item">
                <a href="any">Alumni Community </a>
              </li>
              <li className="footer__item">
                <a href="any">U.S. Careers </a>
              </li>
              <li className="footer__item">
                <a href="any"> International Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__links--parent" onClick={() => addListHeight(2)}>
          <img
            className="footer__arrow"
            src="https://www.svgrepo.com/show/93813/up-arrow.svg"
            ref={(element) => (arrow.current[2] = element)}
            alt="ArrowUp"
          />
          <h3>Social Impact</h3>
          <div
            className="footer__links"
            ref={(element) => (listItemsRef.current[2] = element)}
          >
            <ul
              className="footer__list"
              ref={(element) => (listHeight.current[2] = element)}
            >
              <li className="footer__item">
                <a href="any">People</a>
              </li>
              <li className="footer__item">
                <a href="any">
                  Planet Environmental and Social Impact Reporting
                </a>
              </li>
              <li className="footer__item">
                <a href="any">Environmental and Social Impact Reporting</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__links--parent" onClick={() => addListHeight(3)}>
          <img
            className="footer__arrow"
            src="https://www.svgrepo.com/show/93813/up-arrow.svg"
            ref={(element) => (arrow.current[3] = element)}
            alt="ArrowUp"
          />
          <h3>For Business Partners</h3>
          <div
            className="footer__links"
            ref={(element) => (listItemsRef.current[3] = element)}
          >
            <ul
              className="footer__list"
              ref={(element) => (listHeight.current[3] = element)}
            >
              <li className="footer__item">
                <a href="any">Suppliers</a>
              </li>
              <li className="footer__item">
                <a href="any">Corporate Gift Card Sales</a>
              </li>
              <li className="footer__item">
                <a href="any">Office and Foodservice Coffe</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__links--parent" onClick={() => addListHeight(4)}>
          <img
            className="footer__arrow"
            src="https://www.svgrepo.com/show/93813/up-arrow.svg"
            ref={(element) => (arrow.current[4] = element)}
            alt="ArrowUp"
          />
          <h3>Order and Pick Up</h3>
          <div
            className="footer__links"
            ref={(element) => (listItemsRef.current[4] = element)}
          >
            <ul
              className="footer__list"
              ref={(element) => (listHeight.current[4] = element)}
            >
              <li className="footer__item">
                <a href="any">Order on the App</a>
              </li>
              <li className="footer__item">
                <a href="any"> Order on the Web</a>
              </li>
              <li className="footer__item">
                <a href="any">Delivery</a>
              </li>
              <li className="footer__item">
                <a href="any">Order and Pick Up Options</a>
              </li>
              <li className="footer__item">
                <a href="any">Explore and Find Coffee for Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="social__container container">
          <ul className="social__list">
            <li className="social__item">
              <FaFacebookF />
            </li>
            <li className="social__item">
              <FaPinterestP />
            </li>
            <li className="social__item">
              <FaInstagram />
            </li>
            <li className="social__item">
              <FaYoutube />
            </li>
            <li className="social__item">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright container">
        <p className="copyright__text">
          © 2023 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
