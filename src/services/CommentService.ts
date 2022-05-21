import { CommentGetDto } from '../interfaces/comment/CommentGetDto';
import { CommentUpdateDto } from '../interfaces/comment/CommentUpdateDto';
import { InviteCodeDto } from '../interfaces/common/InviteCodeDto';
import Team from '../models/Team';

const updateComment = async (commentUpdateDto: CommentUpdateDto) => {
    try {
        const team = await Team.findOne({
            inviteCode: commentUpdateDto.inviteCode,
        });
        if (!team) {
            return null;
        }

        const newComments: String[] = [
            ...team?.comments,
            commentUpdateDto.comment,
        ];

        await Team.findOneAndUpdate(
            { _id: team._id },
            { comments: newComments },
            { new: true }
        );
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getComments = async (
    inviteCodeDto: InviteCodeDto
): Promise<CommentGetDto> => {
    try {
        const team = await Team.findOne({
            inviteCode: inviteCodeDto.inviteCode,
        });
        const comments: CommentGetDto = {
            comments: team?.comments,
        };
        return comments;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    updateComment,
    getComments,
};
