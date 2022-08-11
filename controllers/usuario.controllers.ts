import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al consultar usuarios'
        })
    }
}

export const getUsuariosById = (req: Request, res: Response) => {
    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'getUsuario',
        id
    });
}

export const postUsuario = (req: Request, res: Response) => {
    const { body } = req;
    
    res.json({
        msg: 'postUsuario',
        body
    });
}

export const putUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body,
        id
    });
}

export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUsuario',
        id
    });
}