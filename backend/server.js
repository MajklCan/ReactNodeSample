import express from 'express'
import dotenv from 'dotenv'
import routes from './api.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()

/** 
 * 
 * @km21 React Node Sample 
 * 
 */

const app = express(); //Vytvoření aplikace

app.use(express.json()) //Chci přijímat data ve formátu JSON
app.use(cookieParser()) //Chci přijímat cookies od uživatele
app.use(cors()) //Povolit vytvářet požadavky z webu na jiném serveru

app.use('/api', routes); //Definice API

const port = process.env.PORT || 3030;

app.listen(port, function () { //Aplikace poslouchá na daném portu
	console.log(`[Success] App is running on port: ${port}`);
}); 

export default app