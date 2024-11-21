var MMisInstalled = false;

const mCvar = document.getElementById("modalC-mmjs")
const modalConExist = (mCvar !== null)
if(modalConExist == false) {
    const modalContainer = document.createElement("div")
    modalContainer.classList = "modalContainer"
    modalContainer.id = "modalC-mmjs"
    document.body.prepend(modalContainer)
    const styleSheet = document.createElement("link")
    styleSheet.rel = "stylesheet"
    styleSheet.href = "src/css/modalModule.css"
    document.head.append(styleSheet)
    MMisInstalled = true;
    console.log("Installed modalModule.js")
}