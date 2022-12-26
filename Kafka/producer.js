const data  = require('../routes/index')
const { Kafka, Partitioners } = require("kafkajs");

const main = async () => {
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

  await producer.connect();

  const dataTag = await data();
  // const destinationData = await destination();
  // console.log('destination',destinationData.data)
   var buffer =new Buffer.from(dataTag.toString());
  // console.log('datatag', buffer)

  // console.log("data",buf)
  // console.log(typeof(buf))
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: JSON.stringify(dataTag) },
    ],
  })
  

// await producer.send([
//   {
//     topic:"test-destination",
//     messages: [{
//       value: buffer
//     }]
//   }
// ])

  await producer.disconnect();
}

main();

