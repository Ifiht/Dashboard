const { app, BrowserView, BrowserWindow } = require('electron')
const path = require('path')
const wx_url = 'https://www.msn.com/en-us/weather/forecast/in-Cupertino,CA?ocid=msedgntp&loc=eyJsIjoiQ3VwZXJ0aW5vIiwiciI6IkNBIiwicjIiOiJTYW50YSBDbGFyYSBDb3VudHkiLCJjIjoiVW5pdGVkIFN0YXRlcyIsImkiOiJVUyIsInQiOjEwMiwiZyI6ImVuLXVzIiwieCI6Ii0xMjIuMDI5IiwieSI6IjM3LjMxOTMifQ%3D%3D&weadegreetype=C'

function createWindow () {
    const win = new BrowserWindow({
        show: false,
        width: 1824,
        height: 984,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    const view1 = new BrowserView()
    const view2 = new BrowserView()

    win.addBrowserView(view1)
    win.addBrowserView(view2)
    //win.maximize();
    win.setResizable(false);
    win.webContents.openDevTools()

    let [width, height] = win.getSize();
    console.log(`width: ${width}, height: ${height}`);
    var hafwidth = width / 2;

    view1.setBounds({ x: 0, y: 0, width: hafwidth, height: height })
    view1.webContents.loadURL(`file://${__dirname}/index.html`)
    view1.setBackgroundColor("#ff223b61")
    view1.setAutoResize({width:true, height:true})
    view2.setBounds({ x: hafwidth, y: 0, width: hafwidth, height: height })
    view2.webContents.loadURL('https://app.dataminr.com/app/dashboard.html')
    view2.setAutoResize({width:true, height:true})

    win.show();

}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})