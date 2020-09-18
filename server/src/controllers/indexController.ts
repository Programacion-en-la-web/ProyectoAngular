import {Request, Response} from 'express';

class IndexController {

    index (req: Request, res: Response) {
        res.json({text: 'API Is /api/personas'});
    }

}


export const indexController = new IndexController();