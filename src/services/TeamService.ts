import { InviteCodeDto } from '../interfaces/team/InviteCodeDto';
import { TeamCreateDto } from '../interfaces/team/TeamCreateDto';
import Team from '../models/Team';
import { randomString } from '../modules/random';

const createTeam = async (
    teamCreateDto: TeamCreateDto
): Promise<InviteCodeDto> => {
    const inviteCode = randomString();
    try {
        teamCreateDto.inviteCode = inviteCode;
        const team = new Team(teamCreateDto);

        await team.save();

        const data = {
            inviteCode: inviteCode,
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const isExistTeam = async (inviteCode: String): Promise<Boolean | null> => {
    const team = Team.find({ inviteCode: inviteCode });

    if ((await team).length == 0) {
        return null;
    }
    return true;
};

export default {
    createTeam,
    isExistTeam,
};
