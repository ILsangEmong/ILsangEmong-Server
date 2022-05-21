import mongoose from 'mongoose';
import config from '../config';
import Team from '../models/Team';

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set('autoCreate', true);

        console.log('Mongoose Connected ...');

        Team.createCollection().then(function (collection) {
            console.log('Team Collection is created!');
        });
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
