
import homeData from "./data/home-card-data";
import HomeCardsProps from "./props-data/HomeCardsProps";
export default function HomeCards() {
  let cardData = homeData.map((item,index) => {
    return (
      <HomeCardsProps 
      key={index} {...item}
      />
    )
  })
      return (
        <>
        <h1 style={{textAlign:'center', fontSize:'5vw', color:'red'}}>F A K E  StarBucks</h1>
          <div className="card container"> 
            {cardData}  
          </div>
          <div className="bucks  container">
            <p className="bucks__text">
            <span>
            *From 8/24-8/27, enjoy $7 off on your Starbucks orders of $20 or more
              on Uber Eats. Restrictions and other taxes/fees apply. See Uber Eats
              app for details and location availability. Fees subject to change.
              Menu limited. Restricted delivery area. Available at participating
              locations only. Your delivery order may be limited in any one
              transaction to one hundred dollars ($100) before taxes, tip, and fees.
              We may adjust this limit at any time at our discretion. Prices for
              Starbucks® items purchased through Uber eats may be higher than as
              marked or posted in stores. May not be combined with other offers,
              discounts, or promotions.
            </span>
            </p>
          </div>
        </>
      );
}
