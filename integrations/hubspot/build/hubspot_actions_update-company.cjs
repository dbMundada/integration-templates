"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// hubspot/actions/update-company.ts
var update_company_exports = {};
__export(update_company_exports, {
  default: () => update_company_default
});
module.exports = __toCommonJS(update_company_exports);

// schema.ts
var import_zod2 = require("zod");

// schema.zod.ts
var import_zod = require("zod");
var idEntitySchema = import_zod.z.object({
  id: import_zod.z.string()
});
var successResponseSchema = import_zod.z.object({
  success: import_zod.z.boolean()
});
var idSchema = import_zod.z.object({
  id: import_zod.z.string()
});
var timestampsSchema = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string()
});
var optionalObjectTypeSchema = import_zod.z.object({
  objectType: import_zod.z.string().optional()
});
var inputPropertySchema = import_zod.z.object({
  name: import_zod.z.string()
});
var optionSchema = import_zod.z.object({
  label: import_zod.z.string(),
  value: import_zod.z.string(),
  displayOrder: import_zod.z.number(),
  hidden: import_zod.z.boolean()
});
var propertySchema = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string(),
  name: import_zod.z.string(),
  label: import_zod.z.string(),
  type: import_zod.z.string(),
  fieldType: import_zod.z.string(),
  description: import_zod.z.string(),
  groupName: import_zod.z.string(),
  options: import_zod.z.array(optionSchema),
  displayOrder: import_zod.z.number(),
  calculated: import_zod.z.boolean(),
  externalOptions: import_zod.z.boolean(),
  hasUniqueValue: import_zod.z.boolean(),
  hidden: import_zod.z.boolean(),
  hubspotDefined: import_zod.z.boolean(),
  showCurrencySymbol: import_zod.z.boolean(),
  modificationMetadata: import_zod.z.object({
    archivable: import_zod.z.boolean(),
    readOnlyDefinition: import_zod.z.boolean(),
    readOnlyValue: import_zod.z.boolean()
  }),
  formField: import_zod.z.boolean(),
  dataSensitivity: import_zod.z.string()
});
var propertyResponseSchema = import_zod.z.object({
  result: propertySchema
});
var customPropertyOptionSchema = import_zod.z.object({
  hidden: import_zod.z.boolean(),
  displayOrder: import_zod.z.number().optional(),
  description: import_zod.z.string().optional(),
  label: import_zod.z.string(),
  value: import_zod.z.string()
});
var customPropertySchema = import_zod.z.object({
  hidden: import_zod.z.boolean().optional(),
  displayOrder: import_zod.z.number().optional(),
  description: import_zod.z.string().optional(),
  label: import_zod.z.string(),
  type: import_zod.z.string(),
  formField: import_zod.z.boolean().optional(),
  groupName: import_zod.z.string(),
  referencedObjectType: import_zod.z.string().optional(),
  name: import_zod.z.string(),
  options: import_zod.z.array(customPropertyOptionSchema).optional(),
  calculationFormula: import_zod.z.string().optional(),
  hasUniqueValue: import_zod.z.boolean().optional(),
  fieldType: import_zod.z.string(),
  externalOptions: import_zod.z.boolean().optional()
});
var createPropertyInputSchema = import_zod.z.object({
  objectType: import_zod.z.string(),
  data: customPropertySchema
});
var createdPropertySchema = import_zod.z.object({
  createdUserId: import_zod.z.string(),
  hidden: import_zod.z.boolean(),
  modificationMetadata: import_zod.z.object({
    readOnlyOptions: import_zod.z.boolean().optional(),
    readOnlyValue: import_zod.z.boolean(),
    readOnlyDefinition: import_zod.z.boolean(),
    archivable: import_zod.z.boolean()
  }),
  displayOrder: import_zod.z.number(),
  description: import_zod.z.string(),
  showCurrencySymbol: import_zod.z.boolean().optional(),
  label: import_zod.z.string(),
  type: import_zod.z.string(),
  hubspotDefined: import_zod.z.boolean().optional(),
  formField: import_zod.z.boolean(),
  dataSensitivity: import_zod.z.string().optional(),
  createdAt: import_zod.z.string(),
  archivedAt: import_zod.z.string().optional(),
  archived: import_zod.z.boolean(),
  groupName: import_zod.z.string(),
  referencedObjectType: import_zod.z.string().optional(),
  name: import_zod.z.string(),
  options: import_zod.z.array(import_zod.z.object({
    hidden: import_zod.z.boolean(),
    displayOrder: import_zod.z.number(),
    description: import_zod.z.string(),
    label: import_zod.z.string(),
    value: import_zod.z.string()
  })),
  calculationFormula: import_zod.z.string().optional(),
  hasUniqueValue: import_zod.z.boolean(),
  fieldType: import_zod.z.string(),
  updatedUserId: import_zod.z.string(),
  calculated: import_zod.z.boolean(),
  externalOptions: import_zod.z.boolean(),
  updatedAt: import_zod.z.string()
});
var roleSchema = import_zod.z.object({
  requiresBillingWrite: import_zod.z.boolean(),
  name: import_zod.z.string(),
  id: import_zod.z.string()
});
var roleResponseSchema = import_zod.z.object({
  results: import_zod.z.array(roleSchema)
});
var userRoleInputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  firstName: import_zod.z.string().optional(),
  lastName: import_zod.z.string().optional(),
  primaryTeamId: import_zod.z.string().optional()
});
var createdUserSchema = import_zod.z.object({
  id: import_zod.z.string(),
  firstName: import_zod.z.string(),
  lastName: import_zod.z.string(),
  primaryTeamId: import_zod.z.string().optional(),
  email: import_zod.z.string(),
  sendWelcomeEmail: import_zod.z.boolean(),
  roleIds: import_zod.z.array(import_zod.z.string()),
  secondaryTeamIds: import_zod.z.array(import_zod.z.string()),
  superAdmin: import_zod.z.boolean()
});
var changedRoleResponseSchema = import_zod.z.object({
  id: import_zod.z.string(),
  firstName: import_zod.z.string().optional(),
  lastName: import_zod.z.string().optional(),
  primaryTeamId: import_zod.z.string().optional(),
  email: import_zod.z.string(),
  sendWelcomeEmail: import_zod.z.boolean().optional(),
  roleIds: import_zod.z.array(import_zod.z.string()),
  secondaryTeamIds: import_zod.z.array(import_zod.z.string()).optional(),
  superAdmin: import_zod.z.boolean()
});
var hubspotServiceTicketSchema = import_zod.z.object({
  id: import_zod.z.number(),
  createdAt: import_zod.z.date(),
  updatedAt: import_zod.z.date(),
  isArchived: import_zod.z.boolean(),
  subject: import_zod.z.string(),
  content: import_zod.z.string(),
  objectId: import_zod.z.number(),
  ownerId: import_zod.z.number(),
  pipeline: import_zod.z.number(),
  pipelineStage: import_zod.z.number(),
  ticketCategory: import_zod.z.string().nullable(),
  ticketPriority: import_zod.z.string()
});
var hubspotOwnerSchema = import_zod.z.object({
  id: import_zod.z.number(),
  email: import_zod.z.string(),
  firstName: import_zod.z.string(),
  lastName: import_zod.z.string(),
  userId: import_zod.z.number(),
  createdAt: import_zod.z.date(),
  updatedAt: import_zod.z.date(),
  archived: import_zod.z.boolean()
});
var userSchema = import_zod.z.object({
  id: import_zod.z.string(),
  email: import_zod.z.string(),
  firstName: import_zod.z.string(),
  lastName: import_zod.z.string(),
  roleIds: import_zod.z.array(import_zod.z.string()),
  primaryTeamId: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  superAdmin: import_zod.z.boolean()
});
var createUserSchema = import_zod.z.object({
  firstName: import_zod.z.string().optional(),
  lastName: import_zod.z.string().optional(),
  primaryTeamId: import_zod.z.string().optional(),
  email: import_zod.z.string(),
  sendWelcomeEmail: import_zod.z.boolean().optional(),
  roleId: import_zod.z.string().optional(),
  secondaryTeamIds: import_zod.z.array(import_zod.z.string()).optional()
});
var hubspotKnowledgeBaseSchema = import_zod.z.object({
  id: import_zod.z.string(),
  title: import_zod.z.string(),
  description: import_zod.z.string(),
  category: import_zod.z.string(),
  content: import_zod.z.string(),
  publishDate: import_zod.z.number()
});
var createContactInputSchema = import_zod.z.object({
  first_name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  last_name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  email: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  job_title: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  salutation: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  mobile_phone_number: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional()
});
var createUpdateContactOutputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.string(),
  first_name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  last_name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  email: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  job_title: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  last_contacted: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  last_activity_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  salutation: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  mobile_phone_number: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional()
});
var updateContactInputSchema = import_zod.z.object({
  first_name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  last_name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  email: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  job_title: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  salutation: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  mobile_phone_number: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  id: import_zod.z.string()
});
var contactSchema = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.string(),
  first_name: import_zod.z.string().nullable(),
  last_name: import_zod.z.string().nullable(),
  email: import_zod.z.string().nullable(),
  job_title: import_zod.z.string().nullable(),
  last_contacted: import_zod.z.string().nullable(),
  last_activity_date: import_zod.z.string().nullable(),
  lead_status: import_zod.z.string().nullable(),
  lifecycle_stage: import_zod.z.string().nullable(),
  salutation: import_zod.z.string().nullable(),
  mobile_phone_number: import_zod.z.string().nullable(),
  website_url: import_zod.z.string().nullable(),
  owner: import_zod.z.string().nullable()
});
var currencyCodeSchema = import_zod.z.object({
  id: import_zod.z.string(),
  code: import_zod.z.string(),
  description: import_zod.z.string()
});
var createCompanyInputSchema = import_zod.z.object({
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  industry: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  description: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  country: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  city: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  year_founded: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional()
});
var updateCompanyInputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  industry: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  description: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  country: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  city: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  year_founded: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional()
});
var createUpdateCompanyOutputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.string(),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  industry: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  description: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  country: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  city: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  year_founded: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional()
});
var companySchema = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.string().nullable(),
  name: import_zod.z.string().nullable(),
  industry: import_zod.z.string().nullable(),
  description: import_zod.z.string().nullable(),
  country: import_zod.z.string().nullable(),
  city: import_zod.z.string().nullable(),
  lead_status: import_zod.z.string().nullable(),
  lifecycle_stage: import_zod.z.string().nullable(),
  owner: import_zod.z.string().nullable(),
  year_founded: import_zod.z.string().nullable(),
  website_url: import_zod.z.string().nullable()
});
var accountSchema = import_zod.z.object({
  id: import_zod.z.string(),
  type: import_zod.z.string(),
  timeZone: import_zod.z.string(),
  companyCurrency: import_zod.z.string(),
  additionalCurrencies: import_zod.z.array(import_zod.z.string()),
  utcOffset: import_zod.z.string(),
  utcOffsetMilliseconds: import_zod.z.number(),
  uiDomain: import_zod.z.string(),
  dataHostingLocation: import_zod.z.string()
});
var associationTypesSchema = import_zod.z.object({
  association_category: import_zod.z.string(),
  association_type_Id: import_zod.z.number()
});
var associationSchema = import_zod.z.object({
  to: import_zod.z.number(),
  types: import_zod.z.array(associationTypesSchema)
});
var createTaskInputSchema = import_zod.z.object({
  task_type: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  title: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  priority: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  assigned_to: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  due_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  notes: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  associations: import_zod.z.union([import_zod.z.array(associationSchema), import_zod.z.undefined()]).optional()
});
var updateTaskInputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  task_type: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  title: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  priority: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  assigned_to: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  due_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  notes: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  associations: import_zod.z.union([import_zod.z.array(associationSchema), import_zod.z.undefined()]).optional()
});
var createUpdateTaskOutputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  task_type: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  title: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  priority: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  assigned_to: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  due_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  notes: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  associations: import_zod.z.union([import_zod.z.array(associationSchema), import_zod.z.undefined()]).optional()
});
var associationCompanySchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string().nullable()
});
var associationContactSchema = import_zod.z.object({
  id: import_zod.z.string(),
  first_name: import_zod.z.string().nullable(),
  last_name: import_zod.z.string().nullable()
});
var associationDealSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string().nullable()
});
var returnedAssociationsSchema = import_zod.z.object({
  companies: import_zod.z.union([import_zod.z.array(associationCompanySchema), import_zod.z.undefined()]).optional(),
  contacts: import_zod.z.union([import_zod.z.array(associationContactSchema), import_zod.z.undefined()]).optional(),
  deals: import_zod.z.union([import_zod.z.array(associationDealSchema), import_zod.z.undefined()]).optional()
});
var taskSchema = import_zod.z.object({
  id: import_zod.z.string(),
  task_type: import_zod.z.string().nullable(),
  title: import_zod.z.string().nullable(),
  priority: import_zod.z.string().nullable(),
  assigned_to: import_zod.z.string().nullable(),
  due_date: import_zod.z.string().nullable(),
  notes: import_zod.z.string().nullable(),
  returned_associations: import_zod.z.union([returnedAssociationsSchema, import_zod.z.undefined()]).optional()
});
var createDealInputSchema = import_zod.z.object({
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  amount: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  close_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_description: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_probability: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  associations: import_zod.z.union([import_zod.z.array(associationSchema), import_zod.z.undefined()]).optional()
});
var updateDealInputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  amount: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  close_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_description: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_probability: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  associations: import_zod.z.union([import_zod.z.array(associationSchema), import_zod.z.undefined()]).optional()
});
var createUpdateDealOutputSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  amount: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  close_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_description: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  deal_probability: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional()
});
var dealSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string().nullable(),
  amount: import_zod.z.string().nullable(),
  close_date: import_zod.z.string().nullable(),
  deal_description: import_zod.z.string().nullable(),
  owner: import_zod.z.string().nullable(),
  deal_stage: import_zod.z.string().nullable(),
  deal_probability: import_zod.z.string().nullable(),
  returned_associations: import_zod.z.union([returnedAssociationsSchema, import_zod.z.undefined()]).optional()
});
var noteSchema = import_zod.z.object({
  id: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  time_stamp: import_zod.z.string(),
  created_date: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  body: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  attachment_ids: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.undefined()]).optional(),
  associations: import_zod.z.union([import_zod.z.array(associationSchema), import_zod.z.undefined()]).optional()
});
var lineItemDefaultPropertiesSchema = import_zod.z.object({
  name: import_zod.z.string(),
  price: import_zod.z.string(),
  quantity: import_zod.z.string(),
  recurringbillingfrequency: import_zod.z.number().nullable(),
  tax: import_zod.z.number().nullable(),
  amount: import_zod.z.string(),
  createdate: import_zod.z.string(),
  description: import_zod.z.string(),
  discount: import_zod.z.number().nullable()
});
var lineItemSchema = import_zod.z.record(import_zod.z.string(), import_zod.z.any()).and(import_zod.z.object({
  name: import_zod.z.string(),
  price: import_zod.z.string(),
  quantity: import_zod.z.string(),
  recurringbillingfrequency: import_zod.z.number().nullable(),
  tax: import_zod.z.number().nullable(),
  amount: import_zod.z.string(),
  createdate: import_zod.z.string(),
  description: import_zod.z.string(),
  discount: import_zod.z.number().nullable(),
  id: import_zod.z.string()
}));
var customObjectSchema = import_zod.z.record(import_zod.z.string(), import_zod.z.any()).and(import_zod.z.object({
  id: import_zod.z.string()
}));
var productSchema = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string(),
  id: import_zod.z.string(),
  amount: import_zod.z.number().nullable(),
  description: import_zod.z.string().nullable(),
  discount: import_zod.z.number().nullable(),
  sku: import_zod.z.string().nullable(),
  url: import_zod.z.string().nullable(),
  name: import_zod.z.string(),
  price: import_zod.z.string(),
  quantity: import_zod.z.number().nullable(),
  recurringBillingFrequency: import_zod.z.number().nullable(),
  tax: import_zod.z.number().nullable()
});
var stageSchema = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string(),
  label: import_zod.z.string(),
  displayOrder: import_zod.z.number(),
  metadata: import_zod.z.object({
    isClosed: import_zod.z.boolean(),
    probability: import_zod.z.string()
  }),
  id: import_zod.z.string(),
  archived: import_zod.z.boolean(),
  writePermissions: import_zod.z.string()
});
var pipelineSchema = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string(),
  label: import_zod.z.string(),
  displayOrder: import_zod.z.number(),
  id: import_zod.z.string(),
  archived: import_zod.z.boolean(),
  stages: import_zod.z.array(stageSchema)
});
var pipelineOutputSchema = import_zod.z.object({
  pipelines: import_zod.z.array(pipelineSchema)
});

// schema.ts
var typeSchema = import_zod2.z.union([import_zod2.z.literal("datetime"), import_zod2.z.literal("string"), import_zod2.z.literal("number"), import_zod2.z.literal("date"), import_zod2.z.literal("enumeration"), import_zod2.z.literal("bool")]);
var fieldTypeSchema = import_zod2.z.union([import_zod2.z.literal("textarea"), import_zod2.z.literal("text"), import_zod2.z.literal("date"), import_zod2.z.literal("file"), import_zod2.z.literal("number"), import_zod2.z.literal("select"), import_zod2.z.literal("radio"), import_zod2.z.literal("checkbox"), import_zod2.z.literal("booleancheckbox"), import_zod2.z.literal("calculation_equation")]);
var CreateContactInputSchema = createContactInputSchema.refine((data) => {
  return data.email || data.first_name || data.last_name;
}, {
  message: "At least one of the following properties must be present: email, firstname, or lastname."
});
var UpdateContactInputSchema = updateContactInputSchema.refine((data) => {
  const hasEmailOrId = data.email !== void 0 || data.id !== void 0;
  const hasOtherProperties = Object.keys(data).some(
    // eslint-disable-next-line @nangohq/custom-integrations-linting/no-object-casting
    (key) => key !== "email" && key !== "id" && data[key] !== void 0
  );
  return hasEmailOrId && hasOtherProperties;
}, {
  message: "At least one of the following properties must be present: email or id, and at least one other property must be specified."
});
var UpdateCompanyInputSchema = updateCompanyInputSchema.refine((data) => {
  const hasId = data.id !== void 0;
  const hasOtherProperties = Object.keys(data).some((key) => key !== "id" && data[key] !== void 0);
  return hasId && hasOtherProperties;
}, {
  message: "The 'id' property must be present and at least one other property must be specified."
});
var CreateTaskInputSchema = import_zod2.z.intersection(createTaskInputSchema, import_zod2.z.object({
  task_type: import_zod2.z.literal("TODO"),
  priority: import_zod2.z.enum(["LOW", "MEDIUM", "HIGH"]),
  due_date: import_zod2.z.string().min(1, {
    message: "Due date is required."
  })
}));
var UpdateTaskInputSchema = import_zod2.z.intersection(updateTaskInputSchema, import_zod2.z.object({})).refine((data) => {
  const hasId = data.id !== void 0;
  const hasOtherProperties = Object.keys(data).some((key) => key !== "id" && data[key] !== void 0);
  return hasId && hasOtherProperties;
}, {
  message: "The 'id' property must be present and at least one other property must be specified."
});
var UpdateDealInputSchema = import_zod2.z.intersection(updateDealInputSchema, import_zod2.z.object({})).refine((data) => {
  const hasId = data.id !== void 0;
  const hasOtherProperties = Object.keys(data).some((key) => key !== "id" && data[key] !== void 0);
  return hasId && hasOtherProperties;
}, {
  message: "The 'id' property must be present and at least one other property must be specified."
});
var CreatePropertyInputSchema = createPropertyInputSchema.extend({
  data: createPropertyInputSchema.shape.data.extend({
    type: typeSchema,
    fieldType: fieldTypeSchema
  })
}).superRefine((data, ctx) => {
  const {
    type,
    options
  } = data.data;
  if (type === "enumeration" && !options) {
    ctx.addIssue({
      code: import_zod2.z.ZodIssueCode.custom,
      message: "If the input type is enumeration, options must be provided",
      path: ["data", "options"]
    });
  }
});

// hubspot/mappers/toCompany.ts
function createUpdateCompany(company) {
  return {
    id: company.id,
    created_date: company.createdAt,
    name: company.properties.name,
    industry: company.properties.industry,
    description: company.properties.description,
    country: company.properties.country,
    city: company.properties.city,
    lead_status: company.properties.hs_lead_status,
    lifecycle_stage: company.properties.lifecyclestage,
    owner: company.properties.hubspot_owner_id,
    year_founded: company.properties.founded_year,
    website_url: company.properties.website
  };
}
function toHubspotCompany(company) {
  const hubSpotCompany = {
    properties: {}
  };
  if (company.name) {
    hubSpotCompany.properties.name = company.name;
  }
  if (company.industry) {
    hubSpotCompany.properties.industry = company.industry;
  }
  if (company.description) {
    hubSpotCompany.properties.description = company.description;
  }
  if (company.country) {
    hubSpotCompany.properties.country = company.country;
  }
  if (company.city) {
    hubSpotCompany.properties.city = company.city;
  }
  if (company.lead_status) {
    hubSpotCompany.properties.hs_lead_status = company.lead_status;
  }
  if (company.lifecycle_stage) {
    hubSpotCompany.properties.lifecyclestage = company.lifecycle_stage;
  }
  if (company.owner) {
    hubSpotCompany.properties.hubspot_owner_id = company.owner;
  }
  if (company.year_founded) {
    hubSpotCompany.properties.founded_year = company.year_founded;
  }
  if (company.website_url) {
    hubSpotCompany.properties.website = company.website_url;
  }
  return hubSpotCompany;
}

// models.ts
var import_zod3 = require("zod");
var IdEntity = import_zod3.z.object({
  id: import_zod3.z.string()
});
var SuccessResponse = import_zod3.z.object({
  success: import_zod3.z.boolean()
});
var Id = import_zod3.z.object({
  id: import_zod3.z.string()
});
var Timestamps = import_zod3.z.object({
  updatedAt: import_zod3.z.string(),
  createdAt: import_zod3.z.string()
});
var OptionalObjectType = import_zod3.z.object({
  objectType: import_zod3.z.string().optional()
});
var InputProperty = import_zod3.z.object({
  name: import_zod3.z.string()
});
var Option = import_zod3.z.object({
  label: import_zod3.z.string(),
  value: import_zod3.z.string(),
  displayOrder: import_zod3.z.number(),
  hidden: import_zod3.z.boolean()
});
var Property = import_zod3.z.object({
  createdAt: import_zod3.z.string().optional(),
  updatedAt: import_zod3.z.string().optional(),
  name: import_zod3.z.string(),
  label: import_zod3.z.string(),
  type: import_zod3.z.string(),
  fieldType: import_zod3.z.string(),
  description: import_zod3.z.string(),
  groupName: import_zod3.z.string(),
  options: import_zod3.z.any().optional().array(),
  displayOrder: import_zod3.z.number(),
  calculated: import_zod3.z.boolean(),
  externalOptions: import_zod3.z.boolean(),
  hasUniqueValue: import_zod3.z.boolean(),
  hidden: import_zod3.z.boolean(),
  hubspotDefined: import_zod3.z.boolean().optional(),
  showCurrencySymbol: import_zod3.z.boolean().optional(),
  modificationMetadata: import_zod3.z.object({
    archivable: import_zod3.z.boolean().optional(),
    readOnlyDefinition: import_zod3.z.boolean().optional(),
    readOnlyValue: import_zod3.z.boolean().optional(),
    readOnlyOptions: import_zod3.z.boolean().optional()
  }).optional(),
  formField: import_zod3.z.boolean(),
  dataSensitivity: import_zod3.z.string()
}).catchall(import_zod3.z.any());
var PropertyResponse = import_zod3.z.object({
  results: Property.array()
});
var CustomPropertyOption = import_zod3.z.object({
  hidden: import_zod3.z.boolean(),
  displayOrder: import_zod3.z.number().optional(),
  description: import_zod3.z.string().optional(),
  label: import_zod3.z.string(),
  value: import_zod3.z.string()
});
var CustomProperty = import_zod3.z.object({
  hidden: import_zod3.z.boolean().optional(),
  displayOrder: import_zod3.z.number().optional(),
  description: import_zod3.z.string().optional(),
  label: import_zod3.z.string(),
  type: import_zod3.z.string(),
  formField: import_zod3.z.boolean().optional(),
  groupName: import_zod3.z.string(),
  referencedObjectType: import_zod3.z.string().optional(),
  name: import_zod3.z.string(),
  options: CustomPropertyOption.array(),
  calculationFormula: import_zod3.z.string().optional(),
  hasUniqueValue: import_zod3.z.boolean().optional(),
  fieldType: import_zod3.z.string(),
  externalOptions: import_zod3.z.boolean().optional()
});
var CreatePropertyInput = import_zod3.z.object({
  objectType: import_zod3.z.string(),
  data: CustomProperty
});
var CreatedProperty = import_zod3.z.object({
  createdUserId: import_zod3.z.string(),
  hidden: import_zod3.z.boolean(),
  modificationMetadata: import_zod3.z.object({
    readOnlyOptions: import_zod3.z.boolean().optional(),
    readOnlyValue: import_zod3.z.boolean(),
    readOnlyDefinition: import_zod3.z.boolean(),
    archivable: import_zod3.z.boolean()
  }),
  displayOrder: import_zod3.z.number(),
  description: import_zod3.z.string(),
  showCurrencySymbol: import_zod3.z.boolean().optional(),
  label: import_zod3.z.string(),
  type: import_zod3.z.string(),
  hubspotDefined: import_zod3.z.boolean().optional(),
  formField: import_zod3.z.boolean(),
  dataSensitivity: import_zod3.z.string().optional(),
  createdAt: import_zod3.z.string(),
  archivedAt: import_zod3.z.string().optional(),
  archived: import_zod3.z.boolean(),
  groupName: import_zod3.z.string(),
  referencedObjectType: import_zod3.z.string().optional(),
  name: import_zod3.z.string(),
  options: import_zod3.z.array(import_zod3.z.object({
    hidden: import_zod3.z.boolean(),
    displayOrder: import_zod3.z.number(),
    description: import_zod3.z.string(),
    label: import_zod3.z.string(),
    value: import_zod3.z.string()
  })),
  calculationFormula: import_zod3.z.string().optional(),
  hasUniqueValue: import_zod3.z.boolean(),
  fieldType: import_zod3.z.string(),
  updatedUserId: import_zod3.z.string(),
  calculated: import_zod3.z.boolean(),
  externalOptions: import_zod3.z.boolean(),
  updatedAt: import_zod3.z.string()
});
var Role = import_zod3.z.object({
  requiresBillingWrite: import_zod3.z.boolean(),
  name: import_zod3.z.string(),
  id: import_zod3.z.string()
});
var RoleResponse = import_zod3.z.object({
  results: Role.array()
});
var UserRoleInput = import_zod3.z.object({
  id: import_zod3.z.string(),
  firstName: import_zod3.z.string().optional(),
  lastName: import_zod3.z.string().optional(),
  primaryTeamId: import_zod3.z.string().optional()
});
var CreatedUser = import_zod3.z.object({
  id: import_zod3.z.string(),
  firstName: import_zod3.z.string(),
  lastName: import_zod3.z.string(),
  primaryTeamId: import_zod3.z.string().optional(),
  email: import_zod3.z.string(),
  sendWelcomeEmail: import_zod3.z.boolean(),
  roleIds: import_zod3.z.string().array(),
  secondaryTeamIds: import_zod3.z.string().array(),
  superAdmin: import_zod3.z.boolean()
});
var ChangedRoleResponse = import_zod3.z.object({
  id: import_zod3.z.string(),
  firstName: import_zod3.z.string().optional(),
  lastName: import_zod3.z.string().optional(),
  primaryTeamId: import_zod3.z.string().optional(),
  email: import_zod3.z.string(),
  sendWelcomeEmail: import_zod3.z.boolean().optional(),
  roleIds: import_zod3.z.string().array(),
  secondaryTeamIds: import_zod3.z.string().optional().array(),
  superAdmin: import_zod3.z.boolean()
});
var HubspotServiceTicket = import_zod3.z.object({
  id: import_zod3.z.string(),
  createdAt: import_zod3.z.date(),
  updatedAt: import_zod3.z.date(),
  isArchived: import_zod3.z.boolean(),
  subject: import_zod3.z.string(),
  content: import_zod3.z.string(),
  objectId: import_zod3.z.number(),
  ownerId: import_zod3.z.number(),
  pipeline: import_zod3.z.number(),
  pipelineStage: import_zod3.z.number(),
  ticketCategory: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  ticketPriority: import_zod3.z.string()
});
var HubspotOwner = import_zod3.z.object({
  id: import_zod3.z.string(),
  email: import_zod3.z.string(),
  firstName: import_zod3.z.string(),
  lastName: import_zod3.z.string(),
  userId: import_zod3.z.number(),
  createdAt: import_zod3.z.date(),
  updatedAt: import_zod3.z.date(),
  archived: import_zod3.z.boolean()
});
var User = import_zod3.z.object({
  id: import_zod3.z.string(),
  email: import_zod3.z.string(),
  firstName: import_zod3.z.string(),
  lastName: import_zod3.z.string(),
  roleIds: import_zod3.z.string().array(),
  primaryTeamId: import_zod3.z.string().optional(),
  superAdmin: import_zod3.z.boolean()
});
var CreateUser = import_zod3.z.object({
  firstName: import_zod3.z.string().optional(),
  lastName: import_zod3.z.string().optional(),
  primaryTeamId: import_zod3.z.string().optional(),
  email: import_zod3.z.string(),
  sendWelcomeEmail: import_zod3.z.boolean().optional(),
  roleId: import_zod3.z.string().optional(),
  secondaryTeamIds: import_zod3.z.string().optional().array()
});
var UserInformation = import_zod3.z.object({
  id: import_zod3.z.number(),
  email: import_zod3.z.string()
});
var HubspotKnowledgeBase = import_zod3.z.object({
  id: import_zod3.z.string(),
  title: import_zod3.z.string(),
  description: import_zod3.z.string(),
  category: import_zod3.z.string(),
  content: import_zod3.z.string(),
  publishDate: import_zod3.z.number()
});
var CreateContactInput = import_zod3.z.object({
  first_name: import_zod3.z.string().optional(),
  last_name: import_zod3.z.string().optional(),
  email: import_zod3.z.string().optional(),
  job_title: import_zod3.z.string().optional(),
  lead_status: import_zod3.z.string().optional(),
  lifecycle_stage: import_zod3.z.string().optional(),
  salutation: import_zod3.z.string().optional(),
  mobile_phone_number: import_zod3.z.string().optional(),
  website_url: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional()
});
var CreateUpdateContactOutput = import_zod3.z.object({
  id: import_zod3.z.string(),
  created_date: import_zod3.z.string(),
  first_name: import_zod3.z.string().optional(),
  last_name: import_zod3.z.string().optional(),
  email: import_zod3.z.string().optional(),
  job_title: import_zod3.z.string().optional(),
  last_contacted: import_zod3.z.string().optional(),
  last_activity_date: import_zod3.z.string().optional(),
  lead_status: import_zod3.z.string().optional(),
  lifecycle_stage: import_zod3.z.string().optional(),
  salutation: import_zod3.z.string().optional(),
  mobile_phone_number: import_zod3.z.string().optional(),
  website_url: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional()
});
var UpdateContactInput = import_zod3.z.object({
  first_name: import_zod3.z.string().optional(),
  last_name: import_zod3.z.string().optional(),
  email: import_zod3.z.string().optional(),
  job_title: import_zod3.z.string().optional(),
  lead_status: import_zod3.z.string().optional(),
  lifecycle_stage: import_zod3.z.string().optional(),
  salutation: import_zod3.z.string().optional(),
  mobile_phone_number: import_zod3.z.string().optional(),
  website_url: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  id: import_zod3.z.string()
});
var Contact = import_zod3.z.object({
  id: import_zod3.z.string(),
  created_date: import_zod3.z.string(),
  first_name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  last_name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  email: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  job_title: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  last_contacted: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  last_activity_date: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  lead_status: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  lifecycle_stage: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  salutation: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  mobile_phone_number: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  website_url: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  owner: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()])
});
var CurrencyCode = import_zod3.z.object({
  id: import_zod3.z.string(),
  code: import_zod3.z.string(),
  description: import_zod3.z.string()
});
var CreateCompanyInput = import_zod3.z.object({
  name: import_zod3.z.string().optional(),
  industry: import_zod3.z.string().optional(),
  description: import_zod3.z.string().optional(),
  country: import_zod3.z.string().optional(),
  city: import_zod3.z.string().optional(),
  lead_status: import_zod3.z.string().optional(),
  lifecycle_stage: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  year_founded: import_zod3.z.string().optional(),
  website_url: import_zod3.z.string().optional()
});
var UpdateCompanyInput = import_zod3.z.object({
  id: import_zod3.z.string(),
  name: import_zod3.z.string().optional(),
  industry: import_zod3.z.string().optional(),
  description: import_zod3.z.string().optional(),
  country: import_zod3.z.string().optional(),
  city: import_zod3.z.string().optional(),
  lead_status: import_zod3.z.string().optional(),
  lifecycle_stage: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  year_founded: import_zod3.z.string().optional(),
  website_url: import_zod3.z.string().optional()
});
var CreateUpdateCompanyOutput = import_zod3.z.object({
  id: import_zod3.z.string(),
  created_date: import_zod3.z.string(),
  name: import_zod3.z.string().optional(),
  industry: import_zod3.z.string().optional(),
  description: import_zod3.z.string().optional(),
  country: import_zod3.z.string().optional(),
  city: import_zod3.z.string().optional(),
  lead_status: import_zod3.z.string().optional(),
  lifecycle_stage: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  year_founded: import_zod3.z.string().optional(),
  website_url: import_zod3.z.string().optional()
});
var Company = import_zod3.z.object({
  id: import_zod3.z.string(),
  created_date: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  industry: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  description: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  country: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  city: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  lead_status: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  lifecycle_stage: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  owner: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  year_founded: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  website_url: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()])
});
var Account = import_zod3.z.object({
  id: import_zod3.z.string(),
  type: import_zod3.z.string(),
  timeZone: import_zod3.z.string(),
  companyCurrency: import_zod3.z.string(),
  additionalCurrencies: import_zod3.z.string().array(),
  utcOffset: import_zod3.z.string(),
  utcOffsetMilliseconds: import_zod3.z.number(),
  uiDomain: import_zod3.z.string(),
  dataHostingLocation: import_zod3.z.string()
});
var AssociationTypes = import_zod3.z.object({
  association_category: import_zod3.z.string(),
  association_type_Id: import_zod3.z.number()
});
var Association = import_zod3.z.object({
  to: import_zod3.z.number(),
  types: AssociationTypes.array()
});
var CreateTaskInput = import_zod3.z.object({
  task_type: import_zod3.z.string().optional(),
  title: import_zod3.z.string().optional(),
  priority: import_zod3.z.string().optional(),
  assigned_to: import_zod3.z.string().optional(),
  due_date: import_zod3.z.string().optional(),
  notes: import_zod3.z.string().optional(),
  associations: Association.array().optional()
});
var UpdateTaskInput = import_zod3.z.object({
  id: import_zod3.z.string(),
  task_type: import_zod3.z.string().optional(),
  title: import_zod3.z.string().optional(),
  priority: import_zod3.z.string().optional(),
  assigned_to: import_zod3.z.string().optional(),
  due_date: import_zod3.z.string().optional(),
  notes: import_zod3.z.string().optional(),
  associations: Association.array().optional()
});
var CreateUpdateTaskOutput = import_zod3.z.object({
  id: import_zod3.z.string(),
  task_type: import_zod3.z.string().optional(),
  title: import_zod3.z.string().optional(),
  priority: import_zod3.z.string().optional(),
  assigned_to: import_zod3.z.string().optional(),
  due_date: import_zod3.z.string().optional(),
  notes: import_zod3.z.string().optional(),
  associations: Association.array().optional()
});
var AssociationCompany = import_zod3.z.object({
  id: import_zod3.z.string(),
  name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()])
});
var AssociationContact = import_zod3.z.object({
  id: import_zod3.z.string(),
  first_name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  last_name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()])
});
var AssociationDeal = import_zod3.z.object({
  id: import_zod3.z.string(),
  name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()])
});
var ReturnedAssociations = import_zod3.z.object({
  companies: AssociationCompany.array().optional(),
  contacts: AssociationContact.array().optional(),
  deals: AssociationDeal.array().optional()
});
var Task = import_zod3.z.object({
  id: import_zod3.z.string(),
  task_type: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  title: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  priority: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  assigned_to: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  due_date: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  notes: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  returned_associations: ReturnedAssociations.optional()
});
var CreateDealInput = import_zod3.z.object({
  name: import_zod3.z.string().optional(),
  amount: import_zod3.z.string().optional(),
  close_date: import_zod3.z.string().optional(),
  deal_description: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  deal_stage: import_zod3.z.string().optional(),
  deal_probability: import_zod3.z.string().optional(),
  associations: Association.array().optional()
});
var UpdateDealInput = import_zod3.z.object({
  id: import_zod3.z.string(),
  name: import_zod3.z.string().optional(),
  amount: import_zod3.z.string().optional(),
  close_date: import_zod3.z.string().optional(),
  deal_description: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  deal_stage: import_zod3.z.string().optional(),
  deal_probability: import_zod3.z.string().optional(),
  associations: Association.array().optional()
});
var CreateUpdateDealOutput = import_zod3.z.object({
  id: import_zod3.z.string(),
  name: import_zod3.z.string().optional(),
  amount: import_zod3.z.string().optional(),
  close_date: import_zod3.z.string().optional(),
  deal_description: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  deal_stage: import_zod3.z.string().optional(),
  deal_probability: import_zod3.z.string().optional()
});
var Deal = import_zod3.z.object({
  id: import_zod3.z.string(),
  name: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  amount: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  close_date: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  deal_description: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  owner: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  deal_stage: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  deal_probability: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  returned_associations: ReturnedAssociations.optional()
});
var Note = import_zod3.z.object({
  id: import_zod3.z.string().optional(),
  time_stamp: import_zod3.z.string(),
  created_date: import_zod3.z.string().optional(),
  body: import_zod3.z.string().optional(),
  attachment_ids: import_zod3.z.string().optional(),
  owner: import_zod3.z.string().optional(),
  associations: Association.array().optional()
});
var LineItemDefaultProperties = import_zod3.z.object({
  name: import_zod3.z.string(),
  price: import_zod3.z.string(),
  quantity: import_zod3.z.string(),
  recurringbillingfrequency: import_zod3.z.union([import_zod3.z.null(), import_zod3.z.number()]),
  tax: import_zod3.z.union([import_zod3.z.null(), import_zod3.z.number()]),
  amount: import_zod3.z.string(),
  createdate: import_zod3.z.string(),
  description: import_zod3.z.string(),
  discount: import_zod3.z.union([import_zod3.z.null(), import_zod3.z.number()])
});
var LineItem = import_zod3.z.object({
  name: import_zod3.z.string(),
  price: import_zod3.z.string(),
  quantity: import_zod3.z.string(),
  recurringbillingfrequency: import_zod3.z.union([import_zod3.z.null(), import_zod3.z.number()]),
  tax: import_zod3.z.union([import_zod3.z.null(), import_zod3.z.number()]),
  amount: import_zod3.z.string(),
  createdate: import_zod3.z.string(),
  description: import_zod3.z.string(),
  discount: import_zod3.z.union([import_zod3.z.null(), import_zod3.z.number()]),
  id: import_zod3.z.string()
}).catchall(import_zod3.z.any());
var CustomObject = import_zod3.z.object({
  id: import_zod3.z.string()
}).catchall(import_zod3.z.any());
var Product = import_zod3.z.object({
  updatedAt: import_zod3.z.string(),
  createdAt: import_zod3.z.string(),
  id: import_zod3.z.string(),
  amount: import_zod3.z.union([import_zod3.z.number(), import_zod3.z.null()]),
  description: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  discount: import_zod3.z.union([import_zod3.z.number(), import_zod3.z.null()]),
  sku: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  url: import_zod3.z.union([import_zod3.z.string(), import_zod3.z.null()]),
  name: import_zod3.z.string(),
  price: import_zod3.z.string(),
  quantity: import_zod3.z.union([import_zod3.z.number(), import_zod3.z.null()]),
  recurringBillingFrequency: import_zod3.z.union([import_zod3.z.number(), import_zod3.z.null()]),
  tax: import_zod3.z.union([import_zod3.z.null(), import_zod3.z.number()])
});
var Stage = import_zod3.z.object({
  updatedAt: import_zod3.z.string(),
  createdAt: import_zod3.z.string(),
  label: import_zod3.z.string(),
  displayOrder: import_zod3.z.number(),
  metadata: import_zod3.z.object({
    isClosed: import_zod3.z.boolean(),
    probability: import_zod3.z.string()
  }),
  id: import_zod3.z.string(),
  archived: import_zod3.z.boolean(),
  writePermissions: import_zod3.z.string()
});
var Pipeline = import_zod3.z.object({
  updatedAt: import_zod3.z.string(),
  createdAt: import_zod3.z.string(),
  label: import_zod3.z.string(),
  displayOrder: import_zod3.z.number(),
  id: import_zod3.z.string(),
  archived: import_zod3.z.boolean(),
  stages: Stage.array()
});
var PipelineOutput = import_zod3.z.object({
  pipelines: Pipeline.array()
});

// hubspot/actions/update-company.ts
var action = {
  type: "action",
  description: "Update a single company in Hubspot",
  version: "1.0.0",
  endpoint: {
    method: "PATCH",
    path: "/companies",
    group: "Companies"
  },
  input: UpdateCompanyInput,
  output: CreateUpdateCompanyOutput,
  scopes: ["crm.objects.companies.write", "oauth"],
  exec: async (nango, input) => {
    const parsedInput = await nango.zodValidateInput({
      zodSchema: UpdateCompanyInputSchema,
      input
    });
    const hubSpotCompany = toHubspotCompany(parsedInput.data);
    const config = {
      //https://developers.hubspot.com/docs/api/crm/companies#update-companies
      endpoint: `crm/v3/objects/companies/${parsedInput.data.id}`,
      data: hubSpotCompany,
      retries: 3
    };
    const response = await nango.patch(config);
    return createUpdateCompany(response.data);
  }
};
var update_company_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaHVic3BvdC9hY3Rpb25zL3VwZGF0ZS1jb21wYW55LnRzIiwgInNjaGVtYS50cyIsICJzY2hlbWEuem9kLnRzIiwgImh1YnNwb3QvbWFwcGVycy90b0NvbXBhbnkudHMiLCAibW9kZWxzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICduYW5nbyc7XG5pbXBvcnQgeyBVcGRhdGVDb21wYW55SW5wdXRTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEuanMnO1xuaW1wb3J0IHsgY3JlYXRlVXBkYXRlQ29tcGFueSwgdG9IdWJzcG90Q29tcGFueSB9IGZyb20gJy4uL21hcHBlcnMvdG9Db21wYW55LmpzJztcbmltcG9ydCB0eXBlIHsgUHJveHlDb25maWd1cmF0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHsgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCwgVXBkYXRlQ29tcGFueUlucHV0IH0gZnJvbSAnLi4vLi4vbW9kZWxzLmpzJztcbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdVcGRhdGUgYSBzaW5nbGUgY29tcGFueSBpbiBIdWJzcG90JyxcbiAgdmVyc2lvbjogJzEuMC4wJyxcbiAgZW5kcG9pbnQ6IHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgcGF0aDogJy9jb21wYW5pZXMnLFxuICAgIGdyb3VwOiAnQ29tcGFuaWVzJ1xuICB9LFxuICBpbnB1dDogVXBkYXRlQ29tcGFueUlucHV0LFxuICBvdXRwdXQ6IENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQsXG4gIHNjb3BlczogWydjcm0ub2JqZWN0cy5jb21wYW5pZXMud3JpdGUnLCAnb2F1dGgnXSxcbiAgZXhlYzogYXN5bmMgKG5hbmdvLCBpbnB1dCk6IFByb21pc2U8Q3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dD4gPT4ge1xuICAgIGNvbnN0IHBhcnNlZElucHV0ID0gYXdhaXQgbmFuZ28uem9kVmFsaWRhdGVJbnB1dCh7XG4gICAgICB6b2RTY2hlbWE6IFVwZGF0ZUNvbXBhbnlJbnB1dFNjaGVtYSxcbiAgICAgIGlucHV0XG4gICAgfSk7XG4gICAgY29uc3QgaHViU3BvdENvbXBhbnkgPSB0b0h1YnNwb3RDb21wYW55KHBhcnNlZElucHV0LmRhdGEpO1xuICAgIGNvbnN0IGNvbmZpZzogUHJveHlDb25maWd1cmF0aW9uID0ge1xuICAgICAgLy9odHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcGkvY3JtL2NvbXBhbmllcyN1cGRhdGUtY29tcGFuaWVzXG4gICAgICBlbmRwb2ludDogYGNybS92My9vYmplY3RzL2NvbXBhbmllcy8ke3BhcnNlZElucHV0LmRhdGEuaWR9YCxcbiAgICAgIGRhdGE6IGh1YlNwb3RDb21wYW55LFxuICAgICAgcmV0cmllczogM1xuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuYW5nby5wYXRjaChjb25maWcpO1xuICAgIHJldHVybiBjcmVhdGVVcGRhdGVDb21wYW55KHJlc3BvbnNlLmRhdGEpO1xuICB9XG59O1xuZXhwb3J0IHR5cGUgTmFuZ29BY3Rpb25Mb2NhbCA9IFBhcmFtZXRlcnM8KHR5cGVvZiBhY3Rpb24pWydleGVjJ10+WzBdO1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9uOyIsICJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RJbnB1dFNjaGVtYSBhcyBDcmVhdGVDb250YWN0U2NoZW1hLCB1cGRhdGVDb250YWN0SW5wdXRTY2hlbWEgYXMgVXBkYXRlQ29udGFjdFNjaGVtYSwgdXBkYXRlQ29tcGFueUlucHV0U2NoZW1hIGFzIFVwZGF0ZUNvbXBhbnlTY2hlbWEsIHVwZGF0ZURlYWxJbnB1dFNjaGVtYSBhcyBVcGRhdGVEZWFsU2NoZW1hLCB1cGRhdGVUYXNrSW5wdXRTY2hlbWEgYXMgVXBkYXRlVGFza1NjaGVtYSwgY3JlYXRlVGFza0lucHV0U2NoZW1hIGFzIENyZWF0ZVRhc2tTY2hlbWEsIGNyZWF0ZVByb3BlcnR5SW5wdXRTY2hlbWEgYXMgQ3JlYXRlUHJvcGVydHlTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS56b2QuanMnO1xuY29uc3QgdHlwZVNjaGVtYSA9IHoudW5pb24oW3oubGl0ZXJhbCgnZGF0ZXRpbWUnKSwgei5saXRlcmFsKCdzdHJpbmcnKSwgei5saXRlcmFsKCdudW1iZXInKSwgei5saXRlcmFsKCdkYXRlJyksIHoubGl0ZXJhbCgnZW51bWVyYXRpb24nKSwgei5saXRlcmFsKCdib29sJyldKTtcbmNvbnN0IGZpZWxkVHlwZVNjaGVtYSA9IHoudW5pb24oW3oubGl0ZXJhbCgndGV4dGFyZWEnKSwgei5saXRlcmFsKCd0ZXh0JyksIHoubGl0ZXJhbCgnZGF0ZScpLCB6LmxpdGVyYWwoJ2ZpbGUnKSwgei5saXRlcmFsKCdudW1iZXInKSwgei5saXRlcmFsKCdzZWxlY3QnKSwgei5saXRlcmFsKCdyYWRpbycpLCB6LmxpdGVyYWwoJ2NoZWNrYm94JyksIHoubGl0ZXJhbCgnYm9vbGVhbmNoZWNrYm94JyksIHoubGl0ZXJhbCgnY2FsY3VsYXRpb25fZXF1YXRpb24nKV0pO1xuZXhwb3J0IGNvbnN0IENyZWF0ZUNvbnRhY3RJbnB1dFNjaGVtYSA9IENyZWF0ZUNvbnRhY3RTY2hlbWEucmVmaW5lKChkYXRhOiB6LmluZmVyPHR5cGVvZiBDcmVhdGVDb250YWN0U2NoZW1hPikgPT4ge1xuICByZXR1cm4gZGF0YS5lbWFpbCB8fCBkYXRhLmZpcnN0X25hbWUgfHwgZGF0YS5sYXN0X25hbWU7XG59LCB7XG4gIG1lc3NhZ2U6ICdBdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIG11c3QgYmUgcHJlc2VudDogZW1haWwsIGZpcnN0bmFtZSwgb3IgbGFzdG5hbWUuJ1xufSk7XG5leHBvcnQgY29uc3QgVXBkYXRlQ29udGFjdElucHV0U2NoZW1hID0gVXBkYXRlQ29udGFjdFNjaGVtYS5yZWZpbmUoKGRhdGE6IHouaW5mZXI8dHlwZW9mIFVwZGF0ZUNvbnRhY3RTY2hlbWE+KSA9PiB7XG4gIGNvbnN0IGhhc0VtYWlsT3JJZCA9IGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCB8fCBkYXRhLmlkICE9PSB1bmRlZmluZWQ7XG4gIGNvbnN0IGhhc090aGVyUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvbWUoXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmFuZ29ocS9jdXN0b20taW50ZWdyYXRpb25zLWxpbnRpbmcvbm8tb2JqZWN0LWNhc3RpbmdcbiAga2V5ID0+IGtleSAhPT0gJ2VtYWlsJyAmJiBrZXkgIT09ICdpZCcgJiYgZGF0YVtrZXkgYXMga2V5b2Ygei5pbmZlcjx0eXBlb2YgVXBkYXRlQ29udGFjdFNjaGVtYT5dICE9PSB1bmRlZmluZWQpO1xuICByZXR1cm4gaGFzRW1haWxPcklkICYmIGhhc090aGVyUHJvcGVydGllcztcbn0sIHtcbiAgbWVzc2FnZTogJ0F0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgbXVzdCBiZSBwcmVzZW50OiBlbWFpbCBvciBpZCwgYW5kIGF0IGxlYXN0IG9uZSBvdGhlciBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZC4nXG59KTtcbmV4cG9ydCBjb25zdCBVcGRhdGVDb21wYW55SW5wdXRTY2hlbWEgPSBVcGRhdGVDb21wYW55U2NoZW1hLnJlZmluZSgoZGF0YTogei5pbmZlcjx0eXBlb2YgVXBkYXRlQ29tcGFueVNjaGVtYT4pID0+IHtcbiAgY29uc3QgaGFzSWQgPSBkYXRhLmlkICE9PSB1bmRlZmluZWQ7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBuYW5nb2hxL2N1c3RvbS1pbnRlZ3JhdGlvbnMtbGludGluZy9uby1vYmplY3QtY2FzdGluZ1xuICBjb25zdCBoYXNPdGhlclByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb21lKGtleSA9PiBrZXkgIT09ICdpZCcgJiYgZGF0YVtrZXkgYXMga2V5b2YgdHlwZW9mIFVwZGF0ZUNvbXBhbnlTY2hlbWEuc2hhcGVdICE9PSB1bmRlZmluZWQpO1xuICByZXR1cm4gaGFzSWQgJiYgaGFzT3RoZXJQcm9wZXJ0aWVzO1xufSwge1xuICBtZXNzYWdlOiBcIlRoZSAnaWQnIHByb3BlcnR5IG11c3QgYmUgcHJlc2VudCBhbmQgYXQgbGVhc3Qgb25lIG90aGVyIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkLlwiXG59KTtcbmV4cG9ydCBjb25zdCBDcmVhdGVUYXNrSW5wdXRTY2hlbWEgPSB6LmludGVyc2VjdGlvbihDcmVhdGVUYXNrU2NoZW1hLCB6Lm9iamVjdCh7XG4gIHRhc2tfdHlwZTogei5saXRlcmFsKCdUT0RPJyksXG4gIHByaW9yaXR5OiB6LmVudW0oWydMT1cnLCAnTUVESVVNJywgJ0hJR0gnXSksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm1pbigxLCB7XG4gICAgbWVzc2FnZTogJ0R1ZSBkYXRlIGlzIHJlcXVpcmVkLidcbiAgfSlcbn0pKTtcbmV4cG9ydCBjb25zdCBVcGRhdGVUYXNrSW5wdXRTY2hlbWEgPSB6LmludGVyc2VjdGlvbihVcGRhdGVUYXNrU2NoZW1hLCB6Lm9iamVjdCh7fSkpLnJlZmluZShkYXRhID0+IHtcbiAgY29uc3QgaGFzSWQgPSBkYXRhLmlkICE9PSB1bmRlZmluZWQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmFuZ29ocS9jdXN0b20taW50ZWdyYXRpb25zLWxpbnRpbmcvbm8tb2JqZWN0LWNhc3RpbmdcbiAgY29uc3QgaGFzT3RoZXJQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoZGF0YSkuc29tZShrZXkgPT4ga2V5ICE9PSAnaWQnICYmIGRhdGFba2V5IGFzIGtleW9mIHouaW5mZXI8dHlwZW9mIFVwZGF0ZVRhc2tTY2hlbWE+XSAhPT0gdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGhhc0lkICYmIGhhc090aGVyUHJvcGVydGllcztcbn0sIHtcbiAgbWVzc2FnZTogXCJUaGUgJ2lkJyBwcm9wZXJ0eSBtdXN0IGJlIHByZXNlbnQgYW5kIGF0IGxlYXN0IG9uZSBvdGhlciBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZC5cIlxufSk7XG5leHBvcnQgY29uc3QgVXBkYXRlRGVhbElucHV0U2NoZW1hID0gei5pbnRlcnNlY3Rpb24oVXBkYXRlRGVhbFNjaGVtYSwgei5vYmplY3Qoe30pKS5yZWZpbmUoZGF0YSA9PiB7XG4gIGNvbnN0IGhhc0lkID0gZGF0YS5pZCAhPT0gdW5kZWZpbmVkO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5hbmdvaHEvY3VzdG9tLWludGVncmF0aW9ucy1saW50aW5nL25vLW9iamVjdC1jYXN0aW5nXG4gIGNvbnN0IGhhc090aGVyUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvbWUoa2V5ID0+IGtleSAhPT0gJ2lkJyAmJiBkYXRhW2tleSBhcyBrZXlvZiB6LmluZmVyPHR5cGVvZiBVcGRhdGVEZWFsU2NoZW1hPl0gIT09IHVuZGVmaW5lZCk7XG4gIHJldHVybiBoYXNJZCAmJiBoYXNPdGhlclByb3BlcnRpZXM7XG59LCB7XG4gIG1lc3NhZ2U6IFwiVGhlICdpZCcgcHJvcGVydHkgbXVzdCBiZSBwcmVzZW50IGFuZCBhdCBsZWFzdCBvbmUgb3RoZXIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQuXCJcbn0pO1xuZXhwb3J0IGNvbnN0IENyZWF0ZVByb3BlcnR5SW5wdXRTY2hlbWEgPSBDcmVhdGVQcm9wZXJ0eVNjaGVtYS5leHRlbmQoe1xuICBkYXRhOiBDcmVhdGVQcm9wZXJ0eVNjaGVtYS5zaGFwZS5kYXRhLmV4dGVuZCh7XG4gICAgdHlwZTogdHlwZVNjaGVtYSxcbiAgICBmaWVsZFR5cGU6IGZpZWxkVHlwZVNjaGVtYVxuICB9KVxufSkuc3VwZXJSZWZpbmUoKGRhdGE6IHouaW5mZXI8dHlwZW9mIENyZWF0ZVByb3BlcnR5U2NoZW1hPiAmIHtcbiAgZGF0YToge1xuICAgIHR5cGU6IHouaW5mZXI8dHlwZW9mIHR5cGVTY2hlbWE+O1xuICAgIGZpZWxkVHlwZTogei5pbmZlcjx0eXBlb2YgZmllbGRUeXBlU2NoZW1hPjtcbiAgfTtcbn0sIGN0eDogei5SZWZpbmVtZW50Q3R4KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLFxuICAgIG9wdGlvbnNcbiAgfSA9IGRhdGEuZGF0YTtcbiAgaWYgKHR5cGUgPT09ICdlbnVtZXJhdGlvbicgJiYgIW9wdGlvbnMpIHtcbiAgICBjdHguYWRkSXNzdWUoe1xuICAgICAgY29kZTogei5ab2RJc3N1ZUNvZGUuY3VzdG9tLFxuICAgICAgbWVzc2FnZTogJ0lmIHRoZSBpbnB1dCB0eXBlIGlzIGVudW1lcmF0aW9uLCBvcHRpb25zIG11c3QgYmUgcHJvdmlkZWQnLFxuICAgICAgcGF0aDogWydkYXRhJywgJ29wdGlvbnMnXVxuICAgIH0pO1xuICB9XG59KTsiLCAiLy8gR2VuZXJhdGVkIGJ5IHRzLXRvLXpvZFxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5leHBvcnQgY29uc3QgaWRFbnRpdHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBzdWNjZXNzUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBpZFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IHRpbWVzdGFtcHNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBvcHRpb25hbE9iamVjdFR5cGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgaW5wdXRQcm9wZXJ0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3Qgb3B0aW9uU2NoZW1hID0gei5vYmplY3Qoe1xuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdmFsdWU6IHouc3RyaW5nKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgY29uc3QgcHJvcGVydHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiB6LmFycmF5KG9wdGlvblNjaGVtYSksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgY2FsY3VsYXRlZDogei5ib29sZWFuKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgaHVic3BvdERlZmluZWQ6IHouYm9vbGVhbigpLFxuICBzaG93Q3VycmVuY3lTeW1ib2w6IHouYm9vbGVhbigpLFxuICBtb2RpZmljYXRpb25NZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGFyY2hpdmFibGU6IHouYm9vbGVhbigpLFxuICAgIHJlYWRPbmx5RGVmaW5pdGlvbjogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlWYWx1ZTogei5ib29sZWFuKClcbiAgfSksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCksXG4gIGRhdGFTZW5zaXRpdml0eTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgcHJvcGVydHlSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcmVzdWx0OiBwcm9wZXJ0eVNjaGVtYVxufSk7XG5leHBvcnQgY29uc3QgY3VzdG9tUHJvcGVydHlPcHRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdmFsdWU6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGN1c3RvbVByb3BlcnR5U2NoZW1hID0gei5vYmplY3Qoe1xuICBoaWRkZW46IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIHJlZmVyZW5jZWRPYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkoY3VzdG9tUHJvcGVydHlPcHRpb25TY2hlbWEpLm9wdGlvbmFsKCksXG4gIGNhbGN1bGF0aW9uRm9ybXVsYTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBoYXNVbmlxdWVWYWx1ZTogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICBleHRlcm5hbE9wdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb3BlcnR5SW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG9iamVjdFR5cGU6IHouc3RyaW5nKCksXG4gIGRhdGE6IGN1c3RvbVByb3BlcnR5U2NoZW1hXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVkUHJvcGVydHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNyZWF0ZWRVc2VySWQ6IHouc3RyaW5nKCksXG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIG1vZGlmaWNhdGlvbk1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgcmVhZE9ubHlPcHRpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5VmFsdWU6IHouYm9vbGVhbigpLFxuICAgIHJlYWRPbmx5RGVmaW5pdGlvbjogei5ib29sZWFuKCksXG4gICAgYXJjaGl2YWJsZTogei5ib29sZWFuKClcbiAgfSksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIGh1YnNwb3REZWZpbmVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLFxuICBkYXRhU2Vuc2l0aXZpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBhcmNoaXZlZEF0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICByZWZlcmVuY2VkT2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiB6LmFycmF5KHoub2JqZWN0KHtcbiAgICBoaWRkZW46IHouYm9vbGVhbigpLFxuICAgIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgICBsYWJlbDogei5zdHJpbmcoKSxcbiAgICB2YWx1ZTogei5zdHJpbmcoKVxuICB9KSksXG4gIGNhbGN1bGF0aW9uRm9ybXVsYTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBoYXNVbmlxdWVWYWx1ZTogei5ib29sZWFuKCksXG4gIGZpZWxkVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZFVzZXJJZDogei5zdHJpbmcoKSxcbiAgY2FsY3VsYXRlZDogei5ib29sZWFuKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3Qgcm9sZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcmVxdWlyZXNCaWxsaW5nV3JpdGU6IHouYm9vbGVhbigpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3Qgcm9sZVJlc3BvbnNlU2NoZW1hID0gei5vYmplY3Qoe1xuICByZXN1bHRzOiB6LmFycmF5KHJvbGVTY2hlbWEpXG59KTtcbmV4cG9ydCBjb25zdCB1c2VyUm9sZUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlZFVzZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKSxcbiAgcm9sZUlkczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgc3VwZXJBZG1pbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNoYW5nZWRSb2xlUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgcm9sZUlkczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5hcnJheSh6LnN0cmluZygpKS5vcHRpb25hbCgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgY29uc3QgaHVic3BvdFNlcnZpY2VUaWNrZXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6Lm51bWJlcigpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBpc0FyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgc3ViamVjdDogei5zdHJpbmcoKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgb2JqZWN0SWQ6IHoubnVtYmVyKCksXG4gIG93bmVySWQ6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lOiB6Lm51bWJlcigpLFxuICBwaXBlbGluZVN0YWdlOiB6Lm51bWJlcigpLFxuICB0aWNrZXRDYXRlZ29yeTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB0aWNrZXRQcmlvcml0eTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgaHVic3BvdE93bmVyU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5udW1iZXIoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHVzZXJJZDogei5udW1iZXIoKSxcbiAgY3JlYXRlZEF0OiB6LmRhdGUoKSxcbiAgdXBkYXRlZEF0OiB6LmRhdGUoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCB1c2VyU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHJvbGVJZHM6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gIHByaW1hcnlUZWFtSWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlVXNlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHJvbGVJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGh1YnNwb3RLbm93bGVkZ2VCYXNlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBjYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgcHVibGlzaERhdGU6IHoubnVtYmVyKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRhY3RJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZmlyc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxhc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgam9iX3RpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBmaXJzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsYXN0X2NvbnRhY3RlZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxhc3RfYWN0aXZpdHlfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ29udGFjdElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBmaXJzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBjb250YWN0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBmaXJzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxhc3RfbmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBlbWFpbDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBqb2JfdGl0bGU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9jb250YWN0ZWQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBzYWx1dGF0aW9uOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgY3VycmVuY3lDb2RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY29kZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbXBhbnlJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY2l0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbXBhbnlJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY291bnRyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaW5kdXN0cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY29tcGFueVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGluZHVzdHJ5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGNvdW50cnk6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFjY291bnRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICB0aW1lWm9uZTogei5zdHJpbmcoKSxcbiAgY29tcGFueUN1cnJlbmN5OiB6LnN0cmluZygpLFxuICBhZGRpdGlvbmFsQ3VycmVuY2llczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgdXRjT2Zmc2V0OiB6LnN0cmluZygpLFxuICB1dGNPZmZzZXRNaWxsaXNlY29uZHM6IHoubnVtYmVyKCksXG4gIHVpRG9tYWluOiB6LnN0cmluZygpLFxuICBkYXRhSG9zdGluZ0xvY2F0aW9uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvblR5cGVzU2NoZW1hID0gei5vYmplY3Qoe1xuICBhc3NvY2lhdGlvbl9jYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgYXNzb2NpYXRpb25fdHlwZV9JZDogei5udW1iZXIoKVxufSk7XG5leHBvcnQgY29uc3QgYXNzb2NpYXRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRvOiB6Lm51bWJlcigpLFxuICB0eXBlczogei5hcnJheShhc3NvY2lhdGlvblR5cGVzU2NoZW1hKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlVGFza0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICB0YXNrX3R5cGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB0aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYXNzaWduZWRfdG86IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkdWVfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG5vdGVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uU2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVRhc2tJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlVXBkYXRlVGFza091dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgYXNzb2NpYXRpb25Db21wYW55U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvbkNvbnRhY3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxhc3RfbmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvbkRlYWxTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IHJldHVybmVkQXNzb2NpYXRpb25zU2NoZW1hID0gei5vYmplY3Qoe1xuICBjb21wYW5pZXM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25Db21wYW55U2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNvbnRhY3RzOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uQ29udGFjdFNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvbkRlYWxTY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdGFza1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB0aXRsZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBwcmlvcml0eTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBhc3NpZ25lZF90bzogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkdWVfZGF0ZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBub3Rlczogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICByZXR1cm5lZF9hc3NvY2lhdGlvbnM6IHoudW5pb24oW3JldHVybmVkQXNzb2NpYXRpb25zU2NoZW1hLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlRGVhbElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYW1vdW50OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY2xvc2VfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uU2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURlYWxJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlVXBkYXRlRGVhbE91dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBkZWFsU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgY2xvc2VfZGF0ZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGRlYWxfc3RhZ2U6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICByZXR1cm5lZF9hc3NvY2lhdGlvbnM6IHoudW5pb24oW3JldHVybmVkQXNzb2NpYXRpb25zU2NoZW1hLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3Qgbm90ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB0aW1lX3N0YW1wOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBib2R5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYXR0YWNobWVudF9pZHM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBsaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzU2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgdGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6Lm51bWJlcigpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGxpbmVJdGVtU2NoZW1hID0gei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkuYW5kKHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgcHJpY2U6IHouc3RyaW5nKCksXG4gIHF1YW50aXR5OiB6LnN0cmluZygpLFxuICByZWN1cnJpbmdiaWxsaW5nZnJlcXVlbmN5OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIHRheDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRhdGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBkaXNjb3VudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBpZDogei5zdHJpbmcoKVxufSkpO1xuZXhwb3J0IGNvbnN0IGN1c3RvbU9iamVjdFNjaGVtYSA9IHoucmVjb3JkKHouc3RyaW5nKCksIHouYW55KCkpLmFuZCh6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KSk7XG5leHBvcnQgY29uc3QgcHJvZHVjdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhbW91bnQ6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGlzY291bnQ6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgc2t1OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHVybDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgcmVjdXJyaW5nQmlsbGluZ0ZyZXF1ZW5jeTogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICB0YXg6IHoubnVtYmVyKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3Qgc3RhZ2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBtZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGlzQ2xvc2VkOiB6LmJvb2xlYW4oKSxcbiAgICBwcm9iYWJpbGl0eTogei5zdHJpbmcoKVxuICB9KSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgd3JpdGVQZXJtaXNzaW9uczogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgcGlwZWxpbmVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdGFnZXM6IHouYXJyYXkoc3RhZ2VTY2hlbWEpXG59KTtcbmV4cG9ydCBjb25zdCBwaXBlbGluZU91dHB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcGlwZWxpbmVzOiB6LmFycmF5KHBpcGVsaW5lU2NoZW1hKVxufSk7IiwgImltcG9ydCB0eXBlIHsgQ29tcGFueSwgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCwgQ3JlYXRlQ29tcGFueUlucHV0LCBVcGRhdGVDb21wYW55SW5wdXQgfSBmcm9tICcuLi8uLi9tb2RlbHMuanMnO1xuaW1wb3J0IHR5cGUgeyBIdWJTcG90Q29tcGFueSwgSHViU3BvdENvbXBhbnlOb25VbmRlZmluZWQsIEh1YlNwb3RDb21wYW55Tm9uTnVsbCB9IGZyb20gJy4uL3R5cGVzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiB0b0NvbXBhbnkoY29tcGFueTogSHViU3BvdENvbXBhbnlOb25VbmRlZmluZWQpOiBDb21wYW55IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogY29tcGFueS5pZCxcbiAgICBjcmVhdGVkX2RhdGU6IGNvbXBhbnkuY3JlYXRlZEF0LFxuICAgIG5hbWU6IGNvbXBhbnkucHJvcGVydGllcy5uYW1lLFxuICAgIGluZHVzdHJ5OiBjb21wYW55LnByb3BlcnRpZXMuaW5kdXN0cnksXG4gICAgZGVzY3JpcHRpb246IGNvbXBhbnkucHJvcGVydGllcy5kZXNjcmlwdGlvbixcbiAgICBjb3VudHJ5OiBjb21wYW55LnByb3BlcnRpZXMuY291bnRyeSxcbiAgICBjaXR5OiBjb21wYW55LnByb3BlcnRpZXMuY2l0eSxcbiAgICBsZWFkX3N0YXR1czogY29tcGFueS5wcm9wZXJ0aWVzLmhzX2xlYWRfc3RhdHVzLFxuICAgIGxpZmVjeWNsZV9zdGFnZTogY29tcGFueS5wcm9wZXJ0aWVzLmxpZmVjeWNsZXN0YWdlLFxuICAgIG93bmVyOiBjb21wYW55LnByb3BlcnRpZXMuaHVic3BvdF9vd25lcl9pZCxcbiAgICB5ZWFyX2ZvdW5kZWQ6IGNvbXBhbnkucHJvcGVydGllcy5mb3VuZGVkX3llYXIsXG4gICAgd2Vic2l0ZV91cmw6IGNvbXBhbnkucHJvcGVydGllcy53ZWJzaXRlXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXBkYXRlQ29tcGFueShjb21wYW55OiBIdWJTcG90Q29tcGFueU5vbk51bGwpOiBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogY29tcGFueS5pZCxcbiAgICBjcmVhdGVkX2RhdGU6IGNvbXBhbnkuY3JlYXRlZEF0LFxuICAgIG5hbWU6IGNvbXBhbnkucHJvcGVydGllcy5uYW1lLFxuICAgIGluZHVzdHJ5OiBjb21wYW55LnByb3BlcnRpZXMuaW5kdXN0cnksXG4gICAgZGVzY3JpcHRpb246IGNvbXBhbnkucHJvcGVydGllcy5kZXNjcmlwdGlvbixcbiAgICBjb3VudHJ5OiBjb21wYW55LnByb3BlcnRpZXMuY291bnRyeSxcbiAgICBjaXR5OiBjb21wYW55LnByb3BlcnRpZXMuY2l0eSxcbiAgICBsZWFkX3N0YXR1czogY29tcGFueS5wcm9wZXJ0aWVzLmhzX2xlYWRfc3RhdHVzLFxuICAgIGxpZmVjeWNsZV9zdGFnZTogY29tcGFueS5wcm9wZXJ0aWVzLmxpZmVjeWNsZXN0YWdlLFxuICAgIG93bmVyOiBjb21wYW55LnByb3BlcnRpZXMuaHVic3BvdF9vd25lcl9pZCxcbiAgICB5ZWFyX2ZvdW5kZWQ6IGNvbXBhbnkucHJvcGVydGllcy5mb3VuZGVkX3llYXIsXG4gICAgd2Vic2l0ZV91cmw6IGNvbXBhbnkucHJvcGVydGllcy53ZWJzaXRlXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdG9IdWJzcG90Q29tcGFueShjb21wYW55OiBDcmVhdGVDb21wYW55SW5wdXQgfCBVcGRhdGVDb21wYW55SW5wdXQpOiBQYXJ0aWFsPEh1YlNwb3RDb21wYW55PiB7XG4gIGNvbnN0IGh1YlNwb3RDb21wYW55OiBQYXJ0aWFsPEh1YlNwb3RDb21wYW55PiA9IHtcbiAgICBwcm9wZXJ0aWVzOiB7fVxuICB9O1xuICBpZiAoY29tcGFueS5uYW1lKSB7XG4gICAgaHViU3BvdENvbXBhbnkucHJvcGVydGllcyEubmFtZSA9IGNvbXBhbnkubmFtZTtcbiAgfVxuICBpZiAoY29tcGFueS5pbmR1c3RyeSkge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLmluZHVzdHJ5ID0gY29tcGFueS5pbmR1c3RyeTtcbiAgfVxuICBpZiAoY29tcGFueS5kZXNjcmlwdGlvbikge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLmRlc2NyaXB0aW9uID0gY29tcGFueS5kZXNjcmlwdGlvbjtcbiAgfVxuICBpZiAoY29tcGFueS5jb3VudHJ5KSB7XG4gICAgaHViU3BvdENvbXBhbnkucHJvcGVydGllcyEuY291bnRyeSA9IGNvbXBhbnkuY291bnRyeTtcbiAgfVxuICBpZiAoY29tcGFueS5jaXR5KSB7XG4gICAgaHViU3BvdENvbXBhbnkucHJvcGVydGllcyEuY2l0eSA9IGNvbXBhbnkuY2l0eTtcbiAgfVxuICBpZiAoY29tcGFueS5sZWFkX3N0YXR1cykge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLmhzX2xlYWRfc3RhdHVzID0gY29tcGFueS5sZWFkX3N0YXR1cztcbiAgfVxuICBpZiAoY29tcGFueS5saWZlY3ljbGVfc3RhZ2UpIHtcbiAgICBodWJTcG90Q29tcGFueS5wcm9wZXJ0aWVzIS5saWZlY3ljbGVzdGFnZSA9IGNvbXBhbnkubGlmZWN5Y2xlX3N0YWdlO1xuICB9XG4gIGlmIChjb21wYW55Lm93bmVyKSB7XG4gICAgaHViU3BvdENvbXBhbnkucHJvcGVydGllcyEuaHVic3BvdF9vd25lcl9pZCA9IGNvbXBhbnkub3duZXI7XG4gIH1cbiAgaWYgKGNvbXBhbnkueWVhcl9mb3VuZGVkKSB7XG4gICAgaHViU3BvdENvbXBhbnkucHJvcGVydGllcyEuZm91bmRlZF95ZWFyID0gY29tcGFueS55ZWFyX2ZvdW5kZWQ7XG4gIH1cbiAgaWYgKGNvbXBhbnkud2Vic2l0ZV91cmwpIHtcbiAgICBodWJTcG90Q29tcGFueS5wcm9wZXJ0aWVzIS53ZWJzaXRlID0gY29tcGFueS53ZWJzaXRlX3VybDtcbiAgfVxuICByZXR1cm4gaHViU3BvdENvbXBhbnk7XG59IiwgImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5leHBvcnQgY29uc3QgSWRFbnRpdHkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIElkRW50aXR5ID0gei5pbmZlcjx0eXBlb2YgSWRFbnRpdHk+O1xuZXhwb3J0IGNvbnN0IFN1Y2Nlc3NSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgU3VjY2Vzc1Jlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgU3VjY2Vzc1Jlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBJZCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSWQgPSB6LmluZmVyPHR5cGVvZiBJZD47XG5leHBvcnQgY29uc3QgVGltZXN0YW1wcyA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgVGltZXN0YW1wcyA9IHouaW5mZXI8dHlwZW9mIFRpbWVzdGFtcHM+O1xuZXhwb3J0IGNvbnN0IE9wdGlvbmFsT2JqZWN0VHlwZSA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIE9wdGlvbmFsT2JqZWN0VHlwZSA9IHouaW5mZXI8dHlwZW9mIE9wdGlvbmFsT2JqZWN0VHlwZT47XG5leHBvcnQgY29uc3QgSW5wdXRQcm9wZXJ0eSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBJbnB1dFByb3BlcnR5ID0gei5pbmZlcjx0eXBlb2YgSW5wdXRQcm9wZXJ0eT47XG5leHBvcnQgY29uc3QgT3B0aW9uID0gei5vYmplY3Qoe1xuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdmFsdWU6IHouc3RyaW5nKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBPcHRpb24gPSB6LmluZmVyPHR5cGVvZiBPcHRpb24+O1xuZXhwb3J0IGNvbnN0IFByb3BlcnR5ID0gei5vYmplY3Qoe1xuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYW55KCkub3B0aW9uYWwoKS5hcnJheSgpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGNhbGN1bGF0ZWQ6IHouYm9vbGVhbigpLFxuICBleHRlcm5hbE9wdGlvbnM6IHouYm9vbGVhbigpLFxuICBoYXNVbmlxdWVWYWx1ZTogei5ib29sZWFuKCksXG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIGh1YnNwb3REZWZpbmVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBzaG93Q3VycmVuY3lTeW1ib2w6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIG1vZGlmaWNhdGlvbk1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgYXJjaGl2YWJsZTogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICByZWFkT25seURlZmluaXRpb246IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlWYWx1ZTogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICByZWFkT25seU9wdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKClcbiAgfSkub3B0aW9uYWwoKSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKSxcbiAgZGF0YVNlbnNpdGl2aXR5OiB6LnN0cmluZygpXG59KS5jYXRjaGFsbCh6LmFueSgpKTtcbmV4cG9ydCB0eXBlIFByb3BlcnR5ID0gei5pbmZlcjx0eXBlb2YgUHJvcGVydHk+O1xuZXhwb3J0IGNvbnN0IFByb3BlcnR5UmVzcG9uc2UgPSB6Lm9iamVjdCh7XG4gIHJlc3VsdHM6IFByb3BlcnR5LmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgUHJvcGVydHlSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIFByb3BlcnR5UmVzcG9uc2U+O1xuZXhwb3J0IGNvbnN0IEN1c3RvbVByb3BlcnR5T3B0aW9uID0gei5vYmplY3Qoe1xuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHZhbHVlOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIEN1c3RvbVByb3BlcnR5T3B0aW9uID0gei5pbmZlcjx0eXBlb2YgQ3VzdG9tUHJvcGVydHlPcHRpb24+O1xuZXhwb3J0IGNvbnN0IEN1c3RvbVByb3BlcnR5ID0gei5vYmplY3Qoe1xuICBoaWRkZW46IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIHJlZmVyZW5jZWRPYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IEN1c3RvbVByb3BlcnR5T3B0aW9uLmFycmF5KCksXG4gIGNhbGN1bGF0aW9uRm9ybXVsYTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBoYXNVbmlxdWVWYWx1ZTogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICBleHRlcm5hbE9wdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3VzdG9tUHJvcGVydHkgPSB6LmluZmVyPHR5cGVvZiBDdXN0b21Qcm9wZXJ0eT47XG5leHBvcnQgY29uc3QgQ3JlYXRlUHJvcGVydHlJbnB1dCA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKSxcbiAgZGF0YTogQ3VzdG9tUHJvcGVydHlcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlUHJvcGVydHlJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVByb3BlcnR5SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZWRQcm9wZXJ0eSA9IHoub2JqZWN0KHtcbiAgY3JlYXRlZFVzZXJJZDogei5zdHJpbmcoKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgbW9kaWZpY2F0aW9uTWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICByZWFkT25seU9wdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlWYWx1ZTogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKSxcbiAgICBhcmNoaXZhYmxlOiB6LmJvb2xlYW4oKVxuICB9KSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgc2hvd0N1cnJlbmN5U3ltYm9sOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgaHVic3BvdERlZmluZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCksXG4gIGRhdGFTZW5zaXRpdml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIHJlZmVyZW5jZWRPYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGhpZGRlbjogei5ib29sZWFuKCksXG4gICAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICAgIGxhYmVsOiB6LnN0cmluZygpLFxuICAgIHZhbHVlOiB6LnN0cmluZygpXG4gIH0pKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICB1cGRhdGVkVXNlcklkOiB6LnN0cmluZygpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZWRQcm9wZXJ0eSA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZWRQcm9wZXJ0eT47XG5leHBvcnQgY29uc3QgUm9sZSA9IHoub2JqZWN0KHtcbiAgcmVxdWlyZXNCaWxsaW5nV3JpdGU6IHouYm9vbGVhbigpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBSb2xlID0gei5pbmZlcjx0eXBlb2YgUm9sZT47XG5leHBvcnQgY29uc3QgUm9sZVJlc3BvbnNlID0gei5vYmplY3Qoe1xuICByZXN1bHRzOiBSb2xlLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgUm9sZVJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgUm9sZVJlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBVc2VyUm9sZUlucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBVc2VyUm9sZUlucHV0ID0gei5pbmZlcjx0eXBlb2YgVXNlclJvbGVJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlZFVzZXIgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKSxcbiAgcm9sZUlkczogei5zdHJpbmcoKS5hcnJheSgpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZWRVc2VyID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlZFVzZXI+O1xuZXhwb3J0IGNvbnN0IENoYW5nZWRSb2xlUmVzcG9uc2UgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgcm9sZUlkczogei5zdHJpbmcoKS5hcnJheSgpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuYXJyYXkoKSxcbiAgc3VwZXJBZG1pbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgQ2hhbmdlZFJvbGVSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIENoYW5nZWRSb2xlUmVzcG9uc2U+O1xuZXhwb3J0IGNvbnN0IEh1YnNwb3RTZXJ2aWNlVGlja2V0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LmRhdGUoKSxcbiAgdXBkYXRlZEF0OiB6LmRhdGUoKSxcbiAgaXNBcmNoaXZlZDogei5ib29sZWFuKCksXG4gIHN1YmplY3Q6IHouc3RyaW5nKCksXG4gIGNvbnRlbnQ6IHouc3RyaW5nKCksXG4gIG9iamVjdElkOiB6Lm51bWJlcigpLFxuICBvd25lcklkOiB6Lm51bWJlcigpLFxuICBwaXBlbGluZTogei5udW1iZXIoKSxcbiAgcGlwZWxpbmVTdGFnZTogei5udW1iZXIoKSxcbiAgdGlja2V0Q2F0ZWdvcnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHRpY2tldFByaW9yaXR5OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIEh1YnNwb3RTZXJ2aWNlVGlja2V0ID0gei5pbmZlcjx0eXBlb2YgSHVic3BvdFNlcnZpY2VUaWNrZXQ+O1xuZXhwb3J0IGNvbnN0IEh1YnNwb3RPd25lciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLFxuICB1c2VySWQ6IHoubnVtYmVyKCksXG4gIGNyZWF0ZWRBdDogei5kYXRlKCksXG4gIHVwZGF0ZWRBdDogei5kYXRlKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBIdWJzcG90T3duZXIgPSB6LmluZmVyPHR5cGVvZiBIdWJzcG90T3duZXI+O1xuZXhwb3J0IGNvbnN0IFVzZXIgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgcm9sZUlkczogei5zdHJpbmcoKS5hcnJheSgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIFVzZXIgPSB6LmluZmVyPHR5cGVvZiBVc2VyPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVc2VyID0gei5vYmplY3Qoe1xuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgcm9sZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVzZXIgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVc2VyPjtcbmV4cG9ydCBjb25zdCBVc2VySW5mb3JtYXRpb24gPSB6Lm9iamVjdCh7XG4gIGlkOiB6Lm51bWJlcigpLFxuICBlbWFpbDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBVc2VySW5mb3JtYXRpb24gPSB6LmluZmVyPHR5cGVvZiBVc2VySW5mb3JtYXRpb24+O1xuZXhwb3J0IGNvbnN0IEh1YnNwb3RLbm93bGVkZ2VCYXNlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBjYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgcHVibGlzaERhdGU6IHoubnVtYmVyKClcbn0pO1xuZXhwb3J0IHR5cGUgSHVic3BvdEtub3dsZWRnZUJhc2UgPSB6LmluZmVyPHR5cGVvZiBIdWJzcG90S25vd2xlZGdlQmFzZT47XG5leHBvcnQgY29uc3QgQ3JlYXRlQ29udGFjdElucHV0ID0gei5vYmplY3Qoe1xuICBmaXJzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZUNvbnRhY3RJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZUNvbnRhY3RJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXBkYXRlQ29udGFjdE91dHB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKSxcbiAgZmlyc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgam9iX3RpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3RfY29udGFjdGVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3RfYWN0aXZpdHlfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXBkYXRlQ29udGFjdE91dHB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbnRhY3RJbnB1dCA9IHoub2JqZWN0KHtcbiAgZmlyc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgam9iX3RpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBkYXRlQ29udGFjdElucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBkYXRlQ29udGFjdElucHV0PjtcbmV4cG9ydCBjb25zdCBDb250YWN0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBmaXJzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGVtYWlsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBqb2JfdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxhc3RfY29udGFjdGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsYXN0X2FjdGl2aXR5X2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHNhbHV0YXRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBDb250YWN0ID0gei5pbmZlcjx0eXBlb2YgQ29udGFjdD47XG5leHBvcnQgY29uc3QgQ3VycmVuY3lDb2RlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY29kZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3VycmVuY3lDb2RlID0gei5pbmZlcjx0eXBlb2YgQ3VycmVuY3lDb2RlPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVDb21wYW55SW5wdXQgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaW5kdXN0cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY291bnRyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVDb21wYW55SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVDb21wYW55SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbXBhbnlJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaW5kdXN0cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY291bnRyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBVcGRhdGVDb21wYW55SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGRhdGVDb21wYW55SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaW5kdXN0cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY291bnRyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dD47XG5leHBvcnQgY29uc3QgQ29tcGFueSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgaW5kdXN0cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBjb3VudHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBjaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBDb21wYW55ID0gei5pbmZlcjx0eXBlb2YgQ29tcGFueT47XG5leHBvcnQgY29uc3QgQWNjb3VudCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIHRpbWVab25lOiB6LnN0cmluZygpLFxuICBjb21wYW55Q3VycmVuY3k6IHouc3RyaW5nKCksXG4gIGFkZGl0aW9uYWxDdXJyZW5jaWVzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHV0Y09mZnNldDogei5zdHJpbmcoKSxcbiAgdXRjT2Zmc2V0TWlsbGlzZWNvbmRzOiB6Lm51bWJlcigpLFxuICB1aURvbWFpbjogei5zdHJpbmcoKSxcbiAgZGF0YUhvc3RpbmdMb2NhdGlvbjogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBBY2NvdW50ID0gei5pbmZlcjx0eXBlb2YgQWNjb3VudD47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25UeXBlcyA9IHoub2JqZWN0KHtcbiAgYXNzb2NpYXRpb25fY2F0ZWdvcnk6IHouc3RyaW5nKCksXG4gIGFzc29jaWF0aW9uX3R5cGVfSWQ6IHoubnVtYmVyKClcbn0pO1xuZXhwb3J0IHR5cGUgQXNzb2NpYXRpb25UeXBlcyA9IHouaW5mZXI8dHlwZW9mIEFzc29jaWF0aW9uVHlwZXM+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uID0gei5vYmplY3Qoe1xuICB0bzogei5udW1iZXIoKSxcbiAgdHlwZXM6IEFzc29jaWF0aW9uVHlwZXMuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvbiA9IHouaW5mZXI8dHlwZW9mIEFzc29jaWF0aW9uPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVUYXNrSW5wdXQgPSB6Lm9iamVjdCh7XG4gIHRhc2tfdHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkdWVfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVUYXNrSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVUYXNrSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVRhc2tJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkdWVfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBVcGRhdGVUYXNrSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGRhdGVUYXNrSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0YXNrX3R5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzaWduZWRfdG86IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXBkYXRlVGFza091dHB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uQ29tcGFueSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQXNzb2NpYXRpb25Db21wYW55ID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb25Db21wYW55PjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvbkNvbnRhY3QgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQXNzb2NpYXRpb25Db250YWN0ID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb25Db250YWN0PjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvbkRlYWwgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uRGVhbCA9IHouaW5mZXI8dHlwZW9mIEFzc29jaWF0aW9uRGVhbD47XG5leHBvcnQgY29uc3QgUmV0dXJuZWRBc3NvY2lhdGlvbnMgPSB6Lm9iamVjdCh7XG4gIGNvbXBhbmllczogQXNzb2NpYXRpb25Db21wYW55LmFycmF5KCkub3B0aW9uYWwoKSxcbiAgY29udGFjdHM6IEFzc29jaWF0aW9uQ29udGFjdC5hcnJheSgpLm9wdGlvbmFsKCksXG4gIGRlYWxzOiBBc3NvY2lhdGlvbkRlYWwuYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFJldHVybmVkQXNzb2NpYXRpb25zID0gei5pbmZlcjx0eXBlb2YgUmV0dXJuZWRBc3NvY2lhdGlvbnM+O1xuZXhwb3J0IGNvbnN0IFRhc2sgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0YXNrX3R5cGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHRpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBwcmlvcml0eTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgYXNzaWduZWRfdG86IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGR1ZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBub3Rlczogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcmV0dXJuZWRfYXNzb2NpYXRpb25zOiBSZXR1cm5lZEFzc29jaWF0aW9ucy5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFRhc2sgPSB6LmluZmVyPHR5cGVvZiBUYXNrPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVEZWFsSW5wdXQgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlRGVhbElucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlRGVhbElucHV0PjtcbmV4cG9ydCBjb25zdCBVcGRhdGVEZWFsSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVwZGF0ZURlYWxJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZURlYWxJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXBkYXRlRGVhbE91dHB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXBkYXRlRGVhbE91dHB1dD47XG5leHBvcnQgY29uc3QgRGVhbCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGFtb3VudDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgY2xvc2VfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRlYWxfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogUmV0dXJuZWRBc3NvY2lhdGlvbnMub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBEZWFsID0gei5pbmZlcjx0eXBlb2YgRGVhbD47XG5leHBvcnQgY29uc3QgTm90ZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdGltZV9zdGFtcDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGJvZHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXR0YWNobWVudF9pZHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgTm90ZSA9IHouaW5mZXI8dHlwZW9mIE5vdGU+O1xuZXhwb3J0IGNvbnN0IExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXMgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5zdHJpbmcoKSxcbiAgcmVjdXJyaW5nYmlsbGluZ2ZyZXF1ZW5jeTogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKSxcbiAgdGF4OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICBhbW91bnQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRhdGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBkaXNjb3VudDogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKVxufSk7XG5leHBvcnQgdHlwZSBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzID0gei5pbmZlcjx0eXBlb2YgTGluZUl0ZW1EZWZhdWx0UHJvcGVydGllcz47XG5leHBvcnQgY29uc3QgTGluZUl0ZW0gPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5zdHJpbmcoKSxcbiAgcmVjdXJyaW5nYmlsbGluZ2ZyZXF1ZW5jeTogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKSxcbiAgdGF4OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICBhbW91bnQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRhdGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBkaXNjb3VudDogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKSxcbiAgaWQ6IHouc3RyaW5nKClcbn0pLmNhdGNoYWxsKHouYW55KCkpO1xuZXhwb3J0IHR5cGUgTGluZUl0ZW0gPSB6LmluZmVyPHR5cGVvZiBMaW5lSXRlbT47XG5leHBvcnQgY29uc3QgQ3VzdG9tT2JqZWN0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSkuY2F0Y2hhbGwoei5hbnkoKSk7XG5leHBvcnQgdHlwZSBDdXN0b21PYmplY3QgPSB6LmluZmVyPHR5cGVvZiBDdXN0b21PYmplY3Q+O1xuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYW1vdW50OiB6LnVuaW9uKFt6Lm51bWJlcigpLCB6Lm51bGwoKV0pLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGlzY291bnQ6IHoudW5pb24oW3oubnVtYmVyKCksIHoubnVsbCgpXSksXG4gIHNrdTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHoudW5pb24oW3oubnVtYmVyKCksIHoubnVsbCgpXSksXG4gIHJlY3VycmluZ0JpbGxpbmdGcmVxdWVuY3k6IHoudW5pb24oW3oubnVtYmVyKCksIHoubnVsbCgpXSksXG4gIHRheDogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKVxufSk7XG5leHBvcnQgdHlwZSBQcm9kdWN0ID0gei5pbmZlcjx0eXBlb2YgUHJvZHVjdD47XG5leHBvcnQgY29uc3QgU3RhZ2UgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBtZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGlzQ2xvc2VkOiB6LmJvb2xlYW4oKSxcbiAgICBwcm9iYWJpbGl0eTogei5zdHJpbmcoKVxuICB9KSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgd3JpdGVQZXJtaXNzaW9uczogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBTdGFnZSA9IHouaW5mZXI8dHlwZW9mIFN0YWdlPjtcbmV4cG9ydCBjb25zdCBQaXBlbGluZSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIHN0YWdlczogU3RhZ2UuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBQaXBlbGluZSA9IHouaW5mZXI8dHlwZW9mIFBpcGVsaW5lPjtcbmV4cG9ydCBjb25zdCBQaXBlbGluZU91dHB1dCA9IHoub2JqZWN0KHtcbiAgcGlwZWxpbmVzOiBQaXBlbGluZS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIFBpcGVsaW5lT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgUGlwZWxpbmVPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IG1vZGVscyA9IHtcbiAgSWRFbnRpdHk6IElkRW50aXR5LFxuICBTdWNjZXNzUmVzcG9uc2U6IFN1Y2Nlc3NSZXNwb25zZSxcbiAgSWQ6IElkLFxuICBUaW1lc3RhbXBzOiBUaW1lc3RhbXBzLFxuICBPcHRpb25hbE9iamVjdFR5cGU6IE9wdGlvbmFsT2JqZWN0VHlwZSxcbiAgSW5wdXRQcm9wZXJ0eTogSW5wdXRQcm9wZXJ0eSxcbiAgT3B0aW9uOiBPcHRpb24sXG4gIFByb3BlcnR5OiBQcm9wZXJ0eSxcbiAgUHJvcGVydHlSZXNwb25zZTogUHJvcGVydHlSZXNwb25zZSxcbiAgQ3VzdG9tUHJvcGVydHlPcHRpb246IEN1c3RvbVByb3BlcnR5T3B0aW9uLFxuICBDdXN0b21Qcm9wZXJ0eTogQ3VzdG9tUHJvcGVydHksXG4gIENyZWF0ZVByb3BlcnR5SW5wdXQ6IENyZWF0ZVByb3BlcnR5SW5wdXQsXG4gIENyZWF0ZWRQcm9wZXJ0eTogQ3JlYXRlZFByb3BlcnR5LFxuICBSb2xlOiBSb2xlLFxuICBSb2xlUmVzcG9uc2U6IFJvbGVSZXNwb25zZSxcbiAgVXNlclJvbGVJbnB1dDogVXNlclJvbGVJbnB1dCxcbiAgQ3JlYXRlZFVzZXI6IENyZWF0ZWRVc2VyLFxuICBDaGFuZ2VkUm9sZVJlc3BvbnNlOiBDaGFuZ2VkUm9sZVJlc3BvbnNlLFxuICBIdWJzcG90U2VydmljZVRpY2tldDogSHVic3BvdFNlcnZpY2VUaWNrZXQsXG4gIEh1YnNwb3RPd25lcjogSHVic3BvdE93bmVyLFxuICBVc2VyOiBVc2VyLFxuICBDcmVhdGVVc2VyOiBDcmVhdGVVc2VyLFxuICBVc2VySW5mb3JtYXRpb246IFVzZXJJbmZvcm1hdGlvbixcbiAgSHVic3BvdEtub3dsZWRnZUJhc2U6IEh1YnNwb3RLbm93bGVkZ2VCYXNlLFxuICBDcmVhdGVDb250YWN0SW5wdXQ6IENyZWF0ZUNvbnRhY3RJbnB1dCxcbiAgQ3JlYXRlVXBkYXRlQ29udGFjdE91dHB1dDogQ3JlYXRlVXBkYXRlQ29udGFjdE91dHB1dCxcbiAgVXBkYXRlQ29udGFjdElucHV0OiBVcGRhdGVDb250YWN0SW5wdXQsXG4gIENvbnRhY3Q6IENvbnRhY3QsXG4gIEN1cnJlbmN5Q29kZTogQ3VycmVuY3lDb2RlLFxuICBDcmVhdGVDb21wYW55SW5wdXQ6IENyZWF0ZUNvbXBhbnlJbnB1dCxcbiAgVXBkYXRlQ29tcGFueUlucHV0OiBVcGRhdGVDb21wYW55SW5wdXQsXG4gIENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQ6IENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQsXG4gIENvbXBhbnk6IENvbXBhbnksXG4gIEFjY291bnQ6IEFjY291bnQsXG4gIEFzc29jaWF0aW9uVHlwZXM6IEFzc29jaWF0aW9uVHlwZXMsXG4gIEFzc29jaWF0aW9uOiBBc3NvY2lhdGlvbixcbiAgQ3JlYXRlVGFza0lucHV0OiBDcmVhdGVUYXNrSW5wdXQsXG4gIFVwZGF0ZVRhc2tJbnB1dDogVXBkYXRlVGFza0lucHV0LFxuICBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0OiBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0LFxuICBBc3NvY2lhdGlvbkNvbXBhbnk6IEFzc29jaWF0aW9uQ29tcGFueSxcbiAgQXNzb2NpYXRpb25Db250YWN0OiBBc3NvY2lhdGlvbkNvbnRhY3QsXG4gIEFzc29jaWF0aW9uRGVhbDogQXNzb2NpYXRpb25EZWFsLFxuICBSZXR1cm5lZEFzc29jaWF0aW9uczogUmV0dXJuZWRBc3NvY2lhdGlvbnMsXG4gIFRhc2s6IFRhc2ssXG4gIENyZWF0ZURlYWxJbnB1dDogQ3JlYXRlRGVhbElucHV0LFxuICBVcGRhdGVEZWFsSW5wdXQ6IFVwZGF0ZURlYWxJbnB1dCxcbiAgQ3JlYXRlVXBkYXRlRGVhbE91dHB1dDogQ3JlYXRlVXBkYXRlRGVhbE91dHB1dCxcbiAgRGVhbDogRGVhbCxcbiAgTm90ZTogTm90ZSxcbiAgTGluZUl0ZW1EZWZhdWx0UHJvcGVydGllczogTGluZUl0ZW1EZWZhdWx0UHJvcGVydGllcyxcbiAgTGluZUl0ZW06IExpbmVJdGVtLFxuICBDdXN0b21PYmplY3Q6IEN1c3RvbU9iamVjdCxcbiAgUHJvZHVjdDogUHJvZHVjdCxcbiAgU3RhZ2U6IFN0YWdlLFxuICBQaXBlbGluZTogUGlwZWxpbmUsXG4gIFBpcGVsaW5lT3V0cHV0OiBQaXBlbGluZU91dHB1dFxufTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLElBQUFBLGNBQWtCOzs7QUNDbEIsaUJBQWtCO0FBQ1gsSUFBTSxpQkFBaUIsYUFBRSxPQUFPO0FBQUEsRUFDckMsSUFBSSxhQUFFLE9BQU87QUFDZixDQUFDO0FBQ00sSUFBTSx3QkFBd0IsYUFBRSxPQUFPO0FBQUEsRUFDNUMsU0FBUyxhQUFFLFFBQVE7QUFDckIsQ0FBQztBQUNNLElBQU0sV0FBVyxhQUFFLE9BQU87QUFBQSxFQUMvQixJQUFJLGFBQUUsT0FBTztBQUNmLENBQUM7QUFD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
