let commentsLog = [];

//Using axios to communicate with the API
const pGet = axios.get('https://project-1-api.herokuapp.com/register');
    pGet.then(res => {
        let pKeyHolder = JSON.stringify(res.data);
        let keyArray = pKeyHolder.split('"');
        const pKey = keyArray[3];

        //Revisit to apply promise chaining
        const pComm = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${pKey}`);
        pComm.then (res => {
        const pCommHolder = res.data;
        commentsLog = pCommHolder;
        return pCommHolder;
        })

        .then(res => {
            drawComments(res)
        });

    pGet.catch(error => {
        console.log(error);
    });
});

const drawComments = () => {
    const commentsList = document.getElementById('comments__list');
    
    for (let i = 0; i < commentsLog.length; i++) {
        let commentObject = commentsLog[i];
        let commentItem = document.createElement('div');
        /*commentItem.classList.add('comments__container');

        let avatarNode = document.createElement('div')
        avatarNode.classList.add('img__avatar')*/
        let nameNode = document.createElement('span');
        let timeNode = document.createElement('span')
        let commentNode = document.createElement('p');

        nameNode.textContent = commentObject.name;
        timeNode.textContent = commentObject.timestamp;
        commentNode.textContent = commentObject.comment;

        commentItem.appendChild(nameNode);
        commentItem.appendChild(timeNode);
        commentItem.appendChild(commentNode);

        commentsList.appendChild(commentItem);
    };
};

//Button handler: To prevent page refresh upon click
function buttonHandler() {
    const commentsForm = document.getElementById("comments__form");
    commentsForm.addEventListener("submit", e => {
    e.preventDefault();
    });
    console.log("button clicked");
    /* addComment ();
    */
};

// const btn = document.getElementById("btn__comment")
// btn.addEventListener('click', buttonHandler);


/*Need to capture form data before reset
    console.log(e.target.userName.value);
    console.log(e.target.userComment.value);
    console.log(e.target.timeStamp.value);
    console.log("form submitted");
});

//Add function to append new comment to the commentsLog array
function buttonHandler(onClick) {
    const newUser = userName;
    const newComment = userComment;
    const submitTime = timeStamp;
    console.log('Clicked!');
}

//Adding new comment to the commentsLog array and clear field upon click
let addComment = () => {    
    let nameField = document.getElementById('newName')
    let commentField = document.getElementById('newComment')

    let comment = commentField.value;
    commentField.Value = "";

    let name = nameField.value;
    nameField.value = "";

    const commentObject = {
        userName: name,
        userComment: comment,
    };

    commentsLog.unshift(commentObject);
    console.log('Array updated, form reset')
    render();
};

//Adding new comment to render on the web page
let displayComment = () => {
    let div = document.createElement("div");
    let p = document.createElement ("p");
    comments__list.append(commentsLog, p) //Revisit
}

//You must have a function called displayComment() that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.*/

