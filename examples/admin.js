const fs = require('fs')
const ip = require('ip')

const { Kafka } = require('kafkajs')
const host = localhost;

const kafka = new Kafka({

  brokers: [`${host}:9094`, `${host}:9097`, `${host}:9100`],
  clientId: 'test-admin-id',
  ssl: {
    servername: 'localhost',
    rejectUnauthorized: false,
     },
  sasl: {
    mechanism: 'plain',
    username: 'test',
    password: 'testtest',
  },
})

const topic = 'topic-test1'

const admin = kafka.admin()

const run = async () => {
  await admin.connect()
  await admin.createTopics({
    topics: [{ topic }],
    waitForLeaders: true,
  })
  await admin.createPartitions({
    topicPartitions: [{ topic: topic, count: 3 }],
  })
}

run().catch(e => kafka.logger().error(`[example/admin] ${e.message}`, { stack: e.stack }))

const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']

errorTypes.map(type => {
  process.on(type, async e => {
    try {
         await admin.disconnect()
      process.exit(0)
    } catch (_) {
      process.exit(1)
    }
  })
})

signalTraps.map(type => {
  process.once(type, async () => {
    console.log('')
    await admin.disconnect()
  })
})
