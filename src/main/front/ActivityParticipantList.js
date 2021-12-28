const tbody1 = document.getElementById("tbody");
const activityID = localStorage.getItem("activityId");
var acList = document.getElementById("acList");
console.log(activityID);


function remove(studentID) {
    axios.put('https://projectdeneme.herokuapp.com/students/deleteActivityFromStudent/' + studentID + '/' + activityID)
        .then(function (response) {
            console.log(response);

        })
        .catch(function (error) {
            console.log(error);
        });
    document.location.href = "ActivityParticipantList.html"
}

function getData() {


    axios.get('https://projectdeneme.herokuapp.com/activities/getParticipantList/' + activityID)
        .then(function (response) {

            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                let name = response.data[i].name;
                let surname = response.data[i].surname;
                let sid = response.data[i].userId;
                let email = response.data[i].email;
                let dep = response.data[i].department;
                
                var row = acList.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(4);
                var cell5 = row.insertCell(5);
                cell1.innerHTML = name;
                cell2.innerHTML = surname;
                cell3.innerHTML = sid;
                cell4.innerHTML = email;
                cell5.innerHTML = dep;
                /**
                const line = document.createElement('line31');
                line.innerHTML += '<tr><th scope="col "style="color:white;">' + name + '</th><th scope="col"> ' + surname + '</th> <th scope="col">' + sid + '</th> <th scope="col">' + email + '</th> <th scope="col">' + dep + '</th> <td style="text-align: center;"><button class="remove" onclick="remove(' + response.data[i].id + ' )">Remove from Activity</button></td> </tr>';
                tbody1.appendChild(line);
                */
            }
        })
        .catch(function (error) {
            console.log(error);
        })

}


