import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
const Homepage = ({ meetups }) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="Browse a list of meetups - assembled in React and Next.js" />
      </Head>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://peter:55555@cluster.4rlz1th.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const collection = db.collection(`meetups`);
  const meetups = await collection.find().toArray();
  console.log(meetups);
  client.close();
  return {
    props: {
      meetups: meetups.map((el) => ({
        title: el.title,
        address: el.address,
        image: el.image,
        id: el._id.toString(),
      })),
    },
  };
}
export default Homepage;
