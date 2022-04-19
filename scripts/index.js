const commentsLog = [
    {
        id: 1,
        userName: "Miles Acosta",
        userComment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        timeStamp: "12/20/2020"
    },
    {
        id: 2,
        userName: "Emilie Beach",
        userComment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        timeStamp: "01/09/2021"
    },
    {
        id: 3,
        userName: "Conner Walton",
        userComment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        timeStamp: "02/17/2021"
    },
];

//Using axios to communicate with the API
const pGet = axios.get('https://project-1-api.herokuapp.com/register');
    pGet.then(res => {
        const pKey = res.data;
        console.log(pKey);
    });

    pGet.catch(error => {
        console.log(error);
    });

const drawComments = () => {
    const commentsList = document.getElementById('comments__list');
    
    for (let i = 0; i < commentsLog.length; i++) {
        let commentObject = commentsLog[i];
        let commentItem = document.createElement('div');
        /*commentItem.classList.add('comments__container');

        let avatarNode = document.createElement('div')
        avatarNode.classList.add('img__avatar')*/
        let nameNode = document.createElement('p');
        let commentNode = document.createElement('p');

        nameNode.textContent = commentObject.userName;
        commentNode.textContent = commentObject.userComment;

        commentItem.appendChild(nameNode);
        commentItem.appendChild(commentNode);

        commentsList.appendChild(commentItem);
    };
};
drawComments();

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

const btn = document.getElementById("btn__comment")
btn.addEventListener('click', buttonHandler);


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

