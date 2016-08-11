# Futures
Features to be implemented:

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
