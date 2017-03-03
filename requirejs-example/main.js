define(['jquery', 'mylib'], function($, mylib) {
    // $ is jquery as usual
    // mylib is the string `mylib` because that's the return value
    // from the first module
 
    return {
        version: '0.0.1, jQuery version: ' + $.fn.jquery,
        mylibString: mylib
    }
});