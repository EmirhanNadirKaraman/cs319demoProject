let tab = document.querySelector(".tab-form");
let tabHeader = tab.querySelector(".tab-header");
let tabHeaderElements = tab.querySelectorAll(".tab-header > div");
let tabBody = tab.querySelector(".tab-body");
let tabBodyElements = tab.querySelectorAll(".tab-body > div");

for (let i = 0; i < tabHeaderElements.length; i++) {
    tabHeaderElements[i].addEventListener("click", function () {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderElements[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyElements[i].classList.add("active");
    });
}

let managerEmail = document.getElementById("userMail");
let password = document.getElementById("password");
let login = document.getElementById("login");
let currentID;


function getLoginResult() {
    axios.get('https://projectdeneme.herokuapp.com/clubManagers/loginPasswordCheck/' + managerEmail.value + '/' + password.value).then(function (response) {
        console.log(response);
        console.log(response.data);
        if (response.data === true) {
            getID(managerEmail.value);
            document.location.href = "ClubManagerMainPage.html";
        } else {
            alert("E-mail or password is wrong!")
        }
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}


function getID(managerEmail) {

    axios.get('https://projectdeneme.herokuapp.com/clubManagers/getClubManagerIdByEmail/' + managerEmail).then(function (response) {
        console.log(response.data);
        currentID = response.data;

        axios.get('https://projectdeneme.herokuapp.com/clubManagers/getClub/' + currentID).then(function (response) {
            console.log(response);
            let clubID = response.data.id;
            console.log(typeof (clubID));
            console.log(clubID);
            localStorage.setItem("clubID", clubID);

        })
    })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}


//document.cookie = "name="+name.value+";path=/" + ";expires="+expire.toUTCString();
//document.cookie = "password="+encodeURI(pwd.value)+";path=/" + ";expires="+expire.toUTCString();
//can only write one entity at a time (name, pass)


login.addEventListener('click', getLoginResult);

