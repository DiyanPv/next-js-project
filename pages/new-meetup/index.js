import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
const NewMeetUp = () => {
  const router = useRouter();
  const addMeetUpHandler = async (enteredMeetupData) => {
    const response = await fetch(`/api/new-meetup`, {
      method: `POST`,
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
    router.push(`/`);
  };
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta description="Add a new meetup via the in-browser form" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};
export default NewMeetUp;
