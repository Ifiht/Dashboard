const Pageres = require('pageres');

(async () => {
    await new Pageres({delay: 2})
        .src('https://en.wikipedia.org/wiki/Main_Page',
         ['1490x1024'], {crop: true, filename: 'otd_note-latest',
         selector: "#mp-right"})
        .dest(__dirname + "/screenshots")
        .run();

    console.log('Finished generating screenshots!');
})();