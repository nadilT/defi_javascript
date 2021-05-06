// EXERCICE 1



// function demo() {
//     document.getElementsByClassName("test")[0].style.background = "blue";
//     }



// EXERCICE 2


// var count = 0;
// const test = document.querySelector(".test");

// test.addEventListener("click", function () {
    
//     if (count % 2 == 0) {
//     test.style.background = "yellow";
//     count++;
//     } 
    
//     else {
//     test.style.background = "green";
//     count++;
//     }
    
//     if (count % 5 == 0) {
//     test.style.background = "red";
//     }
    
//     console.log(count);
//     });


// EXERCICE 3


// document.getElementById ("txt"). value = "Entrez votre nom";

// function getVal ()
// {
// var txt = document.getElementById("txt").value;
// var re = [A-Za-z];



// alert("Bonjour "+txt);
// }




// EXERCICE 4


function show() {
    const nom = document.getElementById("nom").value;
    const lettres = /^[a-zA-Zä-ÿÄ-Ÿ]+$/;
    const autorise = nom.match(lettres);
    
    const message = document.getElementById ("validname");




    if (autorise) {
        document.getElementById("message").innerHTML="Formulaire envoyé";

        document.getElementById("nom").style.border = "2px solid green";

    } else {
        document.getElementById("message").innerHTML="Veuillez entrer un nom valide";

        document.getElementById("nom").style.border = "2px solid red";
    }
}

// document.getElementById("error_form").reset();