import express from 'express'

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    return res.send("This application is working fine." + " Current time: " + new Date().toUTCString());
});

app.listen(PORT, () => {
    console.log(`App is listening to the port ${PORT}`);
});














