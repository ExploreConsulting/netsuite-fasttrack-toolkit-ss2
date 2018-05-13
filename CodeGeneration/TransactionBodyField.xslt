<!--
the intent of this is to convert a transactionbody field into a shape that looks like any other
custom record, since in NFT you declare fully custom records very similarly to built-in records that have
some custom fields

This expects an XML input file that contains info about which NS record(s) we want to generate output for.
The config file relates the 'applies to record type' flag in SDF custom field definition to the corresponding classname, parent
class and any imports needed. For example, <bodysale>T</bodysale> in SDF indicates the field should be on a SalesOrder/
Corresponding config:
<fields>
    <field name="bodysale">
        <className>SalesOrder</className>
        <parentClass>so.Base</parentClass>
        <imports>
            <import>import * as so from "NFT/DataAccess/SalesOrderBase"</import>
        </imports>
    </field>
</fields>
-->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xsl:import href="./CustomRecord.xsl"/>
    <xsl:output method="text" indent="no" xml:space="default" />
    <xsl:mode on-no-match="shallow-skip"/>
    <!-- caller must specify which type to generate - should be a value from TypeMapping.xml <className> element -->
    <xsl:param name="type" required="yes" as="xs:string" />
    <xsl:template match="fields/field[className[text() = $type]]" >
        <!--capture the main generated 'custom record' style xml into a variable which we then feed to
        the other templates (e.g. CustomRecord template imported-->
        <xsl:variable name="foo">
        <xsl:call-template name="customrecordSkeleton"/>
        </xsl:variable>
        <xsl:apply-templates select="$foo">
            <xsl:with-param name="imports" select="imports"/>
            <xsl:with-param name="className" select="className"/>
            <xsl:with-param name="parentClass" select="parentClass"/>
        </xsl:apply-templates>
    </xsl:template>



    <xsl:template name="customrecordSkeleton">
        <!-- this variable corresponds to the 'applies to' fields in SDF, e.g. <bodysale>T</bodysale>
        which we call the field 'name' attribute in our config file.
        -->
        <xsl:message expand-text="yes">Generating {className} class...</xsl:message>

        <xsl:variable name="appliesToElement" select="string(@name)"/>
        <customrecordtype> <!-- note no scriptid here because recordType is inherited from existing base-->
            <recordname></recordname> <!-- no record name needed because we pass $className directly  -->
            <customrecordcustomfields>
                <xsl:for-each select="collection('./Objects/TransactionBodyFields?select=custbody*.xml')">
       <!-- select only the custom fields to that are applied to the current record type true ('T') e.g. <bodysale>T</bodysale> -->
                    <xsl:apply-templates select='transactionbodycustomfield[*[$appliesToElement = local-name() ]/text() = "T"]'/>
                </xsl:for-each>
            </customrecordcustomfields>
        </customrecordtype>
    </xsl:template>


    <xsl:template match='transactionbodycustomfield' expand-text="yes">
        <customrecordcustomfield scriptid="{@scriptid}">
               <label>{label}</label>
               <description>{description}</description>
               <fieldtype>{fieldtype}</fieldtype>
           </customrecordcustomfield>
    </xsl:template>

    <!-- Rudimentary custom record shape (this is the target shape we create as an intermediate pass which
    we then feed to the existing (somewhat generic) custom record generator

    <customrecordtype scriptid="customrecord11">
      <customrecordcustomfields>
       <customrecordcustomfield scriptid="custrecord_2663_entity_file_format">
            <label>Payment File Format</label>
            <description></description>
            <fieldtype>SELECT</fieldtype>
       </customrecordcustomfield>
      </customrecordcustomfields>
    </customrecordtype>
    -->

</xsl:stylesheet>