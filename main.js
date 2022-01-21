const { app, BrowserView, BrowserWindow } = require('electron')
const path = require('path')
const wx_url = 'https://www.msn.com/en-us/weather/forecast/in-Cupertino,CA?ocid=msedgntp&loc=eyJsIjoiQ3VwZXJ0aW5vIiwiciI6IkNBIiwicjIiOiJTYW50YSBDbGFyYSBDb3VudHkiLCJjIjoiVW5pdGVkIFN0YXRlcyIsImkiOiJVUyIsInQiOjEwMiwiZyI6ImVuLXVzIiwieCI6Ii0xMjIuMDI5IiwieSI6IjM3LjMxOTMifQ%3D%3D&weadegreetype=C'

function createWindow () {
    const win = new BrowserWindow({
        show: false,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    const view1 = new BrowserView()
    const view2 = new BrowserView()

    win.addBrowserView(view1)
    win.addBrowserView(view2)
    win.maximize();
    win.setResizable(false);

    let [width, height] = win.getSize();
    var hafwidth = width / 2;

    view1.setBounds({ x: 0, y: 0, width: hafwidth, height: height })
    view1.webContents.loadURL(wx_url)
    view1.setAutoResize({width:true, height:true})
    view2.setBounds({ x: hafwidth, y: 0, width: hafwidth, height: height })
    view2.webContents.loadURL('https://www.msn.com/en-us/money')
    view2.setAutoResize({width:true, height:true})

    win.show();

    //win.loadFile('https://www.msn.com/en-us/weather/forecast/in-Reston,VA?loc=eyJhIjoiMTE4MTMgQ29vcGVycyBDdCIsImwiOiJSZXN0b24iLCJyIjoiVkEiLCJyMiI6IkZhaXJmYXggQ291bnR5IiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4tdXMiLCJ4IjotNzcuMzU0ODgzLCJ5IjozOC45Mzc3Njh9&weadegreetype=C&ocid=msedgntp')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})