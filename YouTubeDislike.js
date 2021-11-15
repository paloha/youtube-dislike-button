// BOOKMARKLET which clicks DISLIKE and adds a comment "DISLIKE"
// No guarantee it will work on all browsers - tested only in Firefox
javascript: (() => {
    if(location.hostname.match("youtube.com")){
      if(document.getElementById("avatar-btn")){
          var comsec = document.getElementById("comments");
          if(comsec){
            comsec.scrollIntoView();
          } else {
            window.alert("Can not find comments. Please scroll to comment section first.");
          }
          const videoID = new URLSearchParams(window.location.search).get("v");
          if(videoID == null){
              window.alert("It seems this is not a YouTube video page.");
          } else {
              setTimeout(function(){
                var dislike = document.querySelector("button[aria-label=\"Dislike this video\"]");
                if(dislike.getAttribute("aria-pressed") == "false"){
                    dislike.click();
                }
                document.getElementById("simplebox-placeholder").click();
                document.getElementById("contenteditable-root").innerHTML = "DISLIKE ";
                var submit = document.getElementById("submit-button");
                submit.scrollIntoView(); window.scrollBy(0, -120);
                submit.removeAttribute("disabled");
                submit.click();
              }, 2000);
            }
      } else {
          window.alert("You need to be signed in to comment.");
      }
    } else {
      window.alert("This is not YouTube.com.");
    }
})();
