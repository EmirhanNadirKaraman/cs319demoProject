const navActivities = document.getElementById("navActivities");
//const axios = require('axios');
//https://projectdeneme.herokuapp.com/activities/listActivities
//const axios = require('axios').default;


const getData = () => {
    axios.get('https://projectdeneme.herokuapp.com/activities/listActivities').then(function (response) {
        console.log(response);
        console.log("hey " + response.data[12].organizerClubList);
        for (let i = 0; i < response.data.length; i++) {
            let activityName = response.data[i].activityName;
            let activityDesc = response.data[i].activityDescription;
            let activityDate = response.data[i].date;
            let activityPlace = response.data[i].place;
            let activityCapacity = response.data[i].capacity;
            let activityGePoints = response.data[i].ge250Point;

            /*
            let organizerClubList = response.data[i].organizerClubList;
            let organizerClubNames = "";
            for(let j = 0; j < organizerClubList.length - 1; j++) {
                organizerClubNames += organizerClubList[j].clubName + "|";
            }
            organizerClubNames += organizerClubList[organizerClubList.length - 1].clubName;


             */

            // TODO: club name eklenecek
            document.body.innerHTML = document.body.innerHTML + '<ul class="list-group list-group-horizontal mb-2 mt-4 "  >\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" id="activityClub1" style="border: none"><span id="activityName1"> ' + activityName + ' </span> </li>\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityName1"> ' + activityDate + ' </span></li>\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityDate1"> ' + activityDesc + ' </span></li>\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityPlace1"> ' + activityPlace + ' </span></li>\n' +
                '      <li class="list-group-item  col-lg-1 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityQuota1"> ' + activityCapacity + '</span></li>\n' +
                '      <li class="list-group-item  col-lg-1 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityGe1"> ' + activityGePoints + ' </span></li>\n' +
                '      <li class="list-group-item col-lg-1 col-2 justify-content-center d-none  d-sm-block" style="border: none">\n' +
                '        <button id = "joinButton" type="button" class="btn btn-danger btn-outline-dark justify-content-center" style="color: white">Join</button>\n' +
                '      </li>';

        }
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
};

/**
 const currentData = await axios.get('https://projectdeneme.herokuapp.com/activities/listActivities')then(res => res.data);
 joinButton.addEventListener('click', getData)
 */

navActivities.addEventListener('click', getData)