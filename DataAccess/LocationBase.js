var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LocationBase = exports.IncludeTheseRegionsSublist = exports.ExcludeTheseRegionsSublist = exports.BusinessHoursSublist = void 0;
    /**
     * NS Base location record - contains definitions for most of the built in fields
     */
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * NetSuite generic Location used as a common base class for 'location-like' records,
     * This is meant to be inherited by concrete record types to avoid duplicating effort on fields.
     * Note that this inheritance hierarchy emerged empirically - it's not documented by NetSuite.
     *
     * It contains fields common to all 'location' records in NS
     */
    class BusinessHoursSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], BusinessHoursSublist.prototype, "endtime", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], BusinessHoursSublist.prototype, "isfriday", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], BusinessHoursSublist.prototype, "ismonday", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], BusinessHoursSublist.prototype, "issaturday", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], BusinessHoursSublist.prototype, "issunday", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], BusinessHoursSublist.prototype, "isthursday", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], BusinessHoursSublist.prototype, "istuesday", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], BusinessHoursSublist.prototype, "iswednesday", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], BusinessHoursSublist.prototype, "samedaypickupcutofftime", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], BusinessHoursSublist.prototype, "starttime", void 0);
    exports.BusinessHoursSublist = BusinessHoursSublist;
    class ExcludeTheseRegionsSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExcludeTheseRegionsSublist.prototype, "name", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ExcludeTheseRegionsSublist.prototype, "ranking", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExcludeTheseRegionsSublist.prototype, "region", void 0);
    exports.ExcludeTheseRegionsSublist = ExcludeTheseRegionsSublist;
    class IncludeTheseRegionsSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], IncludeTheseRegionsSublist.prototype, "name", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], IncludeTheseRegionsSublist.prototype, "ranking", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], IncludeTheseRegionsSublist.prototype, "region", void 0);
    exports.IncludeTheseRegionsSublist = IncludeTheseRegionsSublist;
    /**
     * NetSuite Location base record type
     */
    class LocationBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.LOCATION; }
    }
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "addrphone", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "addrtext", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "allowstorepickup", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "autoassignmentregionsetting", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], LocationBase.prototype, "bufferstock", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "city", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "country", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], LocationBase.prototype, "dailyshippingcapacity", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "geolocationmethod", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "includecontroltower", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "includesupplyplanning", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.float
    ], LocationBase.prototype, "latitude", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "locationtype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "logo", void 0);
    __decorate([
        Record_1.FieldType.float
    ], LocationBase.prototype, "longitude", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "makeinventoryavailable", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "makeinventoryavailablestore", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], LocationBase.prototype, "nextpickupcutofftime", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "override", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "parent", void 0);
    __decorate([
        Record_1.FieldType.address
    ], LocationBase.prototype, "returnaddr", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "returnaddress1", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "returnaddress2", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "returncity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "returncountry", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "returnstate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "returnzip", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], LocationBase.prototype, "sopredconfidence", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], LocationBase.prototype, "sopredicteddays", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "state", void 0);
    __decorate([
        Record_1.FieldType.float
    ], LocationBase.prototype, "storepickupbufferstock", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.select
    ], LocationBase.prototype, "timezone", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], LocationBase.prototype, "totalshippingcapacity", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "tranprefix", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], LocationBase.prototype, "usebins", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], LocationBase.prototype, "zip", void 0);
    __decorate([
        Record_1.FieldType.sublist(BusinessHoursSublist)
    ], LocationBase.prototype, "businesshours", void 0);
    __decorate([
        Record_1.FieldType.sublist(ExcludeTheseRegionsSublist)
    ], LocationBase.prototype, "excludelocationregions", void 0);
    __decorate([
        Record_1.FieldType.sublist(IncludeTheseRegionsSublist)
    ], LocationBase.prototype, "includelocationregions", void 0);
    exports.LocationBase = LocationBase;
});
