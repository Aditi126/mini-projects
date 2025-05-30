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
    const circleDiv = document.querySelector(".circle-div");

    function validateUserName(userName) {
        if (userName.trim() === "") {
            alert("Username cannot be empty");
        }
        const regex = /^[a-zA-Z0-9]([a-zA-Z0-9-_]{2,14})[a-zA-Z0-9]$/;
        return regex.test(userName)
    }


    function updateProgress(solved, total, label, circle, color){
        const progressWidth = (solved/total) * 100;
        circle.style = "border: border: 5px solid conic-gradient(#FFFFFF0F 100%, #${color} ${progressWidth}%);"
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
                if(data['status']=='error'){
                    alert(data['message']);
                }
                updateProgress(data["easySolved"], data["totalEasy"], easyLabel, easy, '#28c244');
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