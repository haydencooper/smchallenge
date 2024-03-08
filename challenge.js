const express = require('express'); // import express
const app = express(); // create express instance
app.use(express.json()); // add json parser to instance
const port = 3000; // define port for server


// array to handle new issues with sample data
let jiraIssues = [
    { id: 1, title: 'issue 1', description: 'test issue 1' }, // requirements were 3 attributes: id, title and desc
];
// create issue
app.post('/jiraIssues', (req, res) => { // define endpoint for POST requests
    const newIssue = req.body; // extract new issue from request body
    jira_issues.push(newIssue); // add new issue to array
    console.log(newIssue); // log new issue
    res.status(201).send(newIssue); // send 201 status code meaning issue was sucessfully created
});

// update issue
app.put('/jiraIssues/:id', (req, res) => {
    const issueId = parseInt(req.params.id); // extract issue id from request (using parseInt because web request parameters are strings)
    const updatedIssue = req.body; // extract updated issue from request body
    const index = jiraIssues.findIndex(issue => issue.id === issueId); // loop through issues to find matching index of issue to update
    if (index !== -1) { // if issue exists
        jiraIssues[index] = updatedIssue; // update issue
        console.log('issue updated: ' + + JSON.stringify(updatedIssue)); // print updated issue with message
        res.send(updatedIssue); // send 200 status code meaning issue was sucessfully updated
    } else {
        res.status(404).send('issue could not be found'); // print error message
    }
});

app.delete('/jiraIssues/:id', (req, res) => {
    const issueId = parseInt(req.params.id); // extract issue id from request
    const index = jiraIssues.findIndex(issue => issue.id === issueId); // loop through issues to find matching index of issue
    if (index !== -1) { // if index of issue exists
        const deletedIssue = jiraIssues.splice(index, 1); // delete it baby
        console.log('issue deleted: ' + + JSON.stringify(deletedIssue)); // print deleted issue with message
        res.send(deletedIssue); // log deleted issue
    } else {
        res.status(404).send('issue could not be found'); // print error message
    }
});

// read/output all issues
app.get('/jiraIssues', (req, res) => {
    res.json(jira_issues); // output all current jira issues in array
});

app.listen(port, () => { // start server on port 3000
    console.log(`server started on port ${port}`);
});