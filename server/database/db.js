import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME =process.env.DB_USERNAME ;
const PASSWORD =process.env.DB_PASSWORD ;


const Connection = ()=> {
const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-kz3jggg-shard-00-00.foueynl.mongodb.net:27017,ac-kz3jggg-shard-00-01.foueynl.mongodb.net:27017,ac-kz3jggg-shard-00-02.foueynl.mongodb.net:27017/?ssl=true&replicaSet=atlas-mhfykw-shard-0&authSource=admin&retryWrites=true&w=majority`
// const URL = `mongodb://my892901:liSHe64Ww0YY0WUE@ac-kz3jggg-shard-00-00.foueynl.mongodb.net:27017,ac-kz3jggg-shard-00-01.foueynl.mongodb.net:27017,ac-kz3jggg-shard-00-02.foueynl.mongodb.net:27017/?ssl=true&replicaSet=atlas-mhfykw-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        mongoose.connect(URL,{ useUnifiedTopology: true } )
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default  Connection; 