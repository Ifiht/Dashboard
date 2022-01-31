const Pageres = require('pageres');

(async () => {
    await new Pageres({delay: 2})
        .src('https://en.wikipedia.org/wiki/Main_Page',
         ['1590x980'], {crop: true, filename: 'otd_note-latest', hide: ['#mp-left'],
         selector: "#mp-right"})
        .dest(__dirname + "/screenshots")
        .run();

    console.log('Finished generating screenshots!');
})();