// import classes from '../meetups/';

function MeetupDetail({ meetup }) {
  console.log(meetup, 'meetup');
  return (
    <section>
      <img src={meetup.image} alt={meetup.title} />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
}

export default MeetupDetail;
