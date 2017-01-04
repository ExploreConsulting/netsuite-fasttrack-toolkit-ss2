
import * as td from "testdouble"

namespace format {
   export enum Type {
      CCEXPDATE,
      CCNUMBER,
      CCVALIDFROM,
      CHECKBOX,
      COLOR,
      CURRENCY,
      CURRENCY2,
      DATE,
      DATETIME,
      DATETIMETZ,
      FLOAT,
      FULLPHONE,
      FUNCTION,
      IDENTIFIER,
      INTEGER,
      MMYYDATE,
      NONNEGCURRENCY,
      NONNEGFLOAT,
      PERCENT,
      PHONE,
      POSCURRENCY,
      POSFLOAT,
      POSINTEGER,
      RATE,
      RATEHIGHPRECISION,
      TIME,
      TIMEOFDAY,
      TIMETRACK,
      URL,
   }
}

namespace record {
   export enum Type {
      ACCOUNT,
      ACCOUNTING_BOOK,
      ACCOUNTING_PERIOD,
      AMORTIZATION_SCHEDULE,
      AMORTIZATION_TEMPLATE,
      ASSEMBLY_BUILD,
      ASSEMBLY_ITEM,
      ASSEMBLY_UNBUILD,
      BILLING_ACCOUNT,
      BILLING_CLASS,
      BILLING_SCHEDULE,
      BIN,
      BIN_TRANSFER,
      BIN_WORKSHEET,
      BLANKET_PURCHASE_ORDER,
      BUNDLE_INSTALLATION_SCRIPT,
      CALENDAR_EVENT,
      CAMPAIGN,
      CAMPAIGN_TEMPLATE,
      CASH_REFUND,
      CASH_SALE,
      CHARGE,
      CHECK,
      CLASSIFICATION,
      CLIENT_SCRIPT,
      COMPETITOR,
      CONTACT,
      COUPON_CODE,
      CREDIT_CARD_CHARGE,
      CREDIT_CARD_REFUND,
      CREDIT_MEMO,
      CURRENCY,
      CUSTOMER,
      CUSTOMER_CATEGORY,
      CUSTOMER_DEPOSIT,
      CUSTOMER_PAYMENT,
      CUSTOMER_REFUND,
      CUSTOM_TRANSACTION,
      DEPARTMENT,
      DEPOSIT,
      DEPOSIT_APPLICATION,
      DESCRIPTION_ITEM,
      DISCOUNT_ITEM,
      DOWNLOAD_ITEM,
      DRIVERS_LICENSE,
      EMAIL_TEMPLATE,
      EMPLOYEE,
      ENTITY_ACCOUNT_MAPPING,
      ESTIMATE,
      EXPENSE_CATEGORY,
      EXPENSE_REPORT,
      FAIR_VALUE_PRICE,
      FOLDER,
      GENERIC_RESOURCE,
      GIFT_CERTIFICATE,
      GIFT_CERTIFICATE_ITEM,
      GLOBAL_ACCOUNT_MAPPING,
      GOVERNMENT_ISSUED_ID_TYPE,
      HCM_JOB,
      INTER_COMPANY_JOURNAL_ENTRY,
      INTER_COMPANY_TRANSFER_ORDER,
      INVENTORY_ADJUSTMENT,
      INVENTORY_COST_REVALUATION,
      INVENTORY_COUNT,
      INVENTORY_DETAIL,
      INVENTORY_ITEM,
      INVENTORY_NUMBER,
      INVENTORY_TRANSFER,
      INVOICE,
      ISSUE,
      ITEM_ACCOUNT_MAPPING,
      ITEM_DEMAND_PLAN,
      ITEM_FULFILLMENT,
      ITEM_GROUP,
      ITEM_RECEIPT,
      ITEM_REVISION,
      ITEM_SUPPLY_PLAN,
      JOB,
      JOB_REQUISITION,
      JOURNAL_ENTRY,
      KIT_ITEM,
      KUDOS,
      LEAD,
      LOCATION,
      LOT_NUMBERED_ASSEMBLY_ITEM,
      LOT_NUMBERED_INVENTORY_ITEM,
      MANUFACTURING_COST_TEMPLATE,
      MANUFACTURING_OPERATION_TASK,
      MANUFACTURING_ROUTING,
      MAP_REDUCE_SCRIPT,
      MARKUP_ITEM,
      MASSUPDATE_SCRIPT,
      MESSAGE,
      MFG_PLANNED_TIME,
      NEXUS,
      NON_INVENTORY_ITEM,
      NOTE,
      OPPORTUNITY,
      ORDER_SCHEDULE,
      ORGANIZATION_VALUE,
      OTHER_CHARGE_ITEM,
      OTHER_GOVERNMENT_ISSUED_ID,
      OTHER_NAME,
      PARTNER,
      PASSPORT,
      PAYCHECK_JOURNAL,
      PAYMENT_ITEM,
      PAYROLL_ITEM,
      PHONE_CALL,
      PORTLET,
      POSITION,
      PRICE_LEVEL,
      PROJECT_EXPENSE_TYPE,
      PROJECT_TASK,
      PROJECT_TEMPLATE,
      PROMOTION_CODE,
      PROSPECT,
      PURCHASE_CONTRACT,
      PURCHASE_ORDER,
      PURCHASE_REQUISITION,
      RATE_PLAN,
      REALLOCATE_ITEM,
      RESOURCE_ALLOCATION,
      RESTLET,
      RETURN_AUTHORIZATION,
      REVENUE_ARRANGEMENT,
      REVENUE_COMMITMENT,
      REVENUE_COMMITMENT_REVERSAL,
      REVENUE_PLAN,
      REV_REC_SCHEDULE,
      REV_REC_TEMPLATE,
      SALES_ORDER,
      SALES_TAX_ITEM,
      SCHEDULED_SCRIPT,
      SCHEDULED_SCRIPT_INSTANCE,
      SCRIPT_DEPLOYMENT,
      SERIALIZED_ASSEMBLY_ITEM,
      SERIALIZED_INVENTORY_ITEM,
      SERVICE_ITEM,
      SHIP_ITEM,
      SOLUTION,
      STATISTICAL_JOURNAL_ENTRY,
      SUBSCRIPTION,
      SUBSCRIPTION_CHANGE_ORDER,
      SUBSCRIPTION_LINE,
      SUBSCRIPTION_PLAN,
      SUBSIDIARY,
      SUBTOTAL_ITEM,
      SUITELET,
      SUPPORT_CASE,
      TASK,
      TAX_ACCT,
      TAX_GROUP,
      TAX_PERIOD,
      TAX_TYPE,
      TERM,
      TERMINATION_REASON,
      TIME_BILL,
      TIME_OFF_CHANGE,
      TIME_OFF_PLAN,
      TIME_OFF_REQUEST,
      TIME_OFF_RULE,
      TIME_OFF_TYPE,
      TOPIC,
      TRANSFER_ORDER,
      UNITS_TYPE,
      USEREVENT_SCRIPT,
      VENDOR,
      VENDOR_BILL,
      VENDOR_CATEGORY,
      VENDOR_CREDIT,
      VENDOR_PAYMENT,
      VENDOR_RETURN_AUTHORIZATION,
      WEBSITE,
      WORKFLOW_ACTION_SCRIPT,
      WORK_ORDER,
      WORK_ORDER_CLOSE,
      WORK_ORDER_COMPLETION,
      WORK_ORDER_ISSUE
   }

   export var create = td.function()
   export var getValue = td.function()
   export var setValue = td.function()

}

td.replace('N/log', function(){})
td.replace('N/runtime', function(){})
td.replace('N/format', format)
td.replace('N/record', record)
td.replace('../moment', function() {})

import * as al from "aurelia-logging"

td.replace('../aurelia-logging', al)


import * as inv  from "../DataAccess/InvoiceBase"
import {Sublist} from "../DataAccess/Sublist";

class Invoice extends inv.Base {
   
   //item = new Sublist<Inv.ItemSublist>(Inv.ItemSublist,null,'item')
}


describe('invoice', function(){
   
   it('can serialize an invoice', function() {


      var x = new Invoice()

      var y = x.balance


   })


   
})
