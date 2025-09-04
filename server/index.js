const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT ||3000
require('dotenv').config();


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.lum0bq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
   const JobData = client.db("JOBMOD11").collection("jobdatas");
   const JobApplicent = client.db("JOBMOD11").collection("applicent");

//    jobdata 
   app.get('/jobdata',async(req,res)=>{
    const email = req.query.email 
    let queri = {}
    if(email){
      queri = {hr_email: email}
    }

     const result = await JobData.find(queri).toArray()
     res.send(result)
   })

  app.post('/jobdata', async(req,res)=>{
     const data = req.body
     const result = await JobData.insertOne(data)
     res.send(result)
   })

   app.get('/jobdata/:id', async(req,res)=>{
    const id = req.params.id 
    const query = {_id : new ObjectId(id)}
    const result = await JobData.findOne(query)
    res.send(result)
   })

//    jobApplicent 

app.get('/jobappli', async(req,res)=>{
    
  const jenious = req.query.tata 
  const match = { Applicent_email:jenious}

  const result = await JobApplicent.find(match).toArray() 
  res.send(result)

} )


app.get('/jobappli/:id', async(req,res)=>{
   const id = req.params.id
   const match = { job_id : id}
   const result = await JobApplicent.find(match).toArray()
   res.send(result)
   console.log(result);
   
})

app.post("/jobappli",async(req,res)=>{
    const { job_id, Applicent_email, name, address, link } = req.body
   
    const existing = await JobApplicent.findOne({job_id,Applicent_email})

    if(existing){
        return res.status(400).send({message: "Already applied"})
    }
    
    const result = await JobApplicent.insertOne({
      job_id,
      Applicent_email,
      name,
      address,
      link,
      appliedAt: new Date()
    })
    
    res.status(201).send({ message: 'Apply success',result})
    
})

app.delete('/jobappli/:id',async(req,res)=>{
   const id = req.params.id
   const match = {_id : new ObjectId(id)}
   const result = await JobApplicent.deleteOne(match)
   res.send(result)
})

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// jopPortal
// u1Fwp2gwrduIzAsz