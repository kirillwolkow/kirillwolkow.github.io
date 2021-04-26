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