const fastify = require('fastify')({logger: true});
const request = require('request');

const PORT = 3000;

const options = {
    url: 'https://api.viator.com/partner/products/tags',
    method: 'GET',
    json: true,
    headers: {
      'exp-api-key': '4d1960fb-a0b2-4ed5-8194-811ef09a9db8',
      'Accept' : 'application/json;version=2.0',
      'Accept-Language': "en-US",
    }
  };
   
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      
      console.log(response.body.tags[0].tagId)
      return response.body.tags[0].tagId
     
    }
  }
   
 const messages = request(options, callback);

// const messages = [
//   {
//     "name" : "Makshaf",
//     "user": "1"
//   },{
//     "name" : "Haider",
//     "user": "2"
//   }
// ]

module.exports = messages;

  
// fastify.post('/', async function (request, reply) {
//     return { hello: "World" }
//   })


// fastify.listen({ port: 3000 }, function (err, address) {
//     if (err) {
//       fastify.log.error(err)
//       process.exit(1)
//     }
//     // Server is now listening on ${address}
//   })