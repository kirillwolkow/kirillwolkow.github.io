/*

Github
https://github.com/share?url=[post-url]&text=[post-title]

Reddit
https://reddit.com/submit?url=[post-url]&title=[post-title]

*/

const githubBtn = document.querySelector(".github-btn");
const redditBtn = document.querySelector(".reddit-btn");

function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");

    githubBtn.setAttribute("href", 'https://github.com/share?url=${postUrl}&text=${postTitle}');
    redditBtn.setAttribute("href", 'https://reddit.com/submit?url=${postUrl}&title=${postTitle}');
}

init();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}