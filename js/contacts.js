(function(){
    window.addEventListener('load', init);
    function init(){
        document.getElementById("contacts").addEventListener("click", contactsClick);
    }
})();
let shown = false;
function contactsClick(){
    if(shown){
        shown = false;
        document.getElementById("vk").innerHTML = "";
        document.getElementById("telegram").innerHTML = "";
        document.getElementById("number").innerHTML = "";
        document.getElementById("email").innerHTML = "";
    }
    else{
        shown = true;
        let vk = document.createElement('a');
        vk.href = "https://vk.com/augustshot";
        vk.textContent = "ВКонтакте";
        document.getElementById("vk").append(vk);
        let tg = document.createElement('a');
        tg.href = "https://t.me/augustshot";
        tg.textContent = "Telegram";
        document.getElementById("telegram").append(tg);
        document.getElementById("number").innerHTML = "ulyana.yamanova@yandex.ru";
        document.getElementById("email").innerHTML = "+79501106490";
    }
}