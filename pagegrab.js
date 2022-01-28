const Pageres = require('pageres');

(async () => {
    await new Pageres({delay: 2})
        .src('https://www.msn.com/en-us/weather/forecast/in-Cupertino,CA?ocid=msedgntp&loc=eyJsIjoiQ3VwZXJ0aW5vIiwiciI6IkNBIiwicjIiOiJTYW50YSBDbGFyYSBDb3VudHkiLCJjIjoiVW5pdGVkIFN0YXRlcyIsImkiOiJVUyIsInQiOjEwMiwiZyI6ImVuLXVzIiwieCI6Ii0xMjIuMDI5IiwieSI6IjM3LjMxOTMifQ%3D%3D&weadegreetype=C',
         ['800x640'], {crop: true, filename: 'curent_wx-<%= date %><%= time %>', selector: ".backgroundContainerCompact-DS-EntryPoint1-1"})
         .src('https://www.msn.com/en-us/weather/forecast/in-Cupertino,CA?ocid=msedgntp&loc=eyJsIjoiQ3VwZXJ0aW5vIiwiciI6IkNBIiwicjIiOiJTYW50YSBDbGFyYSBDb3VudHkiLCJjIjoiVW5pdGVkIFN0YXRlcyIsImkiOiJVUyIsInQiOjEwMiwiZyI6ImVuLXVzIiwieCI6Ii0xMjIuMDI5IiwieSI6IjM3LjMxOTMifQ%3D%3D&weadegreetype=C',
         ['1920x1024'], {crop: true, filename: 'weekly_wx-<%= date %><%= time %>', hide: ['.oneFooter-DS-EntryPoint1-1'], selector: ".weatherOverview_root-DS-EntryPoint1-2"})
        .src('https://en.wikipedia.org/wiki/Main_Page',
         ['1490x1024'], {crop: true, filename: 'otd_note-<%= date %><%= time %>',
         selector: "#mp-right"})
        .dest(__dirname + "/screenshots")
        .run();

    console.log('Finished generating screenshots!');
})();