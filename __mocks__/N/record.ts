export const create = jest.fn( function ( config ) {
   this.isDynamic = config.isDynamic
   return this
}).mockName('create')
export const Type = jest.fn()
export const getValue = jest.fn().mockName('getValue')
export const setValue = jest.fn().mockName('setValue')
export const getText = jest.fn().mockName('getText')
export const setText = jest.fn().mockName('setText')
export const load = jest.fn().mockReturnThis().mockName('load')
export const getLineCount = jest.fn().mockName('getLineCount')
export const getFields = jest.fn()
export const getField = jest.fn()
export const insertLine = jest.fn().mockName('insertLine')
export const removeLine = jest.fn()
export const findSublistLineWithValue = jest.fn()
export const getSublistText = jest.fn().mockName('getSublistText')
export const getSublistValue = jest.fn().mockName('getSublistValue')
export const setSublistText = jest.fn().mockName('setSublistText')
export const setSublistValue = jest.fn().mockName('setSublistValue')
export const getSublistFields = jest.fn()
export const getSublistField = jest.fn()
export const getCurrentSublistText = jest.fn().mockName('getCurrentSublistText')
export const setCurrentSublistText = jest.fn().mockName('setCurrentSublistText')
export const getCurrentSublistValue = jest.fn().mockName('getCurrentSublistValue')
export const setCurrentSublistValue = jest.fn().mockName('setCurrentSublistValue')
export const getCurrentSublistSubrecord = jest.fn().mockName('getCurrentSublistSubrecord')
export const getSublistSubrecord = jest.fn().mockName('getSublistSubrecord')
export const selectLine = jest.fn().mockName('selectLine')
export let isDynamic = false



