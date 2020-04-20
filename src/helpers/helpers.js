module.exports = {
 //jQuery(window).on('resize', debounce(calculateLayout, 150));
     debounce: (func, wait, immediate) => {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
  }
}