const keys =
    {

    "Euro Truck 2": {esc: true, one: true, two: true, three: true, four: true, five: true, six: true, seven: true, eight: true, 
    nine: true, zero: true, "hyph": false, "equal": false, bspce: false, tab: false, q: false, w: true, e: true, r: true, t: true, y: false,
    u: false, i: true, o: true, p: true, "obrkt": true, "cbrkt": true, a: true, s: true, d: true, f: true, g: true, h: true, j: true,
    k: false, l: true, "scolon": false, "apost": false, lshift: true, z: false, x: false, c: false, v: false, b: false, n: false,
    m: true, "comma": false, "fstop": false, rshift: false, lctrl: true, lalt: false, space: true, ralt: false, rctrl: false},
    
    Minecraft: {esc: true, one: true, two: true, three: true, four: true, five: true, six: true, seven: true, eight: true, 
    nine: true, zero: true, "hyph": false, "equal": false, bspce: false, tab: false, q: true, w: true, e: true, r: false, t: true, y: false,
    u: false, i: false, o: false, p: false, "obrkt": false, "cbrkt": false, a: true, s: true, d: true, f: true, g: false, h: false, j: false,
    k: false, l: false, "scolon": false, "apost": false, lshift: true, z: true, x: true, c: false, v: false, b: false, n: false,
    m: false, "comma": false, "fstop": false, rshift: true, lctrl: true, lalt: false, space: true, ralt: false, rctrl: true}

    };

addEventListener('change', (event) => {
    let container = document.getElementById("game-select")
    if (container.value !== "Default"){
        for (const [key, value] of Object.entries(keys[container.value])){
            document.getElementById(key).style.backgroundColor = "white"; document.getElementById(key).style.opacity = "100%";
            if (value === true){
                document.getElementById(key).style.backgroundColor = "lightgreen";
            }else{
                document.getElementById(key).style.opacity = "30%";
            }
        }
    }else{
        const buttons = document.getElementsByTagName('button')
        for (i of buttons){
            i.style.backgroundColor = "white"; i.style.opacity = "100%";
        }
    }
});