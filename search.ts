import {Result} from "N/search"
import * as _ from "./lodash"

// Any object that includes an 'id' property, which our search results always have
export type ObjectWithId<T> = T & { id: string }

/**
 * Rudimentary conversion of a NS search result to a simple flat plain javascript object. Suitable as an argument to _.map()
 * @param {Result} result a single netsuite search result to transform into a POJO
 */
export function nsSearchResult2obj<T> (result: Result): ObjectWithId<T> {
   let output = {id: result.id}

   // assigns each column VALUE from the search result to the output object, and if the column
   // has a truthy text value includes that as a propnameText field similar to how nsdal does
   _.reduce(result.columns, (acc, x) => {
      acc[x.name] = result.getValue(x)
      const text = result.getText(x)
      if (text) acc[`${x.name}Text`] = text
      return acc
   }, output)

   return output as T & { id: string }
}
