import('node-fetch');
const url = 'http://localhost:3000/jiraIssues'; // define server url


// output all issues function
async function readIssues() {
    const response = await fetch(url); // fetch request to server
    const data = await response.json(); // extract json from response
    console.log('All issues: ' + JSON.stringify(data)); // log all issues
}
// create issue function (arrow function just to see if it works for fun)
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
// update issue function
async function updateIssue(id, issue) {
    const response = await fetch(`${url}/${id}`, { // fetch request to server with issue id
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(issue), // stringify issue object
    });
    const data = await response.json(); // extract json from response
    console.log('issue updated: ' + JSON.stringify(data)); // log updated issue
}
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

// practical tests
readIssues();
createIssue({
    id: 1, title: 'test issue 1', description: 'this is the first test issue',
});
updateIssue(1, {
    id: 1, title: 'updated issue', description: 'issue updated'
});
deleteIssue(1);