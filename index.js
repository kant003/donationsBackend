
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const donationRoutes = require('./routes/donationRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()
app.use(express.urlencoded());
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))  //dev
app.use(helmet())
dotenv.config()

app.use('/api/donation', donationRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Bienvenid@ a nuestro API RestFull (backend)')
})






const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2021-08-01',
    authenticator: new IamAuthenticator({
        apikey: 'rfHB4fbQ1wTpxWRnCqxZzm1j9wp-QwfyBt4KaiwrJqhZ',
    }),
    serviceUrl: 'https://api.eu-de.natural-language-understanding.watson.cloud.ibm.com/instances/32ca74b4-48b2-4c39-87e2-d5ff1295fe34/v1/analyze?version=2018-09-21',
});


///watson/texto
app.get('/watson/:texto', (req, res) => {
    const text = req.params.texto
    console.log(text)
    const analyzeParams = {
        //'url': 'www.ibm.com',
        'text': text,
        'language': 'es',
        'features': {
            'categories': {
                'limit': 3
            },
            'entities': {
                'emotion': true,
                'sentiment': true,
                'limit': 3,
            },
            'keywords': {
                'emotion': true,
                'sentiment': true,
                'limit': 3,
            },
        }
    };

    naturalLanguageUnderstanding.analyze(analyzeParams)
        .then(analysisResults => {
            //console.log(JSON.stringify(analysisResults, null, 2));
            res.status(200).json(analysisResults)

        })
        .catch(err => {
            res.status(400).send('error:', err)

            //console.log('error:', err);
        });

})


const run = async () => {
    /* await mongoose.connect(process.env.URL_BASEDATOS, 
         { useNewUrlParser: true, useUnifiedTopology: true })*/
    await app.listen(process.env.PORT || 3000)
    console.log('Servidor y base de datos encendidos correctamente')
}

run().catch(error => console.log('Fallo al arrancar:' + error))
