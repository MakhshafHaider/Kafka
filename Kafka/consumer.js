const { Kafka } = require('kafkajs');
const query = require('../Service/index');
const pool = require('../database/index')

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });
  
async function main(){
 const consumer = kafka.consumer({ groupId: "test-group" });
  
await consumer.connect();
await consumer.subscribe({ topic: "test-topic", fromBeginning: true });



// await consumer2.run({
//      eachMessage: async ({ topic, partition, message }) => {
//       console.log({
//         topic:  "test-destination",
//         value: message.value.toString()
//       })
//      }
//     })
  
   await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {

    const data= JSON.parse(message.value.toString())
    // console.log(';data', data)

    // data.map(data=> console.log('data hon', data))
    data.map( (data) =>{ 
    let tagid= data['tagId']
    let parentid= data['parentTagIds']
    let localename = data['allNamesByLocale']

    // const dataQuery= data['tagId'][0]
    // console.log('id,name', tagid,localename)
    //  query(tagid,parentid,localename)
  })

  // const oneData = await data['tagId'][0]
  console.group('datatquery',data[0]  )
  
  const SingleTag = await pool.query('Select * FROM tagData WHERE tagid=21768')
  console.log('SInglelTag', SingleTag)
  },
})
  }


main()