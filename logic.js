let locked = false;
let saved = " ";
function lock(e, el) {
    if (e.key === "Enter") {
        if (el.tagName === "SELECT") {
            el.disabled = true;
        } else {
            el.readOnly = true;
        }
    }
}
window.getVal = function (el) {
    console.log("getVal called for", el);
    let val = prompt("Enter Value");
    if (val) {
        el.value = val;
    }
}
