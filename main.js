/*
Twitter
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

Github
https://github.com/share?url=[post-url]&text=[post-title]

Reddit
https://reddit.com/submit?url=[post-url]&title=[post-title]

*/

const twitterBtn = document.querySelector(".twitter-btn");
const githubBtn = document.querySelector(".github-btn");
const redditBtn = document.querySelector(".reddit-btn");

function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");

    twitterBtn.setAttribute("href", 'https://twitter.com/share?url=${postUrL}&text=${postTitle}');
    githubBtn.setAttribute("href", 'https://github.com/share?url=${postUrl}&text=${postTitle}');
    redditBtn.setAttribute("href", 'https://reddit.com/submit?url=${postUrl}&title=${postTitle}');
}

init();