document.querySelector(".btn_start").onclick = function(){
    var random1 = Math.floor(Math.random() *4+1 );
    if(random1 ==1){
        console.log("美味しいものを食べたい！");
        var sp_doc = document.querySelector(".sp_doc");
        sp_doc.innerHTML = ("");
        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.backgroundColor="#db7093";
        var mb_img = document.querySelector("#mb_img");
        document.getElementById("mb_img").src = "pt1.png";

        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.display = "block";

        var btn_no = document.querySelector(".btn_no");
        btn_no.style.display = "block";

    }else if(random1 ==2){
        console.log("ゆっくり過ごしたい");
        var sp_doc = document.querySelector(".sp_doc");
        sp_doc.innerHTML = ("");
        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.backgroundColor="#db7093";
        var mb_img = document.querySelector("#mb_img");
        document.getElementById("mb_img").src = "pt2.png";

        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.display = "block";

        var btn_no = document.querySelector(".btn_no");
        btn_no.style.display = "block";

    }else if(random1 ==3){
        console.log("新しいものに触れたい");
        var sp_doc = document.querySelector(".sp_doc");
        sp_doc.innerHTML = ("");
        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.backgroundColor="#db7093";
        var mb_img = document.querySelector("#mb_img");
        document.getElementById("mb_img").src = "pt3.png";

        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.display = "block";

        var btn_no = document.querySelector(".btn_no");
        btn_no.style.display = "block";



}

document.querySelector(".btn_s").onclick = function(){
    var random2 = Math.floor(Math.random() *2+1 );
    var mb_img = document.querySelector("#mb_img");

    if(random2 ==1 && random1 == 1){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("A通りに最近オープンしたカフェへ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "t_ss.png";

}else if(random2 ==2 && random1 == 1){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("足をのばして");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("隣の県でモーニングへ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "t_sa.png";

    }else if(random2 ==1 && random1 == 2){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("温泉施設で１日ゆっくり過ごす");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "y_ss.png";


    }else if(random2 ==2 && random1 == 2){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("足をのばして");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("E市にできた新しいビジネスホテルへ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "y_sa.png";
        
    }else if(random2 ==1 && random1 == 3){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("F美術館の美術展へ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "a_ss.png";

}else if(random2 ==2 && random1 == 3){
    var rdmbox_text = document.querySelector(".rdmbox_text");
    rdmbox_text.innerHTML = ("足をのばして");

    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("アートフェスタで新しいものに触れる");

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "a_sa.png";

}
}

document.querySelector(".btn_f").onclick = function(){
    var random2 = Math.floor(Math.random() *2+1 );
    var mb_img = document.querySelector("#mb_img");

    if(random2 ==1 && random1 == 1){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("B公園でサンドイッチを持ってピクニック");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "t_fs.png";

}else if(random2 ==2 && random1 == 1){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("足をのばして");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("隣の県のかき氷を食べに行く");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "t_fa.png";

    }else if(random2 ==1 && random1 == 2){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("水族館へ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "y_fs.png";


    }else if(random2 ==2 && random1 == 2){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("足をのばして");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("温泉旅館で１日ゆっくり過ごす");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "y_fa.png";
        
    }else if(random2 ==1 && random1 == 3){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("G市の科学館で勉強");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "a_fs.png";

}else if(random2 ==2 && random1 == 3){
    var rdmbox_text = document.querySelector(".rdmbox_text");
    rdmbox_text.innerHTML = ("足をのばして");

    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("新しくオープンしたショッピングモールへ");

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "a_fa.png";

}
}

document.querySelector(".btn_y").onclick = function(){
    var random2 = Math.floor(Math.random() *2+1 );
    var mb_img = document.querySelector("#mb_img");

    if(random2 ==1 && random1 == 1){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("C島までドライブで海鮮を食べに");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "t_ys.png";

}else if(random2 ==2 && random1 == 1){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("足をのばして");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("D半島のフルーツ狩りへ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "t_ya.png";

    }else if(random2 ==1 && random1 == 2){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("シートの広い映画館へ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "y_ys.png";


    }else if(random2 ==2 && random1 == 2){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("足をのばして");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("グランピングへ");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "y_ya.png";
        
    }else if(random2 ==1 && random1 == 3){
        var rdmbox_text = document.querySelector(".rdmbox_text");
        rdmbox_text.innerHTML = ("ちょっとそこまで");

        var result_text = document.querySelector(".result_text");
        result_text.style.display = "block";
        result_text.innerHTML = ("マルシェで食材調達");

        var result_img = document.querySelector("#result_img");
        result_img.style.display = "block";
        document.getElementById("result_img").src = "a_ys.png";

}else if(random2 ==2 && random1 == 3){
    var rdmbox_text = document.querySelector(".rdmbox_text");
    rdmbox_text.innerHTML = ("足をのばして");

    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("野外フェスで新たな音楽と出会う");

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "a_ya.png";

}
}

}
