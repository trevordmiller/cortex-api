import {config as dotenvConfig} from 'dotenv'
import {MongoClient} from 'mongodb'

dotenvConfig()

const {
  CLUSTER_NAME,
  CLUSTER_USERNAME,
  CLUSTER_PASSWORD,
} = process.env

const mongoUri = `mongodb://${CLUSTER_USERNAME}:${CLUSTER_PASSWORD}@cortex-shard-00-00-bfqtq.mongodb.net:27017,cortex-shard-00-01-bfqtq.mongodb.net:27017,cortex-shard-00-02-bfqtq.mongodb.net:27017/${CLUSTER_NAME}?ssl=true&replicaSet=cortex-shard-0&authSource=admin`

MongoClient.connect(mongoUri, function(err, db) {

  if(err) {
    console.error(err)
  }

  else {
    console.log('Connected successfully to server')
    db.close()
  }
})
