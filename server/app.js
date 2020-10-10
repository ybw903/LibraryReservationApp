const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models').sequelize;
const jwt_config = require('./config/jwt_config');
const PORT = process.env.PORT || 4000;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.set('jwt-secrete',jwt_config.secrete);

app.use('/api', require('./routes/api'));

models.sync().then(()=>{console.log("DB 연결 성공");})
.catch(err=>{console.log("연결 실패"); console.log(err);})

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});