// import json server
const jsonserver=require('json-server')
//import cors
const cors=require('cors')

//create json server

const server=jsonserver.create()

//convert json data to js data before request resolve
//for this middleware is used

//create middleware

const middleware=jsonserver.defaults()

//create router to connect db.json
const router=jsonserver.router('db.json')

//apply middleware in server
server.use(middleware)
//apply cors in server
server.use(cors())
//apply router in server
server.use(router)


//create port for run

const PORT=8000
server.listen(PORT,()=>{
    console.log(`--json server started at port: ${PORT}`);
})