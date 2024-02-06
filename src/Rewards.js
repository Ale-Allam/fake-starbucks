import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModelRewards from "./components/ModelRewards";
import { Link } from "react-router-dom";

export default function Rewards() {
  useEffect(()=>{
    document.body.style.overflowY = "scroll";
  },[])
  
  const [tab, setTab] = useState(1);
  const [model, setModel] = useState(false);
  function tabToggel(id) {
    setTab(id);
  }
  function modelToggel() {
    setModel((prev) => !prev);
  }
  return (
    <>
      <Header />
      <div className="banner">
        <h1 className="container banner__title">STARBUCKS® REWARDS</h1>
      </div>
      <main>
        <div className="rewards">
          <div className="rewards__container container">
            <div className="hero">
              <h2 className="hero__title">
                FREE COFFEE <br /> IS A TAP AWAY
              </h2>
              <p className="hero__text">Join now to start earning Rewards.</p>
              <button className="joinRewards__btn"><Link to="/joinNow">Join now</Link></button>
              <p className="hero__text">
                Or join in the app for the best <br /> experience
              </p>
            </div>
          </div>
        </div>
        {/* end of 1 */}
        <div className="rewardssteps container">
          <div className="rewards-section-header">
            <h2 className="rewards-section-title">Getting started is easy</h2>
            <p className="rewards-section-text">
              Earn Stars and get rewarded in a few easy steps.
            </p>
          </div>
          <div className="rewardssteps__steps">
            <div className="rewardssteps__step">
              <span className="rewardssteps__num">1</span>
              <div className="rewardssteps__stitle">Create an account</div>
              <p className="rewardssteps__explane">
                To get started, join now. You can also join in the app to get
                access to the full range of Starbucks® Rewards benefits.
              </p>
            </div>
            <div className="rewardssteps__step">
              <span className="rewardssteps__num">2</span>
              <div className="rewardssteps__stitle">
                Order and pay how you’d like
              </div>
              <p className="rewardssteps__explane">
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways. Learn how
              </p>
            </div>
            <div className="rewardssteps__step">
              <span className="rewardssteps__num">3</span>
              <div className="rewardssteps__stitle">
                Earn Stars, get Rewards
              </div>
              <p className="rewardssteps__explane">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </div>
          </div>
        </div>
        {/* end of 2 */}
        <div className="forfree">
          <div className="forfree__container container">
            <h2 className="forfree__title">Get your favorites for free</h2>
            <div className="forfree__tabs">
              <span
                onClick={() => tabToggel(1)}
                className={
                  tab === 1
                    ? "forfree__activetab  forfree__tab"
                    : " forfree__tab"
                }
              >
                25 <span className="forfree__star">★</span>
              </span>
              <span
                onClick={() => tabToggel(2)}
                className={
                  tab === 2
                    ? "forfree__activetab  forfree__tab"
                    : " forfree__tab"
                }
              >
                100 <span className="forfree__star">★</span>
              </span>
              <span
                onClick={() => tabToggel(3)}
                className={
                  tab === 3
                    ? "forfree__activetab  forfree__tab"
                    : " forfree__tab"
                }
              >
                200 <span className="forfree__star">★</span>
              </span>
              <span
                onClick={() => tabToggel(4)}
                className={
                  tab === 4
                    ? "forfree__activetab  forfree__tab"
                    : " forfree__tab"
                }
              >
                300 <span className="forfree__star">★</span>
              </span>
              <span
                onClick={() => tabToggel(5)}
                className={
                  tab === 5
                    ? "forfree__activetab  forfree__tab"
                    : " forfree__tab"
                }
              >
                400 <span className="forfree__star">★</span>
              </span>
            </div>
          </div>
          <div className="forfree__products">
            <div className="forfree__product container">
              <div
                className={
                  tab === 1
                    ? "forfree__activeItem  forfree__item"
                    : " forfree__item"
                }
              >
                <div className="forfree__image">
                  <img src="./images/product-25.png" alt="img" />
                </div>
                <div className="forfree__description">
                  <h3 className="forfree__description_title">
                    Customize your drink
                  </h3>
                  <p className="forfree__description_text">
                    Make your drink just right with an extra espresso shot,
                    nondairy milk or a dash of your favorite syrup.
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 2
                    ? "forfree__activeItem  forfree__item"
                    : " forfree__item"
                }
              >
                <div className="forfree__image">
                  <img src="./images/product-100.png" alt="img" />
                </div>
                <div className="forfree__description">
                  <h3 className="forfree__description_title">
                    Brewed hot or iced coffee or tea, bakery item, packaged
                    snack and more
                  </h3>
                  <p className="forfree__description_text">
                    Treat yourself to an iced coffee, buttery croissant, bag of
                    chips and more.
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 3
                    ? "forfree__activeItem  forfree__item"
                    : " forfree__item"
                }
              >
                <div className="forfree__image">
                  <img src="./images/product-200.png" alt="img" />
                </div>
                <div className="forfree__description">
                  <h3 className="forfree__description_title">
                    Handcrafted drink (Cold Brew, lattes and more) or hot
                    breakfast
                  </h3>
                  <p className="forfree__description_text">
                    Turn good mornings great with a delicious handcrafted drink
                    of your choice, breakfast sandwich or oatmeal on us
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 4
                    ? "forfree__activeItem  forfree__item"
                    : " forfree__item"
                }
              >
                <div className="forfree__image">
                  <img src="./images/product-300.png" alt="img" />
                </div>
                <div className="forfree__description">
                  <h3 className="forfree__description_title">
                    Sandwich, protein box or at-home coffee
                  </h3>
                  <p className="forfree__description_text">
                    Enjoy a PM pick-me-up with a lunch sandwich, protein box or
                    a bag of coffee—including Starbucks VIA Instant®.
                  </p>
                </div>
              </div>
              <div
                className={
                  tab === 5
                    ? "forfree__activeItem  forfree__item"
                    : " forfree__item"
                }
              >
                <div className="forfree__image">
                  <img src="./images/product-400.png" alt="img" />
                </div>
                <div className="forfree__description">
                  <h3 className="forfree__description_title">
                    Select Starbucks® merchandise
                  </h3>
                  <p className="forfree__description_text">
                    Take home a signature cup, drink tumbler or your choice of
                    coffee merch up to $20.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 333 */}
        <div className=" endless">
          {model ? (
            <ModelRewards display="block" />
            ) : (
              <ModelRewards display="none" />
              
          )}
          <div className="container">
            <div className="rewards-section-header">
              <h2 className="rewards-section-title">Endless Extras</h2>
              <p className="rewards-section-text">
                Joining Starbucks® Rewards means unlocking access to exclusive
                benefits. <br /> Say hello to easy ordering, tasty Rewards
                and—yes, free coffee
              </p>
            </div>
            <div className="endless__section">
              <div className="endless__explane">
                <div className="endless__img">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
                    alt="img"
                  />
                </div>
                <span className="endless__stitle">Fun freebies</span>
                <p className="endless__description">
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <span>Learn more</span>
              </div>
              <div className="endless__explane">
                <div className="endless__img">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
                    alt="img"
                  />
                </div>
                <span className="endless__stitle">Fun freebies</span>
                <p className="endless__description">
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <span>Learn more</span>
              </div>
              <div className="endless__explane">
                <div className="endless__img">
                  <img
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
                    alt="img"
                  />
                </div>
                <span className="endless__stitle">Fun freebies</span>
                <p className="endless__description">
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <span>Learn more</span>
              </div>
            </div>
          </div>
        </div>
        {/* sec 4 */}
        <div className="cashcard">
          <div className="cashcard__container container">
            <div className="rewards-section-header">
              <h2 className="rewards-section-title">Cash or card, you earn Stars</h2>
              <p className="rewards-section-text">No matter how you pay, you can earn Stars with your morning coffee.<br/> Those Stars add up to (really delicious) Rewards</p>
              </div>
              <div className="cashcard__body">
                <div className="cashcard__section">
                  <div className="cashcard__guid">
                  <h3 className="cashcard__guid_title">1★Star per dollar</h3>
                  <p className="cashcard__guid_text">Pay as you go</p>
                  </div>
                  <div className="cashcard__step_container">
                  <div className="cashcard__step">
                    <div className="cashcard__step_image">
                      <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt=""/>
                    </div>
                    <div className="cashcard__step_body">
                    <div className="cashcard__step_title">
                      Scan and pay separately
                    </div>
                    <p className="cashcard__step_text">
                    Use cash or credit/debit card at the register.
                    </p>
                    </div>
                  </div>
                  <div className="cashcard__step">
                    <div className="cashcard__step_image">
                      <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt=""/>
                    </div>
                    <div className="cashcard__step_body">
                    <div className="cashcard__step_title">
                    Save payment in the app
                    </div>
                    <p className="cashcard__step_text">
                    Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.
                    </p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="cashcard__section">
                  <div className="cashcard__guid">
                  <h3 className="cashcard__guid_title">2★Stars per dollar</h3>
                  <p className="cashcard__guid_text">Add funds in the app</p>
                  </div>
                  <div className="cashcard__step_container">
                  <div className="cashcard__step">
                    <div className="cashcard__step_image">
                      <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt=""/>
                    </div>
                    <div className="cashcard__step_body">
                    <div className="cashcard__step_title">
                    Preload
                    </div>
                    <p className="cashcard__step_text">
                    To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.
                    </p>
                    </div>
                  </div>
                  <div className="cashcard__step">
                    <div className="cashcard__step_image">
                      <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt=""/>
                    </div>
                    <div className="cashcard__step_body">
                    <div className="cashcard__step_title">
                    Register your gift card
                    </div>
                    <p className="cashcard__step_text">
                    Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.
                    </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
