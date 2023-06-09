import express from 'express'
import mongoose from 'mongoose';
import router from "./router.js";
import fileUpload from 'express-fileupload';


const PORT = 5000;
const DB_URL = `mongodb+srv://icetree:@firstcluster.l6voyv3.mongodb.net/?retryWrites=true&w=majority`
const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)



async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`start ${PORT}`))
    } catch (e) {
        console.log(e+" error")
    }
}
startApp()
