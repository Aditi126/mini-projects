document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector("#search-button");
    const usernameInput = document.querySelector(".inp");
    const easy = document.querySelector(".easy");
    const medium = document.querySelector(".medium");
    const hard = document.querySelector(".hard");
    const easyLabel = document.querySelector(".easy p");
    const mediumLabel = document.querySelector(".medium p");
    const hardLabel = document.querySelector(".hard p");
    const rank = document.querySelector("#rank");
    const problems = document.querySelector("#problem-count");
    const contests = document.querySelector("#contest-attended");
    const rating = document.querySelector("#contest-rating");


    function validateUserName(userName) {
        if (userName.trim() === "") {
            alert("Username cannot be empty");
        }
        const regex = /^[a-zA-Z0-9]([a-zA-Z0-9-_]{2,14})[a-zA-Z0-9]$/;
        return regex.test(userName)
    }

    searchButton.addEventListener("click", function () {
        const userName = usernameInput.value.toString();
        if(validateUserName(userName))
            console.log(userName);
        else    
            alert("Invalid Username");
    })
})