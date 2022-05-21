import { InviteCodeDto } from '../interfaces/common/InviteCodeDto';
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

const checkTeam = async (
    inviteCodeDto: InviteCodeDto
): Promise<Boolean | null> => {
    const team = Team.find({ inviteCode: inviteCodeDto.inviteCode });

    if ((await team).length == 0) {
        return null;
    }
    return true;
};

export default {
    createTeam,
    checkTeam,
};
