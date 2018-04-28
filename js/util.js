function Prompt(opts){
    var options = {
        content:"已复制到剪贴板",
        show:null,
        hide:null,
        time:2000
    };
    for (i in options) {
        if (opts[i] === undefined) {
            opts[i] = options[i]
        }
    }
    var div=document.createElement("div");
    div.id = "prompt";
    div.className = "prompt";
    div.innerHTML = "<div class='prompt-content'>"+opts.content+"</div>";
    document.body.appendChild(div);
    var promptEl = document.getElementById("prompt");
    function showPrompt(){
        promptEl.style.display = "block";
    }
    function hidePrompt(){
        promptEl.style.display = "none";
    }

    document.getElementById("btnCopy").onclick = function(){
        showPrompt();
        setTimeout(function(){
            hidePrompt();
            if(opts.hide){
                opts.hide();
            }
        },opts.time);
        if(opts.show){
            opts.show();
        }
    }
}

function Marquee() {
    var area = document.getElementById('scrollBox');
    var con1 = document.getElementById('scrStart');
    var con2 = document.getElementById('scrEnd');
    con2.innerHTML = con1.innerHTML;
    function scrollUp() {
        if (area.scrollTop >= con1.offsetHeight) {
            area.scrollTop = 0;
        } else {
            area.scrollTop++
        }
    }
    var time = 20;
    var mytimer = setInterval(scrollUp, time);
    area.onmouseover = function () {
        clearInterval(mytimer);
    }
    area.onmouseout = function () {
        mytimer = setInterval(scrollUp, time);
    }
}