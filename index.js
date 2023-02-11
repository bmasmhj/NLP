const { dockStart } = require('@nlpjs/basic');

async function processGreeting(input) {
    const dock = await dockStart({ use: ['Basic']});
    const nlp = dock.get('nlp');
    nlp.addLanguage('en');

    nlp.addDocument('en', 'hey buddy', 'greetings.hello');
 
    nlp.addAnswer('en', 'greetings.hello', 'Hey there');
  
    await nlp.train();
    const response = await nlp.process('en', input);
    return response;
  }
  


const express = require('express');

const app = express();
const port = 5000;

app.get('/greeting', async (req, res) => {
  const input = req.query.input;
  const response = await processGreeting(input);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


