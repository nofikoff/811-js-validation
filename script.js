

if (typeof regForm !== 'undefined') {
    console.log("Форма регистрации")

    // если вход
    myEnter.addEventListener("click", (e) => {
        console.log("Выход");
        //e.preventDefault();
        setCookie("email", "ruslan.novikov@gmail.com", 1)
        setCookie("password", md5("1234"), 1)
        // на личный кабинет
        window.location.href = "./bio.html";
    })


    // если авторизован - bio.html
    if (getCookie("email") !== null) {
        window.location.href = "./bio.html";
    }



}


if (typeof bioForm !== 'undefined') {
    console.log("Форма личный кабинет")

    // если пусто куиес - то на регистрацию
    if (getCookie("email") === null) {
        window.location.href = "./index.html";
    }


    // если выход - все чистим
    myExit.addEventListener("click", (e) => {
        console.log("Выход");

        //e.preventDefault();
        setCookie("email", '', 1)
        setCookie("password", '', 1)

        eraseCookie("email");
        eraseCookie("password");
        // на регистрацию
        window.location.href = "./index.html";
    })

}


function setCookie(name, value, hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    setCookie(name, '', -1)
}
