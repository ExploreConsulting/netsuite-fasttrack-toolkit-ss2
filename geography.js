/**
 * Static mappings (arrays) for easily working with geographic countries and states defined in NetSuite.
 *
 * @example

 ```typescript

 getStateById(3) // returns { 'country': 'US','fullname': 'Arkansas','id': 3,'shortname': 'AR' }
 getStateById(-123) // returns undefined
 getStateByShortName('CA') //  returns 4
 stateMapping.filter( state => state.country === 'US') // array of states in USA
 getCountryById('US') // {'uniquekey': 230,'name': 'United States', 'edition': 'US','id': 'US' }
 ```

 @module
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCountryByUniqueKey = exports.getCountryById = exports.countryMapping = exports.getStateByShortName = exports.getStateById = exports.stateMapping = void 0;
    /**
     * Represents geographic states used in NetSuite. First one is blank to allow easy binding to a UI dropdown
     * The list was generated via SuiteQL `select * from state`
     */
    exports.stateMapping = [{ shortname: '', fullname: '', country: '', id: 0 },
        {
            'country': 'US',
            'fullname': 'Alabama',
            'id': 0,
            'shortname': 'AL'
        },
        {
            'country': 'US',
            'fullname': 'Alaska',
            'id': 1,
            'shortname': 'AK'
        },
        {
            'country': 'US',
            'fullname': 'Arizona',
            'id': 2,
            'shortname': 'AZ'
        },
        {
            'country': 'US',
            'fullname': 'Arkansas',
            'id': 3,
            'shortname': 'AR'
        },
        {
            'country': 'US',
            'fullname': 'California',
            'id': 4,
            'shortname': 'CA'
        },
        {
            'country': 'US',
            'fullname': 'Colorado',
            'id': 5,
            'shortname': 'CO'
        },
        {
            'country': 'US',
            'fullname': 'Connecticut',
            'id': 6,
            'shortname': 'CT'
        },
        {
            'country': 'US',
            'fullname': 'Delaware',
            'id': 7,
            'shortname': 'DE'
        },
        {
            'country': 'US',
            'fullname': 'District of Columbia',
            'id': 8,
            'shortname': 'DC'
        },
        {
            'country': 'US',
            'fullname': 'Florida',
            'id': 9,
            'shortname': 'FL'
        },
        {
            'country': 'US',
            'fullname': 'Georgia',
            'id': 10,
            'shortname': 'GA'
        },
        {
            'country': 'US',
            'fullname': 'Hawaii',
            'id': 11,
            'shortname': 'HI'
        },
        {
            'country': 'US',
            'fullname': 'Idaho',
            'id': 12,
            'shortname': 'ID'
        },
        {
            'country': 'US',
            'fullname': 'Illinois',
            'id': 13,
            'shortname': 'IL'
        },
        {
            'country': 'US',
            'fullname': 'Indiana',
            'id': 14,
            'shortname': 'IN'
        },
        {
            'country': 'US',
            'fullname': 'Iowa',
            'id': 15,
            'shortname': 'IA'
        },
        {
            'country': 'US',
            'fullname': 'Kansas',
            'id': 16,
            'shortname': 'KS'
        },
        {
            'country': 'US',
            'fullname': 'Kentucky',
            'id': 17,
            'shortname': 'KY'
        },
        {
            'country': 'US',
            'fullname': 'Louisiana',
            'id': 18,
            'shortname': 'LA'
        },
        {
            'country': 'US',
            'fullname': 'Maine',
            'id': 19,
            'shortname': 'ME'
        },
        {
            'country': 'US',
            'fullname': 'Maryland',
            'id': 20,
            'shortname': 'MD'
        },
        {
            'country': 'US',
            'fullname': 'Massachusetts',
            'id': 21,
            'shortname': 'MA'
        },
        {
            'country': 'US',
            'fullname': 'Michigan',
            'id': 22,
            'shortname': 'MI'
        },
        {
            'country': 'US',
            'fullname': 'Minnesota',
            'id': 23,
            'shortname': 'MN'
        },
        {
            'country': 'US',
            'fullname': 'Mississippi',
            'id': 24,
            'shortname': 'MS'
        },
        {
            'country': 'US',
            'fullname': 'Missouri',
            'id': 25,
            'shortname': 'MO'
        },
        {
            'country': 'US',
            'fullname': 'Montana',
            'id': 26,
            'shortname': 'MT'
        },
        {
            'country': 'US',
            'fullname': 'Nebraska',
            'id': 27,
            'shortname': 'NE'
        },
        {
            'country': 'US',
            'fullname': 'Nevada',
            'id': 28,
            'shortname': 'NV'
        },
        {
            'country': 'US',
            'fullname': 'New Hampshire',
            'id': 29,
            'shortname': 'NH'
        },
        {
            'country': 'US',
            'fullname': 'New Jersey',
            'id': 30,
            'shortname': 'NJ'
        },
        {
            'country': 'US',
            'fullname': 'New Mexico',
            'id': 31,
            'shortname': 'NM'
        },
        {
            'country': 'US',
            'fullname': 'New York',
            'id': 32,
            'shortname': 'NY'
        },
        {
            'country': 'US',
            'fullname': 'North Carolina',
            'id': 33,
            'shortname': 'NC'
        },
        {
            'country': 'US',
            'fullname': 'North Dakota',
            'id': 34,
            'shortname': 'ND'
        },
        {
            'country': 'US',
            'fullname': 'Ohio',
            'id': 35,
            'shortname': 'OH'
        },
        {
            'country': 'US',
            'fullname': 'Oklahoma',
            'id': 36,
            'shortname': 'OK'
        },
        {
            'country': 'US',
            'fullname': 'Oregon',
            'id': 37,
            'shortname': 'OR'
        },
        {
            'country': 'US',
            'fullname': 'Pennsylvania',
            'id': 38,
            'shortname': 'PA'
        },
        {
            'country': 'US',
            'fullname': 'Puerto Rico',
            'id': 39,
            'shortname': 'PR'
        },
        {
            'country': 'US',
            'fullname': 'Rhode Island',
            'id': 40,
            'shortname': 'RI'
        },
        {
            'country': 'US',
            'fullname': 'South Carolina',
            'id': 41,
            'shortname': 'SC'
        },
        {
            'country': 'US',
            'fullname': 'South Dakota',
            'id': 42,
            'shortname': 'SD'
        },
        {
            'country': 'US',
            'fullname': 'Tennessee',
            'id': 43,
            'shortname': 'TN'
        },
        {
            'country': 'US',
            'fullname': 'Texas',
            'id': 44,
            'shortname': 'TX'
        },
        {
            'country': 'US',
            'fullname': 'Utah',
            'id': 45,
            'shortname': 'UT'
        },
        {
            'country': 'US',
            'fullname': 'Vermont',
            'id': 46,
            'shortname': 'VT'
        },
        {
            'country': 'US',
            'fullname': 'Virginia',
            'id': 47,
            'shortname': 'VA'
        },
        {
            'country': 'US',
            'fullname': 'Washington',
            'id': 48,
            'shortname': 'WA'
        },
        {
            'country': 'US',
            'fullname': 'West Virginia',
            'id': 49,
            'shortname': 'WV'
        },
        {
            'country': 'US',
            'fullname': 'Wisconsin',
            'id': 50,
            'shortname': 'WI'
        },
        {
            'country': 'US',
            'fullname': 'Wyoming',
            'id': 51,
            'shortname': 'WY'
        },
        {
            'country': 'US',
            'fullname': 'Armed Forces Europe',
            'id': 52,
            'shortname': 'AE'
        },
        {
            'country': 'US',
            'fullname': 'Armed Forces Americas',
            'id': 53,
            'shortname': 'AA'
        },
        {
            'country': 'US',
            'fullname': 'Armed Forces Pacific',
            'id': 54,
            'shortname': 'AP'
        },
        {
            'country': 'CA',
            'fullname': 'Alberta',
            'id': 101,
            'shortname': 'AB'
        },
        {
            'country': 'CA',
            'fullname': 'British Columbia',
            'id': 102,
            'shortname': 'BC'
        },
        {
            'country': 'CA',
            'fullname': 'Manitoba',
            'id': 103,
            'shortname': 'MB'
        },
        {
            'country': 'CA',
            'fullname': 'New Brunswick',
            'id': 104,
            'shortname': 'NB'
        },
        {
            'country': 'CA',
            'fullname': 'Newfoundland',
            'id': 105,
            'shortname': 'NL'
        },
        {
            'country': 'CA',
            'fullname': 'Nova Scotia',
            'id': 106,
            'shortname': 'NS'
        },
        {
            'country': 'CA',
            'fullname': 'Northwest Territories',
            'id': 107,
            'shortname': 'NT'
        },
        {
            'country': 'CA',
            'fullname': 'Nunavut',
            'id': 108,
            'shortname': 'NU'
        },
        {
            'country': 'CA',
            'fullname': 'Ontario',
            'id': 109,
            'shortname': 'ON'
        },
        {
            'country': 'CA',
            'fullname': 'Prince Edward Island',
            'id': 110,
            'shortname': 'PE'
        },
        {
            'country': 'CA',
            'fullname': 'Quebec',
            'id': 111,
            'shortname': 'QC'
        },
        {
            'country': 'CA',
            'fullname': 'Saskatchewan',
            'id': 112,
            'shortname': 'SK'
        },
        {
            'country': 'CA',
            'fullname': 'Yukon',
            'id': 113,
            'shortname': 'YT'
        },
        {
            'country': 'GB',
            'fullname': 'Aberdeenshire',
            'id': 201,
            'shortname': 'Aberdeenshire'
        },
        {
            'country': 'GB',
            'fullname': 'Angus',
            'id': 202,
            'shortname': 'Angus'
        },
        {
            'country': 'GB',
            'fullname': 'Argyll',
            'id': 203,
            'shortname': 'Argyll'
        },
        {
            'country': 'GB',
            'fullname': 'Avon',
            'id': 204,
            'shortname': 'Avon'
        },
        {
            'country': 'GB',
            'fullname': 'Ayrshire',
            'id': 205,
            'shortname': 'Ayrshire'
        },
        {
            'country': 'GB',
            'fullname': 'Banffshire',
            'id': 206,
            'shortname': 'Banffshire'
        },
        {
            'country': 'GB',
            'fullname': 'Bedfordshire',
            'id': 207,
            'shortname': 'Beds.'
        },
        {
            'country': 'GB',
            'fullname': 'Berkshire',
            'id': 208,
            'shortname': 'Berks.'
        },
        {
            'country': 'GB',
            'fullname': 'Berwickshire',
            'id': 209,
            'shortname': 'Berwickshire'
        },
        {
            'country': 'GB',
            'fullname': 'Buckinghamshire',
            'id': 210,
            'shortname': 'Bucks.'
        },
        {
            'country': 'GB',
            'fullname': 'Caithness',
            'id': 211,
            'shortname': 'Caithness'
        },
        {
            'country': 'GB',
            'fullname': 'Cambridgeshire',
            'id': 212,
            'shortname': 'Cambs.'
        },
        {
            'country': 'GB',
            'fullname': 'Cheshire',
            'id': 213,
            'shortname': 'Ches.'
        },
        {
            'country': 'GB',
            'fullname': 'Clackmannanshire',
            'id': 214,
            'shortname': 'Clackmannanshire'
        },
        {
            'country': 'GB',
            'fullname': 'Cleveland',
            'id': 215,
            'shortname': 'Cleveland'
        },
        {
            'country': 'GB',
            'fullname': 'Clwyd',
            'id': 216,
            'shortname': 'Clwyd'
        },
        {
            'country': 'GB',
            'fullname': 'Cornwall',
            'id': 217,
            'shortname': 'Cornwall'
        },
        {
            'country': 'GB',
            'fullname': 'County Antrim',
            'id': 218,
            'shortname': 'Co Antrim'
        },
        {
            'country': 'GB',
            'fullname': 'County Armagh',
            'id': 219,
            'shortname': 'Co Armagh'
        },
        {
            'country': 'GB',
            'fullname': 'County Down',
            'id': 220,
            'shortname': 'Co Down'
        },
        {
            'country': 'GB',
            'fullname': 'County Fermanagh',
            'id': 221,
            'shortname': 'Co Fermanagh'
        },
        {
            'country': 'GB',
            'fullname': 'County Londonderry',
            'id': 222,
            'shortname': 'Co Londonderry'
        },
        {
            'country': 'GB',
            'fullname': 'County Tyrone',
            'id': 223,
            'shortname': 'Co Tyrone'
        },
        {
            'country': 'GB',
            'fullname': 'Cumbria',
            'id': 225,
            'shortname': 'Cumbria'
        },
        {
            'country': 'GB',
            'fullname': 'Derbyshire',
            'id': 226,
            'shortname': 'Derbys.'
        },
        {
            'country': 'GB',
            'fullname': 'Devon',
            'id': 227,
            'shortname': 'Devon'
        },
        {
            'country': 'GB',
            'fullname': 'Dorset',
            'id': 228,
            'shortname': 'Dorset'
        },
        {
            'country': 'GB',
            'fullname': 'Dumfriesshire',
            'id': 229,
            'shortname': 'Dumfriesshire'
        },
        {
            'country': 'GB',
            'fullname': 'Dunbartonshire',
            'id': 230,
            'shortname': 'Dunbartonshire'
        },
        {
            'country': 'GB',
            'fullname': 'County Durham',
            'id': 231,
            'shortname': 'Durham'
        },
        {
            'country': 'GB',
            'fullname': 'Dyfed',
            'id': 232,
            'shortname': 'Dyfed'
        },
        {
            'country': 'GB',
            'fullname': 'East Sussex',
            'id': 233,
            'shortname': 'E Sussex'
        },
        {
            'country': 'GB',
            'fullname': 'East Lothian',
            'id': 234,
            'shortname': 'E Lothian'
        },
        {
            'country': 'GB',
            'fullname': 'Essex',
            'id': 235,
            'shortname': 'Essex'
        },
        {
            'country': 'GB',
            'fullname': 'Fife',
            'id': 236,
            'shortname': 'Fife'
        },
        {
            'country': 'GB',
            'fullname': 'Gloucestershire',
            'id': 237,
            'shortname': 'Gloucs.'
        },
        {
            'country': 'AU',
            'fullname': 'Australian Capital Territory',
            'id': 400,
            'shortname': 'ACT'
        },
        {
            'country': 'AU',
            'fullname': 'New South Wales',
            'id': 401,
            'shortname': 'NSW'
        },
        {
            'country': 'AU',
            'fullname': 'Northern Territory',
            'id': 402,
            'shortname': 'NT'
        },
        {
            'country': 'AU',
            'fullname': 'Queensland',
            'id': 403,
            'shortname': 'QLD'
        },
        {
            'country': 'AU',
            'fullname': 'South Australia',
            'id': 404,
            'shortname': 'SA'
        },
        {
            'country': 'AU',
            'fullname': 'Tasmania',
            'id': 405,
            'shortname': 'TAS'
        },
        {
            'country': 'AU',
            'fullname': 'Victoria',
            'id': 406,
            'shortname': 'VIC'
        },
        {
            'country': 'AU',
            'fullname': 'Western Australia',
            'id': 407,
            'shortname': 'WA'
        },
        {
            'country': 'MX',
            'fullname': 'Aguascalientes',
            'id': 500,
            'shortname': 'AGS'
        },
        {
            'country': 'MX',
            'fullname': 'Baja California Norte (obsolete)',
            'id': 501,
            'shortname': 'BCN'
        },
        {
            'country': 'MX',
            'fullname': 'Baja California Sur',
            'id': 502,
            'shortname': 'BCS'
        },
        {
            'country': 'MX',
            'fullname': 'Campeche',
            'id': 503,
            'shortname': 'CAM'
        },
        {
            'country': 'MX',
            'fullname': 'Chiapas',
            'id': 504,
            'shortname': 'CHIS'
        },
        {
            'country': 'MX',
            'fullname': 'Chihuahua',
            'id': 505,
            'shortname': 'CHIH'
        },
        {
            'country': 'MX',
            'fullname': 'Coahuila',
            'id': 506,
            'shortname': 'COAH'
        },
        {
            'country': 'MX',
            'fullname': 'Colima',
            'id': 507,
            'shortname': 'COL'
        },
        {
            'country': 'MX',
            'fullname': 'Distrito Federal (obsolete)',
            'id': 508,
            'shortname': 'DF'
        },
        {
            'country': 'MX',
            'fullname': 'Durango',
            'id': 509,
            'shortname': 'DGO'
        },
        {
            'country': 'MX',
            'fullname': 'Guanajuato',
            'id': 510,
            'shortname': 'GTO'
        },
        {
            'country': 'MX',
            'fullname': 'Guerrero',
            'id': 511,
            'shortname': 'GRO'
        },
        {
            'country': 'MX',
            'fullname': 'Hidalgo',
            'id': 512,
            'shortname': 'HGO'
        },
        {
            'country': 'MX',
            'fullname': 'Jalisco',
            'id': 513,
            'shortname': 'JAL'
        },
        {
            'country': 'MX',
            'fullname': 'México (Estado de)',
            'id': 514,
            'shortname': 'MEX'
        },
        {
            'country': 'MX',
            'fullname': 'Michoacán',
            'id': 515,
            'shortname': 'MICH'
        },
        {
            'country': 'MX',
            'fullname': 'Morelos',
            'id': 516,
            'shortname': 'MOR'
        },
        {
            'country': 'MX',
            'fullname': 'Nayarit',
            'id': 517,
            'shortname': 'NAY'
        },
        {
            'country': 'MX',
            'fullname': 'Nuevo León',
            'id': 518,
            'shortname': 'NL'
        },
        {
            'country': 'MX',
            'fullname': 'Oaxaca',
            'id': 519,
            'shortname': 'OAX'
        },
        {
            'country': 'MX',
            'fullname': 'Puebla',
            'id': 520,
            'shortname': 'PUE'
        },
        {
            'country': 'MX',
            'fullname': 'Querétaro',
            'id': 521,
            'shortname': 'QRO'
        },
        {
            'country': 'MX',
            'fullname': 'Quintana Roo',
            'id': 522,
            'shortname': 'QROO'
        },
        {
            'country': 'GB',
            'fullname': 'Greater London',
            'id': 238,
            'shortname': 'London'
        },
        {
            'country': 'GB',
            'fullname': 'Gwent',
            'id': 239,
            'shortname': 'Gwent'
        },
        {
            'country': 'GB',
            'fullname': 'Gwynedd',
            'id': 240,
            'shortname': 'Gwynedd'
        },
        {
            'country': 'GB',
            'fullname': 'Hampshire',
            'id': 241,
            'shortname': 'Hants.'
        },
        {
            'country': 'GB',
            'fullname': 'Herefordshire',
            'id': 242,
            'shortname': 'Hereford'
        },
        {
            'country': 'GB',
            'fullname': 'Hertfordshire',
            'id': 243,
            'shortname': 'Herts.'
        },
        {
            'country': 'GB',
            'fullname': 'Inverness-shire',
            'id': 245,
            'shortname': 'Inverness-shire'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Arran',
            'id': 246,
            'shortname': 'Isle of Arran'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Barra',
            'id': 247,
            'shortname': 'Isle of Barra'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Benbecula',
            'id': 248,
            'shortname': 'Isle of Benbecula'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Bute',
            'id': 249,
            'shortname': 'Isle of Bute'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Canna',
            'id': 250,
            'shortname': 'Isle of Canna'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Coll',
            'id': 251,
            'shortname': 'Isle of Coll'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Colonsay',
            'id': 252,
            'shortname': 'Isle of Colonsay'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Cumbrae',
            'id': 253,
            'shortname': 'Isle of Cumbrae'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Eigg',
            'id': 254,
            'shortname': 'Isle of Eigg'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Gigha',
            'id': 255,
            'shortname': 'Isle of Gigha'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Harris',
            'id': 256,
            'shortname': 'Isle of Harris'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Islay',
            'id': 257,
            'shortname': 'Isle of Islay'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Iona',
            'id': 258,
            'shortname': 'Isle of Iona'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Jura',
            'id': 259,
            'shortname': 'Isle of Jura'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Lewis',
            'id': 260,
            'shortname': 'Isle of Lewis'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Mull',
            'id': 261,
            'shortname': 'Isle of Mull'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of North Uist',
            'id': 262,
            'shortname': 'Isle of North Uist'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Rum',
            'id': 263,
            'shortname': 'Isle of Rum'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Scalpay',
            'id': 264,
            'shortname': 'Isle of Scalpay'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Skye',
            'id': 265,
            'shortname': 'Isle of Skye'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of South Uist',
            'id': 266,
            'shortname': 'Isle of South Uist'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Tiree',
            'id': 267,
            'shortname': 'Isle of Tiree'
        },
        {
            'country': 'GB',
            'fullname': 'Isle of Wight',
            'id': 268,
            'shortname': 'Isle of Wight'
        },
        {
            'country': 'GB',
            'fullname': 'Kent',
            'id': 269,
            'shortname': 'Kent'
        },
        {
            'country': 'GB',
            'fullname': 'Kincardineshire',
            'id': 270,
            'shortname': 'Kincardineshire'
        },
        {
            'country': 'GB',
            'fullname': 'Kinross-shire',
            'id': 271,
            'shortname': 'Kinross-shire'
        },
        {
            'country': 'GB',
            'fullname': 'Kirkcudbrightshire',
            'id': 272,
            'shortname': 'Kirkcudbrightshire'
        },
        {
            'country': 'GB',
            'fullname': 'Lanarkshire',
            'id': 273,
            'shortname': 'Lanarkshire'
        },
        {
            'country': 'GB',
            'fullname': 'Lancashire',
            'id': 274,
            'shortname': 'Lancs.'
        },
        {
            'country': 'GB',
            'fullname': 'Leicestershire',
            'id': 275,
            'shortname': 'Leics.'
        },
        {
            'country': 'GB',
            'fullname': 'Lincolnshire',
            'id': 276,
            'shortname': 'Lincs.'
        },
        {
            'country': 'GB',
            'fullname': 'Merseyside',
            'id': 277,
            'shortname': 'Merseyside'
        },
        {
            'country': 'GB',
            'fullname': 'Mid Glamorgan',
            'id': 278,
            'shortname': 'M Glam'
        },
        {
            'country': 'GB',
            'fullname': 'Mid Lothian',
            'id': 279,
            'shortname': 'Mid Lothian'
        },
        {
            'country': 'GB',
            'fullname': 'Middlesex',
            'id': 280,
            'shortname': 'Middx.'
        },
        {
            'country': 'GB',
            'fullname': 'Morayshire',
            'id': 281,
            'shortname': 'Morayshire'
        },
        {
            'country': 'GB',
            'fullname': 'Nairnshire',
            'id': 282,
            'shortname': 'Nairnshire'
        },
        {
            'country': 'GB',
            'fullname': 'Norfolk',
            'id': 283,
            'shortname': 'Norfolk'
        },
        {
            'country': 'GB',
            'fullname': 'North Humberside',
            'id': 284,
            'shortname': 'N Humberside'
        },
        {
            'country': 'GB',
            'fullname': 'North Yorkshire',
            'id': 285,
            'shortname': 'N Yorkshire'
        },
        {
            'country': 'GB',
            'fullname': 'Northamptonshire',
            'id': 286,
            'shortname': 'Northants.'
        },
        {
            'country': 'GB',
            'fullname': 'Northumberland',
            'id': 287,
            'shortname': 'Northumberland'
        },
        {
            'country': 'GB',
            'fullname': 'Nottinghamshire',
            'id': 288,
            'shortname': 'Notts.'
        },
        {
            'country': 'GB',
            'fullname': 'Oxfordshire',
            'id': 289,
            'shortname': 'Oxon.'
        },
        {
            'country': 'GB',
            'fullname': 'Peeblesshire',
            'id': 290,
            'shortname': 'Peeblesshire'
        },
        {
            'country': 'GB',
            'fullname': 'Perthshire',
            'id': 291,
            'shortname': 'Perthshire'
        },
        {
            'country': 'GB',
            'fullname': 'Powys',
            'id': 292,
            'shortname': 'Powys'
        },
        {
            'country': 'GB',
            'fullname': 'Renfrewshire',
            'id': 293,
            'shortname': 'Renfrewshire'
        },
        {
            'country': 'GB',
            'fullname': 'Ross-shire',
            'id': 294,
            'shortname': 'Ross-shire'
        },
        {
            'country': 'GB',
            'fullname': 'Roxburghshire',
            'id': 295,
            'shortname': 'Roxburghshire'
        },
        {
            'country': 'GB',
            'fullname': 'Shropshire',
            'id': 297,
            'shortname': 'Shrops'
        },
        {
            'country': 'GB',
            'fullname': 'Selkirkshire',
            'id': 298,
            'shortname': 'Selkirkshire'
        },
        {
            'country': 'GB',
            'fullname': 'Somerset',
            'id': 299,
            'shortname': 'Somt.'
        },
        {
            'country': 'GB',
            'fullname': 'South Glamorgan',
            'id': 300,
            'shortname': 'S Glam'
        },
        {
            'country': 'GB',
            'fullname': 'South Humberside',
            'id': 301,
            'shortname': 'S Humberside'
        },
        {
            'country': 'GB',
            'fullname': 'South Yorkshire',
            'id': 302,
            'shortname': 'S Yorkshire'
        },
        {
            'country': 'GB',
            'fullname': 'Staffordshire',
            'id': 303,
            'shortname': 'Staffs.'
        },
        {
            'country': 'GB',
            'fullname': 'Stirlingshire',
            'id': 304,
            'shortname': 'Stirlingshire'
        },
        {
            'country': 'GB',
            'fullname': 'Suffolk',
            'id': 305,
            'shortname': 'Suffolk'
        },
        {
            'country': 'GB',
            'fullname': 'Surrey',
            'id': 306,
            'shortname': 'Surrey'
        },
        {
            'country': 'GB',
            'fullname': 'Sutherland',
            'id': 307,
            'shortname': 'Sutherland'
        },
        {
            'country': 'GB',
            'fullname': 'Tyne and Wear',
            'id': 308,
            'shortname': 'Tyne & Wear'
        },
        {
            'country': 'GB',
            'fullname': 'Warwickshire',
            'id': 309,
            'shortname': 'Warks'
        },
        {
            'country': 'GB',
            'fullname': 'West Glamorgan',
            'id': 310,
            'shortname': 'W Glam'
        },
        {
            'country': 'GB',
            'fullname': 'West Lothian',
            'id': 311,
            'shortname': 'W Lothian'
        },
        {
            'country': 'GB',
            'fullname': 'West Midlands',
            'id': 312,
            'shortname': 'W Midlands'
        },
        {
            'country': 'GB',
            'fullname': 'West Sussex',
            'id': 313,
            'shortname': 'W Sussex'
        },
        {
            'country': 'GB',
            'fullname': 'West Yorkshire',
            'id': 314,
            'shortname': 'W Yorkshire'
        },
        {
            'country': 'GB',
            'fullname': 'Wigtownshire',
            'id': 315,
            'shortname': 'Wigtownshire'
        },
        {
            'country': 'GB',
            'fullname': 'Wiltshire',
            'id': 316,
            'shortname': 'Wilts'
        },
        {
            'country': 'GB',
            'fullname': 'Worcestershire',
            'id': 317,
            'shortname': 'Worcs'
        },
        {
            'country': 'MX',
            'fullname': 'Baja California',
            'id': 532,
            'shortname': 'BC'
        },
        {
            'country': 'MX',
            'fullname': 'Mexico City',
            'id': 533,
            'shortname': 'CDMX'
        },
        {
            'country': 'MX',
            'fullname': 'San Luis Potosí',
            'id': 523,
            'shortname': 'SLP'
        },
        {
            'country': 'MX',
            'fullname': 'Sinaloa',
            'id': 524,
            'shortname': 'SIN'
        },
        {
            'country': 'MX',
            'fullname': 'Sonora',
            'id': 525,
            'shortname': 'SON'
        },
        {
            'country': 'MX',
            'fullname': 'Tabasco',
            'id': 526,
            'shortname': 'TAB'
        },
        {
            'country': 'MX',
            'fullname': 'Tamaulipas',
            'id': 527,
            'shortname': 'TAMPS'
        },
        {
            'country': 'MX',
            'fullname': 'Tlaxcala',
            'id': 528,
            'shortname': 'TLAX'
        },
        {
            'country': 'MX',
            'fullname': 'Veracruz',
            'id': 529,
            'shortname': 'VER'
        },
        {
            'country': 'MX',
            'fullname': 'Yucatán',
            'id': 530,
            'shortname': 'YUC'
        },
        {
            'country': 'MX',
            'fullname': 'Zacatecas',
            'id': 531,
            'shortname': 'ZAC'
        },
        {
            'country': 'CN',
            'fullname': 'Heilongjiang Province',
            'id': 601,
            'shortname': '黑龙江省'
        },
        {
            'country': 'CN',
            'fullname': 'Jilin Province',
            'id': 602,
            'shortname': '吉林省'
        },
        {
            'country': 'CN',
            'fullname': 'Liaoning Province',
            'id': 603,
            'shortname': '辽宁省'
        },
        {
            'country': 'CN',
            'fullname': 'Neimenggu A. R.',
            'id': 604,
            'shortname': '内蒙古'
        },
        {
            'country': 'CN',
            'fullname': 'Gansu Province',
            'id': 605,
            'shortname': '甘肃省'
        },
        {
            'country': 'CN',
            'fullname': 'Ningxia A. R.',
            'id': 606,
            'shortname': '宁夏回族自治区'
        },
        {
            'country': 'CN',
            'fullname': 'Xinjiang A. R.',
            'id': 607,
            'shortname': '新疆维吾尔族自治区'
        },
        {
            'country': 'CN',
            'fullname': 'Qinghai Province',
            'id': 608,
            'shortname': '青海省'
        },
        {
            'country': 'CN',
            'fullname': 'Hebei Province',
            'id': 609,
            'shortname': '河北省'
        },
        {
            'country': 'CN',
            'fullname': 'Henan Province',
            'id': 610,
            'shortname': '河南省'
        },
        {
            'country': 'CN',
            'fullname': 'Shandong Province',
            'id': 611,
            'shortname': '山东省'
        },
        {
            'country': 'CN',
            'fullname': 'Shanxi Province',
            'id': 612,
            'shortname': '山西省'
        },
        {
            'country': 'CN',
            'fullname': 'Shaanxi Province',
            'id': 613,
            'shortname': '陕西省'
        },
        {
            'country': 'CN',
            'fullname': 'Jiangsu Province',
            'id': 614,
            'shortname': '江苏省'
        },
        {
            'country': 'CN',
            'fullname': 'Zhejiang Province',
            'id': 615,
            'shortname': '浙江省'
        },
        {
            'country': 'CN',
            'fullname': 'Anhui Province',
            'id': 616,
            'shortname': '安徽省'
        },
        {
            'country': 'CN',
            'fullname': 'Hubei Province',
            'id': 617,
            'shortname': '湖北省'
        },
        {
            'country': 'CN',
            'fullname': 'Hunan Province',
            'id': 618,
            'shortname': '湖南省'
        },
        {
            'country': 'CN',
            'fullname': 'Sichuan Province',
            'id': 619,
            'shortname': '四川省'
        },
        {
            'country': 'CN',
            'fullname': 'Guizhou Province',
            'id': 620,
            'shortname': '贵州省'
        },
        {
            'country': 'CN',
            'fullname': 'Jiangxi Province',
            'id': 621,
            'shortname': '江西省'
        },
        {
            'country': 'CN',
            'fullname': 'Guangdong Province',
            'id': 622,
            'shortname': '广东省'
        },
        {
            'country': 'CN',
            'fullname': 'Guangxi A. R.',
            'id': 623,
            'shortname': '广西壮族自治区'
        },
        {
            'country': 'CN',
            'fullname': 'Yunnan Province',
            'id': 624,
            'shortname': '云南省'
        },
        {
            'country': 'CN',
            'fullname': 'Hainan Province',
            'id': 625,
            'shortname': '海南省'
        },
        {
            'country': 'CN',
            'fullname': 'Xizang A. R.',
            'id': 626,
            'shortname': '西藏藏族自治区'
        },
        {
            'country': 'CN',
            'fullname': 'Beijing',
            'id': 627,
            'shortname': '北京市'
        },
        {
            'country': 'CN',
            'fullname': 'Shanghai',
            'id': 628,
            'shortname': '上海市'
        },
        {
            'country': 'CN',
            'fullname': 'Tianjin',
            'id': 629,
            'shortname': '天津市'
        },
        {
            'country': 'CN',
            'fullname': 'Chongqing',
            'id': 630,
            'shortname': '重庆市'
        },
        {
            'country': 'JP',
            'fullname': 'Hokkaidō',
            'id': 700,
            'shortname': '北海道'
        },
        {
            'country': 'JP',
            'fullname': 'Aomori',
            'id': 701,
            'shortname': '青森県'
        },
        {
            'country': 'JP',
            'fullname': 'Iwate',
            'id': 702,
            'shortname': '岩手県'
        },
        {
            'country': 'JP',
            'fullname': 'Miyagi',
            'id': 703,
            'shortname': '宮城県'
        },
        {
            'country': 'JP',
            'fullname': 'Akita',
            'id': 704,
            'shortname': '秋田県'
        },
        {
            'country': 'JP',
            'fullname': 'Yamagata',
            'id': 705,
            'shortname': '山形県'
        },
        {
            'country': 'JP',
            'fullname': 'Fukushima',
            'id': 706,
            'shortname': '福島県'
        },
        {
            'country': 'JP',
            'fullname': 'Ibaraki',
            'id': 707,
            'shortname': '茨城県'
        },
        {
            'country': 'JP',
            'fullname': 'Tochigi',
            'id': 708,
            'shortname': '栃木県'
        },
        {
            'country': 'JP',
            'fullname': 'Gunma',
            'id': 709,
            'shortname': '群馬県'
        },
        {
            'country': 'JP',
            'fullname': 'Saitama',
            'id': 710,
            'shortname': '埼玉県'
        },
        {
            'country': 'JP',
            'fullname': 'Chiba',
            'id': 711,
            'shortname': '千葉県'
        },
        {
            'country': 'JP',
            'fullname': 'Tokyo',
            'id': 712,
            'shortname': '東京都'
        },
        {
            'country': 'JP',
            'fullname': 'Kanagawa',
            'id': 713,
            'shortname': '神奈川県'
        },
        {
            'country': 'JP',
            'fullname': 'Niigata',
            'id': 714,
            'shortname': '新潟県'
        },
        {
            'country': 'JP',
            'fullname': 'Toyama',
            'id': 715,
            'shortname': '富山県'
        },
        {
            'country': 'JP',
            'fullname': 'Ishikawa',
            'id': 716,
            'shortname': '石川県'
        },
        {
            'country': 'JP',
            'fullname': 'Fukui',
            'id': 717,
            'shortname': '福井県'
        },
        {
            'country': 'JP',
            'fullname': 'Yamanashi',
            'id': 718,
            'shortname': '山梨県'
        },
        {
            'country': 'JP',
            'fullname': 'Nagano',
            'id': 719,
            'shortname': '長野県'
        },
        {
            'country': 'JP',
            'fullname': 'Gifu',
            'id': 720,
            'shortname': '岐阜県'
        },
        {
            'country': 'JP',
            'fullname': 'Shizuoka',
            'id': 721,
            'shortname': '静岡県'
        },
        {
            'country': 'JP',
            'fullname': 'Aichi',
            'id': 722,
            'shortname': '愛知県'
        },
        {
            'country': 'JP',
            'fullname': 'Mie',
            'id': 723,
            'shortname': '三重県'
        },
        {
            'country': 'JP',
            'fullname': 'Shiga',
            'id': 724,
            'shortname': '滋賀県'
        },
        {
            'country': 'JP',
            'fullname': 'Kyoto',
            'id': 725,
            'shortname': '京都府'
        },
        {
            'country': 'JP',
            'fullname': 'Osaka',
            'id': 726,
            'shortname': '大阪府'
        },
        {
            'country': 'JP',
            'fullname': 'Hyōgo',
            'id': 727,
            'shortname': '兵庫県'
        },
        {
            'country': 'JP',
            'fullname': 'Nara',
            'id': 728,
            'shortname': '奈良県'
        },
        {
            'country': 'JP',
            'fullname': 'Wakayama',
            'id': 729,
            'shortname': '和歌山県'
        },
        {
            'country': 'JP',
            'fullname': 'Tottori',
            'id': 730,
            'shortname': '鳥取県'
        },
        {
            'country': 'JP',
            'fullname': 'Shimane',
            'id': 731,
            'shortname': '島根県'
        },
        {
            'country': 'JP',
            'fullname': 'Okayama',
            'id': 732,
            'shortname': '岡山県'
        },
        {
            'country': 'JP',
            'fullname': 'Hiroshima',
            'id': 733,
            'shortname': '広島県'
        },
        {
            'country': 'JP',
            'fullname': 'Yamaguchi',
            'id': 734,
            'shortname': '山口県'
        },
        {
            'country': 'JP',
            'fullname': 'Tokushima',
            'id': 735,
            'shortname': '徳島県'
        },
        {
            'country': 'JP',
            'fullname': 'Kagawa',
            'id': 736,
            'shortname': '香川県'
        },
        {
            'country': 'JP',
            'fullname': 'Ehime',
            'id': 737,
            'shortname': '愛媛県'
        },
        {
            'country': 'JP',
            'fullname': 'Kochi',
            'id': 738,
            'shortname': '高知県'
        },
        {
            'country': 'JP',
            'fullname': 'Fukuoka',
            'id': 739,
            'shortname': '福岡県'
        },
        {
            'country': 'JP',
            'fullname': 'Saga',
            'id': 740,
            'shortname': '佐賀県'
        },
        {
            'country': 'JP',
            'fullname': 'Nagasaki',
            'id': 741,
            'shortname': '長崎県'
        },
        {
            'country': 'JP',
            'fullname': 'Kumamoto',
            'id': 742,
            'shortname': '熊本県'
        },
        {
            'country': 'JP',
            'fullname': 'Ōita',
            'id': 743,
            'shortname': '大分県'
        },
        {
            'country': 'JP',
            'fullname': 'Miyazaki',
            'id': 744,
            'shortname': '宮崎県'
        },
        {
            'country': 'JP',
            'fullname': 'Kagoshima',
            'id': 745,
            'shortname': '鹿児島県'
        },
        {
            'country': 'JP',
            'fullname': 'Okinawa',
            'id': 746,
            'shortname': '沖縄県'
        },
        {
            'country': 'CN',
            'fullname': 'Fujian Province',
            'id': 631,
            'shortname': '福建省'
        }
    ];
    /**
     * Retrieves the state object for the given internal id else undefined
     * @param id internal id of the state you wish to find.
     */
    const getStateById = (id) => {
        const s = exports.stateMapping.filter(x => x.id === id);
        if (s.length)
            return s[0];
        else
            return undefined;
    };
    exports.getStateById = getStateById;
    /**
     * Retrieves the state object for the given State short name (e.g., 'CA') else undefined
     * @example const stateIID = getStateByShortName('CA').id  //  The internal ID (iid) of the California State record
     * @param code The two character state short name
     */
    const getStateByShortName = (code) => {
        const s = exports.stateMapping.filter(x => x.shortname === code);
        if (s.length)
            return s[0];
        else
            return undefined;
    };
    exports.getStateByShortName = getStateByShortName;
    /**
     * Mappings of country abbreviation, name and NetSuite internal id.
     * This list was generated via SuiteQL `select uniquekey, name, edition, id from country`
     */
    exports.countryMapping = [
        {
            'uniquekey': 0,
            'name': '',
            'edition': '',
            'id': ''
        },
        {
            'uniquekey': 3,
            'name': 'Afghanistan',
            'edition': 'XX',
            'id': 'AF'
        },
        {
            'uniquekey': 62,
            'name': 'Algeria',
            'edition': 'XX',
            'id': 'DZ'
        },
        {
            'uniquekey': 11,
            'name': 'Argentina',
            'edition': 'XX',
            'id': 'AR'
        },
        {
            'uniquekey': 14,
            'name': 'Australia',
            'edition': 'AU',
            'id': 'AU'
        },
        {
            'uniquekey': 23,
            'name': 'Bahrain',
            'edition': 'XX',
            'id': 'BH'
        },
        {
            'uniquekey': 36,
            'name': 'Belize',
            'edition': 'XX',
            'id': 'BZ'
        },
        {
            'uniquekey': 17,
            'name': 'Bosnia and Herzegovina',
            'edition': 'XX',
            'id': 'BA'
        },
        {
            'uniquekey': 22,
            'name': 'Bulgaria',
            'edition': 'XX',
            'id': 'BG'
        },
        {
            'uniquekey': 40,
            'name': 'Central African Republic',
            'edition': 'XX',
            'id': 'CF'
        },
        {
            'uniquekey': 54,
            'name': 'Christmas Island',
            'edition': 'XX',
            'id': 'CX'
        },
        {
            'uniquekey': 41,
            'name': 'Congo, Republic of',
            'edition': 'XX',
            'id': 'CG'
        },
        {
            'uniquekey': 251,
            'name': 'Curaçao',
            'edition': 'XX',
            'id': 'CW'
        },
        {
            'uniquekey': 221,
            'name': 'East Timor',
            'edition': 'XX',
            'id': 'TL'
        },
        {
            'uniquekey': 64,
            'name': 'Estonia',
            'edition': 'XX',
            'id': 'EE'
        },
        {
            'uniquekey': 75,
            'name': 'France',
            'edition': 'XX',
            'id': 'FR'
        },
        {
            'uniquekey': 239,
            'name': 'Vanuatu',
            'edition': 'XX',
            'id': 'VU'
        },
        {
            'uniquekey': 235,
            'name': 'Venezuela',
            'edition': 'XX',
            'id': 'VE'
        },
        {
            'uniquekey': 238,
            'name': 'Vietnam',
            'edition': 'XX',
            'id': 'VN'
        },
        {
            'uniquekey': 245,
            'name': 'Zambia',
            'edition': 'XX',
            'id': 'ZM'
        },
        {
            'uniquekey': 77,
            'name': 'United Kingdom',
            'edition': 'UK',
            'id': 'GB'
        },
        {
            'uniquekey': 37,
            'name': 'Canada',
            'edition': 'CA',
            'id': 'CA'
        },
        {
            'uniquekey': 230,
            'name': 'United States',
            'edition': 'US',
            'id': 'US'
        },
        {
            'uniquekey': 114,
            'name': 'Japan',
            'edition': 'JP',
            'id': 'JP'
        },
        {
            'uniquekey': 247,
            'name': 'Aland Islands',
            'edition': 'XX',
            'id': 'AX'
        },
        {
            'uniquekey': 6,
            'name': 'Albania',
            'edition': 'XX',
            'id': 'AL'
        },
        {
            'uniquekey': 12,
            'name': 'American Samoa',
            'edition': 'XX',
            'id': 'AS'
        },
        {
            'uniquekey': 1,
            'name': 'Andorra',
            'edition': 'XX',
            'id': 'AD'
        },
        {
            'uniquekey': 9,
            'name': 'Angola',
            'edition': 'XX',
            'id': 'AO'
        },
        {
            'uniquekey': 5,
            'name': 'Anguilla',
            'edition': 'XX',
            'id': 'AI'
        },
        {
            'uniquekey': 10,
            'name': 'Antarctica',
            'edition': 'XX',
            'id': 'AQ'
        },
        {
            'uniquekey': 4,
            'name': 'Antigua and Barbuda',
            'edition': 'XX',
            'id': 'AG'
        },
        {
            'uniquekey': 7,
            'name': 'Armenia',
            'edition': 'XX',
            'id': 'AM'
        },
        {
            'uniquekey': 15,
            'name': 'Aruba',
            'edition': 'XX',
            'id': 'AW'
        },
        {
            'uniquekey': 13,
            'name': 'Austria',
            'edition': 'XX',
            'id': 'AT'
        },
        {
            'uniquekey': 80,
            'name': 'French Guiana',
            'edition': 'XX',
            'id': 'GF'
        },
        {
            'uniquekey': 175,
            'name': 'French Polynesia',
            'edition': 'XX',
            'id': 'PF'
        },
        {
            'uniquekey': 85,
            'name': 'Gambia',
            'edition': 'XX',
            'id': 'GM'
        },
        {
            'uniquekey': 89,
            'name': 'Greece',
            'edition': 'XX',
            'id': 'GR'
        },
        {
            'uniquekey': 81,
            'name': 'Guernsey',
            'edition': 'XX',
            'id': 'GG'
        },
        {
            'uniquekey': 97,
            'name': 'Honduras',
            'edition': 'XX',
            'id': 'HN'
        },
        {
            'uniquekey': 107,
            'name': 'Iraq',
            'edition': 'XX',
            'id': 'IQ'
        },
        {
            'uniquekey': 113,
            'name': 'Jordan',
            'edition': 'XX',
            'id': 'JO'
        },
        {
            'uniquekey': 123,
            'name': 'Kuwait',
            'edition': 'XX',
            'id': 'KW'
        },
        {
            'uniquekey': 136,
            'name': 'Libya',
            'edition': 'XX',
            'id': 'LY'
        },
        {
            'uniquekey': 156,
            'name': 'Malawi',
            'edition': 'XX',
            'id': 'MW'
        },
        {
            'uniquekey': 151,
            'name': 'Mauritania',
            'edition': 'XX',
            'id': 'MR'
        },
        {
            'uniquekey': 147,
            'name': 'Mongolia',
            'edition': 'XX',
            'id': 'MN'
        },
        {
            'uniquekey': 169,
            'name': 'Nauru',
            'edition': 'XX',
            'id': 'NR'
        },
        {
            'uniquekey': 161,
            'name': 'New Caledonia',
            'edition': 'XX',
            'id': 'NC'
        },
        {
            'uniquekey': 171,
            'name': 'New Zealand',
            'edition': 'XX',
            'id': 'NZ'
        },
        {
            'uniquekey': 165,
            'name': 'Nicaragua',
            'edition': 'XX',
            'id': 'NI'
        },
        {
            'uniquekey': 162,
            'name': 'Niger',
            'edition': 'XX',
            'id': 'NE'
        },
        {
            'uniquekey': 167,
            'name': 'Norway',
            'edition': 'XX',
            'id': 'NO'
        },
        {
            'uniquekey': 174,
            'name': 'Peru',
            'edition': 'XX',
            'id': 'PE'
        },
        {
            'uniquekey': 188,
            'name': 'Reunion Island',
            'edition': 'XX',
            'id': 'RE'
        },
        {
            'uniquekey': 128,
            'name': 'Saint Lucia',
            'edition': 'XX',
            'id': 'LC'
        },
        {
            'uniquekey': 207,
            'name': 'Sao Tome and Principe',
            'edition': 'XX',
            'id': 'ST'
        },
        {
            'uniquekey': 197,
            'name': 'Singapore',
            'edition': 'XX',
            'id': 'SG'
        },
        {
            'uniquekey': 90,
            'name': 'South Georgia',
            'edition': 'XX',
            'id': 'GS'
        },
        {
            'uniquekey': 195,
            'name': 'Sudan',
            'edition': 'XX',
            'id': 'SD'
        },
        {
            'uniquekey': 209,
            'name': 'Syrian Arab Republic',
            'edition': 'XX',
            'id': 'SY'
        },
        {
            'uniquekey': 223,
            'name': 'Trinidad and Tobago',
            'edition': 'XX',
            'id': 'TT'
        },
        {
            'uniquekey': 228,
            'name': 'Uganda',
            'edition': 'XX',
            'id': 'UG'
        },
        {
            'uniquekey': 47,
            'name': 'China',
            'edition': 'XX',
            'id': 'CN'
        },
        {
            'uniquekey': 38,
            'name': 'Cocos (Keeling) Islands',
            'edition': 'XX',
            'id': 'CC'
        },
        {
            'uniquekey': 48,
            'name': 'Colombia',
            'edition': 'XX',
            'id': 'CO'
        },
        {
            'uniquekey': 119,
            'name': 'Comoros',
            'edition': 'XX',
            'id': 'KM'
        },
        {
            'uniquekey': 39,
            'name': 'Congo, Democratic Republic of',
            'edition': 'XX',
            'id': 'CD'
        },
        {
            'uniquekey': 44,
            'name': 'Cook Islands',
            'edition': 'XX',
            'id': 'CK'
        },
        {
            'uniquekey': 49,
            'name': 'Costa Rica',
            'edition': 'XX',
            'id': 'CR'
        },
        {
            'uniquekey': 43,
            'name': 'Cote d\'Ivoire',
            'edition': 'XX',
            'id': 'CI'
        },
        {
            'uniquekey': 98,
            'name': 'Croatia/Hrvatska',
            'edition': 'XX',
            'id': 'HR'
        },
        {
            'uniquekey': 52,
            'name': 'Cuba',
            'edition': 'XX',
            'id': 'CU'
        },
        {
            'uniquekey': 55,
            'name': 'Cyprus',
            'edition': 'XX',
            'id': 'CY'
        },
        {
            'uniquekey': 56,
            'name': 'Czech Republic',
            'edition': 'XX',
            'id': 'CZ'
        },
        {
            'uniquekey': 59,
            'name': 'Denmark',
            'edition': 'XX',
            'id': 'DK'
        },
        {
            'uniquekey': 58,
            'name': 'Djibouti',
            'edition': 'XX',
            'id': 'DJ'
        },
        {
            'uniquekey': 105,
            'name': 'India',
            'edition': 'XX',
            'id': 'IN'
        },
        {
            'uniquekey': 101,
            'name': 'Indonesia',
            'edition': 'XX',
            'id': 'ID'
        },
        {
            'uniquekey': 108,
            'name': 'Iran (Islamic Republic of)',
            'edition': 'XX',
            'id': 'IR'
        },
        {
            'uniquekey': 102,
            'name': 'Ireland',
            'edition': 'XX',
            'id': 'IE'
        },
        {
            'uniquekey': 104,
            'name': 'Isle of Man',
            'edition': 'XX',
            'id': 'IM'
        },
        {
            'uniquekey': 103,
            'name': 'Israel',
            'edition': 'XX',
            'id': 'IL'
        },
        {
            'uniquekey': 110,
            'name': 'Italy',
            'edition': 'XX',
            'id': 'IT'
        },
        {
            'uniquekey': 112,
            'name': 'Jamaica',
            'edition': 'XX',
            'id': 'JM'
        },
        {
            'uniquekey': 111,
            'name': 'Jersey',
            'edition': 'XX',
            'id': 'JE'
        },
        {
            'uniquekey': 125,
            'name': 'Kazakhstan',
            'edition': 'XX',
            'id': 'KZ'
        },
        {
            'uniquekey': 115,
            'name': 'Kenya',
            'edition': 'XX',
            'id': 'KE'
        },
        {
            'uniquekey': 118,
            'name': 'Kiribati',
            'edition': 'XX',
            'id': 'KI'
        },
        {
            'uniquekey': 121,
            'name': 'Korea, Democratic People\'s Republic',
            'edition': 'XX',
            'id': 'KP'
        },
        {
            'uniquekey': 122,
            'name': 'Korea, Republic of',
            'edition': 'XX',
            'id': 'KR'
        },
        {
            'uniquekey': 116,
            'name': 'Kyrgyzstan',
            'edition': 'XX',
            'id': 'KG'
        },
        {
            'uniquekey': 126,
            'name': 'Lao People\'s Democratic Republic',
            'edition': 'XX',
            'id': 'LA'
        },
        {
            'uniquekey': 135,
            'name': 'Latvia',
            'edition': 'XX',
            'id': 'LV'
        },
        {
            'uniquekey': 127,
            'name': 'Lebanon',
            'edition': 'XX',
            'id': 'LB'
        },
        {
            'uniquekey': 132,
            'name': 'Lesotho',
            'edition': 'XX',
            'id': 'LS'
        },
        {
            'uniquekey': 131,
            'name': 'Liberia',
            'edition': 'XX',
            'id': 'LR'
        },
        {
            'uniquekey': 129,
            'name': 'Liechtenstein',
            'edition': 'XX',
            'id': 'LI'
        },
        {
            'uniquekey': 133,
            'name': 'Lithuania',
            'edition': 'XX',
            'id': 'LT'
        },
        {
            'uniquekey': 134,
            'name': 'Luxembourg',
            'edition': 'XX',
            'id': 'LU'
        },
        {
            'uniquekey': 148,
            'name': 'Macau',
            'edition': 'XX',
            'id': 'MO'
        },
        {
            'uniquekey': 144,
            'name': 'Macedonia',
            'edition': 'XX',
            'id': 'MK'
        },
        {
            'uniquekey': 142,
            'name': 'Madagascar',
            'edition': 'XX',
            'id': 'MG'
        },
        {
            'uniquekey': 60,
            'name': 'Dominica',
            'edition': 'XX',
            'id': 'DM'
        },
        {
            'uniquekey': 61,
            'name': 'Dominican Republic',
            'edition': 'XX',
            'id': 'DO'
        },
        {
            'uniquekey': 63,
            'name': 'Ecuador',
            'edition': 'XX',
            'id': 'EC'
        },
        {
            'uniquekey': 65,
            'name': 'Egypt',
            'edition': 'XX',
            'id': 'EG'
        },
        {
            'uniquekey': 208,
            'name': 'El Salvador',
            'edition': 'XX',
            'id': 'SV'
        },
        {
            'uniquekey': 88,
            'name': 'Equatorial Guinea',
            'edition': 'XX',
            'id': 'GQ'
        },
        {
            'uniquekey': 67,
            'name': 'Eritrea',
            'edition': 'XX',
            'id': 'ER'
        },
        {
            'uniquekey': 69,
            'name': 'Ethiopia',
            'edition': 'XX',
            'id': 'ET'
        },
        {
            'uniquekey': 72,
            'name': 'Falkland Islands',
            'edition': 'XX',
            'id': 'FK'
        },
        {
            'uniquekey': 74,
            'name': 'Faroe Islands',
            'edition': 'XX',
            'id': 'FO'
        },
        {
            'uniquekey': 71,
            'name': 'Fiji',
            'edition': 'XX',
            'id': 'FJ'
        },
        {
            'uniquekey': 70,
            'name': 'Finland',
            'edition': 'XX',
            'id': 'FI'
        },
        {
            'uniquekey': 236,
            'name': 'Virgin Islands (British)',
            'edition': 'XX',
            'id': 'VG'
        },
        {
            'uniquekey': 237,
            'name': 'Virgin Islands (USA)',
            'edition': 'XX',
            'id': 'VI'
        },
        {
            'uniquekey': 240,
            'name': 'Wallis and Futuna',
            'edition': 'XX',
            'id': 'WF'
        },
        {
            'uniquekey': 66,
            'name': 'Western Sahara',
            'edition': 'XX',
            'id': 'EH'
        },
        {
            'uniquekey': 242,
            'name': 'Yemen',
            'edition': 'XX',
            'id': 'YE'
        },
        {
            'uniquekey': 246,
            'name': 'Zimbabwe',
            'edition': 'XX',
            'id': 'ZW'
        },
        {
            'uniquekey': 254,
            'name': 'Kosovo',
            'edition': 'XX',
            'id': 'XK'
        },
        {
            'uniquekey': 213,
            'name': 'French Southern Territories',
            'edition': 'XX',
            'id': 'TF'
        },
        {
            'uniquekey': 76,
            'name': 'Gabon',
            'edition': 'XX',
            'id': 'GA'
        },
        {
            'uniquekey': 79,
            'name': 'Georgia',
            'edition': 'XX',
            'id': 'GE'
        },
        {
            'uniquekey': 57,
            'name': 'Germany',
            'edition': 'XX',
            'id': 'DE'
        },
        {
            'uniquekey': 82,
            'name': 'Ghana',
            'edition': 'XX',
            'id': 'GH'
        },
        {
            'uniquekey': 83,
            'name': 'Gibraltar',
            'edition': 'UK',
            'id': 'GI'
        },
        {
            'uniquekey': 84,
            'name': 'Greenland',
            'edition': 'XX',
            'id': 'GL'
        },
        {
            'uniquekey': 78,
            'name': 'Grenada',
            'edition': 'XX',
            'id': 'GD'
        },
        {
            'uniquekey': 87,
            'name': 'Guadeloupe',
            'edition': 'XX',
            'id': 'GP'
        },
        {
            'uniquekey': 92,
            'name': 'Guam',
            'edition': 'XX',
            'id': 'GU'
        },
        {
            'uniquekey': 91,
            'name': 'Guatemala',
            'edition': 'XX',
            'id': 'GT'
        },
        {
            'uniquekey': 93,
            'name': 'Guinea-Bissau',
            'edition': 'XX',
            'id': 'GW'
        },
        {
            'uniquekey': 86,
            'name': 'Guinea',
            'edition': 'XX',
            'id': 'GN'
        },
        {
            'uniquekey': 94,
            'name': 'Guyana',
            'edition': 'XX',
            'id': 'GY'
        },
        {
            'uniquekey': 99,
            'name': 'Haiti',
            'edition': 'XX',
            'id': 'HT'
        },
        {
            'uniquekey': 96,
            'name': 'Heard and McDonald Islands',
            'edition': 'XX',
            'id': 'HM'
        },
        {
            'uniquekey': 233,
            'name': 'Holy See (City Vatican State)',
            'edition': 'XX',
            'id': 'VA'
        },
        {
            'uniquekey': 95,
            'name': 'Hong Kong',
            'edition': 'XX',
            'id': 'HK'
        },
        {
            'uniquekey': 100,
            'name': 'Hungary',
            'edition': 'XX',
            'id': 'HU'
        },
        {
            'uniquekey': 109,
            'name': 'Iceland',
            'edition': 'XX',
            'id': 'IS'
        },
        {
            'uniquekey': 16,
            'name': 'Azerbaijan',
            'edition': 'XX',
            'id': 'AZ'
        },
        {
            'uniquekey': 31,
            'name': 'Bahamas',
            'edition': 'XX',
            'id': 'BS'
        },
        {
            'uniquekey': 19,
            'name': 'Bangladesh',
            'edition': 'XX',
            'id': 'BD'
        },
        {
            'uniquekey': 18,
            'name': 'Barbados',
            'edition': 'XX',
            'id': 'BB'
        },
        {
            'uniquekey': 35,
            'name': 'Belarus',
            'edition': 'XX',
            'id': 'BY'
        },
        {
            'uniquekey': 20,
            'name': 'Belgium',
            'edition': 'XX',
            'id': 'BE'
        },
        {
            'uniquekey': 25,
            'name': 'Benin',
            'edition': 'XX',
            'id': 'BJ'
        },
        {
            'uniquekey': 27,
            'name': 'Bermuda',
            'edition': 'XX',
            'id': 'BM'
        },
        {
            'uniquekey': 32,
            'name': 'Bhutan',
            'edition': 'XX',
            'id': 'BT'
        },
        {
            'uniquekey': 29,
            'name': 'Bolivia',
            'edition': 'XX',
            'id': 'BO'
        },
        {
            'uniquekey': 250,
            'name': 'Bonaire, Saint Eustatius and Saba',
            'edition': 'XX',
            'id': 'BQ'
        },
        {
            'uniquekey': 34,
            'name': 'Botswana',
            'edition': 'XX',
            'id': 'BW'
        },
        {
            'uniquekey': 33,
            'name': 'Bouvet Island',
            'edition': 'XX',
            'id': 'BV'
        },
        {
            'uniquekey': 30,
            'name': 'Brazil',
            'edition': 'XX',
            'id': 'BR'
        },
        {
            'uniquekey': 106,
            'name': 'British Indian Ocean Territory',
            'edition': 'UK',
            'id': 'IO'
        },
        {
            'uniquekey': 28,
            'name': 'Brunei Darussalam',
            'edition': 'XX',
            'id': 'BN'
        },
        {
            'uniquekey': 21,
            'name': 'Burkina Faso',
            'edition': 'XX',
            'id': 'BF'
        },
        {
            'uniquekey': 24,
            'name': 'Burundi',
            'edition': 'XX',
            'id': 'BI'
        },
        {
            'uniquekey': 117,
            'name': 'Cambodia',
            'edition': 'XX',
            'id': 'KH'
        },
        {
            'uniquekey': 46,
            'name': 'Cameroon',
            'edition': 'XX',
            'id': 'CM'
        },
        {
            'uniquekey': 249,
            'name': 'Canary Islands',
            'edition': 'XX',
            'id': 'IC'
        },
        {
            'uniquekey': 53,
            'name': 'Cape Verde',
            'edition': 'XX',
            'id': 'CV'
        },
        {
            'uniquekey': 124,
            'name': 'Cayman Islands',
            'edition': 'XX',
            'id': 'KY'
        },
        {
            'uniquekey': 248,
            'name': 'Ceuta and Melilla',
            'edition': 'XX',
            'id': 'EA'
        },
        {
            'uniquekey': 212,
            'name': 'Chad',
            'edition': 'XX',
            'id': 'TD'
        },
        {
            'uniquekey': 45,
            'name': 'Chile',
            'edition': 'XX',
            'id': 'CL'
        },
        {
            'uniquekey': 210,
            'name': 'Swaziland',
            'edition': 'XX',
            'id': 'SZ'
        },
        {
            'uniquekey': 196,
            'name': 'Sweden',
            'edition': 'XX',
            'id': 'SE'
        },
        {
            'uniquekey': 42,
            'name': 'Switzerland',
            'edition': 'XX',
            'id': 'CH'
        },
        {
            'uniquekey': 225,
            'name': 'Taiwan',
            'edition': 'XX',
            'id': 'TW'
        },
        {
            'uniquekey': 216,
            'name': 'Tajikistan',
            'edition': 'XX',
            'id': 'TJ'
        },
        {
            'uniquekey': 226,
            'name': 'Tanzania',
            'edition': 'XX',
            'id': 'TZ'
        },
        {
            'uniquekey': 215,
            'name': 'Thailand',
            'edition': 'XX',
            'id': 'TH'
        },
        {
            'uniquekey': 214,
            'name': 'Togo',
            'edition': 'XX',
            'id': 'TG'
        },
        {
            'uniquekey': 217,
            'name': 'Tokelau',
            'edition': 'XX',
            'id': 'TK'
        },
        {
            'uniquekey': 220,
            'name': 'Tonga',
            'edition': 'XX',
            'id': 'TO'
        },
        {
            'uniquekey': 219,
            'name': 'Tunisia',
            'edition': 'XX',
            'id': 'TN'
        },
        {
            'uniquekey': 222,
            'name': 'Turkey',
            'edition': 'XX',
            'id': 'TR'
        },
        {
            'uniquekey': 218,
            'name': 'Turkmenistan',
            'edition': 'XX',
            'id': 'TM'
        },
        {
            'uniquekey': 211,
            'name': 'Turks and Caicos Islands',
            'edition': 'XX',
            'id': 'TC'
        },
        {
            'uniquekey': 224,
            'name': 'Tuvalu',
            'edition': 'XX',
            'id': 'TV'
        },
        {
            'uniquekey': 227,
            'name': 'Ukraine',
            'edition': 'XX',
            'id': 'UA'
        },
        {
            'uniquekey': 2,
            'name': 'United Arab Emirates',
            'edition': 'XX',
            'id': 'AE'
        },
        {
            'uniquekey': 231,
            'name': 'Uruguay',
            'edition': 'XX',
            'id': 'UY'
        },
        {
            'uniquekey': 229,
            'name': 'US Minor Outlying Islands',
            'edition': 'XX',
            'id': 'UM'
        },
        {
            'uniquekey': 232,
            'name': 'Uzbekistan',
            'edition': 'XX',
            'id': 'UZ'
        },
        {
            'uniquekey': 158,
            'name': 'Malaysia',
            'edition': 'XX',
            'id': 'MY'
        },
        {
            'uniquekey': 155,
            'name': 'Maldives',
            'edition': 'XX',
            'id': 'MV'
        },
        {
            'uniquekey': 145,
            'name': 'Mali',
            'edition': 'XX',
            'id': 'ML'
        },
        {
            'uniquekey': 153,
            'name': 'Malta',
            'edition': 'XX',
            'id': 'MT'
        },
        {
            'uniquekey': 143,
            'name': 'Marshall Islands',
            'edition': 'XX',
            'id': 'MH'
        },
        {
            'uniquekey': 150,
            'name': 'Martinique',
            'edition': 'XX',
            'id': 'MQ'
        },
        {
            'uniquekey': 154,
            'name': 'Mauritius',
            'edition': 'XX',
            'id': 'MU'
        },
        {
            'uniquekey': 243,
            'name': 'Mayotte',
            'edition': 'XX',
            'id': 'YT'
        },
        {
            'uniquekey': 157,
            'name': 'Mexico',
            'edition': 'XX',
            'id': 'MX'
        },
        {
            'uniquekey': 73,
            'name': 'Micronesia, Federal State of',
            'edition': 'XX',
            'id': 'FM'
        },
        {
            'uniquekey': 139,
            'name': 'Moldova, Republic of',
            'edition': 'XX',
            'id': 'MD'
        },
        {
            'uniquekey': 138,
            'name': 'Monaco',
            'edition': 'XX',
            'id': 'MC'
        },
        {
            'uniquekey': 140,
            'name': 'Montenegro',
            'edition': 'XX',
            'id': 'ME'
        },
        {
            'uniquekey': 152,
            'name': 'Montserrat',
            'edition': 'XX',
            'id': 'MS'
        },
        {
            'uniquekey': 137,
            'name': 'Morocco',
            'edition': 'XX',
            'id': 'MA'
        },
        {
            'uniquekey': 159,
            'name': 'Mozambique',
            'edition': 'XX',
            'id': 'MZ'
        },
        {
            'uniquekey': 146,
            'name': 'Myanmar (Burma)',
            'edition': 'XX',
            'id': 'MM'
        },
        {
            'uniquekey': 160,
            'name': 'Namibia',
            'edition': 'XX',
            'id': 'NA'
        },
        {
            'uniquekey': 168,
            'name': 'Nepal',
            'edition': 'XX',
            'id': 'NP'
        },
        {
            'uniquekey': 8,
            'name': 'Netherlands Antilles (Deprecated)',
            'edition': 'XX',
            'id': 'AN'
        },
        {
            'uniquekey': 166,
            'name': 'Netherlands',
            'edition': 'XX',
            'id': 'NL'
        },
        {
            'uniquekey': 164,
            'name': 'Nigeria',
            'edition': 'XX',
            'id': 'NG'
        },
        {
            'uniquekey': 170,
            'name': 'Niue',
            'edition': 'XX',
            'id': 'NU'
        },
        {
            'uniquekey': 163,
            'name': 'Norfolk Island',
            'edition': 'XX',
            'id': 'NF'
        },
        {
            'uniquekey': 149,
            'name': 'Northern Mariana Islands',
            'edition': 'XX',
            'id': 'MP'
        },
        {
            'uniquekey': 172,
            'name': 'Oman',
            'edition': 'XX',
            'id': 'OM'
        },
        {
            'uniquekey': 178,
            'name': 'Pakistan',
            'edition': 'XX',
            'id': 'PK'
        },
        {
            'uniquekey': 185,
            'name': 'Palau',
            'edition': 'XX',
            'id': 'PW'
        },
        {
            'uniquekey': 173,
            'name': 'Panama',
            'edition': 'XX',
            'id': 'PA'
        },
        {
            'uniquekey': 176,
            'name': 'Papua New Guinea',
            'edition': 'XX',
            'id': 'PG'
        },
        {
            'uniquekey': 186,
            'name': 'Paraguay',
            'edition': 'XX',
            'id': 'PY'
        },
        {
            'uniquekey': 177,
            'name': 'Philippines',
            'edition': 'XX',
            'id': 'PH'
        },
        {
            'uniquekey': 181,
            'name': 'Pitcairn Island',
            'edition': 'XX',
            'id': 'PN'
        },
        {
            'uniquekey': 179,
            'name': 'Poland',
            'edition': 'XX',
            'id': 'PL'
        },
        {
            'uniquekey': 184,
            'name': 'Portugal',
            'edition': 'XX',
            'id': 'PT'
        },
        {
            'uniquekey': 182,
            'name': 'Puerto Rico',
            'edition': 'XX',
            'id': 'PR'
        },
        {
            'uniquekey': 187,
            'name': 'Qatar',
            'edition': 'XX',
            'id': 'QA'
        },
        {
            'uniquekey': 189,
            'name': 'Romania',
            'edition': 'XX',
            'id': 'RO'
        },
        {
            'uniquekey': 190,
            'name': 'Russian Federation',
            'edition': 'XX',
            'id': 'RU'
        },
        {
            'uniquekey': 191,
            'name': 'Rwanda',
            'edition': 'XX',
            'id': 'RW'
        },
        {
            'uniquekey': 26,
            'name': 'Saint Barthélemy',
            'edition': 'XX',
            'id': 'BL'
        },
        {
            'uniquekey': 198,
            'name': 'Saint Helena',
            'edition': 'XX',
            'id': 'SH'
        },
        {
            'uniquekey': 120,
            'name': 'Saint Kitts and Nevis',
            'edition': 'XX',
            'id': 'KN'
        },
        {
            'uniquekey': 141,
            'name': 'Saint Martin',
            'edition': 'XX',
            'id': 'MF'
        },
        {
            'uniquekey': 234,
            'name': 'Saint Vincent and the Grenadines',
            'edition': 'XX',
            'id': 'VC'
        },
        {
            'uniquekey': 241,
            'name': 'Samoa',
            'edition': 'XX',
            'id': 'WS'
        },
        {
            'uniquekey': 203,
            'name': 'San Marino',
            'edition': 'XX',
            'id': 'SM'
        },
        {
            'uniquekey': 192,
            'name': 'Saudi Arabia',
            'edition': 'XX',
            'id': 'SA'
        },
        {
            'uniquekey': 204,
            'name': 'Senegal',
            'edition': 'XX',
            'id': 'SN'
        },
        {
            'uniquekey': 51,
            'name': 'Serbia and Montenegro (Deprecated)',
            'edition': 'XX',
            'id': 'CS'
        },
        {
            'uniquekey': 50,
            'name': 'Serbia',
            'edition': 'XX',
            'id': 'RS'
        },
        {
            'uniquekey': 194,
            'name': 'Seychelles',
            'edition': 'XX',
            'id': 'SC'
        },
        {
            'uniquekey': 202,
            'name': 'Sierra Leone',
            'edition': 'XX',
            'id': 'SL'
        },
        {
            'uniquekey': 252,
            'name': 'Sint Maarten',
            'edition': 'XX',
            'id': 'SX'
        },
        {
            'uniquekey': 201,
            'name': 'Slovak Republic',
            'edition': 'XX',
            'id': 'SK'
        },
        {
            'uniquekey': 199,
            'name': 'Slovenia',
            'edition': 'XX',
            'id': 'SI'
        },
        {
            'uniquekey': 193,
            'name': 'Solomon Islands',
            'edition': 'XX',
            'id': 'SB'
        },
        {
            'uniquekey': 205,
            'name': 'Somalia',
            'edition': 'XX',
            'id': 'SO'
        },
        {
            'uniquekey': 244,
            'name': 'South Africa',
            'edition': 'XX',
            'id': 'ZA'
        },
        {
            'uniquekey': 253,
            'name': 'South Sudan',
            'edition': 'XX',
            'id': 'SS'
        },
        {
            'uniquekey': 68,
            'name': 'Spain',
            'edition': 'XX',
            'id': 'ES'
        },
        {
            'uniquekey': 130,
            'name': 'Sri Lanka',
            'edition': 'XX',
            'id': 'LK'
        },
        {
            'uniquekey': 180,
            'name': 'St. Pierre and Miquelon',
            'edition': 'XX',
            'id': 'PM'
        },
        {
            'uniquekey': 183,
            'name': 'State of Palestine',
            'edition': 'XX',
            'id': 'PS'
        },
        {
            'uniquekey': 206,
            'name': 'Suriname',
            'edition': 'XX',
            'id': 'SR'
        },
        {
            'uniquekey': 200,
            'name': 'Svalbard and Jan Mayen Islands',
            'edition': 'XX',
            'id': 'SJ'
        }
    ];
    /**
     * Retrieves the given country by NS internal id via the static `countryMapping` list.
     * Note that this is an exception to most Netsuite records that use a numeric integer key identifier.
     * @see `countryMapping`
     * @param id country internal id - which is the country code e.g. ('US', 'HK'). This is the id required for
     * Address records.
     */
    function getCountryById(id) {
        const countries = exports.countryMapping.filter(x => x.id === id);
        if (countries.length)
            return countries[0];
        else
            return undefined;
    }
    exports.getCountryById = getCountryById;
    /**
     * Retrieves the given country by the numeric 'uniquekey' in the static `countryMapping` list.
     * @see `countryMapping`
     * @param uniquekey the unique _numeric_ key assigned by NS to the country record.
     */
    function getCountryByUniqueKey(uniquekey) {
        const countries = exports.countryMapping.filter(x => x.uniquekey === uniquekey);
        if (countries.length > 0)
            return countries[0];
        else
            return undefined;
    }
    exports.getCountryByUniqueKey = getCountryByUniqueKey;
});
