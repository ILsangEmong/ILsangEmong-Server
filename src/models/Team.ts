import mongoose from 'mongoose';
import { TeamInfo } from '../interfaces/team/teamInfo';

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    inviteCode: {
        type: String,
        required: true,
        unique: true,
    },
    comments: {
        type: [String],
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
});

export default mongoose.model<TeamInfo & mongoose.Document>('Team', TeamSchema);
