
const { Kafka, Partitioners } = require("kafkajs");

const main = async () => {
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
  });

  const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

  await producer.connect();

    const dataTag = await data()
    var buffer = Buffer.from(data.toString());
  // console.log("data",buf)
  // console.log(typeof(buf))
  await producer.send({
    topic: "test-topic",
    messages: [{ 
    value: ,
  }
    ],
  });

  await producer.disconnect();

  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value:(message.value.toString()),
      })
    },
  })
}

main()



// // // console.log('messages', messages)