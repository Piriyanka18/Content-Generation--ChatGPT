//import { Configuration, OpenAIApi } from "openai";
const OpenAI =require('openai');
const {Configuration, OpenAIApi} = OpenAI;

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 3002;

const configuration = new Configuration({
    organization: "org-1QEXCgApRoTZi2Ty2iXDy8qW",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const {message} =req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you are As an AI language model  . Answer with the create website content code hompage,about page,contact page ect and answer the qustion about university of colombo.

        administrator: How can I help you today?
        Student: How to create Home page of university of Colombo?
        administrator: <!DOCTYPE html>
        <html>
        <head>
          <title>University of Colombo</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <header>
            <div class="logo">
              <img src="logo.png" alt="University of Colombo">
            </div>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Faculties</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </header>
        
          <main>
            <section class="banner">
              <h1>Welcome to University of Colombo</h1>
              <p>Explore our world-class facilities and exceptional academic programs.</p>
              <a href="#" class="button">Learn more</a>
            </section>
        
            <section class="features">
              <div class="feature">
                <img src="feature1.jpg" alt="Feature 1">
                <h2>Academic Excellence</h2>
                <p>We offer world-class academic programs that are tailored to meet the needs of our students and the demands of the 21st century.</p>
              </div>
              
              
            </section>
        
            <section class="news">
              <h2>Latest News</h2>
              <div class="article">
                <h3>University of Colombo ranked among top universities in the world</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante quis sapien luctus varius at et justo.</p>
                <a href="#" class="button">Read more</a>
              </div>
              
          
            </section>
          </main>
        </body>
        </html>
        Student:${message}?
        administrator:`,
        
        max_tokens: 1000,
        temperature: 0,
      });
  console.log(response.data)
  if(response.data.choices[0].text){
    res.json({message:response.data.choices[0].text})
  }
 
});

app.listen(port, () => {
  console.log('Example app listening');
});
