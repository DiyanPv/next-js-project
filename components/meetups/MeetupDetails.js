import classes from "./MeetupDetails.module.css";
const MeetupDetails = (props) => {
  return (
    <>
      <img src={props.image} alt={props.title} className={classes.detail} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </>
  );
};
export default MeetupDetails;
