const Pageres = require('pageres');

(async () => {
    await new Pageres({delay: 2})
        .src('https://www.msn.com/en-us/weather/forecast/in-Cupertino,CA?ocid=msedgntp&loc=eyJsIjoiQ3VwZXJ0aW5vIiwiciI6IkNBIiwicjIiOiJTYW50YSBDbGFyYSBDb3VudHkiLCJjIjoiVW5pdGVkIFN0YXRlcyIsImkiOiJVUyIsInQiOjEwMiwiZyI6ImVuLXVzIiwieCI6Ii0xMjIuMDI5IiwieSI6IjM3LjMxOTMifQ%3D%3D&weadegreetype=C',
         ['1488x940'], {crop: true, filename: 'weekly_wx-latest', hide: ['.oneFooter-DS-EntryPoint1-1', 'footer', '.root-container', '.feedback_link_icon-DS-EntryPoint1-1'], selector: ".weatherOverview_root-DS-EntryPoint1-2"})
        .dest(__dirname + "/screenshots")
        .run();

    console.log('Finished generating screenshots!');
})();