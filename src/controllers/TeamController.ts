import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import util from '../modules/util';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import { TeamCreateDto } from '../interfaces/team/TeamCreateDto';
import { TeamService } from '../services';

/**
 * @route POST /team
 * @desc Create Team
 * @access Public
 */
const createTeam = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
    const teamCreateDto: TeamCreateDto = req.body;

    try {
        const inviteCode = await TeamService.createTeam(teamCreateDto);

        res.status(statusCode.CREATED).send(
            util.success(
                statusCode.CREATED,
                message.CREATE_TEAM_SUCCESS,
                inviteCode
            )
        );
    } catch (error) {
        console.log(error);
        return res
            .status(statusCode.INTERNAL_SERVER_ERROR)
            .send(
                util.fail(
                    statusCode.INTERNAL_SERVER_ERROR,
                    message.INTERNAL_SERVER_ERROR
                )
            );
    }
};

export default {
    createTeam,
};
