document.querySelector(".btn_yes").onclick = function(){

    var mb = document.querySelector("#mb");
    mb.style.display = "none";

    var btn_start = document.querySelector(".btn_start");
    btn_start.style.display = "none";

    var btn_yes = document.querySelector(".btn_yes");
    btn_yes.style.display = "none";

    var btn_no = document.querySelector(".btn_no");
    btn_no.style.display = "none";

    var btn_s = document.querySelector(".btn_s");
    btn_s.style.display = "block";

    var btn_f = document.querySelector(".btn_f");
    btn_f.style.display = "block";

    var btn_y = document.querySelector(".btn_y");
    btn_y.style.display = "block";

    var rdmbox = document.querySelector(".rdmbox");
    rdmbox.style.display = "block";
}