import { Router } from 'express';
import { getUser, updateUser } from '../../../controllers/HomeController.js';

const homeRouter = Router();
homeRouter.get('/', getUser);
// homeRouter.post('/', authenticateToken, createList);

export default homeRouter;
