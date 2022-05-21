import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { CommentUpdateDto } from '../interfaces/comment/CommentUpdateDto';
import Team from '../models/Team';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import CommentService from '../services/CommentService';

/**
 *  @route PUT /comment
 *  @desc Add Comment
 *  @access Public
 */
const updateComment = async (req: Request, res: Response) => {
    // 유효성 검사
    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error);
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
    }

    const commentUpdateDto: CommentUpdateDto = req.body;

    try {
        await CommentService.updateComment(commentUpdateDto);

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.UPDATE_COMMENT_SUCCESS)
        );
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

export default {
    updateComment,
};
