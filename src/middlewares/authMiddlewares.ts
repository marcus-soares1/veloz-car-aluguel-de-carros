import dotenv from 'dotenv'
dotenv.config()
import { Request, Response, NextFunction, Handler } from "express" // Importa Request, Response, NextFunction
import jwt from 'jsonwebtoken'
import { HttpError } from '../errors/HttpError'

// Extend the Request type to include user information
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                role: string;
            };
        }
    }
}

// Define the JWT Payload interface
interface JwtPayload {
    id: string;
    email: string;
    role: string;
}

const ensureClient: Handler = (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    
    // Verifica modo de demonstração
    let demo = req.query?.demo
    if(demo && demo === 'true'){
        return next()
    } else {demo = 'false' }
    
    let token: string = ''
    let parts: string[] = []

    if (!authorizationHeader) {
        res.status(401).json({ message: 'Missing authentication token.' });
    }else{
        // Expecting "Bearer <token>"
        parts = authorizationHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            res.status(401).json({ message: 'Invalid token format. Use: Bearer <token>.' });
        }
    }

    token = parts[1]

        try {
        if (!process.env.JWT_SECRET) {
            throw new HttpError('Internal server error.', 500);
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload
        req.user = decodedToken

        
        if (req.user.role !== 'client' && req.user.role !== 'attendant' && req.user.role !== 'admin') {
            res.status(403).json({ message: 'Access denied. Attendant role required.' });
        }

        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'expired token.' });
        }
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'invalid token.' });
        }
        next(error)
    }
}

const ensureAttendant: Handler = (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    
    // Verifica modo de demonstração
    let demo = req.query?.demo
    if(demo && demo === 'true'){
        return next()
    } else {demo = 'false' }
    
    let token: string = ''
    let parts: string[] = []

    if (!authorizationHeader) {
        res.status(401).json({ message: 'Missing authentication token.' });
    }else{
        // Expecting "Bearer <token>"
        parts = authorizationHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            res.status(401).json({ message: 'Invalid token format. Use: Bearer <token>.' });
        }
    }

    token = parts[1]

    try {
        if (!process.env.JWT_SECRET) {
            throw new HttpError('Internal server error.', 500);
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload
        req.user = decodedToken

        
        if (req.user.role !== 'attendant' && req.user.role !== 'admin') {
            res.status(403).json({ message: 'Access denied. Attendant role required.' });
        }

        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'expired token.' });
        }
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'invalid token.' });
        }
        next(error)
    }
};

const ensureAdmin: Handler = (req, res, next) => {
    const authorizationHeader = req.headers.authorization

    // Verifica modo de demonstração
    let demo = req.query?.demo
    if(demo && demo === 'true'){
        return next()
    } else {demo = 'false' }

    let token: string = ''
    let parts: string[] = []

    if (!authorizationHeader) {
        res.status(401).json({ message: 'Missing authentication token.' });
    }else{
        // Expecting "Bearer <token>"
        parts = authorizationHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            res.status(401).json({ message: 'Invalid token format. Use: Bearer <token>.' });
        }
    }

    token = parts[1]

    try {
        if (!process.env.JWT_SECRET) {
            throw new HttpError('Internal sever error.', 500);
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

        req.user = decodedToken

        // Check if the user has the 'admin' role
        if (req.user.role !== 'admin') {
            res.status(403).json({ message: 'Acess denied. Admin role required.' });
        }

        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'expired token.' });
        }
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'invalid token.' });
        }
        next(error)
    }
}

export { ensureClient, ensureAttendant, ensureAdmin };