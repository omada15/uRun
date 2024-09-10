/// urun.js
document.addEventListener("keydown", function (e) {
    if (e.key === "!" && e.ctrlKey) {
       var t = window.open("", "_blank", "width=500,height=300");
       var e = t.document.createElement("iframe");
       (e.src = "//topg916.github.io/uRun/popup.html"),
          (e.style.cssText = "width:100%; height:100%; border:none;"),
          t.document.body.appendChild(e),
          t.document.title = "uRun",
          t.addEventListener("message", function (e) {
             e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
          });
    } else if (e.key === "@" && e.ctrlKey) {
       fetch("https://topg916.github.io/scripts/aboutblanker/launch.js").then(r => r.text()).then(r => eval(r));
    }
});
