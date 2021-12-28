const tbody = document.getElementById("tbody");

const id = localStorage.getItem("clubId");
const clubMemberTable = document.getElementById("clubMembersTable");
console.log(id);


const getData = () => {


    axios.get('https://projectdeneme.herokuapp.com/clubs/listStudentsInClub/' + id).then(function (response) {

            console.log(response);


            for (let i = 0; i < response.data.length; i++) {
                var name = response.data[i].name;
                var surname = response.data[i].surname;
                var sid = response.data[i].userId;
                var email = response.data[i].email;
                var dep = response.data[i].department;

                var row = clubMemberTable.insertRow(i+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell4 = row.insertCell(4);

                cell1.innerHTML = name;
                cell2.innerHTML = surname;
                cell3.innerHTML = userId;
                cell4.innerHTML = email;
                cell5.innerHTML = department;

                /**
                  const line31 = document.createElement('line31');
                line31.innerHTML = '<tr><th scope="col">' + name + '</th><th scope="col"> ' + surname + '</th><th scope="col">' + sid + '</th><th scope="col">' + email + '</th><th scope="col">' + dep + '</th><td style="text-align: center;"><button class="remove">Remove from Club</button></td></tr>';
                tbody.appendChild(line31);
                }
                 */
        }
    )
};




