import express from 'express'
import dotenv from 'dotenv'
import routes from './api.js'
import cors from 'cors'

import cookieParser from 'cookie-parser'

dotenv.config()


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api', routes);

const port = process.env.PORT || 3030;

app.listen(port, function () {
	console.log(`[Success] App is running on port: ${port}`);
}); 

export default app