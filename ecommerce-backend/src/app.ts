import express from 'express'

//importing routes
import userRoute from './routes/user'
const port = 3000;
const app = express();

//using routes
app.use("/api/v1/user",userRoute)

app.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}`)
})