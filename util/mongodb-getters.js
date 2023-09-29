const date = require("date-and-time");
const ordinal_plugin = require("date-and-time/plugin/ordinal");

// This plugin allows the functionality of using ordinal numbers for the day.
// "DDD" in the date.format specifies formatting the day as an ordinal number.
// See: https://github.com/knowledgecode/date-and-time/blob/HEAD/PLUGINS.md#ordinal
date.plugin(ordinal_plugin);

module.exports = {

    beautifyDate(value) {
        return date.format(value, "DDD of MMMM, YYYY at HH:mm:ss");
    },

}