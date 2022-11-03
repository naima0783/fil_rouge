window.onscroll = function () { myFunction() };
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
            }
            }


function mailing() {
    var messageBody = document.querySelector("#message").value ;
    var messageObject = document.querySelector("#object_demande").value ;
    var nom = document.querySelector('#nom').value ;
    var Prenom = document.querySelector('#prenom').value ;


    window.open(`mailto:Lesbobinesdebiche@gmail.com?&subject=${messageObject}&body=${messageBody}`);
    }