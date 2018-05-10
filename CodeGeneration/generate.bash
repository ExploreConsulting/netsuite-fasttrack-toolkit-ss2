#!/usr/bin/env bash


## Handle custom records

# get custom record definitions from NS and save into ./Objects/CustomRecords
sdfcli importobjects  -type customrecordtype  -scriptid ALL -p ./ -destinationfolder '/Objects/CustomRecords'


# convert SDF XML to TS files, multithreaded (very fast)
java -jar saxon9he.jar -threads:4 -it -xsl:CustomRecord.xsl

