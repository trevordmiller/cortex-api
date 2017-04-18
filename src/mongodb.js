import {config as dotenvConfig} from 'dotenv'
import {MongoClient} from 'mongodb'

dotenvConfig()

const {
  CLUSTER_NAME,
  CLUSTER_USERNAME,
  CLUSTER_PASSWORD,
} = process.env

const mongoUri = `mongodb://${CLUSTER_USERNAME}:${CLUSTER_PASSWORD}@cortex-shard-00-00-bfqtq.mongodb.net:27017,cortex-shard-00-01-bfqtq.mongodb.net:27017,cortex-shard-00-02-bfqtq.mongodb.net:27017/${CLUSTER_NAME}?ssl=true&replicaSet=cortex-shard-0&authSource=admin`

const insertTestDocuments = (db, callback) => {
  const collection = db.collection('documents')
  collection.insertMany([
    {name: 'trevor'}, 
    {name: 'jane'}, 
  ], (err, result) => {
    if (err) {
      console.error(err)
    }
    else {
      console.log(`Inserted ${result.ops.length} test documents`)
      callback(result)
    }
  })
}

const findTestDocuments = (db, queryFilter = {}, callback) => {
  const collection = db.collection('documents')
  collection.find(queryFilter).toArray((err, documents) => {
    if (err) {
      console.error(err)
    }
    else {
      console.log('Found the following records')
      console.log(documents)
      if(callback) {
        callback(documents)
      }
    }
  })
}

MongoClient.connect(mongoUri, (err, db) => {

  if (err) {
    console.error(err)
  }

  else {
    console.log('Connected successfully to server')

    // TODO: Will become callback hell, should switch to promises or async/await
    insertTestDocuments(db, () => {
      findTestDocuments(db, {})
      findTestDocuments(db, {name: 'trevor'}, () => {
        db.close()
      })
    })
  }
})
