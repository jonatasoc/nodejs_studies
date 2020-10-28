const https = require('https');

let options = {
  headers: {
    'User-Agent': 'Jonatas de Oliveira'
  }
}

https.get('https://api.github.com/users/jonatasoc/repos', options, res => {
  let { statusCode } = res,
    contentType = res.headers["content-type"],
    error;

  if (statusCode !== 200) {
    error = new Error('Request failed.\n' +
      `Status Code: ${statusCode}`)
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
      `Expected application/json but received ${contentType}`);
  }

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