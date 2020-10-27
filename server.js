const { request } = require('http');
const https = require('https');

https.get('https://api.github.com/users/jonatasoc/repos', res => {
  let { statusCode } = res,
    headers = res.headers["content-type"],
    error;

  // if (statusCode !== 200) {
  //   error = new Error('Request failed.\n' +
  //     `Status Code: ${statusCode}`)
  // }

  if (error) {
    console.error(error.message);

    res.resume();
    return;
  }

  let rawData = '';

  res.on('data', (chunk) => rawData += chunk);

  res.on('end', () => {
    try {
      // const parsedData = JSON.parse(rawData);
      console.log(rawData);
    } catch (e) {
      console.error(e.message);
    }
  })

});