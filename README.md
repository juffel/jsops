# JSOps

Client-side key-value store that provides functionality to store and retrieve values from the URL params/hash and the `window.*Storage` in a volatile or persistent way. Can be used for storing configuration/option values.

## Usage
Simply include the file `js/jsops.js` somewhere in your project.

### Get/Set URL Params
#### Query
The query-part of a URL (the part after the `?`) is a part that your client normally should not care about. But there are situations where you want to get&set params in the query-part of an URL.
Sometimes you want the query-params to resemble the current state of your script so in case of a reload or share the state of these params is preserved.

For example you have a navigation-sidepane that is hidden by default, but it can be made visible with a click and it is currently visible, you may want to add the state of this option in the URL:

    http://foo.bar?sidepane=true

Use the `url` submodule to modify query parameters in the `window.location.search` variable:

    jsops.url.query.set("blonkers", "schwonkers"); // "http://foo.bar?sidepane=true&blonkers=schwonkers"
    jsops.url.query.set("sidepane", undefined); // "http://foo.bar?blonkers=schwonkers"
    jsops.url.query.get("blonkers"); // "schwonkers"

#### Hash
Since the hash-part of an URL is (usually) not processed by the server but the client it can be (mis-)used to carry configuration options that are read by your script on `page:load` and reacted to accordingly.

For example a mute option for a page that plays some sound can be included in a link:

    http://foo.bar#sound=false

Use the `url` submodule to modify query parameters in the `window.location.search` variable:

    jsops.url.hash.set("blonkers", "schwonkers"); // "http://foo.bar#sidepane=true&blonkers=schwonkers"
    jsops.url.hash.set("sidepane", undefined); // "http://foo.bar#blonkers=schwonkers"
    jsops.url.hash.get("blonkers"); // "schwonkers"

