if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express');
const router = require('./routes/route.customer')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

//initializations
const app = express();


//settings
app.set('port', process.env.PORT || 5000);


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false})); // entender los datos de formularios
app.use(morgan('dev'))
app.use(cors());

//routes
app.use('/api/v1', router)

//static files
app.use(express.static(path.join(__dirname, 'public')));



//start server
app.listen(app.get('port'), () => {
    console.log(`------Server on port ${app.get('port')}!!!-----`)
})