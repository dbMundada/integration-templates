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

// hubspot/actions/create-property.ts
var create_property_exports = {};
__export(create_property_exports, {
  default: () => create_property_default
});
module.exports = __toCommonJS(create_property_exports);

// hubspot/schema.ts
var import_zod2 = require("zod");

// hubspot/schema.zod.ts
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

// hubspot/schema.ts
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

// hubspot/models.ts
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

// hubspot/actions/create-property.ts
var action = {
  type: "action",
  description: "Create a property in Hubspot",
  version: "2.0.0",
  endpoint: {
    method: "POST",
    path: "/properties",
    group: "Properties"
  },
  input: CreatePropertyInput,
  output: CreatedProperty,
  scopes: ["oauth", "crm.schemas.orders.write", "crm.objects.orders.write", "crm.schemas.contacts.write", "crm.schemas.carts.write", "crm.schemas.deals.write", "crm.objects.users.write", "crm.schemas.companies.write", "crm.objects.carts.write"],
  exec: async (nango, input) => {
    const parsedInput = await nango.zodValidateInput({
      zodSchema: CreatePropertyInputSchema,
      input
    });
    const inputData = parsedInput.data;
    const response = await nango.post({
      // https://developers.hubspot.com/docs/api/crm/properties
      endpoint: `/crm/v3/properties/${inputData.objectType}`,
      data: inputData.data,
      retries: 3
    });
    return response.data;
  }
};
var create_property_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaHVic3BvdC9hY3Rpb25zL2NyZWF0ZS1wcm9wZXJ0eS50cyIsICJodWJzcG90L3NjaGVtYS50cyIsICJodWJzcG90L3NjaGVtYS56b2QudHMiLCAiaHVic3BvdC9tb2RlbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ25hbmdvJztcbmltcG9ydCB7IENyZWF0ZVByb3BlcnR5SW5wdXRTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEuanMnO1xuaW1wb3J0IHsgQ3JlYXRlZFByb3BlcnR5LCBDcmVhdGVQcm9wZXJ0eUlucHV0IH0gZnJvbSAnLi4vbW9kZWxzLmpzJztcblxuLyoqXG4gKiBFeGVjdXRlcyBhbiBhY3Rpb24gdG8gY3JlYXRlIGEgY3VzdG9tIHByb3BlcnR5IGluIHRoZSBDUk0uXG4gKiBJdCB2YWxpZGF0ZXMgdGhlIGlucHV0IGFnYWluc3QgdGhlIGRlZmluZWQgc2NoZW1hLCBsb2dzIGFueSB2YWxpZGF0aW9uIGVycm9ycyxcbiAqIGFuZCB0aGVuIHNlbmRzIGEgUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSB0aGUgY3VzdG9tIHByb3BlcnRpZXMgaWYgdGhlIGlucHV0IGlzIHZhbGlkLlxuICogQHBhcmFtIG5hbmdvIC0gQW4gaW5zdGFuY2Ugb2YgTmFuZ29BY3Rpb24gdXNlZCB0byBpbnRlcmFjdCB3aXRoIHRoZSBOYW5nbyBBUEkgYW5kIGhhbmRsZSBsb2dnaW5nLlxuICogQHBhcmFtIGlucHV0IC0gVGhlIGlucHV0IGRhdGEgZm9yIGNyZWF0aW5nIHRoZSBjdXN0b20gcHJvcGVydHksIHZhbGlkYXRlZCBieSB0aGUgQ3VzdG9tUHJvcGVydHlJbnB1dFNjaGVtYS5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgQVBJIGNhbGwsIHdoaWNoIGluY2x1ZGVzIHRoZSBkZXRhaWxzIG9mIHRoZSBjcmVhdGVkIGN1c3RvbSBwcm9wZXJ0eS5cbiAqIEB0aHJvd3MgQW4gQWN0aW9uRXJyb3IgaWYgdGhlIGlucHV0IHZhbGlkYXRpb24gZmFpbHMuXG4gKi9cbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdDcmVhdGUgYSBwcm9wZXJ0eSBpbiBIdWJzcG90JyxcbiAgdmVyc2lvbjogJzIuMC4wJyxcbiAgZW5kcG9pbnQ6IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBwYXRoOiAnL3Byb3BlcnRpZXMnLFxuICAgIGdyb3VwOiAnUHJvcGVydGllcydcbiAgfSxcbiAgaW5wdXQ6IENyZWF0ZVByb3BlcnR5SW5wdXQsXG4gIG91dHB1dDogQ3JlYXRlZFByb3BlcnR5LFxuICBzY29wZXM6IFsnb2F1dGgnLCAnY3JtLnNjaGVtYXMub3JkZXJzLndyaXRlJywgJ2NybS5vYmplY3RzLm9yZGVycy53cml0ZScsICdjcm0uc2NoZW1hcy5jb250YWN0cy53cml0ZScsICdjcm0uc2NoZW1hcy5jYXJ0cy53cml0ZScsICdjcm0uc2NoZW1hcy5kZWFscy53cml0ZScsICdjcm0ub2JqZWN0cy51c2Vycy53cml0ZScsICdjcm0uc2NoZW1hcy5jb21wYW5pZXMud3JpdGUnLCAnY3JtLm9iamVjdHMuY2FydHMud3JpdGUnXSxcbiAgZXhlYzogYXN5bmMgKG5hbmdvLCBpbnB1dCk6IFByb21pc2U8Q3JlYXRlZFByb3BlcnR5PiA9PiB7XG4gICAgY29uc3QgcGFyc2VkSW5wdXQgPSBhd2FpdCBuYW5nby56b2RWYWxpZGF0ZUlucHV0KHtcbiAgICAgIHpvZFNjaGVtYTogQ3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSxcbiAgICAgIGlucHV0XG4gICAgfSk7XG4gICAgY29uc3QgaW5wdXREYXRhID0gcGFyc2VkSW5wdXQuZGF0YTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5hbmdvLnBvc3Qoe1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBpL2NybS9wcm9wZXJ0aWVzXG4gICAgICBlbmRwb2ludDogYC9jcm0vdjMvcHJvcGVydGllcy8ke2lucHV0RGF0YS5vYmplY3RUeXBlfWAsXG4gICAgICBkYXRhOiBpbnB1dERhdGEuZGF0YSxcbiAgICAgIHJldHJpZXM6IDNcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfVxufTtcbmV4cG9ydCB0eXBlIE5hbmdvQWN0aW9uTG9jYWwgPSBQYXJhbWV0ZXJzPCh0eXBlb2YgYWN0aW9uKVsnZXhlYyddPlswXTtcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjsiLCAiaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0SW5wdXRTY2hlbWEgYXMgQ3JlYXRlQ29udGFjdFNjaGVtYSwgdXBkYXRlQ29udGFjdElucHV0U2NoZW1hIGFzIFVwZGF0ZUNvbnRhY3RTY2hlbWEsIHVwZGF0ZUNvbXBhbnlJbnB1dFNjaGVtYSBhcyBVcGRhdGVDb21wYW55U2NoZW1hLCB1cGRhdGVEZWFsSW5wdXRTY2hlbWEgYXMgVXBkYXRlRGVhbFNjaGVtYSwgdXBkYXRlVGFza0lucHV0U2NoZW1hIGFzIFVwZGF0ZVRhc2tTY2hlbWEsIGNyZWF0ZVRhc2tJbnB1dFNjaGVtYSBhcyBDcmVhdGVUYXNrU2NoZW1hLCBjcmVhdGVQcm9wZXJ0eUlucHV0U2NoZW1hIGFzIENyZWF0ZVByb3BlcnR5U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEuem9kLmpzJztcbmNvbnN0IHR5cGVTY2hlbWEgPSB6LnVuaW9uKFt6LmxpdGVyYWwoJ2RhdGV0aW1lJyksIHoubGl0ZXJhbCgnc3RyaW5nJyksIHoubGl0ZXJhbCgnbnVtYmVyJyksIHoubGl0ZXJhbCgnZGF0ZScpLCB6LmxpdGVyYWwoJ2VudW1lcmF0aW9uJyksIHoubGl0ZXJhbCgnYm9vbCcpXSk7XG5jb25zdCBmaWVsZFR5cGVTY2hlbWEgPSB6LnVuaW9uKFt6LmxpdGVyYWwoJ3RleHRhcmVhJyksIHoubGl0ZXJhbCgndGV4dCcpLCB6LmxpdGVyYWwoJ2RhdGUnKSwgei5saXRlcmFsKCdmaWxlJyksIHoubGl0ZXJhbCgnbnVtYmVyJyksIHoubGl0ZXJhbCgnc2VsZWN0JyksIHoubGl0ZXJhbCgncmFkaW8nKSwgei5saXRlcmFsKCdjaGVja2JveCcpLCB6LmxpdGVyYWwoJ2Jvb2xlYW5jaGVja2JveCcpLCB6LmxpdGVyYWwoJ2NhbGN1bGF0aW9uX2VxdWF0aW9uJyldKTtcbmV4cG9ydCBjb25zdCBDcmVhdGVDb250YWN0SW5wdXRTY2hlbWEgPSBDcmVhdGVDb250YWN0U2NoZW1hLnJlZmluZShkYXRhID0+IHtcbiAgcmV0dXJuIGRhdGEuZW1haWwgfHwgZGF0YS5maXJzdF9uYW1lIHx8IGRhdGEubGFzdF9uYW1lO1xufSwge1xuICBtZXNzYWdlOiAnQXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBtdXN0IGJlIHByZXNlbnQ6IGVtYWlsLCBmaXJzdG5hbWUsIG9yIGxhc3RuYW1lLidcbn0pO1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbnRhY3RJbnB1dFNjaGVtYSA9IFVwZGF0ZUNvbnRhY3RTY2hlbWEucmVmaW5lKGRhdGEgPT4ge1xuICBjb25zdCBoYXNFbWFpbE9ySWQgPSBkYXRhLmVtYWlsICE9PSB1bmRlZmluZWQgfHwgZGF0YS5pZCAhPT0gdW5kZWZpbmVkO1xuICBjb25zdCBoYXNPdGhlclByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb21lKFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5hbmdvaHEvY3VzdG9tLWludGVncmF0aW9ucy1saW50aW5nL25vLW9iamVjdC1jYXN0aW5nXG4gIGtleSA9PiBrZXkgIT09ICdlbWFpbCcgJiYga2V5ICE9PSAnaWQnICYmIGRhdGFba2V5IGFzIGtleW9mIHouaW5mZXI8dHlwZW9mIFVwZGF0ZUNvbnRhY3RTY2hlbWE+XSAhPT0gdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGhhc0VtYWlsT3JJZCAmJiBoYXNPdGhlclByb3BlcnRpZXM7XG59LCB7XG4gIG1lc3NhZ2U6ICdBdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIG11c3QgYmUgcHJlc2VudDogZW1haWwgb3IgaWQsIGFuZCBhdCBsZWFzdCBvbmUgb3RoZXIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQuJ1xufSk7XG5leHBvcnQgY29uc3QgVXBkYXRlQ29tcGFueUlucHV0U2NoZW1hID0gVXBkYXRlQ29tcGFueVNjaGVtYS5yZWZpbmUoZGF0YSA9PiB7XG4gIGNvbnN0IGhhc0lkID0gZGF0YS5pZCAhPT0gdW5kZWZpbmVkO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmFuZ29ocS9jdXN0b20taW50ZWdyYXRpb25zLWxpbnRpbmcvbm8tb2JqZWN0LWNhc3RpbmdcbiAgY29uc3QgaGFzT3RoZXJQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoZGF0YSkuc29tZShrZXkgPT4ga2V5ICE9PSAnaWQnICYmIGRhdGFba2V5IGFzIGtleW9mIHR5cGVvZiBVcGRhdGVDb21wYW55U2NoZW1hLnNoYXBlXSAhPT0gdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGhhc0lkICYmIGhhc090aGVyUHJvcGVydGllcztcbn0sIHtcbiAgbWVzc2FnZTogXCJUaGUgJ2lkJyBwcm9wZXJ0eSBtdXN0IGJlIHByZXNlbnQgYW5kIGF0IGxlYXN0IG9uZSBvdGhlciBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZC5cIlxufSk7XG5leHBvcnQgY29uc3QgQ3JlYXRlVGFza0lucHV0U2NoZW1hID0gei5pbnRlcnNlY3Rpb24oQ3JlYXRlVGFza1NjaGVtYSwgei5vYmplY3Qoe1xuICB0YXNrX3R5cGU6IHoubGl0ZXJhbCgnVE9ETycpLFxuICBwcmlvcml0eTogei5lbnVtKFsnTE9XJywgJ01FRElVTScsICdISUdIJ10pLFxuICBkdWVfZGF0ZTogei5zdHJpbmcoKS5taW4oMSwge1xuICAgIG1lc3NhZ2U6ICdEdWUgZGF0ZSBpcyByZXF1aXJlZC4nXG4gIH0pXG59KSk7XG5leHBvcnQgY29uc3QgVXBkYXRlVGFza0lucHV0U2NoZW1hID0gei5pbnRlcnNlY3Rpb24oVXBkYXRlVGFza1NjaGVtYSwgei5vYmplY3Qoe30pKS5yZWZpbmUoZGF0YSA9PiB7XG4gIGNvbnN0IGhhc0lkID0gZGF0YS5pZCAhPT0gdW5kZWZpbmVkO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5hbmdvaHEvY3VzdG9tLWludGVncmF0aW9ucy1saW50aW5nL25vLW9iamVjdC1jYXN0aW5nXG4gIGNvbnN0IGhhc090aGVyUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvbWUoa2V5ID0+IGtleSAhPT0gJ2lkJyAmJiBkYXRhW2tleSBhcyBrZXlvZiB6LmluZmVyPHR5cGVvZiBVcGRhdGVUYXNrU2NoZW1hPl0gIT09IHVuZGVmaW5lZCk7XG4gIHJldHVybiBoYXNJZCAmJiBoYXNPdGhlclByb3BlcnRpZXM7XG59LCB7XG4gIG1lc3NhZ2U6IFwiVGhlICdpZCcgcHJvcGVydHkgbXVzdCBiZSBwcmVzZW50IGFuZCBhdCBsZWFzdCBvbmUgb3RoZXIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQuXCJcbn0pO1xuZXhwb3J0IGNvbnN0IFVwZGF0ZURlYWxJbnB1dFNjaGVtYSA9IHouaW50ZXJzZWN0aW9uKFVwZGF0ZURlYWxTY2hlbWEsIHoub2JqZWN0KHt9KSkucmVmaW5lKGRhdGEgPT4ge1xuICBjb25zdCBoYXNJZCA9IGRhdGEuaWQgIT09IHVuZGVmaW5lZDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBuYW5nb2hxL2N1c3RvbS1pbnRlZ3JhdGlvbnMtbGludGluZy9uby1vYmplY3QtY2FzdGluZ1xuICBjb25zdCBoYXNPdGhlclByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb21lKGtleSA9PiBrZXkgIT09ICdpZCcgJiYgZGF0YVtrZXkgYXMga2V5b2Ygei5pbmZlcjx0eXBlb2YgVXBkYXRlRGVhbFNjaGVtYT5dICE9PSB1bmRlZmluZWQpO1xuICByZXR1cm4gaGFzSWQgJiYgaGFzT3RoZXJQcm9wZXJ0aWVzO1xufSwge1xuICBtZXNzYWdlOiBcIlRoZSAnaWQnIHByb3BlcnR5IG11c3QgYmUgcHJlc2VudCBhbmQgYXQgbGVhc3Qgb25lIG90aGVyIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkLlwiXG59KTtcbmV4cG9ydCBjb25zdCBDcmVhdGVQcm9wZXJ0eUlucHV0U2NoZW1hID0gQ3JlYXRlUHJvcGVydHlTY2hlbWEuZXh0ZW5kKHtcbiAgZGF0YTogQ3JlYXRlUHJvcGVydHlTY2hlbWEuc2hhcGUuZGF0YS5leHRlbmQoe1xuICAgIHR5cGU6IHR5cGVTY2hlbWEsXG4gICAgZmllbGRUeXBlOiBmaWVsZFR5cGVTY2hlbWFcbiAgfSlcbn0pLnN1cGVyUmVmaW5lKChkYXRhLCBjdHgpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgb3B0aW9uc1xuICB9ID0gZGF0YS5kYXRhO1xuICBpZiAodHlwZSA9PT0gJ2VudW1lcmF0aW9uJyAmJiAhb3B0aW9ucykge1xuICAgIGN0eC5hZGRJc3N1ZSh7XG4gICAgICBjb2RlOiB6LlpvZElzc3VlQ29kZS5jdXN0b20sXG4gICAgICBtZXNzYWdlOiAnSWYgdGhlIGlucHV0IHR5cGUgaXMgZW51bWVyYXRpb24sIG9wdGlvbnMgbXVzdCBiZSBwcm92aWRlZCcsXG4gICAgICBwYXRoOiBbJ2RhdGEnLCAnb3B0aW9ucyddXG4gICAgfSk7XG4gIH1cbn0pOyIsICIvLyBHZW5lcmF0ZWQgYnkgdHMtdG8tem9kXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmV4cG9ydCBjb25zdCBpZEVudGl0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IGNvbnN0IGlkU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgdGltZXN0YW1wc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IG9wdGlvbmFsT2JqZWN0VHlwZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBpbnB1dFByb3BlcnR5U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBvcHRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkob3B0aW9uU2NoZW1hKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBodWJzcG90RGVmaW5lZDogei5ib29sZWFuKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCksXG4gIG1vZGlmaWNhdGlvbk1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgYXJjaGl2YWJsZTogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKSxcbiAgICByZWFkT25seVZhbHVlOiB6LmJvb2xlYW4oKVxuICB9KSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKSxcbiAgZGF0YVNlbnNpdGl2aXR5OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVJlc3BvbnNlU2NoZW1hID0gei5vYmplY3Qoe1xuICByZXN1bHQ6IHByb3BlcnR5U2NoZW1hXG59KTtcbmV4cG9ydCBjb25zdCBjdXN0b21Qcm9wZXJ0eU9wdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgY3VzdG9tUHJvcGVydHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgcmVmZXJlbmNlZE9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogei5hcnJheShjdXN0b21Qcm9wZXJ0eU9wdGlvblNjaGVtYSkub3B0aW9uYWwoKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKSxcbiAgZGF0YTogY3VzdG9tUHJvcGVydHlTY2hlbWFcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZWRQcm9wZXJ0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY3JlYXRlZFVzZXJJZDogei5zdHJpbmcoKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgbW9kaWZpY2F0aW9uTWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICByZWFkT25seU9wdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlWYWx1ZTogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKSxcbiAgICBhcmNoaXZhYmxlOiB6LmJvb2xlYW4oKVxuICB9KSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgc2hvd0N1cnJlbmN5U3ltYm9sOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgaHVic3BvdERlZmluZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCksXG4gIGRhdGFTZW5zaXRpdml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIHJlZmVyZW5jZWRPYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGhpZGRlbjogei5ib29sZWFuKCksXG4gICAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICAgIGxhYmVsOiB6LnN0cmluZygpLFxuICAgIHZhbHVlOiB6LnN0cmluZygpXG4gIH0pKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICB1cGRhdGVkVXNlcklkOiB6LnN0cmluZygpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCByb2xlU2NoZW1hID0gei5vYmplY3Qoe1xuICByZXF1aXJlc0JpbGxpbmdXcml0ZTogei5ib29sZWFuKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCByb2xlUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlc3VsdHM6IHouYXJyYXkocm9sZVNjaGVtYSlcbn0pO1xuZXhwb3J0IGNvbnN0IHVzZXJSb2xlSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVkVXNlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLFxuICByb2xlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgY29uc3QgY2hhbmdlZFJvbGVSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICByb2xlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBodWJzcG90U2VydmljZVRpY2tldFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHoubnVtYmVyKCksXG4gIGNyZWF0ZWRBdDogei5kYXRlKCksXG4gIHVwZGF0ZWRBdDogei5kYXRlKCksXG4gIGlzQXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdWJqZWN0OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBvYmplY3RJZDogei5udW1iZXIoKSxcbiAgb3duZXJJZDogei5udW1iZXIoKSxcbiAgcGlwZWxpbmU6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lU3RhZ2U6IHoubnVtYmVyKCksXG4gIHRpY2tldENhdGVnb3J5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHRpY2tldFByaW9yaXR5OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBodWJzcG90T3duZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6Lm51bWJlcigpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgdXNlcklkOiB6Lm51bWJlcigpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IGNvbnN0IHVzZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgcm9sZUlkczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgcHJpbWFyeVRlYW1JZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyU2NoZW1hID0gei5vYmplY3Qoe1xuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgcm9sZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgaHVic3BvdEtub3dsZWRnZUJhc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGNhdGVnb3J5OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBwdWJsaXNoRGF0ZTogei5udW1iZXIoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGFjdElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBmaXJzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxhc3RfY29udGFjdGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDb250YWN0SW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNvbnRhY3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsYXN0X2NvbnRhY3RlZDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsYXN0X2FjdGl2aXR5X2RhdGU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBvd25lcjogei5zdHJpbmcoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBjdXJyZW5jeUNvZGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjb2RlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29tcGFueUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaW5kdXN0cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ29tcGFueUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY2l0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY291bnRyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjb21wYW55U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgaW5kdXN0cnk6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgY291bnRyeTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBjaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBvd25lcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgYWNjb3VudFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIHRpbWVab25lOiB6LnN0cmluZygpLFxuICBjb21wYW55Q3VycmVuY3k6IHouc3RyaW5nKCksXG4gIGFkZGl0aW9uYWxDdXJyZW5jaWVzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICB1dGNPZmZzZXQ6IHouc3RyaW5nKCksXG4gIHV0Y09mZnNldE1pbGxpc2Vjb25kczogei5udW1iZXIoKSxcbiAgdWlEb21haW46IHouc3RyaW5nKCksXG4gIGRhdGFIb3N0aW5nTG9jYXRpb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uVHlwZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGFzc29jaWF0aW9uX2NhdGVnb3J5OiB6LnN0cmluZygpLFxuICBhc3NvY2lhdGlvbl90eXBlX0lkOiB6Lm51bWJlcigpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdG86IHoubnVtYmVyKCksXG4gIHR5cGVzOiB6LmFycmF5KGFzc29jaWF0aW9uVHlwZXNTY2hlbWEpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRhc2tfdHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlVGFza0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBub3Rlczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVUYXNrT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBub3Rlczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvbkNvbXBhbnlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uQ29udGFjdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uRGVhbFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbXBhbmllczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvbkNvbXBhbnlTY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY29udGFjdHM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25Db250YWN0U2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxzOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uRGVhbFNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCB0YXNrU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogei51bmlvbihbcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEsIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWFsSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGVhbElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVEZWFsT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGRlYWxTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogei51bmlvbihbcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEsIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBub3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpbWVfc3RhbXA6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGJvZHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhdHRhY2htZW50X2lkczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uU2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGxpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5zdHJpbmcoKSxcbiAgcmVjdXJyaW5nYmlsbGluZ2ZyZXF1ZW5jeTogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICB0YXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLFxuICBjcmVhdGVkYXRlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZGlzY291bnQ6IHoubnVtYmVyKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgbGluZUl0ZW1TY2hlbWEgPSB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKS5hbmQoei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgdGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIGlkOiB6LnN0cmluZygpXG59KSk7XG5leHBvcnQgY29uc3QgY3VzdG9tT2JqZWN0U2NoZW1hID0gei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkuYW5kKHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pKTtcbmV4cG9ydCBjb25zdCBwcm9kdWN0U2NoZW1hID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFtb3VudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkaXNjb3VudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBza3U6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgdXJsOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICByZWN1cnJpbmdCaWxsaW5nRnJlcXVlbmN5OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIHRheDogei5udW1iZXIoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBzdGFnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIG1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgaXNDbG9zZWQ6IHouYm9vbGVhbigpLFxuICAgIHByb2JhYmlsaXR5OiB6LnN0cmluZygpXG4gIH0pLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICB3cml0ZVBlcm1pc3Npb25zOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBwaXBlbGluZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIHN0YWdlczogei5hcnJheShzdGFnZVNjaGVtYSlcbn0pO1xuZXhwb3J0IGNvbnN0IHBpcGVsaW5lT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBwaXBlbGluZXM6IHouYXJyYXkocGlwZWxpbmVTY2hlbWEpXG59KTsiLCAiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmV4cG9ydCBjb25zdCBJZEVudGl0eSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSWRFbnRpdHkgPSB6LmluZmVyPHR5cGVvZiBJZEVudGl0eT47XG5leHBvcnQgY29uc3QgU3VjY2Vzc1Jlc3BvbnNlID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBTdWNjZXNzUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBTdWNjZXNzUmVzcG9uc2U+O1xuZXhwb3J0IGNvbnN0IElkID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBJZCA9IHouaW5mZXI8dHlwZW9mIElkPjtcbmV4cG9ydCBjb25zdCBUaW1lc3RhbXBzID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBUaW1lc3RhbXBzID0gei5pbmZlcjx0eXBlb2YgVGltZXN0YW1wcz47XG5leHBvcnQgY29uc3QgT3B0aW9uYWxPYmplY3RUeXBlID0gei5vYmplY3Qoe1xuICBvYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgT3B0aW9uYWxPYmplY3RUeXBlID0gei5pbmZlcjx0eXBlb2YgT3B0aW9uYWxPYmplY3RUeXBlPjtcbmV4cG9ydCBjb25zdCBJbnB1dFByb3BlcnR5ID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIElucHV0UHJvcGVydHkgPSB6LmluZmVyPHR5cGVvZiBJbnB1dFByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBPcHRpb24gPSB6Lm9iamVjdCh7XG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIE9wdGlvbiA9IHouaW5mZXI8dHlwZW9mIE9wdGlvbj47XG5leHBvcnQgY29uc3QgUHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIGZpZWxkVHlwZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogei5hbnkoKS5vcHRpb25hbCgpLmFycmF5KCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgY2FsY3VsYXRlZDogei5ib29sZWFuKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgaHVic3BvdERlZmluZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgbW9kaWZpY2F0aW9uTWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICBhcmNoaXZhYmxlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5RGVmaW5pdGlvbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICByZWFkT25seVZhbHVlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5T3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKVxuICB9KS5vcHRpb25hbCgpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLFxuICBkYXRhU2Vuc2l0aXZpdHk6IHouc3RyaW5nKClcbn0pLmNhdGNoYWxsKHouYW55KCkpO1xuZXhwb3J0IHR5cGUgUHJvcGVydHkgPSB6LmluZmVyPHR5cGVvZiBQcm9wZXJ0eT47XG5leHBvcnQgY29uc3QgUHJvcGVydHlSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgcmVzdWx0czogUHJvcGVydHkuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBQcm9wZXJ0eVJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgUHJvcGVydHlSZXNwb25zZT47XG5leHBvcnQgY29uc3QgQ3VzdG9tUHJvcGVydHlPcHRpb24gPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdmFsdWU6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3VzdG9tUHJvcGVydHlPcHRpb24gPSB6LmluZmVyPHR5cGVvZiBDdXN0b21Qcm9wZXJ0eU9wdGlvbj47XG5leHBvcnQgY29uc3QgQ3VzdG9tUHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgcmVmZXJlbmNlZE9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogQ3VzdG9tUHJvcGVydHlPcHRpb24uYXJyYXkoKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDdXN0b21Qcm9wZXJ0eSA9IHouaW5mZXI8dHlwZW9mIEN1c3RvbVByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVQcm9wZXJ0eUlucHV0ID0gei5vYmplY3Qoe1xuICBvYmplY3RUeXBlOiB6LnN0cmluZygpLFxuICBkYXRhOiBDdXN0b21Qcm9wZXJ0eVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9wZXJ0eUlucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlUHJvcGVydHlJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlZFByb3BlcnR5ID0gei5vYmplY3Qoe1xuICBjcmVhdGVkVXNlcklkOiB6LnN0cmluZygpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBtb2RpZmljYXRpb25NZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIHJlYWRPbmx5T3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICByZWFkT25seVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgICByZWFkT25seURlZmluaXRpb246IHouYm9vbGVhbigpLFxuICAgIGFyY2hpdmFibGU6IHouYm9vbGVhbigpXG4gIH0pLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBzaG93Q3VycmVuY3lTeW1ib2w6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBodWJzcG90RGVmaW5lZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKSxcbiAgZGF0YVNlbnNpdGl2aXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgcmVmZXJlbmNlZE9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogei5hcnJheSh6Lm9iamVjdCh7XG4gICAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gICAgbGFiZWw6IHouc3RyaW5nKCksXG4gICAgdmFsdWU6IHouc3RyaW5nKClcbiAgfSkpLFxuICBjYWxjdWxhdGlvbkZvcm11bGE6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIHVwZGF0ZWRVc2VySWQ6IHouc3RyaW5nKCksXG4gIGNhbGN1bGF0ZWQ6IHouYm9vbGVhbigpLFxuICBleHRlcm5hbE9wdGlvbnM6IHouYm9vbGVhbigpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlZFByb3BlcnR5ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlZFByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBSb2xlID0gei5vYmplY3Qoe1xuICByZXF1aXJlc0JpbGxpbmdXcml0ZTogei5ib29sZWFuKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFJvbGUgPSB6LmluZmVyPHR5cGVvZiBSb2xlPjtcbmV4cG9ydCBjb25zdCBSb2xlUmVzcG9uc2UgPSB6Lm9iamVjdCh7XG4gIHJlc3VsdHM6IFJvbGUuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBSb2xlUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBSb2xlUmVzcG9uc2U+O1xuZXhwb3J0IGNvbnN0IFVzZXJSb2xlSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVzZXJSb2xlSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVc2VyUm9sZUlucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVkVXNlciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLFxuICByb2xlSWRzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgc3VwZXJBZG1pbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlZFVzZXIgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVkVXNlcj47XG5leHBvcnQgY29uc3QgQ2hhbmdlZFJvbGVSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICByb2xlSWRzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5hcnJheSgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBDaGFuZ2VkUm9sZVJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgQ2hhbmdlZFJvbGVSZXNwb25zZT47XG5leHBvcnQgY29uc3QgSHVic3BvdFNlcnZpY2VUaWNrZXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBpc0FyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgc3ViamVjdDogei5zdHJpbmcoKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgb2JqZWN0SWQ6IHoubnVtYmVyKCksXG4gIG93bmVySWQ6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lOiB6Lm51bWJlcigpLFxuICBwaXBlbGluZVN0YWdlOiB6Lm51bWJlcigpLFxuICB0aWNrZXRDYXRlZ29yeTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdGlja2V0UHJpb3JpdHk6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSHVic3BvdFNlcnZpY2VUaWNrZXQgPSB6LmluZmVyPHR5cGVvZiBIdWJzcG90U2VydmljZVRpY2tldD47XG5leHBvcnQgY29uc3QgSHVic3BvdE93bmVyID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHVzZXJJZDogei5udW1iZXIoKSxcbiAgY3JlYXRlZEF0OiB6LmRhdGUoKSxcbiAgdXBkYXRlZEF0OiB6LmRhdGUoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIEh1YnNwb3RPd25lciA9IHouaW5mZXI8dHlwZW9mIEh1YnNwb3RPd25lcj47XG5leHBvcnQgY29uc3QgVXNlciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLFxuICByb2xlSWRzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc3VwZXJBZG1pbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgVXNlciA9IHouaW5mZXI8dHlwZW9mIFVzZXI+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVzZXIgPSB6Lm9iamVjdCh7XG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICByb2xlSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5zdHJpbmcoKS5vcHRpb25hbCgpLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXNlciA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVzZXI+O1xuZXhwb3J0IGNvbnN0IFVzZXJJbmZvcm1hdGlvbiA9IHoub2JqZWN0KHtcbiAgaWQ6IHoubnVtYmVyKCksXG4gIGVtYWlsOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFVzZXJJbmZvcm1hdGlvbiA9IHouaW5mZXI8dHlwZW9mIFVzZXJJbmZvcm1hdGlvbj47XG5leHBvcnQgY29uc3QgSHVic3BvdEtub3dsZWRnZUJhc2UgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGNhdGVnb3J5OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBwdWJsaXNoRGF0ZTogei5udW1iZXIoKVxufSk7XG5leHBvcnQgdHlwZSBIdWJzcG90S25vd2xlZGdlQmFzZSA9IHouaW5mZXI8dHlwZW9mIEh1YnNwb3RLbm93bGVkZ2VCYXNlPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVDb250YWN0SW5wdXQgPSB6Lm9iamVjdCh7XG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlQ29udGFjdElucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlQ29udGFjdElucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBmaXJzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9jb250YWN0ZWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXBkYXRlQ29udGFjdE91dHB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlQ29udGFjdElucHV0ID0gei5vYmplY3Qoe1xuICBmaXJzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBVcGRhdGVDb250YWN0SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGRhdGVDb250YWN0SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENvbnRhY3QgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxhc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9jb250YWN0ZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxhc3RfYWN0aXZpdHlfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgc2FsdXRhdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIENvbnRhY3QgPSB6LmluZmVyPHR5cGVvZiBDb250YWN0PjtcbmV4cG9ydCBjb25zdCBDdXJyZW5jeUNvZGUgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjb2RlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBDdXJyZW5jeUNvZGUgPSB6LmluZmVyPHR5cGVvZiBDdXJyZW5jeUNvZGU+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZUNvbXBhbnlJbnB1dCA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZUNvbXBhbnlJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZUNvbXBhbnlJbnB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlQ29tcGFueUlucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVwZGF0ZUNvbXBhbnlJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZUNvbXBhbnlJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0PjtcbmV4cG9ydCBjb25zdCBDb21wYW55ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBpbmR1c3RyeTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGNvdW50cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGNpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB5ZWFyX2ZvdW5kZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIENvbXBhbnkgPSB6LmluZmVyPHR5cGVvZiBDb21wYW55PjtcbmV4cG9ydCBjb25zdCBBY2NvdW50ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgdGltZVpvbmU6IHouc3RyaW5nKCksXG4gIGNvbXBhbnlDdXJyZW5jeTogei5zdHJpbmcoKSxcbiAgYWRkaXRpb25hbEN1cnJlbmNpZXM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgdXRjT2Zmc2V0OiB6LnN0cmluZygpLFxuICB1dGNPZmZzZXRNaWxsaXNlY29uZHM6IHoubnVtYmVyKCksXG4gIHVpRG9tYWluOiB6LnN0cmluZygpLFxuICBkYXRhSG9zdGluZ0xvY2F0aW9uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIEFjY291bnQgPSB6LmluZmVyPHR5cGVvZiBBY2NvdW50PjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvblR5cGVzID0gei5vYmplY3Qoe1xuICBhc3NvY2lhdGlvbl9jYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgYXNzb2NpYXRpb25fdHlwZV9JZDogei5udW1iZXIoKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvblR5cGVzID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb25UeXBlcz47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb24gPSB6Lm9iamVjdCh7XG4gIHRvOiB6Lm51bWJlcigpLFxuICB0eXBlczogQXNzb2NpYXRpb25UeXBlcy5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb24+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVRhc2tJbnB1dCA9IHoub2JqZWN0KHtcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVRhc2tJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVRhc2tJbnB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlVGFza0lucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVwZGF0ZVRhc2tJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZVRhc2tJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXBkYXRlVGFza091dHB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkdWVfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXBkYXRlVGFza091dHB1dD47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25Db21wYW55ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvbkNvbXBhbnkgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbkNvbXBhbnk+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uQ29udGFjdCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxhc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvbkNvbnRhY3QgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbkNvbnRhY3Q+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uRGVhbCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQXNzb2NpYXRpb25EZWFsID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb25EZWFsPjtcbmV4cG9ydCBjb25zdCBSZXR1cm5lZEFzc29jaWF0aW9ucyA9IHoub2JqZWN0KHtcbiAgY29tcGFuaWVzOiBBc3NvY2lhdGlvbkNvbXBhbnkuYXJyYXkoKS5vcHRpb25hbCgpLFxuICBjb250YWN0czogQXNzb2NpYXRpb25Db250YWN0LmFycmF5KCkub3B0aW9uYWwoKSxcbiAgZGVhbHM6IEFzc29jaWF0aW9uRGVhbC5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgUmV0dXJuZWRBc3NvY2lhdGlvbnMgPSB6LmluZmVyPHR5cGVvZiBSZXR1cm5lZEFzc29jaWF0aW9ucz47XG5leHBvcnQgY29uc3QgVGFzayA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHByaW9yaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBhc3NpZ25lZF90bzogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG5vdGVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICByZXR1cm5lZF9hc3NvY2lhdGlvbnM6IFJldHVybmVkQXNzb2NpYXRpb25zLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVGFzayA9IHouaW5mZXI8dHlwZW9mIFRhc2s+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZURlYWxJbnB1dCA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2xvc2VfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVEZWFsSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVEZWFsSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZURlYWxJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBkYXRlRGVhbElucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBkYXRlRGVhbElucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2xvc2VfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0PjtcbmV4cG9ydCBjb25zdCBEZWFsID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgYW1vdW50OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBjbG9zZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGVhbF9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcmV0dXJuZWRfYXNzb2NpYXRpb25zOiBSZXR1cm5lZEFzc29jaWF0aW9ucy5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIERlYWwgPSB6LmluZmVyPHR5cGVvZiBEZWFsPjtcbmV4cG9ydCBjb25zdCBOb3RlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0aW1lX3N0YW1wOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYm9keTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhdHRhY2htZW50X2lkczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBOb3RlID0gei5pbmZlcjx0eXBlb2YgTm90ZT47XG5leHBvcnQgY29uc3QgTGluZUl0ZW1EZWZhdWx0UHJvcGVydGllcyA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgcHJpY2U6IHouc3RyaW5nKCksXG4gIHF1YW50aXR5OiB6LnN0cmluZygpLFxuICByZWN1cnJpbmdiaWxsaW5nZnJlcXVlbmN5OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICB0YXg6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pXG59KTtcbmV4cG9ydCB0eXBlIExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXMgPSB6LmluZmVyPHR5cGVvZiBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzPjtcbmV4cG9ydCBjb25zdCBMaW5lSXRlbSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgcHJpY2U6IHouc3RyaW5nKCksXG4gIHF1YW50aXR5OiB6LnN0cmluZygpLFxuICByZWN1cnJpbmdiaWxsaW5nZnJlcXVlbmN5OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICB0YXg6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICBpZDogei5zdHJpbmcoKVxufSkuY2F0Y2hhbGwoei5hbnkoKSk7XG5leHBvcnQgdHlwZSBMaW5lSXRlbSA9IHouaW5mZXI8dHlwZW9mIExpbmVJdGVtPjtcbmV4cG9ydCBjb25zdCBDdXN0b21PYmplY3QgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KS5jYXRjaGFsbCh6LmFueSgpKTtcbmV4cG9ydCB0eXBlIEN1c3RvbU9iamVjdCA9IHouaW5mZXI8dHlwZW9mIEN1c3RvbU9iamVjdD47XG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhbW91bnQ6IHoudW5pb24oW3oubnVtYmVyKCksIHoubnVsbCgpXSksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkaXNjb3VudDogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgc2t1OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB1cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgcmVjdXJyaW5nQmlsbGluZ0ZyZXF1ZW5jeTogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgdGF4OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pXG59KTtcbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB6LmluZmVyPHR5cGVvZiBQcm9kdWN0PjtcbmV4cG9ydCBjb25zdCBTdGFnZSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIG1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgaXNDbG9zZWQ6IHouYm9vbGVhbigpLFxuICAgIHByb2JhYmlsaXR5OiB6LnN0cmluZygpXG4gIH0pLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICB3cml0ZVBlcm1pc3Npb25zOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFN0YWdlID0gei5pbmZlcjx0eXBlb2YgU3RhZ2U+O1xuZXhwb3J0IGNvbnN0IFBpcGVsaW5lID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgc3RhZ2VzOiBTdGFnZS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIFBpcGVsaW5lID0gei5pbmZlcjx0eXBlb2YgUGlwZWxpbmU+O1xuZXhwb3J0IGNvbnN0IFBpcGVsaW5lT3V0cHV0ID0gei5vYmplY3Qoe1xuICBwaXBlbGluZXM6IFBpcGVsaW5lLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgUGlwZWxpbmVPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBQaXBlbGluZU91dHB1dD47XG5leHBvcnQgY29uc3QgbW9kZWxzID0ge1xuICBJZEVudGl0eTogSWRFbnRpdHksXG4gIFN1Y2Nlc3NSZXNwb25zZTogU3VjY2Vzc1Jlc3BvbnNlLFxuICBJZDogSWQsXG4gIFRpbWVzdGFtcHM6IFRpbWVzdGFtcHMsXG4gIE9wdGlvbmFsT2JqZWN0VHlwZTogT3B0aW9uYWxPYmplY3RUeXBlLFxuICBJbnB1dFByb3BlcnR5OiBJbnB1dFByb3BlcnR5LFxuICBPcHRpb246IE9wdGlvbixcbiAgUHJvcGVydHk6IFByb3BlcnR5LFxuICBQcm9wZXJ0eVJlc3BvbnNlOiBQcm9wZXJ0eVJlc3BvbnNlLFxuICBDdXN0b21Qcm9wZXJ0eU9wdGlvbjogQ3VzdG9tUHJvcGVydHlPcHRpb24sXG4gIEN1c3RvbVByb3BlcnR5OiBDdXN0b21Qcm9wZXJ0eSxcbiAgQ3JlYXRlUHJvcGVydHlJbnB1dDogQ3JlYXRlUHJvcGVydHlJbnB1dCxcbiAgQ3JlYXRlZFByb3BlcnR5OiBDcmVhdGVkUHJvcGVydHksXG4gIFJvbGU6IFJvbGUsXG4gIFJvbGVSZXNwb25zZTogUm9sZVJlc3BvbnNlLFxuICBVc2VyUm9sZUlucHV0OiBVc2VyUm9sZUlucHV0LFxuICBDcmVhdGVkVXNlcjogQ3JlYXRlZFVzZXIsXG4gIENoYW5nZWRSb2xlUmVzcG9uc2U6IENoYW5nZWRSb2xlUmVzcG9uc2UsXG4gIEh1YnNwb3RTZXJ2aWNlVGlja2V0OiBIdWJzcG90U2VydmljZVRpY2tldCxcbiAgSHVic3BvdE93bmVyOiBIdWJzcG90T3duZXIsXG4gIFVzZXI6IFVzZXIsXG4gIENyZWF0ZVVzZXI6IENyZWF0ZVVzZXIsXG4gIFVzZXJJbmZvcm1hdGlvbjogVXNlckluZm9ybWF0aW9uLFxuICBIdWJzcG90S25vd2xlZGdlQmFzZTogSHVic3BvdEtub3dsZWRnZUJhc2UsXG4gIENyZWF0ZUNvbnRhY3RJbnB1dDogQ3JlYXRlQ29udGFjdElucHV0LFxuICBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0OiBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0LFxuICBVcGRhdGVDb250YWN0SW5wdXQ6IFVwZGF0ZUNvbnRhY3RJbnB1dCxcbiAgQ29udGFjdDogQ29udGFjdCxcbiAgQ3VycmVuY3lDb2RlOiBDdXJyZW5jeUNvZGUsXG4gIENyZWF0ZUNvbXBhbnlJbnB1dDogQ3JlYXRlQ29tcGFueUlucHV0LFxuICBVcGRhdGVDb21wYW55SW5wdXQ6IFVwZGF0ZUNvbXBhbnlJbnB1dCxcbiAgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dDogQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCxcbiAgQ29tcGFueTogQ29tcGFueSxcbiAgQWNjb3VudDogQWNjb3VudCxcbiAgQXNzb2NpYXRpb25UeXBlczogQXNzb2NpYXRpb25UeXBlcyxcbiAgQXNzb2NpYXRpb246IEFzc29jaWF0aW9uLFxuICBDcmVhdGVUYXNrSW5wdXQ6IENyZWF0ZVRhc2tJbnB1dCxcbiAgVXBkYXRlVGFza0lucHV0OiBVcGRhdGVUYXNrSW5wdXQsXG4gIENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQ6IENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQsXG4gIEFzc29jaWF0aW9uQ29tcGFueTogQXNzb2NpYXRpb25Db21wYW55LFxuICBBc3NvY2lhdGlvbkNvbnRhY3Q6IEFzc29jaWF0aW9uQ29udGFjdCxcbiAgQXNzb2NpYXRpb25EZWFsOiBBc3NvY2lhdGlvbkRlYWwsXG4gIFJldHVybmVkQXNzb2NpYXRpb25zOiBSZXR1cm5lZEFzc29jaWF0aW9ucyxcbiAgVGFzazogVGFzayxcbiAgQ3JlYXRlRGVhbElucHV0OiBDcmVhdGVEZWFsSW5wdXQsXG4gIFVwZGF0ZURlYWxJbnB1dDogVXBkYXRlRGVhbElucHV0LFxuICBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0OiBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0LFxuICBEZWFsOiBEZWFsLFxuICBOb3RlOiBOb3RlLFxuICBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzOiBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzLFxuICBMaW5lSXRlbTogTGluZUl0ZW0sXG4gIEN1c3RvbU9iamVjdDogQ3VzdG9tT2JqZWN0LFxuICBQcm9kdWN0OiBQcm9kdWN0LFxuICBTdGFnZTogU3RhZ2UsXG4gIFBpcGVsaW5lOiBQaXBlbGluZSxcbiAgUGlwZWxpbmVPdXRwdXQ6IFBp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LEVBQzVCLFdBQVcsY0FBRSxPQUFPO0FBQUEsRUFDcEIsV0FBVyxjQUFFLE9BQU87QUFBQSxFQUNwQixPQUFPLGNBQUUsT0FBTztBQUFBLEVBQ2hCLGNBQWMsY0FBRSxPQUFPO0FBQUEsRUFDdkIsVUFBVSxjQUFFLE9BQU87QUFBQSxJQUNqQixVQUFVLGNBQUUsUUFBUTtBQUFBLElBQ3BCLGFBQWEsY0FBRSxPQUFPO0FBQUEsRUFDeEIsQ0FBQztBQUFBLEVBQ0QsSUFBSSxjQUFFLE9BQU87QUFBQSxFQUNiLFVBQVUsY0FBRSxRQUFRO0FBQUEsRUFDcEIsa0JBQWtCLGNBQUUsT0FBTztBQUM3QixDQUFDO0FBRU0sSUFBTSxXQUFXLGNBQUUsT0FBTztBQUFBLEVBQy9CLFdBQVcsY0FBRSxPQUFPO0FBQUEsRUFDcEIsV0FBVyxjQUFFLE9BQU87QUFBQSxFQUNwQixPQUFPLGNBQUUsT0FBTztBQUFBLEVBQ2hCLGNBQWMsY0FBRSxPQUFPO0FBQUEsRUFDdkIsSUFBSSxjQUFFLE9BQU87QUFBQSxFQUNiLFVBQVUsY0FBRSxRQUFRO0FBQUEsRUFDcEIsUUFBUSxNQUFNLE1BQU07QUFDdEIsQ0FBQztBQUVNLElBQU0saUJBQWlCLGNBQUUsT0FBTztBQUFBLEVBQ3JDLFdBQVcsU0FBUyxNQUFNO0FBQzVCLENBQUM7OztBSC9pQkQsSUFBTSxTQUFTO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsUUFBUSxDQUFDLFNBQVMsNEJBQTRCLDRCQUE0Qiw4QkFBOEIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsK0JBQStCLHlCQUF5QjtBQUFBLEVBQ2pQLE1BQU0sT0FBTyxPQUFPLFVBQW9DO0FBQ3RELFVBQU0sY0FBYyxNQUFNLE1BQU0saUJBQWlCO0FBQUEsTUFDL0MsV0FBVztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFDRCxVQUFNLFlBQVksWUFBWTtBQUM5QixVQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUs7QUFBQTtBQUFBLE1BRWhDLFVBQVUsc0JBQXNCLFVBQVUsVUFBVTtBQUFBLE1BQ3BELE1BQU0sVUFBVTtBQUFBLE1BQ2hCLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFDRCxXQUFPLFNBQVM7QUFBQSxFQUNsQjtBQUNGO0FBRUEsSUFBTywwQkFBUTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3pvZCIsICJpbXBvcnRfem9kIl0KfQo=
