<!--This transforms SDF xml for custom records into NFT-SS2 TypeScript classes -->
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

    <xsl:output method="text"/>
    <!-- load the current version of NFT into a variable from package.json -->
    <xsl:variable name="nft" select="json-doc('../package.json')('version')"/>
    <xsl:variable name="nftPath" select="concat('../NFT-SS2-', $nft)"/>


    <xsl:template name="xsl:initial-template">
<!--        <xsl:for-each select="collection('./Objects/CustomRecords?select=customrecord*.xml')">-->
            <!-- this variable tries to create a valid TS class name out of the <recordname>
            by limiting the name to only word characters. This still won't catch a record that starts with a number
            -->
            <xsl:variable name="fileName" select="replace(/customrecordtype/recordname,'\W','')" />
            <xsl:variable name="className">
                <xsl:choose>
                    <!-- prepend an underscore if the record name starts with a number (e.g., "3PL Configuration") -->
                    <xsl:when test="matches(/customrecordtype/recordname, '^\d+')">
                        <xsl:value-of select="string-join(('_', replace(/customrecordtype/recordname,'\W','')))"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="replace(/customrecordtype/recordname,'\W','')" />
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:variable>


           <xsl:message expand-text="yes">Generating Custom Record class: {$className}, filename: {$fileName}</xsl:message>
           <xsl:message expand-text="yes">Using NFT path {$nftPath}</xsl:message>

            <!--This generates a separate document (.ts file) for each input .xml file -->
            <xsl:result-document method="text" href="src/{string-join(($fileName,'.ts'))}">

                <xsl:apply-templates>
                    <xsl:with-param name="className" select="$className"/>
                    <!-- add imports used to define the TS class and properties -->
                    <xsl:with-param name="imports">
                    </xsl:with-param>
                </xsl:apply-templates>
            </xsl:result-document>
<!--        </xsl:for-each>-->

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
    <xsl:text>
// Auto-Generated NFT NSDAL Class
import { FieldType, NetsuiteRecord } from '</xsl:text>
        <xsl:value-of select="$nftPath"/>
    <xsl:text>/DataAccess/Record'</xsl:text>
<xsl:value-of select="$imports"/>
<xsl:where-populated expand-text="yes">
    <!-- TODO: The below replace code is ugly, should probably look into splitting the description and building each line in a loop -->
/**
 *  <xsl:value-of select="recordname" />
 *  <xsl:value-of select="replace(description,'&#xd;','&#xd; *  ')" />
 */</xsl:where-populated>
<xsl:text expand-text="yes">
export class {$className} extends {$parentClass} {{</xsl:text>

    static recordType () { return '<xsl:value-of select="@scriptid" />' as const }
    <!-- Add standard common fields that exist on all Custom Records -->
    /**
     * Created
     * The timestamp when this record instance was created
     */
    @FieldType.datetime
    created: Date

    /**
     * Custom Form
     * Select the entry form to use for creating this record.
     */
    @FieldType.select
    customform: number

    /**
     * ExternalId
     *
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Inactive
     */
    @FieldType.checkbox
    isinactive: boolean

    /**
     * Last Modified
     * The timestamp when this record instance was last modified
     */
    @FieldType.datetime
    lastmodified: Date

    /**
     * By
     * The user that last modified this record instance
     */
    @FieldType.select
    lastmodifiedby: number

    /**
     * Name
     * The name for the custom record instance.
     */
    @FieldType.freeformtext
    name: string

    /**
     * Owner
     * The user that created this record instance
     */
    @FieldType.select
    owner: number
<!-- TODO: Determine what this field does and if it's needed -->
    /**
     * ID
     * This may be the same as the internal ID that is already in the base class - or this could be something else
     */
    @FieldType.integernumber
    recordid: number

<xsl:apply-templates select="customrecordcustomfields"/>
}
</xsl:template>
<xsl:template name="props" match="customrecordcustomfield" expand-text="yes">
    /**
     * {label}<xsl:where-populated>
     * {description}</xsl:where-populated>
     */
    <xsl:call-template name="set-prop-data-type"/>
    <!--<xsl:value-of select="@scriptid"/> : string-->
    </xsl:template> <!-- /props -->
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
        <xsl:value-of select="@scriptid"/>: number</xsl:when>
    <xsl:when test="fieldtype='CHECKBOX'">
    <xsl:text>checkbox
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: boolean</xsl:when>
    <xsl:when test="fieldtype='CURRENCY'">
    <xsl:text>currency
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: number</xsl:when>
    <xsl:when test="fieldtype='FLOAT'">
    <xsl:text>float
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: number</xsl:when>
    <xsl:when test="fieldtype='DATE'">
    <xsl:text>date
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: Date</xsl:when>
    <xsl:when test="fieldtype='DATETIMETZ'">
    <xsl:text>datetime
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: Date</xsl:when>
    <xsl:when test="fieldtype='EMAIL'">
    <xsl:text>email
    </xsl:text>
    <xsl:value-of select="@scriptid"/>: string</xsl:when>
    <xsl:when test="fieldtype='HELP' or fieldtype='TEXT'">
    <xsl:text>freeformtext
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: string</xsl:when>
    <xsl:when test="fieldtype='MULTISELECT'">
    <xsl:text>multiselect
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: number[]</xsl:when>
    <xsl:when test="fieldtype='PERCENT'">
    <xsl:text>percent
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: string</xsl:when>
    <xsl:when test="fieldtype='TEXTAREA'">
    <xsl:text>textarea
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: string</xsl:when>
    <xsl:when test="fieldtype='INTEGER'">
    <xsl:text>integernumber
    </xsl:text>
        <xsl:value-of select="@scriptid"/>: number</xsl:when>
    <xsl:otherwise>
        <xsl:text>freeformtext
        </xsl:text>
        <xsl:value-of select="@scriptid"/>: string</xsl:otherwise>
    </xsl:choose>
    </xsl:template>
</xsl:stylesheet>
