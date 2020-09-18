import {Router} from 'express';

import personasController from '../controllers/personasController';

class PersonasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/',personasController.list);
        this.router.get('/:id',personasController.getOne);
        this.router.post('/',personasController.create);
        this.router.put('/:id',personasController.update);
        this.router.delete('/:id',personasController.delete);
    }
}

const personasRoutes = new PersonasRoutes();
export default personasRoutes.router;