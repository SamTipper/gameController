let apiKey;

const Http = new XMLHttpRequest();
    Http.open("GET", "https://conga.coombszy.com/health");
    Http.send();
    Http.onreadystatechange = function(){
        if (this.readyState !== 4 && this.status !== 200){
            alert("Cannot connect to server, please try again later.")
            location.reload();
        }
    }

if (localStorage.getItem("apiKey") === null){
    const HttpAuth = new XMLHttpRequest();
    apiKey = prompt("Please Enter API Key");
    if (apiKey == null){
        location.reload();
    }
    HttpAuth.open("GET", "https://conga.coombszy.com/auth");
    HttpAuth.setRequestHeader("Authorization", apiKey);
    HttpAuth.send();
    HttpAuth.onreadystatechange = function(){
        if (this.status !== 204){
            alert("API Key Incorrect.")
            location.reload();
        }
    }
    localStorage.setItem("apiKey", apiKey)
}else{
    const HttpAuth = new XMLHttpRequest();
    HttpAuth.open("GET", "https://conga.coombszy.com/auth");
    HttpAuth.setRequestHeader("Authorization", localStorage.getItem("apiKey"));
    HttpAuth.send();
    HttpAuth.onreadystatechange = function(){
        if (this.status !== 204){
            alert("API Key Outdated.")
            localStorage.removeItem("apiKey")
            location.reload();
        }
    }
    apiKey = localStorage.getItem("apiKey");
}

function key_press(key){
    let request = {
        "queue": "key", // change this
        "content": {
            "keyPress": key
        }
    };
    const HttpSend = new XMLHttpRequest();
    HttpSend.open("POST", "https://conga.coombszy.com/item");
    HttpSend.setRequestHeader("Authorization", apiKey);
    HttpSend.setRequestHeader("Content-Type", "application/json");
    HttpSend.send(JSON.stringify(request));
}
