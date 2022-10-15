import MeetUpDetail from '../../components/meetups/MeetUpDetail';
import Head from 'next/head';

import { Fragment } from 'react';

import { MongoClient, ObjectId } from 'mongodb';

const MeetUpDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name='description' content={props.meetup.description} />
      </Head>
      <MeetUpDetail meetup={props.meetup} />
    </Fragment>
  );
};

export default MeetUpDetailPage;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://ahmd19910618:Sameenu17@cluster0.n6nloju.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    'mongodb+srv://ahmd19910618:Sameenu17@cluster0.n6nloju.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const singleMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  console.log(singleMeetup);

  return {
    props: {
      meetup: {
        id: singleMeetup._id.toString(),
        title: singleMeetup.title,
        address: singleMeetup.address,
        image: singleMeetup.image,
        description: singleMeetup.description,
      },
    },
  };
}
