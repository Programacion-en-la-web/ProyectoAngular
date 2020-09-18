import {Request, Response} from 'express';

import pool from '../database';

class PersonasController {

    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM personas', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const personas = await pool.query ('SELECT * FROM personas WHERE id = ?', [id]);
        console.log(personas)
        if (personas.length > 0) {
            return res.json(personas[0]);
        }
        res.status(404).json({text: "La persona no existe"});
    }

    public async create (req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO personas set ?', [req.body]);
        res.json({mesagge:'Persona guardada'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const oldPersona = req.body;
        await pool.query('UPDATE personas set ? WHERE id=?', [req.body, id]);
        res.json({message: 'La persona fue actualizada'});
        }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM personas id=?', [id]);
        res.json({message: 'La persona ha sido eliminada'});
    }

}

const personasController = new PersonasController();
export default personasController;


//public async listPerson (req: Request, res: Response) {
//    const result = await pool.query('select id, nombres, apellidos, nombre as fk_tipodocumento, documento, nombre as lugaresidencia, email, telefono, usuario, contraseña from persona join tipodocumento on fk_tipodocumento=id join ciudad on lugaresidencia=id', function(err, result, fields) {
//        if (err) throw err;
//        res.json(result);
//    });
//}