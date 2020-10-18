var cutOff = document.getElementById("cutoff")
var moreText = document.getElementById("moretext")
var btn = document.getElementById("changelength")


btn.onclick = function textManipulate() {
    if (cutOff.style.display === "none") {
        cutOff.style.display = "inline";
        btn.innerHTML = "Show more"; 
        moreText.style.display = "none";
      } else {
        cutOff.style.display = "none";
        btn.innerHTML = "Show less"; 
        moreText.style.display = "inline";
      }
}