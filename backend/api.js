

import express from 'express'
const router = express.Router()

//Route structure
// GET - vrací data
// GET /:id - vrací data pro parametr
// POST - přidat data
// PUT /:id - update pro parametr
// DELETE /:id - smazat podle parametru



//metoda("cesta",(požadavek,odpověd))
router.get('/data',(req,res) => {

	let sampleData = {
		"items": [
		  { "id": 1, "name": "Apples",  "price": "$3" },
		  { "id": 2, "name": "Peaches", "price": "$5" }
		] 
	  }
	
	res.send(sampleData);
	  
})


export default router