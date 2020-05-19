if (typeof regForm !== 'undefined') {
    console.log("Форма регистрации")

    // если вход
    myEnter.addEventListener("click", (e) => {
        console.log("Вход");
        /*
        //e.preventDefault();
        setCookie("email", "ruslan.novikov@gmail.com", 1)
        setCookie("password", md5("1234"), 1)
        // на личный кабинет
        window.location.href = "./bio.html";
        */

        try {

            if (!validateEmail(email.value))
                throw ("Email " + email.value + " is not valid");

            if (!validatePassword(password.value, password2.value,))
                throw ("Password " + password.value + " is not valid");

            result.innerHTML = " ОЛ РАЙТ";


        } catch (e) {
            // statements to handle any exceptions
            console.log(e); // pass exception object to error handler
            result.innerHTML = e;
        }


    });


    // если авторизован - bio.html
    if (getCookie("email") !== null) {
        window.location.href = "./bio.html";
    }


    function validatePassword(p1, p2) {
        if (p1 === '') return false;
        //let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return p1 === p2;
    }

    function validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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
