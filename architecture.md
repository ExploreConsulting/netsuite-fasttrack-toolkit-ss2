# NFT Internals
This describes design and motivation for NFT - how it works and why it does what it does.

## NetSuite Data Access Layer (NSDAL)
NSDAL provides a consistent [ActiveRecord](https://en.wikipedia.org/wiki/Active_record_pattern) approach for working with NetSuite
records, sublists, and subrecords. the `N/record` module in SuiteScript presents us with a broken Active Record 
design. 

SuiteScript attempts something sort of like Active Record but falls short:

* access to record data is via method calls on the record object (e.g. `getValue()/setValue()`) rather
than simple object properties 
* accessing sublists is _different_ (e.g. `getSublistValue()`) 
* subrecords access is yet _another approach_ (e.g. `getSubrecord()`, `getSublistSubrecord()`)

Accessing Fields, Sublists and Subrecords ultimatly just read and write record data. Why so many different methods,
and why have methods at all when _the language natively expresses_ all these concepts:

```javascript
var x = {} // imagine if a NetSuite record was just a plain javascript object...

x.foo = 4 // set foo - plain old property assignment -  setValue()?

var y = x.foo // getValue()?

x.collection = [1,2,3] // a collection of values on the object - sounds a lot like a named sublist?

x.address = { addr1: '123 Elm' } // a nested object - a subrecord?

```

NSDAL simply lets you work with NetSuite records like you would any plain old javascript object.
This has a few advantages:

1. Code looks familiar to any JS developer; **native** javascript language syntax instead of many N/record API calls.
2. Code is shorter - using the normal javascript syntax is much shorter than calling N/record methods, resulting
   in cleaner, legible code evenas things get complex. 50% less code is common.
3. Plain objects means we can _directly leverage_ utility libraries like `Lodash`. When things get very complex,
this is arguably the most powerful benefit of NSDAL. It can be 80%+ less code over native by leveraging
   the combination of Lodash and NFT simple object access syntax.


##How Does it Work?
The concept is simple - NSDAL defines objects with [properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
using _accessor descriptors_.  Those properties just forward to underlying `N/record` calls.

So javascript property assignment `x.foo = 5` results in a call to `record.setValue({ fieldId: 'foo', value: 5})`
and for property reads, `x.foo` results in a call to `record.setValue({ fieldId: 'foo'})`

For sublists, the same concepts apply except NSDAL builds an array-like collection to represent each 
line of the sublist.

For subrecords, again the same concept applies except the values of properties are objects rather than simple values.

The final result is every NetSuite record is represented as a plain object with properties. Those properties
are either simple properties (fields), collections (sublists) or properties reference objects (subrecords). 
The consistency and plain language syntax is what makes such a simple concept so powerful. 
We simply cannot directly use powerful libraries such as lodash with native `N/record` objects, but with NFT we can! 
