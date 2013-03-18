var convert = {};


// exponential notation
convert.E = function (exponent) {
    return Math.pow(10, exponent);
};


// timespans (years-based)
convert.years = function (years) {
    return years;
};
convert.days = function (days) {
    return convert.years( days / 365.25 );
};
convert.hours = function (hours) {
    return convert.days( hours / 24 );
};
convert.minutes = function (minutes) {
    return convert.hours( minutes / 60 );
};
convert.seconds = function (seconds) {
    return convert.minutes( seconds / 60 );
};


// chemistry conversions
convert.moles = function (moles) {
    return (moles * 6.02214179 * Math.pow(10, 23));
};


modules.exports = convert;