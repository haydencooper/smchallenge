const express = require('express'); // import express
const app = express(); // create express instance
app.use(express.json()); // add json parser to instance

app.listen(3000, () => { // start server on port 3000
    console.log('server started (port 3000)');
}

let jira_issues = []; // array to handle new issues

app.post('/jira_issues', (req, res) => { // define endpoint for POST requests
    const new_issue = req.body; // extract new issue from request body
    jira_issues.push(new_issue); // add new issue to array
    console.log(issue); // log new issue
    res.status(201.send()); // send 201 status code meaning issue was sucessfully created
})

app.get('jira_issues', (req, res) => {
    res.json(jira_issues); // output all current jira issues in array
})
