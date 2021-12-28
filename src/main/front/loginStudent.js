let tabStudent = document.querySelector(".tab-form");
let tabHeaderStudent = tabStudent.querySelector(".tab-header");
let tabHeaderElementsStudent = tabStudent.querySelectorAll(".tab-header > div");
let tabBodyStudent = tabStudent.querySelector(".tab-body");
let tabBodyElementsStudent = tabStudent.querySelectorAll(".tab-body > div");

for (let i = 0; i < tabHeaderElementsStudent.length; i++) {
    tabHeaderElementsStudent[i].addEventListener("click", function () {
        tabHeaderStudent.querySelector(".active").classList.remove("active");
        tabHeaderElementsStudent[i].classList.add("active");
        tabBodyStudent.querySelector(".active").classList.remove("active");
        tabBodyElementsStudent[i].classList.add("active");
    });
}

let userEmail = document.getElementById("userMail");
let password = document.getElementById("password");
let login = document.getElementById("login");
let currentID;

function getLoginResultStudent() {
    console.log("get login result student");
    axios.get('https://projectdeneme.herokuapp.com/students/loginPasswordCheck/' + userEmail.value + '/' + password.value)
        .then(function (response) {
            alert("axios get login password check");
            if (response.data === true) {
                console.log("response data is true");
                getID(userEmail.value);
                console.log("h" + localStorage["studentID"]);
                document.location.href = "MainPageS.html";
            } else {
                alert("E-mail or password is wrong!")
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    // alert("get login result student finished");
}

function getID(studentEmail) {
    console.log("in get id");
    // GET http://localhost:8080/students/getStudentIdByEmail/{{studentEmail}}
    console.log("student email is " + studentEmail);
    console.log(typeof(studentEmail));

    axios.get('https://projectdeneme.herokuapp.com/students/getStudentIdByEmail/' + studentEmail).then(function (response) {
        console.log("get student id by email");
        currentID = response.data;
        console.log(currentID);
        localStorage.setItem("studentId", currentID);
        alert("local storage set student id to currentID = " + currentID);
        alert(localStorage.getItem("studentId"));
        // document.location.href = "MainPageS.html";
    })
        .catch(function (error) {
            // handle error
            alert(error);
            console.log(error);
        });
}

login.addEventListener('click', getLoginResultStudent);
// document.location.href = "MainPageS.html";