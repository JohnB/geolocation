Package.describe({
    summary: "A package that provides tracks your geolocation"
});

Package.on_use(function(api, where) {
    api.use('standard-app-packages', 'client');
    api.add_files(['client/geolocation.js', 'geolocation.html'], 'client');
//    api.add_files(['geolocation.js'], 'client');

    if (api.export) {
        api.export('Geolocation', 'client');
    }
});
