import { MongoClient } from 'mongodb';

async function newMeetup(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://ahmd19910618:Sameenu17@cluster0.n6nloju.mongodb.net/meetups?retryWrites=true&w=majority',
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: 'Meetup inserted' });
  }
}

export default newMeetup;
