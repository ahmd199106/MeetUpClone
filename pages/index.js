import { Fragment } from 'react';
import Head from 'next/head';
// import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const DummyMeetups = [
  {
    id: 'm1',
    title: 'first meet up',
    image:
      'https://media-exp1.licdn.com/dms/image/C4D16AQExbIc0E-QBxA/profile-displaybackgroundimage-shrink_350_1400/0/1607611520154?e=1671062400&v=beta&t=ueXyNRhEIfJaBmu8Qr-KqjqMae5uuo4rpfgjWGi7qNo',
    address: 'some address',
    description: 'this is first meet up',
  },
  {
    id: 'm1',
    title: 'first meet up',
    image:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    address: 'some address',
    description: 'this is first meet up',
  },
  {
    id: 'm1',
    title: 'first meet up',
    image:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
    address: 'some address',
    description: 'this is first meet up',
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={DummyMeetups} />;
    </Fragment>
  );
}

export default HomePage;
