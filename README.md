<h2>GeolocationTracking - Meteor Smart Package</h2>

A package that provides geolocation tracking for meteor.
<h3>Installation</h3>
Just use your meteorite and type:

`mrt add GeolocationTracking`

<h3>Usage</h3>

To get the user's permission to track them:

```html
  {{> geolocationTrackingPermission}}
```

To access latitude and longitude use:

```html
  {{#if geoLocationTrackingAllowed}}
    <ul>
      <li>Latitude: {{geoLocationTrackingLatitude}}</li>
      <li>Longitude: {{geoLocationTrackingLongitude}}</li>
    </ul>
  {{/if}}
```

!Remember not all browsers supports geolocation!

<h3>License</h3>

GeolocationTracking is licensed under the MIT license.
