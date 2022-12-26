const axios = require('axios');

const data = async() => {
    const response = await axios.get('https://api.viator.com/partner/products/tags', {
      headers: {
        'exp-api-key': '4d1960fb-a0b2-4ed5-8194-811ef09a9db8',
        'Accept' : 'application/json;version=2.0',
        'Accept-Language': "en-US", 
      }    
    });
   const dataResponse = response['data'].tags; 
  //  console.log('dataresposne', dataResponse);
   return dataResponse;
}
data()


const destination = async() => {
  const response = await axios.get('https://api.viator.com/partner/v1/taxonomy/destinations', {
      headers: {
        'exp-api-key': '4d1960fb-a0b2-4ed5-8194-811ef09a9db8',
        'Accept' : 'application/json;version=2.0',
        'Accept-Language': "en-US", 
      }    
    });
   const dataResponse = response;
    console.log('dataresposne', dataResponse['data']);
   return dataResponse;
}
destination()
module.exports = data; 