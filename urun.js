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
        eval(prompt("this"));
    } else if (e.key === "$" && e.ctrlKey) {
        console.log("leetcode");
        let fb = document.createElement("script");
        fb.type = "module";
        fb.src = "https://omada15.github.io/leetcodeSave/index.js";
        document.body.appendChild(fb);
    } else if (e.ctrlKey && e.key === "q") {
        if prompt("This will disable the page you are on. Are you sure? [Y or N]") == "y") {
            for (let l = 0; l < 199; l++) {
                document.cookie = `cd${l}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(3168))))).substring(0,3168)} ;expires=Tue 31 July 2029 23:59:59 UTC; path=/`;
            }
            alert("done");
        }
    } 
});
