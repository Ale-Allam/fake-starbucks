export default function Any(props) {
  return (
    <>
      <div className="card__inside reverse">
        <div className="card__image">
          <img className="card__image--img" src={props.imgURL} alt="img" />
        </div>
        <div className="card__info">
          <div className="card__description">
            <h2 className="card__title">{props.cardH2}</h2>
            <p className="card__text">{props.cardP}</p>
            <button className="card__btn btn">{props.cardBtnText}</button>
          </div>
        </div>
      </div>
    </>
  );
}