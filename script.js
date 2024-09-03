// make a date time counter for how long since Bloodborne's release date ✅
// make home button on navbar take you back to the top of the page/ scroll up button at bottom of page ✅
// create dropdown box function for <p> under images 
// upload to github

const scrollToTopBtn = document.querySelector("#back-to-top");
const daysCounter = document.querySelector("#release-date-counter");

const mainImages = document.getElementsByClassName("#grid-item");
const imageText = document.getElementsByClassName("#image-text");

const searchButton = document.querySelector("#searchBar");

// Days since release counter
const releaseDate = new Date(2015, 2, 24);
console.log(releaseDate);
const formattedReleaseDate = new Intl.DateTimeFormat("en-NZ", {dateStyle: "full"}).format(releaseDate);
console.log(formattedReleaseDate);

const currentDate = new Date();
console.log(currentDate);
const formattedCurrentDate = new Intl.DateTimeFormat("en-NZ", {dateStyle: "full"}).format(currentDate);
console.log(formattedCurrentDate);

const timeDiff = currentDate - releaseDate;
console.log(timeDiff);

console.log(timeDiff / (1000 * 60 * 60 * 24));
console.log(Math.round(timeDiff / (1000 * 60 * 60 * 24)));

daysCounter.innerHTML = Math.round(timeDiff / (1000 * 60 * 60 * 24));


// Scroll to top of page nav button
let rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click",scrollToTop)

// search feature

function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
const userResponse = "Yes"
console.log(userResponse);
const userResponse2 = ["Cleric Beast","Father Gascoigne","Bloodstarved Beast","Vicar Amelia","The Witch of Hemwick","Darkbeast Paarl","Shadow of Yharnam","Rom, the Vacuous Spider","Amygdala","One Reborn","Micolash, Host of the Nightmare","Mergo's Wet Nurse","Gehrman, the First Hunter","Moon Presence"]
console.log(userResponse2);


const alertInput = prompt("Have you played Bloodborne?").toLocaleLowerCase();
const result = userResponse.includes(alertInput);
console.log(result);
if (result) {
    const alertInput2 = prompt("Thats great! What was your favorite boss?");
    const result2 = userResponse2.includes(alertInput2);
    console.log(result2);
    if(result2) {
        alert("Nice! Mine was Gehrman, the First Hunter.")
    } else {
        alert("I must have missed that boss.")
    }
} else {
    alert("If you enjoy a challenge, maybe you should.")
}



