const tbody = document.getElementById("tbody");
const tobbybest1 = document.getElementById("tobbybest");

const clubID = localStorage.getItem("clubId");
const memberTable = document.getElementById("memberTable");
const activityTable = document.getElementById("activityTable");

console.log("club id is " + clubID);

function getData() {
    console.log("getData in clubmanager" + clubID);
    console.log("session storage");
    console.log(localStorage);
    axios.get('https://projectdeneme.herokuapp.com/clubs/listStudentsInClub/' + clubID).then(function (response) {
            console.log("hey" + response);

            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                let name = response.data[i].name;
                let surname = response.data[i].surname;
                let id1 = response.data[i].userId;

                var row = memberTable.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = name;
                cell2.innerHTML = surname;
                cell3.innerHTML = id;
                /**
                // TODO: name, surname ve id'yi ayırın
                let line31 = document.createElement('line31');

                line31.innerHTML = '<tr>\n' +
                        ' <td> ' + name + ' </td>\n ' +
                        ' <td> ' + surname + ' </td>\n ' +
                        ' <td> ' + id1 + ' </td>\n' +
                    '</tr>\n';

                tbody.appendChild(line31);
				*/
            }
        }
    )

    axios.get('https://projectdeneme.herokuapp.com/clubs/listActivities/' + clubID).then(function (response) {
            console.log("list activities");
            console.log(response);
            console.log(response.data.length);
            for (let i = 0; i < response.data.length; i++) {
                let activity = response.data[i];
                console.log(i + " " + activity);
                console.log(activity);
                let date = activity.date;
                let desc = activity.activityName;

                let organizators = "";

                // console.log(activity.organizerClubList);
                // console.log(typeof(activity.organizerClubList));

                let list = activity.organizerClubList;
                // console.log(list);

                for(let j = 0; j < list.length - 1; j++) {
                    organizators += list[j].clubName + " | ";
                }
                organizators += list[list.length - 1].clubName;

                var row = activityTable.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = date;
                cell2.innerHTML = activityName;
                cell3.innerHTML = organizators;

                /*for(let j = 0; j < activity.organizerClubList.length - 1; j++) {
                    organizators += activity.organizerClubList[j].clubName + " | ";
                }
                organizators += activity.organizerClubList[organizerClubList.length - 1].clubName;


                

                const line32 = document.createElement('line32');
                line32.innerHTML = '<tr><td>' + date + '</td><td>' + desc + '</td><td>' + organizators + '</td> </tr>';
                tobbybest1.appendChild(line32);
                 */
            }
        }
    )
}