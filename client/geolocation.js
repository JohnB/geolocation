Geolocation = function() {
    if (Geolocation.prototype.instance) {
        return Geolocation.prototype.instance;
    }
    Geolocation.prototype.instance = this;

    this._allowed = false;
    this._lat = "unknownLat";
    this._lon = "unknownLon";
    this._dep = new Deps.Dependency;
};

Geolocation.getInstance = function() {
    var geoInstance = new Geolocation();
    return geoInstance;
};

Geolocation.prototype._track = function() {
    var self = this;
    if (!navigator.geolocation) {
        self.error = "Geolocation is not supported by this browser";
        return self;
    }

    var ifWeCanConnect = function () {
        navigator.geolocation.watchPosition(function (pos) {
            self._lat = pos.coords.latitude;
            self._lon = pos.coords.longitude;
            self._allowed = true;
            console.log(self._lat);
            console.log(self._lon);
            self._dep.changed();
        });
    };
    var ifWeFail = function () {
        console.log('failed to get location')
    };
    navigator.geolocation.getCurrentPosition(ifWeCanConnect, ifWeFail);
};

UI.registerHelper("geoLocationTrackingAllowed", function () {
    Geolocation.getInstance()._dep.depend();
    return Geolocation.getInstance()._allowed;
});

UI.registerHelper("geoLocationTrackingLatitude", function () {
    Geolocation.getInstance()._dep.depend();
    return Geolocation.getInstance()._lat;
});

UI.registerHelper("geoLocationTrackingLongitude", function () {
    var loc = Geolocation.getInstance();
    loc._dep.depend();
    return loc._lon;
});

UI.body.events({
    'click .geolocationtrackingpermissiongranted': function() {
        Geolocation.getInstance()._track();
    }
});
