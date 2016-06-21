# JSOps

Client-side key-value store that provides functionality to store and retrieve JSON objects from the URL params/hash and the `window.*Storage` in a volatile or persistent way. Can be used for storing configuration/option values.

## Get/Set URL Params
### Query
The query-part of a URL (the part after the `?`) is a part that your client normally should not care about. But there are situations where you want to get&set params in the query-part of an URL.
Sometimes you want the query-params to resemble the current state of your script so in case of a reload or share the state of these params is preserved.

For example you have a navigation-sidepane that is hidden by default, but it can be made visible with a click and it is currently visible, you may want to add the state of this option in the URL:

    http://foo.bar?sidepane=true

### Hash
Since the hash-part of an URL is (usually) not processed by the server but the client it can be (mis-)used to carry configuration options that are read by your script on `page:load` and reacted to accordingly.

For example a mute option for a page that plays some sound can be included in a link:

    http://foo.bar#sound=false


## Window Storage
JSON may also be stored in the `Window.sessionStorage`&`Window.localStorage`. These objects already provide functionality to get/set JSON.

**TODO** reconsider this part!


## Cascading Option Values
Options can be configured in a way that allow specific order of option value levels.
In a case where options are stored in the `Window.localStorage` but can also be set via Hash Params you may want to specify the option from which source overrides the other one. Also default options may be used in this scenario.

For example you may set a order like:

    Default options < localStorage options < Hash Params options

This cascade can be augmented with automatic option updates. Example:  
When initially the script is loaded and the option values from the Hash Params have the highest significance, the underlying options in the `localStorage` should be updated according to the Hash Params' values. When the site is visited again (without providing the HashParams) they will be restored from the `localStorage`.
