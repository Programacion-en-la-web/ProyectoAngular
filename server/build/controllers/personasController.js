"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PersonasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM personas', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personas = yield database_1.default.query('SELECT * FROM personas WHERE id = ?', [id]);
            console.log(personas);
            if (personas.length > 0) {
                return res.json(personas[0]);
            }
            res.status(404).json({ text: "La persona no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO personas set ?', [req.body]);
            res.json({ mesagge: 'Persona guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldPersona = req.body;
            yield database_1.default.query('UPDATE personas set ? WHERE id=?', [req.body, id]);
            res.json({ message: 'La persona fue actualizada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM personas id=?', [id]);
            res.json({ message: 'La persona ha sido eliminada' });
        });
    }
}
const personasController = new PersonasController();
exports.default = personasController;
//public async listPerson (req: Request, res: Response) {
//    const result = await pool.query('select id, nombres, apellidos, nombre as fk_tipodocumento, documento, nombre as lugaresidencia, email, telefono, usuario, contraseña from persona join tipodocumento on fk_tipodocumento=id join ciudad on lugaresidencia=id', function(err, result, fields) {
//        if (err) throw err;
//        res.json(result);
//    });
//}
