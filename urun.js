/// urun.js
document.addEventListener("keydown", function (e) {
    if (e.key === "!" && e.ctrlKey) {
       var t = window.open("", "_blank", "width=500,height=300");
       var e = t.document.createElement("iframe");
       (e.src = "//omada15.github.io/uRun/popup.html"),
          (e.style.cssText = "width:100%; height:100%; border:none;"),
          t.document.body.appendChild(e),
          t.document.title = "uRun",
          t.addEventListener("message", function (e) {
             e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
          });
    } else if (e.key === "@" && e.ctrlKey) {
       fetch("https://omada15.github.io/scripts/ab/launch.js").then(r => r.text()).then(r => eval(r));
    } else if (e.key === "#" && e.ctrlKey) {
        if (document.body.contentEditable !== 'true') {
          document.body.contentEditable = 'true'; 
          document.designMode='on'; void 0
        } else {    
          document.body.contentEditable = 'false'; 
          document.designMode='off'; void 0
        }
    }
});
