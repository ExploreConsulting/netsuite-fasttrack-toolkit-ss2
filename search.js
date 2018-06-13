define(["require", "exports", "./lodash"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Rudimentary conversion of a NS search result to a simple flat plain javascript object. Suitable as an argument to _.map()
     * @param {Result} result a single netsuite search result to transform into a POJO
     */
    function nsSearchResult2obj(result) {
        var output = { id: result.id };
        // assigns each column VALUE from the search result to the output object, and if the column
        // has a truthy text value includes that as a propnameText field similar to how nsdal does
        _.reduce(result.columns, function (acc, x) {
            acc[x.name] = result.getValue(x);
            var text = result.getText(x);
            if (text)
                acc[x.name + "Text"] = text;
            return acc;
        }, output);
        return output;
    }
    exports.nsSearchResult2obj = nsSearchResult2obj;
});
