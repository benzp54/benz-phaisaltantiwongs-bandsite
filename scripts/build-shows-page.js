let showArray = []

//Using axios to communicate with the API
const pGet = axios.get('https://project-1-api.herokuapp.com/register');
    pGet.then(res => {
        let pKeyHolder = JSON.stringify(res.data);
        let keyArray = pKeyHolder.split('"');
        const pKey = keyArray[3];

        //Revisit to apply promise chaining
        const pShows = axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${pKey}`);
        pShows.then (res => {
        const pShowHolder = res.data;
        showArray = pShowHolder;
        return pShowHolder;
        })

        .then(res => {
            drawSched(res)
        });

    pGet.catch(error => {
        console.log(error);
    });
});

const drawSched = () => {
    const showList = document.getElementById('shows');
    
    for (let i = 0; i < showArray.length; i++) {
        let showObject = showArray[i];
        let showItem = document.createElement('div');

        let dateLabel = document.createElement('span');
        let venueLabel = document.createElement('span');
        let locationLabel = document.createElement('span');

        let dateNode = document.createElement('p');
        let venueNode = document.createElement('p')
        let locationNode = document.createElement('p');

        showItem.classList.add('shows__container');
        dateLabel.classList.add('shows__label');
        venueLabel.classList.add('shows__label');
        locationLabel.classList.add('shows__label');



        dateLabel.textContent = 'DATE';
        venueLabel.textContent = 'VENUE';
        locationLabel.textContent = 'LOCATION';

        dateNode.textContent = showObject.date;
        venueNode.textContent = showObject.place;
        locationNode.textContent = showObject.location;

        showItem.appendChild(dateLabel);
        showItem.appendChild(dateNode);
        showItem.appendChild(venueLabel);
        showItem.appendChild(venueNode);
        showItem.appendChild(locationLabel);
        showItem.appendChild(locationNode);

        showList.appendChild(showItem);
    };
};
drawSched();