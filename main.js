const { app, BrowserView, BrowserWindow } = require('electron')
const path = require('path')
require('electron-reload')(__dirname);
require("chokidar");

function refresh(view) {
    view.webContents.reload()
}

function StartWatcher(path, view){
    var chokidar = require("chokidar");

    var watcher = chokidar.watch(path, {
        ignored: /[\/\\]\./,
        persistent: true
    });

    function onWatcherReady(){
        console.info('From here can you check for real changes, the initial scan has been completed.');
    }
          
    // Declare the listeners of the watcher
    watcher
    .on('add', function(path) {
          console.log('File', path, 'has been added');
    })
    .on('addDir', function(path) {
          console.log('Directory', path, 'has been added');
    })
    .on('change', function(path) {
         console.log('File', path, 'has been changed');
         refresh(view)
    })
    .on('unlink', function(path) {
         console.log('File', path, 'has been removed');
    })
    .on('unlinkDir', function(path) {
         console.log('Directory', path, 'has been removed');
    })
    .on('error', function(error) {
         console.log('Error happened', error);
    })
    .on('ready', onWatcherReady)
    .on('raw', function(event, path, details) {
         // This event should be triggered everytime something happens.
         console.log('Raw event info:', event, path, details);
    });
}

function createWindow (win, view1, view2) {

    win.addBrowserView(view1)
    win.addBrowserView(view2)
    //win.maximize();
    //win.setResizable(false);

    let [width, height] = win.getSize();
    console.log(`width: ${width}, height: ${height}`);
    var hafwidth = 914;
    var leftover = width - hafwidth;

    view1.setBounds({ x: 0, y: 0, width: hafwidth, height: height })
    view1.setAutoResize({width:true, height:true})
    view2.setBounds({ x: hafwidth, y: 0, width: leftover, height: height })
    view2.setAutoResize({width:true, height:true})

    win.show();
}

app.whenReady().then(() => {

    const win = new BrowserWindow({
        show: false,
        width: 1824,
        height: 984,
        fullscreen: true, //disable on windows
        backgroundColor: '#223b61',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    const view1 = new BrowserView()
    const view2 = new BrowserView()

    createWindow(win, view1, view2)

    view1.webContents.loadURL(`file://${__dirname}/index.html`)
    view2.webContents.loadURL('https://app.dataminr.com/app/dashboard.html')

    var screendir = __dirname + "/screenshots"

    StartWatcher(screendir, view1)
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})