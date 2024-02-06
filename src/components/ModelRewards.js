export default function ModelRewards (porps) {
return (
    <div className="model" style={{display: porps.display}}>
      <div className="model__model">
      <div className="model__popup">
      <div className="model__close">X</div>
      <div className="model__image">
        <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1A.jpg" alt=""/>
      </div>
      <div className="model__body">
        <h3 className="model__title">
          Free food, drinks & more
        </h3>
        <p className="model-description">Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a
          coffee tumbler.</p>
        <div className="model__control">
          <span className="model__control_leftarrow"> &#60;</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span className="model__control_leftarrow"> &#62;</span>
        </div>
      </div>
    </div>
      </div>
  </div>
)
}