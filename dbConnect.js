const mongoose=require('mongoose')

const dbUrl="mongodb+srv://deepeshsaraswat:Deepesh1910@mytodo.hsc6xtt.mongodb.net/?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbUrl, connectionParams).then(()=>{
    console.info("Connected to the DB")
}).catch((e)=> {
    console.log("Error:", e);
});