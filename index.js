const { dockStart } = require('@nlpjs/basic');
const express = require('express');
const app = express();


app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

async function startNLP() {
    const dock = await dockStart({ use: ['Basic']});
    const nlp = dock.get('nlp');
    nlp.addLanguage('en');
    nlp.addDocument('en', 'hey buddy', 'greetings.hello');
    nlp.addAnswer('en', 'greetings.hello', 'Hey there');
    await nlp.train();

    async function processGreeting(input) {
      const response = await nlp.process('en', input);
      return response;
    }

    // app.get('/chatbot', async (req, res) => {
    //   const input = req.query.input;
    //   const response = await processGreeting(input);
    //   if (response.answers.length > 0) {
    //     res.send(response.answer);
    //   } else {
    //     res.send('Sorry Error')
    //   }

      
    // });
    const port = 5000;
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });


}


startNLP()


