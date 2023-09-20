const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const hoursWorked = parseFloat(req.body.hoursWorked);
    const hourlyRate = parseFloat(req.body.hourlyRate);
    const calculatedSalary = hoursWorked * hourlyRate;

    res.send(`Calculated Salary: $${calculatedSalary.toFixed(2)}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
