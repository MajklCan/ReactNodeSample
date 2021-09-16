import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const options = {   
    multipleStatements: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

var con

//REMOTE SQL - KEEP CONNECTION ALIVE
setInterval(function () {
    query('SELECT 1');
}, 5000);
//---------------------------------


function handleDisconnect() {
    con = mysql.createConnection(options);

    con.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        } else {
            console.log("[Success] Database connected");
        }
    });

    con.on('error', function(err) {
        console.log('[Error] ', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
            handleDisconnect();
            console.log('[Error Handled] Connection to DB lost');
        } else {
            throw err;
        }
    });
}

export const query = (query,params=[]) => {
	return new Promise((resolve, reject) => {
		try {
                //if(query!="SELECT 1")
                //console.log(query)  // LOG QUERY ?
			con.query(query,params,function(err, rows) {
				if (err) {
					reject(err)
                }
                if(rows)
				rows.length == 1 ? resolve(rows[0]) : resolve(rows);
                else
                resolve([])
			}
			);
		} catch (err) {
            console.log("DB ERROR: ",err)
			reject(err);
		}
	}).catch(e=>{
        console.log("DB CONNECTION ERROR:",e)
    });
}

/**
 * @description DB Query function, returns result and error as array to destructure
 * @param {string} query SQL String 
 * @param {*} params "?" Reslolver ({} / [] / value)
 * @returns {Promise} Array with [result,error]
 */
export const query_structured = (query,params=[]) => {

	return new Promise((resolve, reject) => {
		try {
                //if(query!="SELECT 1")
                //console.log(query)  // LOG QUERY ?
			con.query(query,params,function(err, rows) {
				if (err) {
                    resolve([null,err])
                }

                if(rows)
				rows.length == 1 ? resolve([rows[0],null]) : resolve([rows,null]);
                else
                resolve([[],null])
			}
			);
		} catch (err) {
            console.log("DB ERROR: ",err)
			resolve([null,err]);
		}
	})
}

handleDisconnect();

export default con