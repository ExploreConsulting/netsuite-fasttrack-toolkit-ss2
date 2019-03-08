#!/usr/bin/env bash

# echo the directory this script is located in
echo `dirname $0`

echo `pwd`

alias sdfcli=java -jar ~/cli-2019.1.0.jar

# get custom record definitions from NS and save into ./Objects/CustomRecords
sdfcli importobjects  -type customrecordtype  -scriptid ALL -p ./ -destinationfolder '/Objects/CustomRecords'


# convert SDF XML to TS files, multithreaded (very fast)
java -jar saxon9he.jar -threads:4 -it -xsl:CustomRecord.xsl

