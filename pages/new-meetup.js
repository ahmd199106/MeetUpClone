import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

function NewMeetupPage() {
  const router = useRouter();
  const addMeetUpHandler = async (enteredmeetup) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredmeetup),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (response.status === 201) {
      console.log('item successfully added to mongodb');
      router.push('/');
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Add New Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
