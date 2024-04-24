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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SalesOrderBase = exports.SalesTeamSublist = exports.ItemSublist = void 0;
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    const AddressBase_1 = require("./AddressBase");
    /**
     * Sublist 'item' on the Sales Order record
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "altsalesamt", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "amortizationperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "amortizationtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "billvariancestatus", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "catchupperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "chargetype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "commitinventory", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "costestimate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "costestimaterate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "costestimatetype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "createdpo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "createpo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "createwo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "daysbeforeexpiration", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemSublist.prototype, "description", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "deferrevrec", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "excludefromraterequest", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "expectedshipdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "fromjob", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "giftcertfrom", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemSublist.prototype, "giftcertmessage", void 0);
    __decorate([
        Sublist_1.SublistFieldType.email
    ], ItemSublist.prototype, "giftcertrecipientemail", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "giftcertrecipientname", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "id", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "isclosed", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "isestimate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "istaxable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "isvsoebundle", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "itemfulfillmentchoice", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "itemsubtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "itemtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemSublist.prototype, "licensecode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "lineuniquekey", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "locationautoassigned", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "matrixtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "noautoassignlocation", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "options", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "orderpriority", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "porate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "povendor", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "price", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "printitems", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantityavailable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantitybackordered", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantitybilled", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantitycommitted", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantityfulfilled", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantityrevcommitted", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "rateschedule", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "revrecschedule", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "revrecstartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "revrecenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "shipaddress", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "shipcarrier", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "shipmethod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "subscription", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "taxcode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "taxrate1", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "units", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "vsoeallocation", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "vsoeamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "vsoedeferral", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "vsoedelivered", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "vsoeisestimate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "vsoepermitdiscount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "vsoeprice", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "vsoesopgroup", void 0);
    exports.ItemSublist = ItemSublist;
    /**
     * 'salesteam' sublist
     */
    class SalesTeamSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], SalesTeamSublist.prototype, "contribution", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SalesTeamSublist.prototype, "employee", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], SalesTeamSublist.prototype, "isprimary", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SalesTeamSublist.prototype, "salesrole", void 0);
    exports.SalesTeamSublist = SalesTeamSublist;
    /**
     * NetSuite Sales Order Record
     */
    class SalesOrderBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.SALES_ORDER; }
    }
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "allowemptycards", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "althandlingcost", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "altsalestotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "altshippingcost", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "authcode", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "balance", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "billaddresslist", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], SalesOrderBase.prototype, "billingaddress", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "billingschedule", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "billisresidential", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "canhavestackable", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "ccapproved", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "ccavsstreetmatch", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "ccavszipmatch", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "ccexpiredate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "cchold", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], SalesOrderBase.prototype, "ccholdetails", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "cciavsmatch", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "ccname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "ccnumber", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "ccprocessoraccount", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "ccsecuritycode", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "ccsecuritycodematch", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "ccstreet", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "cczipcode", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "consolidatebalance", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "couponcode", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "createdfrom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "creditcard", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "creditcardprocessor", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "currencyname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "currencysymbol", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "customercode", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "debitcardissueno", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "deferredrevenue", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "discountitem", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], SalesOrderBase.prototype, "discountrate", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "discounttotal", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "draccount", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SalesOrderBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "entitynexus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "entitytaxregnum", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "estgrossprofit", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], SalesOrderBase.prototype, "estgrossprofitpercent", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "exchangerate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "excludecommission", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "fob", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "fxaccount", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "getauth", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "giftcertapplied", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "handlingcost", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "handlingtax1rate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "handlingtaxcode", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "ignoreavs", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "ignorecsc", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "inputpnrefnum", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "intercostatus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "intercotransaction", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "isbasecurrency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "isdefaultshippingrequest", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "ismultishipto", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "ispurchasecard", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "isrecurringpayment", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], SalesOrderBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "leadsource", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "linkedtrackingnumbers", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], SalesOrderBase.prototype, "message", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "messagesel", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "muccpromocodeinstance", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SalesOrderBase.prototype, "nextbill", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "nexus", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "onetime", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "opportunity", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "overridehold", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "overrideholdchecked", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], SalesOrderBase.prototype, "overrideshippingcost", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "partner", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], SalesOrderBase.prototype, "paymenteventdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "paymenteventholdreason", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "paymenteventpurchasedatasent", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "paymenteventresult", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "paymenteventtype", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "paymenteventupdatedby", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "paymentmethod", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "paypalauthid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "paypalprocess", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "paypalstatus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "paypaltranid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "pnrefnum", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "promocode", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "promocodepluginimpl", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "recognizedrevenue", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "recurannually", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "recurmonthly", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "recurquarterly", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "recurweekly", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "returntrackingnumbers", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "revcommitstatus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "revenuestatus", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "revreconrevcommitment", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SalesOrderBase.prototype, "saleseffectivedate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "salesgroup", void 0);
    __decorate([
        Record_1.FieldType.sublist(SalesTeamSublist)
    ], SalesOrderBase.prototype, "salesteam", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "shipaddresslist", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "shipcomplete", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SalesOrderBase.prototype, "shipdate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "shipisresidential", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "shipmethod", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "shipoverride", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], SalesOrderBase.prototype, "shippingaddress", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "shippingcost", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "shippingcostoverridden", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "shippingtax1rate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "shippingtaxcode", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "softdescriptor", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "source", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SalesOrderBase.prototype, "startdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "subsidiarytaxregnum", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "subtotal", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "syncpartnerteams", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "syncsalesteams", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "taxdetailsoverride", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "taxitem", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], SalesOrderBase.prototype, "taxrate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "taxregoverride", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "taxtotal", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SalesOrderBase.prototype, "terms", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "threedstatuscode", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "tobeemailed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "tobefaxed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "tobeprinted", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "totalcostestimate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "tranisvsoebundle", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SalesOrderBase.prototype, "unbilledorders", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SalesOrderBase.prototype, "validfrom", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SalesOrderBase.prototype, "vsoeautocalc", void 0);
    exports.SalesOrderBase = SalesOrderBase;
});
