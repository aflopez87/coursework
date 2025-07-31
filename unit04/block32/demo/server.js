import express from 'express';
import morgan from 'morgan';

Request

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

// hello world route
app.get('/', async (req, res, next) => {
    try {
        res.send('hello world this is working');
    } catch(err) {
        next(err);
    }
});


app.post('/widget', async (req, res) => {
    console.log('body', req.body);

    const { user, color } = req.body;

    if(user == 'Paul') {
        return res.json({
            status: "hi paul"
        })
    }

    res.json({
        status: 'ok',
    })
})

const init = () => {
    app.listen(PORT, () => {
        console.log('server is running...', PORT)
    })
}

init();