document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector("#search-button");
    const usernameInput = document.querySelector(".inp");
    const easy = document.querySelector(".easy");
    const medium = document.querySelector(".medium");
    const hard = document.querySelector(".hard");
    const easyLabel = document.querySelector(".easy p");
    const mediumLabel = document.querySelector(".medium p");
    const hardLabel = document.querySelector(".hard p");
    const rank = document.querySelector("#rank p");
    const problems = document.querySelector("#problem-count p");
    const acceptance = document.querySelector("#acceptance-rate p");
    const submissions = document.querySelector("#submissions p");

    function validateUserName(userName) {
        if (userName.trim() === "") {
            alert("Username cannot be empty");
        }
        const regex = /^[a-zA-Z0-9]([a-zA-Z0-9-_]{2,14})[a-zA-Z0-9]$/;
        return regex.test(userName)
    }

    async function fetchUserDetails(username){
        const url = "https://leetcode-stats-api.herokuapp.com/" + username;
        try {
            const response = await fetch(url);
            if(response.ok){
                const data = await response.json();
                console.log(data);
                rank.innerHTML = data['ranking'];
                problems.innerHTML = data['totalSolved'];
                acceptance.innerHTML = data['acceptanceRate'];
                submissions.innerHTML = Object.keys(data.submissionCalendar).length;
                easy.addEventListener('mouseover', function(){
                    easyLabel.innerHTML = data['easySolved'] + "/" + data['totalEasy'];
                })
                medium.addEventListener('mouseover', function(){
                    easyLabel.innerHTML = data['mediumSolved'] + "/" + data['totalMedium'];
                })
                hard.addEventListener('mouseover', function(){
                    easyLabel.innerHTML = data['hardSolved'] + "/" + data['totalHard'];
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    searchButton.addEventListener("click", function () {
        const userName = usernameInput.value.toString();
        if(validateUserName(userName)){
            fetchUserDetails(userName);
        }
        else    
            alert("Invalid Username");
    })
})