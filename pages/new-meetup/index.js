
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUp = () => {
  const addMeetUpHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return (

      <NewMeetupForm onAddMeetup={addMeetUpHandler} />

  );
};
export default NewMeetUp;
