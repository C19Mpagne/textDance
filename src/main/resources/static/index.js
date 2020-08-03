async function textDance() {
    let txt = $el.text();
    txt.trim();
    let num;
    while (true) {
        num = Math.floor(Math.random() * txt.length);
        if (/\S/.test(txt[num])) {
            break;
        }
    }
    let leftStr = txt.slice(0, num);
    let rightStr = txt.slice(num + 1, txt.length);
    $el.html(leftStr + txt[num].fontsize("145px").fontcolor(randomColor()) + rightStr);
    await sleep(150);
    $el.html(txt + ("").fontsize(125 + "px").fontcolor("white"));
    await sleep(150).then(() => textDance($el));
}

sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

randomColor = () => {
    let num = Math.floor(Math.random() * 3);
    let color;
    if (num === 0) {
        color = "red"
    } else if (num === 1) {
        color = "green"
    } else {
        color = "blue"
    }
    return color;
}