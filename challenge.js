const express = require('express'); // import express
const app = express(); // create express instance
app.use(express.json()); // add json parser to instance
const port = 3000; // define port for server


// array to handle new issues with sample data
let jiraIssues = [
    { id: 1, title: 'issue 1', description: 'test issue 1' },
];
// create issue
app.post('/jira_issues', (req, res) => { // define endpoint for POST requests
    const newIssue = req.body; // extract new issue from request body
    jira_issues.push(newIssue); // add new issue to array
    console.log(newIssue); // log new issue
    res.status(201.send()); // send 201 status code meaning issue was sucessfully created
})

// update issue
app.put('/jira_issues/:id', (req, res) => {
    const issueId = parseInt(req.params.id); // extract issue id from request (using parseInt because web request parameters are strings)
    const updatedIssue = req.body // extract updated issue from request body
    const index = jiraIssues.findIndex(issue => issue.id === issueId); // loop through issues to find matching index of issue to update
    if (index !== -1) { // if issue exists
        jiraIssues[index] = updatedIssue; // update issue
        console.log(updatedIssue); // log updated issue
        res.status(200).send(); // send 200 status code meaning issue was sucessfully updated
    }
}


// read/output all issues
app.get('jira_issues', (req, res) => {
    res.json(jira_issues); // output all current jira issues in array
})

app.listen(3000, () => { // start server on port 3000
    console.log('server started (port 3000)');
}
