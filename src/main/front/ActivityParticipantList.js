const tbody1 = document.getElementById("tbody");

const activityID = localStorage.getItem("activityId");
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
                const line = document.createElement('line31');
                line.innerHTML += '<tr><th scope="col "style="color:white;">' + name + '</th><th scope="col"> ' + surname + '</th> <th scope="col">' + sid + '</th> <th scope="col">' + email + '</th> <th scope="col">' + dep + '</th> <td style="text-align: center;"><button class="remove" onclick="remove(' + response.data[i].id + ' )">Remove from Activity</button></td> </tr>';
                tbody1.appendChild(line);
            }
        })
        .catch(function (error) {
            console.log(error);
        })

}


