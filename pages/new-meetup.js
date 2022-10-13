import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

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

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}

export default NewMeetupPage;
