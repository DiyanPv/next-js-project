import MeetupList from "../components/meetups/MeetupList";
const meetupsList = [
  {
    id: `m1`,
    title: `First Meetup Spot`,
    image: `https://www.roadaffair.com/wp-content/uploads/2018/07/aerial-view-cathedral-assumption-varna-bulgaria-shutterstock_511415530.jpg`,
    address: `The church in Varna`,
    description: `This is the first meetup place`,
  },
  {
    id: `m2`,
    title: `Second Meetup Spot`,
    image: `https://www.roadaffair.com/wp-content/uploads/2018/07/nesebar-bulgaria-shutterstock_676441705.jpg`,
    address: `Nessebar's bay`,
    description: `This is the second meetup place- in Nessebar`,
  },
  {
    id: `m3`,
    title: `Third Meetup Spot`,
    image: `https://www.roadaffair.com/wp-content/uploads/2018/07/dospat-reservoir-smolyan-region-bulgaria-shutterstock_572058349.jpg`,
    address: `Snezhanka`,
    description: `This is the third meetup place - Smolyan`,
  },
];
const Homepage = () => {
  return <MeetupList meetups={meetupsList} />;
};

export default Homepage;
