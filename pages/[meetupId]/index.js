import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
const MeetUpShowMorePage = ({meetup}) => {
  return (
    <MeetupDetails
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://peter:55555@cluster.4rlz1th.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const collection = db.collection(`meetups`);
  const meetups = await collection.find({}, { _id: 1 }).toArray();
  console.log(meetups);
  client.close();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}
export async function getStaticProps(context) {
  console.log(context);
  const client = await MongoClient.connect(
    `mongodb+srv://peter:55555@cluster.4rlz1th.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const collection = db.collection(`meetups`);
  const meetId = context.params.meetupId;

  const selectedMeetup = await collection.findOne({ _id: ObjectId(meetId) });
  client.close();

  return {
    props: {
    meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      }
    },
  };
}
export default MeetUpShowMorePage;