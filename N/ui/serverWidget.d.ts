export declare interface AddButtonOptions {
    id: string;
    label: string;
    functionName?: string;
}

export declare interface AddCredentialFieldOptions {
    id: string;
    label: string;
    restrictToCurrentUser?: boolean;
    restrictToDomains?: string|string[];
    restrictToScriptId?: string;
    tab?: string;
}

export declare interface AddFieldGroupOptions {
    /**
     * An internal ID for the field group.
     */
    id: string;
    /**
     * The label for this field group.
     */
    label: string;
    /**
     * The internal ID of the tab to add the field group to. By default, the field group is added to the main section of the form.
     */
    tab?: string;
}

export declare interface AddFieldOptions {
    /**
     * The internal ID of the field.
     * The internal ID must be in lowercase, contain no spaces, and include
     * the prefix custpage if you are adding the field to an existing page. For
     * example, if you add a field that appears as Purchase Details, the field
     * internal ID should be something similar to custpage_purchasedetails or
     * custpage_purchase_details.
     */
    id: string;
    /**
     * The label for this field.
     */
    label: string;
    /**
     * The field type for the field. Use the serverWidget.FieldType enum to define the field type.
     */
    type: string;
    /**
     * The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field.
     * Note: For radio fields only, the source parameter must contain the internal ID for the field.
     * For more information about working with radio buttons, see "Working with Radio Buttons" in Help.
     */
    source?: string;
    /**
     * The internal ID of the tab or field group to add the field to.
     * By default, the field is added to the main section of the form.
     */
    container?: string;
}

export declare interface AddPageLinkOptions {
    title: string;
    type: string;
    url: string;
}

export declare interface AddResetButtonOptions {
    label: string;
}

export declare interface AddSelectOptionOptions {
    value: string;
    text: string;
    isSelected?: boolean;
}

export declare interface AddSublistOptions {
    id: string;
    label: string;
    tab?: string;
    type: string;
}

export declare interface AddSubtabOptions {
    id: string;
    label: string;
    tab?: string;
}
/*
export declare interface ClientScriptOptions {
    script: string; // The scriptId or internal ID
}
*/
export declare interface CreateAssistantOptions {
    /**
     * The title of the form.
     */
    title: string;
    /**
     * Indicates whether to hide the navigation bar menu.
     * By default, set to false. The header appears in the top-right corner on the form.
     * If set to true, the header on the assistant is hidden from view.
     */
    hideNavBar?: boolean;
}

export declare interface IDOptions {
    id: string;
}

export declare interface GetFieldOptions {
    id: string;
    radio?: string;
}

export declare interface GetSelectOptionsOpts {
    filter?: string;
    filteroperator?: string;
}

export declare interface GetSublistFieldIdsOptions {
    group: string;
}

export declare interface GetSublistValueOptions {
    group: string;
    id: number;
    line: string;
}

export declare interface InsertFieldOptions {
    field: string;
    nextfield: string;
}

export declare interface InsertSublistOptions {
    sublist: string;
    nextsublist: string;
}

export declare interface InsertSubtabOptions {
    subtab: string;
    nextsubtab: string;
}

export declare interface SetDefaultValuesOptions {
    values: Object;
}

export declare interface SetHelpTextOptions {
    help: string;
    showInlineForAssistant?: boolean;
}

export declare interface SublistGetSublistValueOptions {
    id: string;
    line: number;
}

export declare interface SublistSetSublistValueOptions {
    id: string;
    line: number;
    value: string;
}

export declare interface SetSplashOptions {
    title: string,
    text1: string,
    text2?: string 
}

export declare interface UpdateBreakTypeOptions {
    breakType: string;
}

export declare interface UpdateDisplaySizeOptions {
    height: number;
    width: number;
}

export declare interface UpdateDisplayTypeOptions {
    displayType: FieldDisplayType;
}

export declare interface UpdateLayoutTypeOptions {
    layoutType: string;
}

export declare interface AssistantSubmitActions {
    BACK: string;
    CANCEL: string;
    FINISH: string;
    JUMP: string;
    NEXT: string;
}

export declare interface FieldBreakTypes {
    NONE: string;
    STARTCOL: string;
    STARTROW: string;
}

export declare enum FieldDisplayType {
    DISABLED,
    ENTRY,
    HIDDEN,
    INLINE,
    NORMAL,
    READONLY
}

export declare interface FieldLayoutTypes {
    ENDROW: string;
    NORMAL: string;
    MIDROW: string;
    OUTSIDE: string;
    OUTSIDEBELOW: string;
    OUTSIDEABOVE: string;
    STARTROW: string;
}

export declare interface FieldTypeLists {
    CHECKBOX: string;
    CURRENCY: string;
    DATE: string;
    DATETIMETZ: string;
    EMAIL: string;
    FILE: string;
    FLOAT: string;
    HELP: string;
    INLINEHTML: string;
    INTEGER: string;
    IMAGE: string;
    LABEL: string;
    LONGTEXT: string;
    MULTISELECT: string;
    PASSPORT: string;
    PERCENT: string;
    PHONE: string;
    SELECT: string;
    RADIO: string;
    RICHTEXT: string;
    TEXT: string;
    TEXTAREA: string;
    TIMEOFDAY: string;
    URL: string;
}

export declare interface FormPageLinkTypes {
    BREADCRUMB: string;
    CROSSLINK: string;
}

export declare interface LayoutJustifications {
    CENTER: string;
    LEFT: string;
    RIGHT: string;
}

export declare interface ListStyles {
    GRID: string;
    REPORT: string;
    PLAIN: string;
    NORMAL: string;
}

export declare interface SublistDisplayTypes {
    HIDDEN: string;
    NORMAL: string;
}

export declare interface SublistTypes {
    EDITOR: string;
    INLINEEDITOR: string;
    LIST: string;
    STATICLIST: string;
}

export declare interface Assistant {
    addField(options: AddFieldOptions): Field;
    addFieldGroup(options: AddFieldGroupOptions): FieldGroup;
    addStep(options: AddFieldGroupOptions): AssistantStep;
    addSublist(options: AddSublistOptions): Sublist;
    // clientScript(options: ClientScriptOptions): void;
    getField(options: IDOptions): Field;
    getFieldGroup(options: IDOptions): FieldGroup;
    getFieldGroupIds(): string[];
    getFieldIds(): string; // not string[]?? may need testing.
    getLastAction(): AssistantSubmitActions;
    getLastStep(): AssistantStep;
    getNextStep(): AssistantStep;
    getStep(options: IDOptions): AssistantStep;
    getStepCount(): number;
    getSteps(): AssistantStep[];
    getSublist(options: IDOptions): Sublist;
    getSublistIds(): string[];
    hasErrorHtml(): boolean;
    isFinished(): boolean;
    sendRedirect(): void;
    setSplash(options: SetSplashOptions): void;
    clientScriptFileId: number;
    currentStep: void;
    defaultValues: string[];
    errorHtml: string; // Error message text for the current step
    finishedHtml: string; // The text to display after the assistant finishes. For example “You have completed the Small Business Setup Assistant. Take the rest of the day off”.
    hideAddToShortcutsLink: boolean;
    hideStepNumber: boolean;
    isNotOrdered: boolean;
    title: string;
}

export declare interface AssistantStep {
    getFieldIds(): string[];
    getSublistFieldIds(options: GetSublistFieldIdsOptions): string[];
    getLineCount(options: GetSublistFieldIdsOptions): number;
    getSubmittedSublistIds(): string[];
    getSublistValue(options: GetSublistValueOptions): string;
    getValue(options: IDOptions): string|string[];
    helpText: string;
    id: string;
    label: string;
    stepNumber: number;
}

export declare interface Button {
    isDisabled: boolean;
    isHidden: boolean;
    label: string;
}

export declare interface Field {
    addSelectOption(options: AddSelectOptionOptions): void;
    getSelectOptions(options: GetSelectOptionsOpts): Object[];
    setHelpText(options: SetHelpTextOptions): Field;
    updateDisplaySize(options: UpdateDisplaySizeOptions): Field;
    updateDisplayType(options: UpdateDisplayTypeOptions): Field;
    updateBreakType(options: UpdateBreakTypeOptions): Field;
    updateLayoutType(options: UpdateLayoutTypeOptions): Field;
    alias: string;
    // breakType: string; // no longer documented as of 2016.1
    defaultValue: string;
    // displaySize: number; // no longer documented as of 2016.1
    // displayType: string;  // no longer documented as of 2016.1
    id: string;
    isMandatory: boolean;
    label: string;
    layoutType: string;
    linkText: string;
    maxLength: number;
    padding: number;
    richTextHeight: number;
    richTextWidth: number;
    type: string;
}

export declare interface FieldGroup {
    isBorderHidden: boolean;
    isCollapsible: boolean;
    isCollapsed: boolean;
    isSingleColumn: boolean;
    label: string;
}

export declare interface Form {
    addButton(options: AddButtonOptions): Button;
    addCredentialField(options: AddCredentialFieldOptions): Field;
    /**
     * Adds a field to a form.
     */
    addField(options: AddFieldOptions): Field;
    /**
     * Adds a group of fields to a form.
     */
    addFieldGroup(options: AddFieldGroupOptions): FieldGroup;
    addPageLink(options: AddPageLinkOptions): void;
    addResetButton(options: AddResetButtonOptions): Button;
    addSublist(options: AddSublistOptions): Sublist;
    addSubmitButton(label: string): void; // Not documented. Is there some other way to do this now?
    addSubtab(options: AddSubtabOptions): Tab;
    addTab(options: AddFieldGroupOptions): Tab;
    // clientScript(options: ClientScriptOptions): void;
    getButton(options: IDOptions): Button;
    getField(options: GetFieldOptions): Field;
    getSublist(options: IDOptions): Sublist;
    getSubtab(options: IDOptions): Tab;
    getTabs(): Tab[];
    insertField(options: InsertFieldOptions): Field;
    insertSublist(options: InsertSublistOptions): Sublist;
    insertSubtab(options: InsertSubtabOptions): Tab;
    insertTab(options: InsertSubtabOptions): Tab;
    removeButton(options: IDOptions): void;
    setDefaultValues(options: SetDefaultValuesOptions): void;
    /**
     * The file cabinet ID of client script file to be used in this form.
     */
    clientScriptFileId: number;
    title: string;
}

export declare interface Sublist {
    addButton(options: AddButtonOptions): Button;
    addField(options: AddFieldOptions): Field;
    addMarkAllButtons(): Button;
    addRefreshButton(): Button;
    getSublistValue(options: SublistGetSublistValueOptions): string;
    setSublistValue(options: SublistSetSublistValueOptions): string;
    displayType: string;
    helpText: string;
    label: string;
    lineCount: number;
    totallingFieldId: string;
    uniqueFieldId: string;
}

export declare interface Tab {
    helpText: string;
    label: string;
}

export declare interface serverWidget {
    Assitant: Assistant;
    AssistantStep: AssistantStep;
    Button: Button;
    Field: Field;
    FieldGroup: FieldGroup;
    Form: Form;
    Sublist: Sublist;
    Tab: Tab;
    FieldBreakType: FieldBreakTypes;
    FieldDisplayType: FieldDisplayType;
    FieldLayoutType: FieldLayoutTypes;
    FieldType: FieldTypeLists;
    AssistantSubmitAction: AssistantSubmitActions;
    createAssistant(options: CreateAssistantOptions): Assistant;
    /**
     * Creates a form object.
     */
    createForm(options: CreateAssistantOptions): Form;
}
