// function show() {
//     const list = document.querySelector(".list");
//     const ds = document.querySelectorAll(".ds");
//     // const nav = document.querySelector(".nav");

//     list.addEventListener("click", function (e) {
//         e.stopPropagation();
//         list.style.display = "none";
//         for (let d of ds) {
//             d.style.display = "block";
//             d.style.backgroundColor = "";
//         }
//     });

//     document.addEventListener("click", function () {
//         list.style.display = "block";
//         for (let d of ds) {
//             d.style.display = "none";
//         }
//     });
// }

function login() {
    var nav1 = document.querySelector('.navright');
    var nav2 = document.querySelector('.navrightlogin');
    nav1.style.display = "none";
    nav2.style.display = "flex";
}