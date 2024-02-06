export default function Buttons (props) {
  return (
    <button className={props.btnClass}><a href={props.btnHref}> {props.btnText} </a></button>
  );
}