import('node-fetch');
const url = 'http://localhost:3000/jiraIssues'; // define server url


// output all issues function
async function readIssues() {
    const response = await fetch(url); // fetch request to server
    const data = await response.json(); // extract json from response
    console.log('All issues: ' + JSON.stringify(data)); // log all issues
}
// create issue function
const createIssue = async (issue) => { // async function to handle fetch request
    const response = await fetch(url, { // fetch request to server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(issue), // stringify issue object
    });
    const data = await response.json(); // extract json from response
    console.log('issue(s) created: ' + JSON.stringify(data)); // log created issue
};

// delete issue function
async function deleteIssue(id) {
    const response = await fetch(`${url}/${id}`, { // fetch request to server with issue id
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('issue deleted: ' + `${id}`);
    } else {
        console.log('failed to delete issue');
    }
}

// tests
createIssue({
    id: 1, title: 'test issue 1', description: 'this is the first test issue',
    id: 2, title: 'test issue 2', description: 'this is the second issue'
});
readIssues();
deleteIssue(2);