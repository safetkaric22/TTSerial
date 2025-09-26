import './style.css'

const listPortsHandler = document.getElementById("list-all-ports")

listPortsHandler?.addEventListener("click", (ev) => {
  ev.preventDefault()
  window.ipcRenderer.send("list-all-ports")
})

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

window.ipcRenderer.on("list-ports-result", (ev, args) => {
  console.log(args)
})
