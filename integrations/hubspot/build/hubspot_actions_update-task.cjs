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

// hubspot/actions/update-task.ts
var update_task_exports = {};
__export(update_task_exports, {
  default: () => update_task_default
});
module.exports = __toCommonJS(update_task_exports);

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

// hubspot/mappers/toTask.ts
function createUpdateTask(task) {
  return {
    id: task.id,
    task_type: task.properties.hs_task_type,
    title: task.properties.hs_task_subject,
    priority: task.properties.hs_task_priority,
    assigned_to: task.properties.hubspot_owner_id,
    due_date: task.properties.hs_timestamp,
    notes: task.properties.hs_task_body
  };
}
function toHubspotTask(task) {
  const hubSpotTask = {
    properties: {}
  };
  if (task.title) {
    hubSpotTask.properties.hs_task_subject = task.title;
  }
  if (task.due_date) {
    hubSpotTask.properties.hs_timestamp = task.due_date;
  }
  if (task.priority) {
    hubSpotTask.properties.hs_task_priority = task.priority;
  }
  if (task.assigned_to) {
    hubSpotTask.properties.hubspot_owner_id = task.assigned_to;
  }
  if (task.notes) {
    hubSpotTask.properties.hs_task_body = task.notes;
  }
  if (task.associations) {
    hubSpotTask.associations = task.associations.map((association) => ({
      to: {
        id: association.to
      },
      types: association.types.map((type) => ({
        associationCategory: type.association_category,
        associationTypeId: type.association_type_Id
      }))
    }));
  }
  return hubSpotTask;
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

// hubspot/actions/update-task.ts
var action = {
  type: "action",
  description: "Updates a single company in Hubspot",
  version: "2.0.0",
  endpoint: {
    method: "PATCH",
    path: "/tasks",
    group: "Tasks"
  },
  input: CreateUpdateTaskOutput,
  output: UpdateTaskInput,
  scopes: ["crm.objects.contacts.write", "oauth"],
  exec: async (nango, input) => {
    const parsedInput = await nango.zodValidateInput({
      zodSchema: UpdateTaskInputSchema,
      input
    });
    const hubSpotTask = toHubspotTask(parsedInput.data);
    const config = {
      //https://developers.hubspot.com/docs/api/crm/tasks
      endpoint: `crm/v3/objects/tasks/${parsedInput.data.id}`,
      data: hubSpotTask,
      retries: 3
    };
    const response = await nango.patch(config);
    return createUpdateTask(response.data);
  }
};
var update_task_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaHVic3BvdC9hY3Rpb25zL3VwZGF0ZS10YXNrLnRzIiwgInNjaGVtYS50cyIsICJzY2hlbWEuem9kLnRzIiwgImh1YnNwb3QvbWFwcGVycy90b1Rhc2sudHMiLCAibW9kZWxzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICduYW5nbyc7XG5pbXBvcnQgeyBVcGRhdGVUYXNrSW5wdXRTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEuanMnO1xuaW1wb3J0IHsgY3JlYXRlVXBkYXRlVGFzaywgdG9IdWJzcG90VGFzayB9IGZyb20gJy4uL21hcHBlcnMvdG9UYXNrLmpzJztcbmltcG9ydCB0eXBlIHsgUHJveHlDb25maWd1cmF0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHsgVXBkYXRlVGFza0lucHV0LCBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0IH0gZnJvbSAnLi4vLi4vbW9kZWxzLmpzJztcbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdVcGRhdGVzIGEgc2luZ2xlIGNvbXBhbnkgaW4gSHVic3BvdCcsXG4gIHZlcnNpb246ICcyLjAuMCcsXG4gIGVuZHBvaW50OiB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIHBhdGg6ICcvdGFza3MnLFxuICAgIGdyb3VwOiAnVGFza3MnXG4gIH0sXG4gIGlucHV0OiBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0LFxuICBvdXRwdXQ6IFVwZGF0ZVRhc2tJbnB1dCxcbiAgc2NvcGVzOiBbJ2NybS5vYmplY3RzLmNvbnRhY3RzLndyaXRlJywgJ29hdXRoJ10sXG4gIGV4ZWM6IGFzeW5jIChuYW5nbywgaW5wdXQpOiBQcm9taXNlPFVwZGF0ZVRhc2tJbnB1dD4gPT4ge1xuICAgIGNvbnN0IHBhcnNlZElucHV0ID0gYXdhaXQgbmFuZ28uem9kVmFsaWRhdGVJbnB1dCh7XG4gICAgICB6b2RTY2hlbWE6IFVwZGF0ZVRhc2tJbnB1dFNjaGVtYSxcbiAgICAgIGlucHV0XG4gICAgfSk7XG4gICAgY29uc3QgaHViU3BvdFRhc2sgPSB0b0h1YnNwb3RUYXNrKHBhcnNlZElucHV0LmRhdGEpO1xuICAgIGNvbnN0IGNvbmZpZzogUHJveHlDb25maWd1cmF0aW9uID0ge1xuICAgICAgLy9odHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcGkvY3JtL3Rhc2tzXG4gICAgICBlbmRwb2ludDogYGNybS92My9vYmplY3RzL3Rhc2tzLyR7cGFyc2VkSW5wdXQuZGF0YS5pZH1gLFxuICAgICAgZGF0YTogaHViU3BvdFRhc2ssXG4gICAgICByZXRyaWVzOiAzXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5hbmdvLnBhdGNoKGNvbmZpZyk7XG4gICAgcmV0dXJuIGNyZWF0ZVVwZGF0ZVRhc2socmVzcG9uc2UuZGF0YSk7XG4gIH1cbn07XG5leHBvcnQgdHlwZSBOYW5nb0FjdGlvbkxvY2FsID0gUGFyYW1ldGVyczwodHlwZW9mIGFjdGlvbilbJ2V4ZWMnXT5bMF07XG5leHBvcnQgZGVmYXVsdCBhY3Rpb247IiwgImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdElucHV0U2NoZW1hIGFzIENyZWF0ZUNvbnRhY3RTY2hlbWEsIHVwZGF0ZUNvbnRhY3RJbnB1dFNjaGVtYSBhcyBVcGRhdGVDb250YWN0U2NoZW1hLCB1cGRhdGVDb21wYW55SW5wdXRTY2hlbWEgYXMgVXBkYXRlQ29tcGFueVNjaGVtYSwgdXBkYXRlRGVhbElucHV0U2NoZW1hIGFzIFVwZGF0ZURlYWxTY2hlbWEsIHVwZGF0ZVRhc2tJbnB1dFNjaGVtYSBhcyBVcGRhdGVUYXNrU2NoZW1hLCBjcmVhdGVUYXNrSW5wdXRTY2hlbWEgYXMgQ3JlYXRlVGFza1NjaGVtYSwgY3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSBhcyBDcmVhdGVQcm9wZXJ0eVNjaGVtYSB9IGZyb20gJy4vc2NoZW1hLnpvZC5qcyc7XG5jb25zdCB0eXBlU2NoZW1hID0gei51bmlvbihbei5saXRlcmFsKCdkYXRldGltZScpLCB6LmxpdGVyYWwoJ3N0cmluZycpLCB6LmxpdGVyYWwoJ251bWJlcicpLCB6LmxpdGVyYWwoJ2RhdGUnKSwgei5saXRlcmFsKCdlbnVtZXJhdGlvbicpLCB6LmxpdGVyYWwoJ2Jvb2wnKV0pO1xuY29uc3QgZmllbGRUeXBlU2NoZW1hID0gei51bmlvbihbei5saXRlcmFsKCd0ZXh0YXJlYScpLCB6LmxpdGVyYWwoJ3RleHQnKSwgei5saXRlcmFsKCdkYXRlJyksIHoubGl0ZXJhbCgnZmlsZScpLCB6LmxpdGVyYWwoJ251bWJlcicpLCB6LmxpdGVyYWwoJ3NlbGVjdCcpLCB6LmxpdGVyYWwoJ3JhZGlvJyksIHoubGl0ZXJhbCgnY2hlY2tib3gnKSwgei5saXRlcmFsKCdib29sZWFuY2hlY2tib3gnKSwgei5saXRlcmFsKCdjYWxjdWxhdGlvbl9lcXVhdGlvbicpXSk7XG5leHBvcnQgY29uc3QgQ3JlYXRlQ29udGFjdElucHV0U2NoZW1hID0gQ3JlYXRlQ29udGFjdFNjaGVtYS5yZWZpbmUoKGRhdGE6IHouaW5mZXI8dHlwZW9mIENyZWF0ZUNvbnRhY3RTY2hlbWE+KSA9PiB7XG4gIHJldHVybiBkYXRhLmVtYWlsIHx8IGRhdGEuZmlyc3RfbmFtZSB8fCBkYXRhLmxhc3RfbmFtZTtcbn0sIHtcbiAgbWVzc2FnZTogJ0F0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgbXVzdCBiZSBwcmVzZW50OiBlbWFpbCwgZmlyc3RuYW1lLCBvciBsYXN0bmFtZS4nXG59KTtcbmV4cG9ydCBjb25zdCBVcGRhdGVDb250YWN0SW5wdXRTY2hlbWEgPSBVcGRhdGVDb250YWN0U2NoZW1hLnJlZmluZSgoZGF0YTogei5pbmZlcjx0eXBlb2YgVXBkYXRlQ29udGFjdFNjaGVtYT4pID0+IHtcbiAgY29uc3QgaGFzRW1haWxPcklkID0gZGF0YS5lbWFpbCAhPT0gdW5kZWZpbmVkIHx8IGRhdGEuaWQgIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgaGFzT3RoZXJQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoZGF0YSkuc29tZShcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBuYW5nb2hxL2N1c3RvbS1pbnRlZ3JhdGlvbnMtbGludGluZy9uby1vYmplY3QtY2FzdGluZ1xuICBrZXkgPT4ga2V5ICE9PSAnZW1haWwnICYmIGtleSAhPT0gJ2lkJyAmJiBkYXRhW2tleSBhcyBrZXlvZiB6LmluZmVyPHR5cGVvZiBVcGRhdGVDb250YWN0U2NoZW1hPl0gIT09IHVuZGVmaW5lZCk7XG4gIHJldHVybiBoYXNFbWFpbE9ySWQgJiYgaGFzT3RoZXJQcm9wZXJ0aWVzO1xufSwge1xuICBtZXNzYWdlOiAnQXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBtdXN0IGJlIHByZXNlbnQ6IGVtYWlsIG9yIGlkLCBhbmQgYXQgbGVhc3Qgb25lIG90aGVyIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkLidcbn0pO1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbXBhbnlJbnB1dFNjaGVtYSA9IFVwZGF0ZUNvbXBhbnlTY2hlbWEucmVmaW5lKChkYXRhOiB6LmluZmVyPHR5cGVvZiBVcGRhdGVDb21wYW55U2NoZW1hPikgPT4ge1xuICBjb25zdCBoYXNJZCA9IGRhdGEuaWQgIT09IHVuZGVmaW5lZDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5hbmdvaHEvY3VzdG9tLWludGVncmF0aW9ucy1saW50aW5nL25vLW9iamVjdC1jYXN0aW5nXG4gIGNvbnN0IGhhc090aGVyUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvbWUoa2V5ID0+IGtleSAhPT0gJ2lkJyAmJiBkYXRhW2tleSBhcyBrZXlvZiB0eXBlb2YgVXBkYXRlQ29tcGFueVNjaGVtYS5zaGFwZV0gIT09IHVuZGVmaW5lZCk7XG4gIHJldHVybiBoYXNJZCAmJiBoYXNPdGhlclByb3BlcnRpZXM7XG59LCB7XG4gIG1lc3NhZ2U6IFwiVGhlICdpZCcgcHJvcGVydHkgbXVzdCBiZSBwcmVzZW50IGFuZCBhdCBsZWFzdCBvbmUgb3RoZXIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQuXCJcbn0pO1xuZXhwb3J0IGNvbnN0IENyZWF0ZVRhc2tJbnB1dFNjaGVtYSA9IHouaW50ZXJzZWN0aW9uKENyZWF0ZVRhc2tTY2hlbWEsIHoub2JqZWN0KHtcbiAgdGFza190eXBlOiB6LmxpdGVyYWwoJ1RPRE8nKSxcbiAgcHJpb3JpdHk6IHouZW51bShbJ0xPVycsICdNRURJVU0nLCAnSElHSCddKSxcbiAgZHVlX2RhdGU6IHouc3RyaW5nKCkubWluKDEsIHtcbiAgICBtZXNzYWdlOiAnRHVlIGRhdGUgaXMgcmVxdWlyZWQuJ1xuICB9KVxufSkpO1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVRhc2tJbnB1dFNjaGVtYSA9IHouaW50ZXJzZWN0aW9uKFVwZGF0ZVRhc2tTY2hlbWEsIHoub2JqZWN0KHt9KSkucmVmaW5lKGRhdGEgPT4ge1xuICBjb25zdCBoYXNJZCA9IGRhdGEuaWQgIT09IHVuZGVmaW5lZDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBuYW5nb2hxL2N1c3RvbS1pbnRlZ3JhdGlvbnMtbGludGluZy9uby1vYmplY3QtY2FzdGluZ1xuICBjb25zdCBoYXNPdGhlclByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb21lKGtleSA9PiBrZXkgIT09ICdpZCcgJiYgZGF0YVtrZXkgYXMga2V5b2Ygei5pbmZlcjx0eXBlb2YgVXBkYXRlVGFza1NjaGVtYT5dICE9PSB1bmRlZmluZWQpO1xuICByZXR1cm4gaGFzSWQgJiYgaGFzT3RoZXJQcm9wZXJ0aWVzO1xufSwge1xuICBtZXNzYWdlOiBcIlRoZSAnaWQnIHByb3BlcnR5IG11c3QgYmUgcHJlc2VudCBhbmQgYXQgbGVhc3Qgb25lIG90aGVyIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkLlwiXG59KTtcbmV4cG9ydCBjb25zdCBVcGRhdGVEZWFsSW5wdXRTY2hlbWEgPSB6LmludGVyc2VjdGlvbihVcGRhdGVEZWFsU2NoZW1hLCB6Lm9iamVjdCh7fSkpLnJlZmluZShkYXRhID0+IHtcbiAgY29uc3QgaGFzSWQgPSBkYXRhLmlkICE9PSB1bmRlZmluZWQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmFuZ29ocS9jdXN0b20taW50ZWdyYXRpb25zLWxpbnRpbmcvbm8tb2JqZWN0LWNhc3RpbmdcbiAgY29uc3QgaGFzT3RoZXJQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoZGF0YSkuc29tZShrZXkgPT4ga2V5ICE9PSAnaWQnICYmIGRhdGFba2V5IGFzIGtleW9mIHouaW5mZXI8dHlwZW9mIFVwZGF0ZURlYWxTY2hlbWE+XSAhPT0gdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGhhc0lkICYmIGhhc090aGVyUHJvcGVydGllcztcbn0sIHtcbiAgbWVzc2FnZTogXCJUaGUgJ2lkJyBwcm9wZXJ0eSBtdXN0IGJlIHByZXNlbnQgYW5kIGF0IGxlYXN0IG9uZSBvdGhlciBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZC5cIlxufSk7XG5leHBvcnQgY29uc3QgQ3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSA9IENyZWF0ZVByb3BlcnR5U2NoZW1hLmV4dGVuZCh7XG4gIGRhdGE6IENyZWF0ZVByb3BlcnR5U2NoZW1hLnNoYXBlLmRhdGEuZXh0ZW5kKHtcbiAgICB0eXBlOiB0eXBlU2NoZW1hLFxuICAgIGZpZWxkVHlwZTogZmllbGRUeXBlU2NoZW1hXG4gIH0pXG59KS5zdXBlclJlZmluZSgoZGF0YTogei5pbmZlcjx0eXBlb2YgQ3JlYXRlUHJvcGVydHlTY2hlbWE+ICYge1xuICBkYXRhOiB7XG4gICAgdHlwZTogei5pbmZlcjx0eXBlb2YgdHlwZVNjaGVtYT47XG4gICAgZmllbGRUeXBlOiB6LmluZmVyPHR5cGVvZiBmaWVsZFR5cGVTY2hlbWE+O1xuICB9O1xufSwgY3R4OiB6LlJlZmluZW1lbnRDdHgpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgb3B0aW9uc1xuICB9ID0gZGF0YS5kYXRhO1xuICBpZiAodHlwZSA9PT0gJ2VudW1lcmF0aW9uJyAmJiAhb3B0aW9ucykge1xuICAgIGN0eC5hZGRJc3N1ZSh7XG4gICAgICBjb2RlOiB6LlpvZElzc3VlQ29kZS5jdXN0b20sXG4gICAgICBtZXNzYWdlOiAnSWYgdGhlIGlucHV0IHR5cGUgaXMgZW51bWVyYXRpb24sIG9wdGlvbnMgbXVzdCBiZSBwcm92aWRlZCcsXG4gICAgICBwYXRoOiBbJ2RhdGEnLCAnb3B0aW9ucyddXG4gICAgfSk7XG4gIH1cbn0pOyIsICIvLyBHZW5lcmF0ZWQgYnkgdHMtdG8tem9kXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmV4cG9ydCBjb25zdCBpZEVudGl0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IGNvbnN0IGlkU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgdGltZXN0YW1wc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IG9wdGlvbmFsT2JqZWN0VHlwZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBpbnB1dFByb3BlcnR5U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBvcHRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkob3B0aW9uU2NoZW1hKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBodWJzcG90RGVmaW5lZDogei5ib29sZWFuKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCksXG4gIG1vZGlmaWNhdGlvbk1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgYXJjaGl2YWJsZTogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKSxcbiAgICByZWFkT25seVZhbHVlOiB6LmJvb2xlYW4oKVxuICB9KSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKSxcbiAgZGF0YVNlbnNpdGl2aXR5OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVJlc3BvbnNlU2NoZW1hID0gei5vYmplY3Qoe1xuICByZXN1bHQ6IHByb3BlcnR5U2NoZW1hXG59KTtcbmV4cG9ydCBjb25zdCBjdXN0b21Qcm9wZXJ0eU9wdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgY3VzdG9tUHJvcGVydHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgcmVmZXJlbmNlZE9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogei5hcnJheShjdXN0b21Qcm9wZXJ0eU9wdGlvblNjaGVtYSkub3B0aW9uYWwoKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKSxcbiAgZGF0YTogY3VzdG9tUHJvcGVydHlTY2hlbWFcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZWRQcm9wZXJ0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY3JlYXRlZFVzZXJJZDogei5zdHJpbmcoKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgbW9kaWZpY2F0aW9uTWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICByZWFkT25seU9wdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlWYWx1ZTogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKSxcbiAgICBhcmNoaXZhYmxlOiB6LmJvb2xlYW4oKVxuICB9KSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgc2hvd0N1cnJlbmN5U3ltYm9sOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgaHVic3BvdERlZmluZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCksXG4gIGRhdGFTZW5zaXRpdml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIHJlZmVyZW5jZWRPYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGhpZGRlbjogei5ib29sZWFuKCksXG4gICAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICAgIGxhYmVsOiB6LnN0cmluZygpLFxuICAgIHZhbHVlOiB6LnN0cmluZygpXG4gIH0pKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICB1cGRhdGVkVXNlcklkOiB6LnN0cmluZygpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCByb2xlU2NoZW1hID0gei5vYmplY3Qoe1xuICByZXF1aXJlc0JpbGxpbmdXcml0ZTogei5ib29sZWFuKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCByb2xlUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlc3VsdHM6IHouYXJyYXkocm9sZVNjaGVtYSlcbn0pO1xuZXhwb3J0IGNvbnN0IHVzZXJSb2xlSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVkVXNlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLFxuICByb2xlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgY29uc3QgY2hhbmdlZFJvbGVSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICByb2xlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBodWJzcG90U2VydmljZVRpY2tldFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHoubnVtYmVyKCksXG4gIGNyZWF0ZWRBdDogei5kYXRlKCksXG4gIHVwZGF0ZWRBdDogei5kYXRlKCksXG4gIGlzQXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdWJqZWN0OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBvYmplY3RJZDogei5udW1iZXIoKSxcbiAgb3duZXJJZDogei5udW1iZXIoKSxcbiAgcGlwZWxpbmU6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lU3RhZ2U6IHoubnVtYmVyKCksXG4gIHRpY2tldENhdGVnb3J5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHRpY2tldFByaW9yaXR5OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBodWJzcG90T3duZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6Lm51bWJlcigpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgdXNlcklkOiB6Lm51bWJlcigpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IGNvbnN0IHVzZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgcm9sZUlkczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgcHJpbWFyeVRlYW1JZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyU2NoZW1hID0gei5vYmplY3Qoe1xuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgcm9sZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgaHVic3BvdEtub3dsZWRnZUJhc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGNhdGVnb3J5OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBwdWJsaXNoRGF0ZTogei5udW1iZXIoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGFjdElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBmaXJzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxhc3RfY29udGFjdGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDb250YWN0SW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNvbnRhY3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsYXN0X2NvbnRhY3RlZDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsYXN0X2FjdGl2aXR5X2RhdGU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBvd25lcjogei5zdHJpbmcoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBjdXJyZW5jeUNvZGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjb2RlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29tcGFueUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaW5kdXN0cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ29tcGFueUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY2l0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY291bnRyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjb21wYW55U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgaW5kdXN0cnk6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgY291bnRyeTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBjaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBvd25lcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgYWNjb3VudFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIHRpbWVab25lOiB6LnN0cmluZygpLFxuICBjb21wYW55Q3VycmVuY3k6IHouc3RyaW5nKCksXG4gIGFkZGl0aW9uYWxDdXJyZW5jaWVzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICB1dGNPZmZzZXQ6IHouc3RyaW5nKCksXG4gIHV0Y09mZnNldE1pbGxpc2Vjb25kczogei5udW1iZXIoKSxcbiAgdWlEb21haW46IHouc3RyaW5nKCksXG4gIGRhdGFIb3N0aW5nTG9jYXRpb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uVHlwZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGFzc29jaWF0aW9uX2NhdGVnb3J5OiB6LnN0cmluZygpLFxuICBhc3NvY2lhdGlvbl90eXBlX0lkOiB6Lm51bWJlcigpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdG86IHoubnVtYmVyKCksXG4gIHR5cGVzOiB6LmFycmF5KGFzc29jaWF0aW9uVHlwZXNTY2hlbWEpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRhc2tfdHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlVGFza0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBub3Rlczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVUYXNrT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBub3Rlczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvbkNvbXBhbnlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uQ29udGFjdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uRGVhbFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbXBhbmllczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvbkNvbXBhbnlTY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY29udGFjdHM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25Db250YWN0U2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxzOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uRGVhbFNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCB0YXNrU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogei51bmlvbihbcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEsIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWFsSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGVhbElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVEZWFsT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGRlYWxTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogei51bmlvbihbcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEsIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBub3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpbWVfc3RhbXA6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGJvZHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhdHRhY2htZW50X2lkczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uU2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGxpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5zdHJpbmcoKSxcbiAgcmVjdXJyaW5nYmlsbGluZ2ZyZXF1ZW5jeTogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICB0YXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLFxuICBjcmVhdGVkYXRlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZGlzY291bnQ6IHoubnVtYmVyKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgbGluZUl0ZW1TY2hlbWEgPSB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKS5hbmQoei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgdGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIGlkOiB6LnN0cmluZygpXG59KSk7XG5leHBvcnQgY29uc3QgY3VzdG9tT2JqZWN0U2NoZW1hID0gei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkuYW5kKHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pKTtcbmV4cG9ydCBjb25zdCBwcm9kdWN0U2NoZW1hID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFtb3VudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkaXNjb3VudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBza3U6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgdXJsOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICByZWN1cnJpbmdCaWxsaW5nRnJlcXVlbmN5OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIHRheDogei5udW1iZXIoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBzdGFnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIG1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgaXNDbG9zZWQ6IHouYm9vbGVhbigpLFxuICAgIHByb2JhYmlsaXR5OiB6LnN0cmluZygpXG4gIH0pLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICB3cml0ZVBlcm1pc3Npb25zOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBwaXBlbGluZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIHN0YWdlczogei5hcnJheShzdGFnZVNjaGVtYSlcbn0pO1xuZXhwb3J0IGNvbnN0IHBpcGVsaW5lT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBwaXBlbGluZXM6IHouYXJyYXkocGlwZWxpbmVTY2hlbWEpXG59KTsiLCAiaW1wb3J0IHR5cGUgeyBBc3NvY2lhdGlvbkNvbXBhbnksIEFzc29jaWF0aW9uQ29udGFjdCwgQXNzb2NpYXRpb25EZWFsLCBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0LCBDcmVhdGVUYXNrSW5wdXQsIFVwZGF0ZVRhc2tJbnB1dCwgVGFzayB9IGZyb20gJy4uLy4uL21vZGVscy5qcyc7XG5pbXBvcnQgdHlwZSB7IEh1YlNwb3RUYXNrLCBIdWJTcG90VGFza05vblVuZGVmaW5lZCwgSHViU3BvdFRhc2tOb25OdWxsIH0gZnJvbSAnLi4vdHlwZXMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGFzayh0YXNrOiBIdWJTcG90VGFza05vblVuZGVmaW5lZCwgY29udGFjdHM6IEFzc29jaWF0aW9uQ29udGFjdFtdIHwgdW5kZWZpbmVkLCBjb21wYW5pZXM6IEFzc29jaWF0aW9uQ29tcGFueVtdIHwgdW5kZWZpbmVkLCBkZWFsczogQXNzb2NpYXRpb25EZWFsW10gfCB1bmRlZmluZWQpOiBUYXNrIHtcbiAgY29uc3QgbWFwcGVkQ29tcGFuaWVzOiBBc3NvY2lhdGlvbkNvbXBhbnlbXSA9IChjb21wYW5pZXMgfHwgW10pLm1hcChjb21wYW55ID0+ICh7XG4gICAgaWQ6IGNvbXBhbnkuaWQsXG4gICAgbmFtZTogY29tcGFueS5uYW1lXG4gIH0pKTtcbiAgY29uc3QgbWFwcGVkQ29udGFjdHM6IEFzc29jaWF0aW9uQ29udGFjdFtdID0gKGNvbnRhY3RzIHx8IFtdKS5tYXAoY29udGFjdCA9PiAoe1xuICAgIGlkOiBjb250YWN0LmlkLFxuICAgIGZpcnN0X25hbWU6IGNvbnRhY3QuZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWU6IGNvbnRhY3QubGFzdF9uYW1lXG4gIH0pKTtcbiAgY29uc3QgbWFwcGVkRGVhbHM6IEFzc29jaWF0aW9uRGVhbFtdID0gKGRlYWxzIHx8IFtdKS5tYXAoZGVhbCA9PiAoe1xuICAgIGlkOiBkZWFsLmlkLFxuICAgIG5hbWU6IGRlYWwubmFtZVxuICB9KSk7XG4gIGNvbnN0IHRhc2tPYmplY3Q6IFRhc2sgPSB7XG4gICAgaWQ6IHRhc2suaWQsXG4gICAgdGFza190eXBlOiB0YXNrLnByb3BlcnRpZXMuaHNfdGFza190eXBlLFxuICAgIHRpdGxlOiB0YXNrLnByb3BlcnRpZXMuaHNfdGFza19zdWJqZWN0LFxuICAgIHByaW9yaXR5OiB0YXNrLnByb3BlcnRpZXMuaHNfdGFza19wcmlvcml0eSxcbiAgICBhc3NpZ25lZF90bzogdGFzay5wcm9wZXJ0aWVzLmh1YnNwb3Rfb3duZXJfaWQsXG4gICAgZHVlX2RhdGU6IHRhc2sucHJvcGVydGllcy5oc190aW1lc3RhbXAsXG4gICAgbm90ZXM6IHRhc2sucHJvcGVydGllcy5oc190YXNrX2JvZHlcbiAgfTtcbiAgaWYgKG1hcHBlZENvbXBhbmllcy5sZW5ndGggPiAwIHx8IG1hcHBlZENvbnRhY3RzLmxlbmd0aCA+IDAgfHwgbWFwcGVkRGVhbHMubGVuZ3RoID4gMCkge1xuICAgIHRhc2tPYmplY3QucmV0dXJuZWRfYXNzb2NpYXRpb25zID0ge1xuICAgICAgY29tcGFuaWVzOiBtYXBwZWRDb21wYW5pZXMsXG4gICAgICBjb250YWN0czogbWFwcGVkQ29udGFjdHMsXG4gICAgICBkZWFsczogbWFwcGVkRGVhbHNcbiAgICB9O1xuICB9XG4gIHJldHVybiB0YXNrT2JqZWN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVwZGF0ZVRhc2sodGFzazogSHViU3BvdFRhc2tOb25OdWxsKTogQ3JlYXRlVXBkYXRlVGFza091dHB1dCB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHRhc2suaWQsXG4gICAgdGFza190eXBlOiB0YXNrLnByb3BlcnRpZXMuaHNfdGFza190eXBlLFxuICAgIHRpdGxlOiB0YXNrLnByb3BlcnRpZXMuaHNfdGFza19zdWJqZWN0LFxuICAgIHByaW9yaXR5OiB0YXNrLnByb3BlcnRpZXMuaHNfdGFza19wcmlvcml0eSxcbiAgICBhc3NpZ25lZF90bzogdGFzay5wcm9wZXJ0aWVzLmh1YnNwb3Rfb3duZXJfaWQsXG4gICAgZHVlX2RhdGU6IHRhc2sucHJvcGVydGllcy5oc190aW1lc3RhbXAsXG4gICAgbm90ZXM6IHRhc2sucHJvcGVydGllcy5oc190YXNrX2JvZHlcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0h1YnNwb3RUYXNrKHRhc2s6IENyZWF0ZVRhc2tJbnB1dCB8IFVwZGF0ZVRhc2tJbnB1dCk6IFBhcnRpYWw8SHViU3BvdFRhc2s+IHtcbiAgY29uc3QgaHViU3BvdFRhc2s6IFBhcnRpYWw8SHViU3BvdFRhc2s+ID0ge1xuICAgIHByb3BlcnRpZXM6IHt9XG4gIH07XG4gIGlmICh0YXNrLnRpdGxlKSB7XG4gICAgaHViU3BvdFRhc2sucHJvcGVydGllcyEuaHNfdGFza19zdWJqZWN0ID0gdGFzay50aXRsZTtcbiAgfVxuICBpZiAodGFzay5kdWVfZGF0ZSkge1xuICAgIGh1YlNwb3RUYXNrLnByb3BlcnRpZXMhLmhzX3RpbWVzdGFtcCA9IHRhc2suZHVlX2RhdGU7XG4gIH1cbiAgaWYgKHRhc2sucHJpb3JpdHkpIHtcbiAgICBodWJTcG90VGFzay5wcm9wZXJ0aWVzIS5oc190YXNrX3ByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgfVxuICBpZiAodGFzay5hc3NpZ25lZF90bykge1xuICAgIGh1YlNwb3RUYXNrLnByb3BlcnRpZXMhLmh1YnNwb3Rfb3duZXJfaWQgPSB0YXNrLmFzc2lnbmVkX3RvO1xuICB9XG4gIGlmICh0YXNrLm5vdGVzKSB7XG4gICAgaHViU3BvdFRhc2sucHJvcGVydGllcyEuaHNfdGFza19ib2R5ID0gdGFzay5ub3RlcztcbiAgfVxuICBpZiAodGFzay5hc3NvY2lhdGlvbnMpIHtcbiAgICBodWJTcG90VGFzay5hc3NvY2lhdGlvbnMgPSB0YXNrLmFzc29jaWF0aW9ucy5tYXAoYXNzb2NpYXRpb24gPT4gKHtcbiAgICAgIHRvOiB7XG4gICAgICAgIGlkOiBhc3NvY2lhdGlvbi50b1xuICAgICAgfSxcbiAgICAgIHR5cGVzOiBhc3NvY2lhdGlvbi50eXBlcy5tYXAodHlwZSA9PiAoe1xuICAgICAgICBhc3NvY2lhdGlvbkNhdGVnb3J5OiB0eXBlLmFzc29jaWF0aW9uX2NhdGVnb3J5LFxuICAgICAgICBhc3NvY2lhdGlvblR5cGVJZDogdHlwZS5hc3NvY2lhdGlvbl90eXBlX0lkXG4gICAgICB9KSlcbiAgICB9KSk7XG4gIH1cbiAgcmV0dXJuIGh1YlNwb3RUYXNrO1xufSIsICJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuZXhwb3J0IGNvbnN0IElkRW50aXR5ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBJZEVudGl0eSA9IHouaW5mZXI8dHlwZW9mIElkRW50aXR5PjtcbmV4cG9ydCBjb25zdCBTdWNjZXNzUmVzcG9uc2UgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIFN1Y2Nlc3NSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIFN1Y2Nlc3NSZXNwb25zZT47XG5leHBvcnQgY29uc3QgSWQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIElkID0gei5pbmZlcjx0eXBlb2YgSWQ+O1xuZXhwb3J0IGNvbnN0IFRpbWVzdGFtcHMgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFRpbWVzdGFtcHMgPSB6LmluZmVyPHR5cGVvZiBUaW1lc3RhbXBzPjtcbmV4cG9ydCBjb25zdCBPcHRpb25hbE9iamVjdFR5cGUgPSB6Lm9iamVjdCh7XG4gIG9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBPcHRpb25hbE9iamVjdFR5cGUgPSB6LmluZmVyPHR5cGVvZiBPcHRpb25hbE9iamVjdFR5cGU+O1xuZXhwb3J0IGNvbnN0IElucHV0UHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSW5wdXRQcm9wZXJ0eSA9IHouaW5mZXI8dHlwZW9mIElucHV0UHJvcGVydHk+O1xuZXhwb3J0IGNvbnN0IE9wdGlvbiA9IHoub2JqZWN0KHtcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHZhbHVlOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGhpZGRlbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgT3B0aW9uID0gei5pbmZlcjx0eXBlb2YgT3B0aW9uPjtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0eSA9IHoub2JqZWN0KHtcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiB6LmFueSgpLm9wdGlvbmFsKCkuYXJyYXkoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBodWJzcG90RGVmaW5lZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgc2hvd0N1cnJlbmN5U3ltYm9sOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBtb2RpZmljYXRpb25NZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGFyY2hpdmFibGU6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5VmFsdWU6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlPcHRpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpXG4gIH0pLm9wdGlvbmFsKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCksXG4gIGRhdGFTZW5zaXRpdml0eTogei5zdHJpbmcoKVxufSkuY2F0Y2hhbGwoei5hbnkoKSk7XG5leHBvcnQgdHlwZSBQcm9wZXJ0eSA9IHouaW5mZXI8dHlwZW9mIFByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0eVJlc3BvbnNlID0gei5vYmplY3Qoe1xuICByZXN1bHRzOiBQcm9wZXJ0eS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIFByb3BlcnR5UmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBQcm9wZXJ0eVJlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBDdXN0b21Qcm9wZXJ0eU9wdGlvbiA9IHoub2JqZWN0KHtcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBDdXN0b21Qcm9wZXJ0eU9wdGlvbiA9IHouaW5mZXI8dHlwZW9mIEN1c3RvbVByb3BlcnR5T3B0aW9uPjtcbmV4cG9ydCBjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHoub2JqZWN0KHtcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICByZWZlcmVuY2VkT2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiBDdXN0b21Qcm9wZXJ0eU9wdGlvbi5hcnJheSgpLFxuICBjYWxjdWxhdGlvbkZvcm11bGE6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGZpZWxkVHlwZTogei5zdHJpbmcoKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIEN1c3RvbVByb3BlcnR5ID0gei5pbmZlcjx0eXBlb2YgQ3VzdG9tUHJvcGVydHk+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVByb3BlcnR5SW5wdXQgPSB6Lm9iamVjdCh7XG4gIG9iamVjdFR5cGU6IHouc3RyaW5nKCksXG4gIGRhdGE6IEN1c3RvbVByb3BlcnR5XG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVByb3BlcnR5SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVQcm9wZXJ0eUlucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVkUHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIGNyZWF0ZWRVc2VySWQ6IHouc3RyaW5nKCksXG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIG1vZGlmaWNhdGlvbk1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgcmVhZE9ubHlPcHRpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5VmFsdWU6IHouYm9vbGVhbigpLFxuICAgIHJlYWRPbmx5RGVmaW5pdGlvbjogei5ib29sZWFuKCksXG4gICAgYXJjaGl2YWJsZTogei5ib29sZWFuKClcbiAgfSksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIGh1YnNwb3REZWZpbmVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLFxuICBkYXRhU2Vuc2l0aXZpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBhcmNoaXZlZEF0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICByZWZlcmVuY2VkT2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiB6LmFycmF5KHoub2JqZWN0KHtcbiAgICBoaWRkZW46IHouYm9vbGVhbigpLFxuICAgIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgICBsYWJlbDogei5zdHJpbmcoKSxcbiAgICB2YWx1ZTogei5zdHJpbmcoKVxuICB9KSksXG4gIGNhbGN1bGF0aW9uRm9ybXVsYTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBoYXNVbmlxdWVWYWx1ZTogei5ib29sZWFuKCksXG4gIGZpZWxkVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZFVzZXJJZDogei5zdHJpbmcoKSxcbiAgY2FsY3VsYXRlZDogei5ib29sZWFuKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVkUHJvcGVydHkgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVkUHJvcGVydHk+O1xuZXhwb3J0IGNvbnN0IFJvbGUgPSB6Lm9iamVjdCh7XG4gIHJlcXVpcmVzQmlsbGluZ1dyaXRlOiB6LmJvb2xlYW4oKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgUm9sZSA9IHouaW5mZXI8dHlwZW9mIFJvbGU+O1xuZXhwb3J0IGNvbnN0IFJvbGVSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgcmVzdWx0czogUm9sZS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIFJvbGVSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIFJvbGVSZXNwb25zZT47XG5leHBvcnQgY29uc3QgVXNlclJvbGVJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXNlclJvbGVJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVzZXJSb2xlSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZWRVc2VyID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCksXG4gIHJvbGVJZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5zdHJpbmcoKS5hcnJheSgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVkVXNlciA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZWRVc2VyPjtcbmV4cG9ydCBjb25zdCBDaGFuZ2VkUm9sZVJlc3BvbnNlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHJvbGVJZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5zdHJpbmcoKS5vcHRpb25hbCgpLmFycmF5KCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIENoYW5nZWRSb2xlUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBDaGFuZ2VkUm9sZVJlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBIdWJzcG90U2VydmljZVRpY2tldCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5kYXRlKCksXG4gIHVwZGF0ZWRBdDogei5kYXRlKCksXG4gIGlzQXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdWJqZWN0OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBvYmplY3RJZDogei5udW1iZXIoKSxcbiAgb3duZXJJZDogei5udW1iZXIoKSxcbiAgcGlwZWxpbmU6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lU3RhZ2U6IHoubnVtYmVyKCksXG4gIHRpY2tldENhdGVnb3J5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0aWNrZXRQcmlvcml0eTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBIdWJzcG90U2VydmljZVRpY2tldCA9IHouaW5mZXI8dHlwZW9mIEh1YnNwb3RTZXJ2aWNlVGlja2V0PjtcbmV4cG9ydCBjb25zdCBIdWJzcG90T3duZXIgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgdXNlcklkOiB6Lm51bWJlcigpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgSHVic3BvdE93bmVyID0gei5pbmZlcjx0eXBlb2YgSHVic3BvdE93bmVyPjtcbmV4cG9ydCBjb25zdCBVc2VyID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHJvbGVJZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBVc2VyID0gei5pbmZlcjx0eXBlb2YgVXNlcj47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXNlciA9IHoub2JqZWN0KHtcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHJvbGVJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVc2VyID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXNlcj47XG5leHBvcnQgY29uc3QgVXNlckluZm9ybWF0aW9uID0gei5vYmplY3Qoe1xuICBpZDogei5udW1iZXIoKSxcbiAgZW1haWw6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgVXNlckluZm9ybWF0aW9uID0gei5pbmZlcjx0eXBlb2YgVXNlckluZm9ybWF0aW9uPjtcbmV4cG9ydCBjb25zdCBIdWJzcG90S25vd2xlZGdlQmFzZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgY2F0ZWdvcnk6IHouc3RyaW5nKCksXG4gIGNvbnRlbnQ6IHouc3RyaW5nKCksXG4gIHB1Ymxpc2hEYXRlOiB6Lm51bWJlcigpXG59KTtcbmV4cG9ydCB0eXBlIEh1YnNwb3RLbm93bGVkZ2VCYXNlID0gei5pbmZlcjx0eXBlb2YgSHVic3BvdEtub3dsZWRnZUJhc2U+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZUNvbnRhY3RJbnB1dCA9IHoub2JqZWN0KHtcbiAgZmlyc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgam9iX3RpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVDb250YWN0SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVDb250YWN0SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X2NvbnRhY3RlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X2FjdGl2aXR5X2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0PjtcbmV4cG9ydCBjb25zdCBVcGRhdGVDb250YWN0SW5wdXQgPSB6Lm9iamVjdCh7XG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFVwZGF0ZUNvbnRhY3RJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZUNvbnRhY3RJbnB1dD47XG5leHBvcnQgY29uc3QgQ29udGFjdCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKSxcbiAgZmlyc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgam9iX3RpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsYXN0X2NvbnRhY3RlZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBzYWx1dGF0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQ29udGFjdCA9IHouaW5mZXI8dHlwZW9mIENvbnRhY3Q+O1xuZXhwb3J0IGNvbnN0IEN1cnJlbmN5Q29kZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNvZGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIEN1cnJlbmN5Q29kZSA9IHouaW5mZXI8dHlwZW9mIEN1cnJlbmN5Q29kZT47XG5leHBvcnQgY29uc3QgQ3JlYXRlQ29tcGFueUlucHV0ID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlQ29tcGFueUlucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlQ29tcGFueUlucHV0PjtcbmV4cG9ydCBjb25zdCBVcGRhdGVDb21wYW55SW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBkYXRlQ29tcGFueUlucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBkYXRlQ29tcGFueUlucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IENvbXBhbnkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGluZHVzdHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgY291bnRyeTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgY2l0eTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHllYXJfZm91bmRlZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQ29tcGFueSA9IHouaW5mZXI8dHlwZW9mIENvbXBhbnk+O1xuZXhwb3J0IGNvbnN0IEFjY291bnQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICB0aW1lWm9uZTogei5zdHJpbmcoKSxcbiAgY29tcGFueUN1cnJlbmN5OiB6LnN0cmluZygpLFxuICBhZGRpdGlvbmFsQ3VycmVuY2llczogei5zdHJpbmcoKS5hcnJheSgpLFxuICB1dGNPZmZzZXQ6IHouc3RyaW5nKCksXG4gIHV0Y09mZnNldE1pbGxpc2Vjb25kczogei5udW1iZXIoKSxcbiAgdWlEb21haW46IHouc3RyaW5nKCksXG4gIGRhdGFIb3N0aW5nTG9jYXRpb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgQWNjb3VudCA9IHouaW5mZXI8dHlwZW9mIEFjY291bnQ+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uVHlwZXMgPSB6Lm9iamVjdCh7XG4gIGFzc29jaWF0aW9uX2NhdGVnb3J5OiB6LnN0cmluZygpLFxuICBhc3NvY2lhdGlvbl90eXBlX0lkOiB6Lm51bWJlcigpXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uVHlwZXMgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvblR5cGVzPjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvbiA9IHoub2JqZWN0KHtcbiAgdG86IHoubnVtYmVyKCksXG4gIHR5cGVzOiBBc3NvY2lhdGlvblR5cGVzLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgQXNzb2NpYXRpb24gPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbj47XG5leHBvcnQgY29uc3QgQ3JlYXRlVGFza0lucHV0ID0gei5vYmplY3Qoe1xuICB0YXNrX3R5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzaWduZWRfdG86IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVGFza0lucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVGFza0lucHV0PjtcbmV4cG9ydCBjb25zdCBVcGRhdGVUYXNrSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0YXNrX3R5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzaWduZWRfdG86IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBkYXRlVGFza0lucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBkYXRlVGFza0lucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0PjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvbkNvbXBhbnkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uQ29tcGFueSA9IHouaW5mZXI8dHlwZW9mIEFzc29jaWF0aW9uQ29tcGFueT47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25Db250YWN0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uQ29udGFjdCA9IHouaW5mZXI8dHlwZW9mIEFzc29jaWF0aW9uQ29udGFjdD47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25EZWFsID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvbkRlYWwgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbkRlYWw+O1xuZXhwb3J0IGNvbnN0IFJldHVybmVkQXNzb2NpYXRpb25zID0gei5vYmplY3Qoe1xuICBjb21wYW5pZXM6IEFzc29jaWF0aW9uQ29tcGFueS5hcnJheSgpLm9wdGlvbmFsKCksXG4gIGNvbnRhY3RzOiBBc3NvY2lhdGlvbkNvbnRhY3QuYXJyYXkoKS5vcHRpb25hbCgpLFxuICBkZWFsczogQXNzb2NpYXRpb25EZWFsLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBSZXR1cm5lZEFzc29jaWF0aW9ucyA9IHouaW5mZXI8dHlwZW9mIFJldHVybmVkQXNzb2NpYXRpb25zPjtcbmV4cG9ydCBjb25zdCBUYXNrID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcHJpb3JpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkdWVfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbm90ZXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogUmV0dXJuZWRBc3NvY2lhdGlvbnMub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBUYXNrID0gei5pbmZlcjx0eXBlb2YgVGFzaz47XG5leHBvcnQgY29uc3QgQ3JlYXRlRGVhbElucHV0ID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZURlYWxJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZURlYWxJbnB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlRGVhbElucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2xvc2VfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBVcGRhdGVEZWFsSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGRhdGVEZWFsSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXBkYXRlRGVhbE91dHB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IERlYWwgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBhbW91bnQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRlYWxfZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICByZXR1cm5lZF9hc3NvY2lhdGlvbnM6IFJldHVybmVkQXNzb2NpYXRpb25zLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgRGVhbCA9IHouaW5mZXI8dHlwZW9mIERlYWw+O1xuZXhwb3J0IGNvbnN0IE5vdGUgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpbWVfc3RhbXA6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBib2R5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGF0dGFjaG1lbnRfaWRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIE5vdGUgPSB6LmluZmVyPHR5cGVvZiBOb3RlPjtcbmV4cG9ydCBjb25zdCBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIHRheDogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLFxuICBjcmVhdGVkYXRlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZGlzY291bnQ6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSlcbn0pO1xuZXhwb3J0IHR5cGUgTGluZUl0ZW1EZWZhdWx0UHJvcGVydGllcyA9IHouaW5mZXI8dHlwZW9mIExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXM+O1xuZXhwb3J0IGNvbnN0IExpbmVJdGVtID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIHRheDogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLFxuICBjcmVhdGVkYXRlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZGlzY291bnQ6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIGlkOiB6LnN0cmluZygpXG59KS5jYXRjaGFsbCh6LmFueSgpKTtcbmV4cG9ydCB0eXBlIExpbmVJdGVtID0gei5pbmZlcjx0eXBlb2YgTGluZUl0ZW0+O1xuZXhwb3J0IGNvbnN0IEN1c3RvbU9iamVjdCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pLmNhdGNoYWxsKHouYW55KCkpO1xuZXhwb3J0IHR5cGUgQ3VzdG9tT2JqZWN0ID0gei5pbmZlcjx0eXBlb2YgQ3VzdG9tT2JqZWN0PjtcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFtb3VudDogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRpc2NvdW50OiB6LnVuaW9uKFt6Lm51bWJlcigpLCB6Lm51bGwoKV0pLFxuICBza3U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHVybDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgcHJpY2U6IHouc3RyaW5nKCksXG4gIHF1YW50aXR5OiB6LnVuaW9uKFt6Lm51bWJlcigpLCB6Lm51bGwoKV0pLFxuICByZWN1cnJpbmdCaWxsaW5nRnJlcXVlbmN5OiB6LnVuaW9uKFt6Lm51bWJlcigpLCB6Lm51bGwoKV0pLFxuICB0YXg6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSlcbn0pO1xuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHouaW5mZXI8dHlwZW9mIFByb2R1Y3Q+O1xuZXhwb3J0IGNvbnN0IFN0YWdlID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgbWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICBpc0Nsb3NlZDogei5ib29sZWFuKCksXG4gICAgcHJvYmFiaWxpdHk6IHouc3RyaW5nKClcbiAgfSksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIHdyaXRlUGVybWlzc2lvbnM6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU3RhZ2UgPSB6LmluZmVyPHR5cGVvZiBTdGFnZT47XG5leHBvcnQgY29uc3QgUGlwZWxpbmUgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdGFnZXM6IFN0YWdlLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgUGlwZWxpbmUgPSB6LmluZmVyPHR5cGVvZiBQaXBlbGluZT47XG5leHBvcnQgY29uc3QgUGlwZWxpbmVPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIHBpcGVsaW5lczogUGlwZWxpbmUuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBQaXBlbGluZU91dHB1dCA9IHouaW5mZXI8dHlwZW9mIFBpcGVsaW5lT3V0cHV0PjtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7XG4gIElkRW50aXR5OiBJZEVudGl0eSxcbiAgU3VjY2Vzc1Jlc3BvbnNlOiBTdWNjZXNzUmVzcG9uc2UsXG4gIElkOiBJZCxcbiAgVGltZXN0YW1wczogVGltZXN0YW1wcyxcbiAgT3B0aW9uYWxPYmplY3RUeXBlOiBPcHRpb25hbE9iamVjdFR5cGUsXG4gIElucHV0UHJvcGVydHk6IElucHV0UHJvcGVydHksXG4gIE9wdGlvbjogT3B0aW9uLFxuICBQcm9wZXJ0eTogUHJvcGVydHksXG4gIFByb3BlcnR5UmVzcG9uc2U6IFByb3BlcnR5UmVzcG9uc2UsXG4gIEN1c3RvbVByb3BlcnR5T3B0aW9uOiBDdXN0b21Qcm9wZXJ0eU9wdGlvbixcbiAgQ3VzdG9tUHJvcGVydHk6IEN1c3RvbVByb3BlcnR5LFxuICBDcmVhdGVQcm9wZXJ0eUlucHV0OiBDcmVhdGVQcm9wZXJ0eUlucHV0LFxuICBDcmVhdGVkUHJvcGVydHk6IENyZWF0ZWRQcm9wZXJ0eSxcbiAgUm9sZTogUm9sZSxcbiAgUm9sZVJlc3BvbnNlOiBSb2xlUmVzcG9uc2UsXG4gIFVzZXJSb2xlSW5wdXQ6IFVzZXJSb2xlSW5wdXQsXG4gIENyZWF0ZWRVc2VyOiBDcmVhdGVkVXNlcixcbiAgQ2hhbmdlZFJvbGVSZXNwb25zZTogQ2hhbmdlZFJvbGVSZXNwb25zZSxcbiAgSHVic3BvdFNlcnZpY2VUaWNrZXQ6IEh1YnNwb3RTZXJ2aWNlVGlja2V0LFxuICBIdWJzcG90T3duZXI6IEh1YnNwb3RPd25lcixcbiAgVXNlcjogVXNlcixcbiAgQ3JlYXRlVXNlcjogQ3JlYXRlVXNlcixcbiAgVXNlckluZm9ybWF0aW9uOiBVc2VySW5mb3JtYXRpb24sXG4gIEh1YnNwb3RLbm93bGVkZ2VCYXNlOiBIdWJzcG90S25vd2xlZGdlQmFzZSxcbiAgQ3JlYXRlQ29udGFjdElucHV0OiBDcmVhdGVDb250YWN0SW5wdXQsXG4gIENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQ6IENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQsXG4gIFVwZGF0ZUNvbnRhY3RJbnB1dDogVXBkYXRlQ29udGFjdElucHV0LFxuICBDb250YWN0OiBDb250YWN0LFxuICBDdXJyZW5jeUNvZGU6IEN1cnJlbmN5Q29kZSxcbiAgQ3JlYXRlQ29tcGFueUlucHV0OiBDcmVhdGVDb21wYW55SW5wdXQsXG4gIFVwZGF0ZUNvbXBhbnlJbnB1dDogVXBkYXRlQ29tcGFueUlucHV0LFxuICBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0OiBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0LFxuICBDb21wYW55OiBDb21wYW55LFxuICBBY2NvdW50OiBBY2NvdW50LFxuICBBc3NvY2lhdGlvblR5cGVzOiBBc3NvY2lhdGlvblR5cGVzLFxuICBBc3NvY2lhdGlvbjogQXNzb2NpYXRpb24sXG4gIENyZWF0ZVRhc2tJbnB1dDogQ3JlYXRlVGFza0lucHV0LFxuICBVcGRhdGVUYXNrSW5wdXQ6IFVwZGF0ZVRhc2tJbnB1dCxcbiAgQ3JlYXRlVXBkYXRlVGFza091dHB1dDogQ3JlYXRlVXBkYXRlVGFza091dHB1dCxcbiAgQXNzb2NpYXRpb25Db21wYW55OiBBc3NvY2lhdGlvbkNvbXBhbnksXG4gIEFzc29jaWF0aW9uQ29udGFjdDogQXNzb2NpYXRpb25Db250YWN0LFxuICBBc3NvY2lhdGlvbkRlYWw6IEFzc29jaWF0aW9uRGVhbCxcbiAgUmV0dXJuZWRBc3NvY2lhdGlvbnM6IFJldHVybmVkQXNzb2NpYXRpb25zLFxuICBUYXNrOiBUYXNrLFxuICBDcmVhdGVEZWFsSW5wdXQ6IENyZWF0ZURlYWxJbnB1dCxcbiAgVXBkYXRlRGVhbElucHV0OiBVcGRhdGVEZWFsSW5wdXQsXG4gIENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQ6IENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQsXG4gIERlYWw6IERlYWwsXG4gIE5vdGU6IE5vdGUsXG4gIExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXM6IExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXMsXG4gIExpbmVJdGVtOiBMaW5lSXRlbSxcbiAgQ3VzdG9tT2JqZWN0OiBDdXN0b21PYmplY3QsXG4gIFByb2R1Y3Q6IFByb2R1Y3QsXG4gIFN0YWdlOiBTdGFnZSxcbiAgUGlwZWxpbmU6IFBpcGVsaW5lLFxuICBQaXBlbGluZU91dHB1dDogUGlwZWxpbmVPdXRwdXRcbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxJQUFBQSxjQUFrQjs7O0FDQ2xCLGlCQUFrQjtBQUNYLElBQU0saUJBQWlCLGFBQUUsT0FBTztBQUFBLEVBQ3JDLElBQUksYUFBRSxPQUFPO0FBQ2YsQ0FBQztBQUNNLElBQU0sd0JBQXdCLGFB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
