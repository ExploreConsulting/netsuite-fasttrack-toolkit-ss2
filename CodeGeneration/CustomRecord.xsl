<!--This transforms SDF xml for custom records into NFT-SS2 TypeScript classes -->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

    <xsl:output method="text"/>


    <xsl:template name="xsl:initial-template">
        <xsl:for-each select="collection('./Objects/CustomRecords?select=customrecord*.xml')">
            <!-- this variable tries to create a valid TS class name out of the <recordname>
            by limiting the name to only word characters. This still won't catch a record that starts with a number
            -->
            <xsl:variable name="className"  select="replace(/customrecordtype/recordname,'\W','')"/>

           <xsl:message expand-text="yes">Generating Custom Record class: {$className}</xsl:message>
            <!--This generates a separate document (.ts file) for each input .xml file -->
            <xsl:result-document method="text" href="src/{string-join(($className,'.ts'))}">

                <xsl:apply-templates>
                    <xsl:with-param name="className" select="$className"/>
                    <!-- add imports used to define the TS class and properties -->
                    <xsl:with-param name="imports">
import {NetsuiteRecord} from "NFT/DataAccess/Record"
                    </xsl:with-param>
                </xsl:apply-templates>
            </xsl:result-document>
        </xsl:for-each>

    </xsl:template>

    <!--This template generates a TS class. -->
<xsl:template match="customrecordtype" name="CustomRecord">

    <!-- name of parent class, e.g. cust.Base default is NetsuiteRecord -->
    <xsl:param name="parentClass">NetsuiteRecord</xsl:param>

    <!-- TypeScript imports, sequence of strings each string should be a complete import statement
     e.g. import * as cust from "NFT/DataAccess/CustomerBase" This is emitted directly into the output
     -->
    <xsl:param name="imports"/>

    <!-- the name of the generated class and filename -->
    <xsl:param required="yes" name="className"/>

<!-- Always include these imports plus whatever the caller provided, to keep it DRY -->

<xsl:text>// Auto-Generated NFT NSDAL Class
import {FieldType} from "NFT/DataAccess/Record"
import * as moment from "NFT/moment"</xsl:text><xsl:value-of select="$imports"/>
<xsl:where-populated expand-text="yes">
/**
 *   {description}
 */
</xsl:where-populated>
<xsl:text expand-text="yes">
export class {$className} extends {$parentClass} {{
</xsl:text>
<!--only include a recordType if it's actually specified. For custom records it will always be. For
 custom fields on built-in records it will not be because recordType is inherited -->
<xsl:if test="@scriptid != ''" expand-text="yes">static recordType = '{@scriptid}'</xsl:if>
<xsl:apply-templates select = "customrecordcustomfields"/>
}
</xsl:template>

    <xsl:template name="props" match="customrecordcustomfield" expand-text="yes">
    /**
     * {label}<xsl:where-populated xml:space="preserve">
     * {description}</xsl:where-populated>
     */
    <xsl:call-template name="set-prop-data-type"/>
    <!--<xsl:value-of select="@scriptid"/> : string-->
    </xsl:template>

    <xsl:template name="set-prop-data-type">

    <xsl:text>@FieldType.</xsl:text>
    <xsl:choose>

        <!-- These are the field types defined in NS help
        CHECKBOX

        CLOBTEXT

        CURRENCY

        DATE

        DATETIMETZ

        DOCUMENT

        EMAIL

        FLOAT

        HELP

        IMAGE

        INLINEHTML

        INTEGER

        MULTISELECT

        PASSWORD

        PERCENT

        PHONE

        RICHTEXT

        SELECT

        TEXT

        TEXTAREA

        TIMEOFDAY

        URL
-->


    <!-- SELECT LIST/RECORD Field Type -->
    <xsl:when test="fieldtype='SELECT'">
    <xsl:text>select
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : number
    </xsl:when>
    <xsl:when test="fieldtype='CHECKBOX'">
    <xsl:text>checkbox
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : boolean
    </xsl:when>
    <xsl:when test="fieldtype='CURRENCY'">
    <xsl:text>currency
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : number
    </xsl:when>
    <xsl:when test="fieldtype='FLOAT'">
    <xsl:text>float
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : number
    </xsl:when>
    <xsl:when test="fieldtype='DATE'">
    <xsl:text>date
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : moment.Moment
    </xsl:when>
    <xsl:when test="fieldtype='DATETIMETZ'">
    <xsl:text>datetime
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : moment.Moment
    </xsl:when>
    <xsl:when test="fieldtype='EMAIL'">
    <xsl:text>email
    </xsl:text>
    <xsl:value-of select="@scriptid"/> : string
    </xsl:when>
    <xsl:when test="fieldtype='HELP' or fieldtype='TEXT'">
    <xsl:text>freeformtext
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : string
    </xsl:when>
    <xsl:when test="fieldtype='MULTISELECT'">
    <xsl:text>multiselect
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : number[]
    </xsl:when>
    <xsl:when test="fieldtype='PERCENT'">
    <xsl:text>percent
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : string
    </xsl:when>
    <xsl:when test="fieldtype='TEXTAREA'">
    <xsl:text>textarea
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : string
    </xsl:when>
    <xsl:when test="fieldtype='INTEGER'">
    <xsl:text>integernumber
    </xsl:text>
        <xsl:value-of select="@scriptid"/> : number
    </xsl:when>
    <xsl:otherwise>
        <xsl:text>freeformtext
        </xsl:text>
        <xsl:value-of select="@scriptid"/> : string
    </xsl:otherwise>
    </xsl:choose>

    </xsl:template>

</xsl:stylesheet>
