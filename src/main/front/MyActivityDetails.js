const tbody = document.getElementById("tbody");
const clubID = localStorage.getItem("clubID");
console.log(clubID);

function getData() {
    axios.get('https://projectdeneme.herokuapp.com/clubs/listActivities/' + clubID).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
            let actName = response.data[i].activityName;
            let actQuota = response.data[i].capacity;
            let activityDesc = response.data[i].activityDescription;
            let date1 = response.data[i].date;
            let activityId = response.data[i].id;


            let clubname = response.data[i].clubName;
            const line31 = document.createElement('line31');
            line31.innerHTML += ' <tr style="height: 20%;"> <td style="width: 75%;"> <div class="card"> <div class="container1"> <h1 class="activity-name"><span id="activityname"> Activity Name: ' + actName + '</span></h1> <p><span id="descr">description' + activityDesc + ' </span></p> <h1 class="neon"><span id="quota">Quota:' + actQuota + '</span> </h1> <h1 class="neon"><span id="date">Date:' + date1 + '</span> </h1> </div><div class="container"><div class="row" style="text-align: center;"><button class="hidden-btn" onclick="goCustom(' + actName + ')"> Customize Event</button></div><div class="row" style="text-align: center;"><button class="hidden-btn2"> Delete Event</button></div><div class="row" style="text-align: center;"><button class="hidden-btn" onclick="goDetails(' + activityId + ')";> Show Participant</button></div></div></div></td></tr>';
            tbody.appendChild(line31);
        }
        console.log(response);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

}

function goDetails(activityID) {
    localStorage.setItem("activityID", activityID);
    document.location.href = "ActivityParticipantList.html";
}

function goCustom(activityName) {
    localStorage.setItem("activityName", activityName);
    document.location.href = "CustomizeEvent.html";
}