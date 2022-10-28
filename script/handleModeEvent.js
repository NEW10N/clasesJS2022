

const handleModeEvent = (body, btn, getMode, setMode) => {

    if (getMode() != "" && getMode() != null) {
        setMode(body, getMode(), getMode())
    } else {
        setMode(body, "", "light")
    }

    btn.addEventListener("click", e => {
        if (getMode() === "dark") {
            setMode(body, getMode(), "light")
        } else {
            setMode(body, getMode(), "dark")
        }
    })
}

export default handleModeEvent;