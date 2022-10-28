function getMode() {
    return window.localStorage.getItem("mode");
}

function setMode(element, oldMode, newMode) {
    window.localStorage.setItem("mode", newMode);
    if (element.classList.length) {
        element.classList.replace(oldMode, newMode)
    }else{
        element.classList = newMode
    };
}

export { getMode, setMode }