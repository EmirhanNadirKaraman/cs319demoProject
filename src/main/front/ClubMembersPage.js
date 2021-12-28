const tbody = document.getElementById("tbody");
const id = localStorage.getItem("clubId");
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
                const line31 = document.createElement('line31');
                line31.innerHTML = '<tr><th scope="col">' + name + '\t </th><th scope="col"> ' + surname + '\t </th><th scope="col">' + sid + '\t </th><th scope="col">' + email + '\t </th><th scope="col">' + dep + '\t </th><td style="text-align: center;"><button class="remove">Remove from Club</button></td></tr>' + "\n";
                tbody.appendChild(line31);
            }

        /*
        document.body.innerHTML = document.body.innerHTML + '<ul class="list-group list-group-horizontal mb-2 mt-4 "  >\n' +
            '      <li class="list-group-item col-lg-2 col-sm-2 col-md-2 text-center  col-4" id="activityClub1" style="border: none"> </li>\n' +
            '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityName1"> ' + activityName + ' </span></li>\n' +
            '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityDate1"> ' + activitydate + ' </span></li>\n' +
            '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityPlace1"> ' + activityplace + ' </span></li>\n' +
            '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityQuota1"> ' + accap + '</span></li>\n' +
            '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityGe1"> ' + ge250 + ' </span></li>';

         */
        }
    )
};




