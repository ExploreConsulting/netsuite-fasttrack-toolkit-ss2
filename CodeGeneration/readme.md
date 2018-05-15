# NFT NSDAL Code Generation
This subproject generates NSDAL classes from the output from SDF (or record data downloaded from the UI)

Currently only _custom records_ and some _transaction body fields_ are supported.



downloading some stuffs

    sdfcli importobjects  -type customrecordtype  -scriptid ALL -p ./ -destinationfolder '/Objects'


### Using Saxon
Commandline usage [reference here](http://www.saxonica.com/documentation/index.html#!using-xsl/commandline)

    # custom records generation (source xml expected to be under Objects/CustomRecords/*.xml    
    java -jar saxon9he.jar -it -xsl:CustomRecord.xsl

    
    
    # generating a custom SalesOrder class with all applicable transaction body custom fields
    # see TypeMapping.xml for which types you can generate (transaction body fields only for now)
    java -jar saxon9he.jar -xsl:TransactionBodyField.xslt -s:TypeMapping.xml -o:SalesOrder.ts type=SalesOrder


After code generation completes, update generated source files `import ...NFT/` references; replace the `NFT` with the path to your specific
NFT install version.
