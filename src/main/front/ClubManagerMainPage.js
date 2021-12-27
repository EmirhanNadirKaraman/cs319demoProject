const tbody = document.getElementById("tbody");
const tobbybest1 = document.getElementById("tobbybest");
const clubID = localStorage.getItem("clubID");
console.log(clubID);
function getData() {
    console.log("getData in clubmanager" + clubID);
    axios.get('https://projectdeneme.herokuapp.com/clubs/listStudentsInClub/' + clubID).then(function (response) {
            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                let name = response.data[i].name;
                let surname = response.data[i].surname;
                let id1 = response.data[i].id;

                const line31 = document.createElement('line31');
                line31.innerHTML = '<tr  style="color: red"><td class="ms-4" style="color: red">' + name + '</td><td>' + surname + '</td><td>' + id1 + '</td> </tr>';
                tbody.appendChild(line31);
            }
        }
    )

    axios.get('https://projectdeneme.herokuapp.com/clubs/listActivities/' + clubID).then(function (response) {

            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                let date = response.data[i].date;
                let desc = response.data[i].activityDescription;
                let club = response.data[i].organizerClubList[0].clubName;


                const line32 = document.createElement('line32');
                line32.innerHTML = '<tr><td>' + date + '</td><td>' + desc + '</td><td>' + club + '</td> </tr>';
                tobbybest1.appendChild(line32);
            }
        }
    )
}