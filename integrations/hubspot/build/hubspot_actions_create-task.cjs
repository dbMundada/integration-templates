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

// hubspot/actions/create-task.ts
var create_task_exports = {};
__export(create_task_exports, {
  default: () => create_task_default
});
module.exports = __toCommonJS(create_task_exports);

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

// hubspot/actions/create-task.ts
var action = {
  type: "action",
  description: "Creates a single task in Hubspot",
  version: "2.0.0",
  endpoint: {
    method: "POST",
    path: "/tasks",
    group: "Tasks"
  },
  input: CreateTaskInput,
  output: CreateUpdateTaskOutput,
  scopes: ["crm.objects.contacts.write", "oauth"],
  exec: async (nango, input) => {
    const parsedInput = await nango.zodValidateInput({
      zodSchema: CreateTaskInputSchema,
      input
    });
    const hubSpotNote = toHubspotTask(parsedInput.data);
    const config = {
      // https://developers.hubspot.com/docs/api/crm/tasks
      endpoint: "crm/v3/objects/tasks",
      data: hubSpotNote,
      retries: 3
    };
    const response = await nango.post(config);
    return createUpdateTask(response.data);
  }
};
var create_task_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaHVic3BvdC9hY3Rpb25zL2NyZWF0ZS10YXNrLnRzIiwgImh1YnNwb3QvbWFwcGVycy90b1Rhc2sudHMiLCAic2NoZW1hLnRzIiwgInNjaGVtYS56b2QudHMiLCAibW9kZWxzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICduYW5nbyc7XG5pbXBvcnQgeyBjcmVhdGVVcGRhdGVUYXNrLCB0b0h1YnNwb3RUYXNrIH0gZnJvbSAnLi4vbWFwcGVycy90b1Rhc2suanMnO1xuaW1wb3J0IHsgQ3JlYXRlVGFza0lucHV0U2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hLmpzJztcbmltcG9ydCB0eXBlIHsgUHJveHlDb25maWd1cmF0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHsgQ3JlYXRlVXBkYXRlVGFza091dHB1dCwgQ3JlYXRlVGFza0lucHV0IH0gZnJvbSAnLi4vLi4vbW9kZWxzLmpzJztcbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdDcmVhdGVzIGEgc2luZ2xlIHRhc2sgaW4gSHVic3BvdCcsXG4gIHZlcnNpb246ICcyLjAuMCcsXG4gIGVuZHBvaW50OiB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgcGF0aDogJy90YXNrcycsXG4gICAgZ3JvdXA6ICdUYXNrcydcbiAgfSxcbiAgaW5wdXQ6IENyZWF0ZVRhc2tJbnB1dCxcbiAgb3V0cHV0OiBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0LFxuICBzY29wZXM6IFsnY3JtLm9iamVjdHMuY29udGFjdHMud3JpdGUnLCAnb2F1dGgnXSxcbiAgZXhlYzogYXN5bmMgKG5hbmdvLCBpbnB1dCk6IFByb21pc2U8Q3JlYXRlVXBkYXRlVGFza091dHB1dD4gPT4ge1xuICAgIGNvbnN0IHBhcnNlZElucHV0ID0gYXdhaXQgbmFuZ28uem9kVmFsaWRhdGVJbnB1dCh7XG4gICAgICB6b2RTY2hlbWE6IENyZWF0ZVRhc2tJbnB1dFNjaGVtYSxcbiAgICAgIGlucHV0XG4gICAgfSk7XG4gICAgY29uc3QgaHViU3BvdE5vdGUgPSB0b0h1YnNwb3RUYXNrKHBhcnNlZElucHV0LmRhdGEpO1xuICAgIGNvbnN0IGNvbmZpZzogUHJveHlDb25maWd1cmF0aW9uID0ge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBpL2NybS90YXNrc1xuICAgICAgZW5kcG9pbnQ6ICdjcm0vdjMvb2JqZWN0cy90YXNrcycsXG4gICAgICBkYXRhOiBodWJTcG90Tm90ZSxcbiAgICAgIHJldHJpZXM6IDNcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmFuZ28ucG9zdChjb25maWcpO1xuICAgIHJldHVybiBjcmVhdGVVcGRhdGVUYXNrKHJlc3BvbnNlLmRhdGEpO1xuICB9XG59O1xuZXhwb3J0IHR5cGUgTmFuZ29BY3Rpb25Mb2NhbCA9IFBhcmFtZXRlcnM8KHR5cGVvZiBhY3Rpb24pWydleGVjJ10+WzBdO1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9uOyIsICJpbXBvcnQgdHlwZSB7IEFzc29jaWF0aW9uQ29tcGFueSwgQXNzb2NpYXRpb25Db250YWN0LCBBc3NvY2lhdGlvbkRlYWwsIENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQsIENyZWF0ZVRhc2tJbnB1dCwgVXBkYXRlVGFza0lucHV0LCBUYXNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzLmpzJztcbmltcG9ydCB0eXBlIHsgSHViU3BvdFRhc2ssIEh1YlNwb3RUYXNrTm9uVW5kZWZpbmVkLCBIdWJTcG90VGFza05vbk51bGwgfSBmcm9tICcuLi90eXBlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gdG9UYXNrKHRhc2s6IEh1YlNwb3RUYXNrTm9uVW5kZWZpbmVkLCBjb250YWN0czogQXNzb2NpYXRpb25Db250YWN0W10gfCB1bmRlZmluZWQsIGNvbXBhbmllczogQXNzb2NpYXRpb25Db21wYW55W10gfCB1bmRlZmluZWQsIGRlYWxzOiBBc3NvY2lhdGlvbkRlYWxbXSB8IHVuZGVmaW5lZCk6IFRhc2sge1xuICBjb25zdCBtYXBwZWRDb21wYW5pZXM6IEFzc29jaWF0aW9uQ29tcGFueVtdID0gKGNvbXBhbmllcyB8fCBbXSkubWFwKGNvbXBhbnkgPT4gKHtcbiAgICBpZDogY29tcGFueS5pZCxcbiAgICBuYW1lOiBjb21wYW55Lm5hbWVcbiAgfSkpO1xuICBjb25zdCBtYXBwZWRDb250YWN0czogQXNzb2NpYXRpb25Db250YWN0W10gPSAoY29udGFjdHMgfHwgW10pLm1hcChjb250YWN0ID0+ICh7XG4gICAgaWQ6IGNvbnRhY3QuaWQsXG4gICAgZmlyc3RfbmFtZTogY29udGFjdC5maXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZTogY29udGFjdC5sYXN0X25hbWVcbiAgfSkpO1xuICBjb25zdCBtYXBwZWREZWFsczogQXNzb2NpYXRpb25EZWFsW10gPSAoZGVhbHMgfHwgW10pLm1hcChkZWFsID0+ICh7XG4gICAgaWQ6IGRlYWwuaWQsXG4gICAgbmFtZTogZGVhbC5uYW1lXG4gIH0pKTtcbiAgY29uc3QgdGFza09iamVjdDogVGFzayA9IHtcbiAgICBpZDogdGFzay5pZCxcbiAgICB0YXNrX3R5cGU6IHRhc2sucHJvcGVydGllcy5oc190YXNrX3R5cGUsXG4gICAgdGl0bGU6IHRhc2sucHJvcGVydGllcy5oc190YXNrX3N1YmplY3QsXG4gICAgcHJpb3JpdHk6IHRhc2sucHJvcGVydGllcy5oc190YXNrX3ByaW9yaXR5LFxuICAgIGFzc2lnbmVkX3RvOiB0YXNrLnByb3BlcnRpZXMuaHVic3BvdF9vd25lcl9pZCxcbiAgICBkdWVfZGF0ZTogdGFzay5wcm9wZXJ0aWVzLmhzX3RpbWVzdGFtcCxcbiAgICBub3RlczogdGFzay5wcm9wZXJ0aWVzLmhzX3Rhc2tfYm9keVxuICB9O1xuICBpZiAobWFwcGVkQ29tcGFuaWVzLmxlbmd0aCA+IDAgfHwgbWFwcGVkQ29udGFjdHMubGVuZ3RoID4gMCB8fCBtYXBwZWREZWFscy5sZW5ndGggPiAwKSB7XG4gICAgdGFza09iamVjdC5yZXR1cm5lZF9hc3NvY2lhdGlvbnMgPSB7XG4gICAgICBjb21wYW5pZXM6IG1hcHBlZENvbXBhbmllcyxcbiAgICAgIGNvbnRhY3RzOiBtYXBwZWRDb250YWN0cyxcbiAgICAgIGRlYWxzOiBtYXBwZWREZWFsc1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHRhc2tPYmplY3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXBkYXRlVGFzayh0YXNrOiBIdWJTcG90VGFza05vbk51bGwpOiBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogdGFzay5pZCxcbiAgICB0YXNrX3R5cGU6IHRhc2sucHJvcGVydGllcy5oc190YXNrX3R5cGUsXG4gICAgdGl0bGU6IHRhc2sucHJvcGVydGllcy5oc190YXNrX3N1YmplY3QsXG4gICAgcHJpb3JpdHk6IHRhc2sucHJvcGVydGllcy5oc190YXNrX3ByaW9yaXR5LFxuICAgIGFzc2lnbmVkX3RvOiB0YXNrLnByb3BlcnRpZXMuaHVic3BvdF9vd25lcl9pZCxcbiAgICBkdWVfZGF0ZTogdGFzay5wcm9wZXJ0aWVzLmhzX3RpbWVzdGFtcCxcbiAgICBub3RlczogdGFzay5wcm9wZXJ0aWVzLmhzX3Rhc2tfYm9keVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvSHVic3BvdFRhc2sodGFzazogQ3JlYXRlVGFza0lucHV0IHwgVXBkYXRlVGFza0lucHV0KTogUGFydGlhbDxIdWJTcG90VGFzaz4ge1xuICBjb25zdCBodWJTcG90VGFzazogUGFydGlhbDxIdWJTcG90VGFzaz4gPSB7XG4gICAgcHJvcGVydGllczoge31cbiAgfTtcbiAgaWYgKHRhc2sudGl0bGUpIHtcbiAgICBodWJTcG90VGFzay5wcm9wZXJ0aWVzIS5oc190YXNrX3N1YmplY3QgPSB0YXNrLnRpdGxlO1xuICB9XG4gIGlmICh0YXNrLmR1ZV9kYXRlKSB7XG4gICAgaHViU3BvdFRhc2sucHJvcGVydGllcyEuaHNfdGltZXN0YW1wID0gdGFzay5kdWVfZGF0ZTtcbiAgfVxuICBpZiAodGFzay5wcmlvcml0eSkge1xuICAgIGh1YlNwb3RUYXNrLnByb3BlcnRpZXMhLmhzX3Rhc2tfcHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5O1xuICB9XG4gIGlmICh0YXNrLmFzc2lnbmVkX3RvKSB7XG4gICAgaHViU3BvdFRhc2sucHJvcGVydGllcyEuaHVic3BvdF9vd25lcl9pZCA9IHRhc2suYXNzaWduZWRfdG87XG4gIH1cbiAgaWYgKHRhc2subm90ZXMpIHtcbiAgICBodWJTcG90VGFzay5wcm9wZXJ0aWVzIS5oc190YXNrX2JvZHkgPSB0YXNrLm5vdGVzO1xuICB9XG4gIGlmICh0YXNrLmFzc29jaWF0aW9ucykge1xuICAgIGh1YlNwb3RUYXNrLmFzc29jaWF0aW9ucyA9IHRhc2suYXNzb2NpYXRpb25zLm1hcChhc3NvY2lhdGlvbiA9PiAoe1xuICAgICAgdG86IHtcbiAgICAgICAgaWQ6IGFzc29jaWF0aW9uLnRvXG4gICAgICB9LFxuICAgICAgdHlwZXM6IGFzc29jaWF0aW9uLnR5cGVzLm1hcCh0eXBlID0+ICh7XG4gICAgICAgIGFzc29jaWF0aW9uQ2F0ZWdvcnk6IHR5cGUuYXNzb2NpYXRpb25fY2F0ZWdvcnksXG4gICAgICAgIGFzc29jaWF0aW9uVHlwZUlkOiB0eXBlLmFzc29jaWF0aW9uX3R5cGVfSWRcbiAgICAgIH0pKVxuICAgIH0pKTtcbiAgfVxuICByZXR1cm4gaHViU3BvdFRhc2s7XG59IiwgImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdElucHV0U2NoZW1hIGFzIENyZWF0ZUNvbnRhY3RTY2hlbWEsIHVwZGF0ZUNvbnRhY3RJbnB1dFNjaGVtYSBhcyBVcGRhdGVDb250YWN0U2NoZW1hLCB1cGRhdGVDb21wYW55SW5wdXRTY2hlbWEgYXMgVXBkYXRlQ29tcGFueVNjaGVtYSwgdXBkYXRlRGVhbElucHV0U2NoZW1hIGFzIFVwZGF0ZURlYWxTY2hlbWEsIHVwZGF0ZVRhc2tJbnB1dFNjaGVtYSBhcyBVcGRhdGVUYXNrU2NoZW1hLCBjcmVhdGVUYXNrSW5wdXRTY2hlbWEgYXMgQ3JlYXRlVGFza1NjaGVtYSwgY3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSBhcyBDcmVhdGVQcm9wZXJ0eVNjaGVtYSB9IGZyb20gJy4vc2NoZW1hLnpvZC5qcyc7XG5jb25zdCB0eXBlU2NoZW1hID0gei51bmlvbihbei5saXRlcmFsKCdkYXRldGltZScpLCB6LmxpdGVyYWwoJ3N0cmluZycpLCB6LmxpdGVyYWwoJ251bWJlcicpLCB6LmxpdGVyYWwoJ2RhdGUnKSwgei5saXRlcmFsKCdlbnVtZXJhdGlvbicpLCB6LmxpdGVyYWwoJ2Jvb2wnKV0pO1xuY29uc3QgZmllbGRUeXBlU2NoZW1hID0gei51bmlvbihbei5saXRlcmFsKCd0ZXh0YXJlYScpLCB6LmxpdGVyYWwoJ3RleHQnKSwgei5saXRlcmFsKCdkYXRlJyksIHoubGl0ZXJhbCgnZmlsZScpLCB6LmxpdGVyYWwoJ251bWJlcicpLCB6LmxpdGVyYWwoJ3NlbGVjdCcpLCB6LmxpdGVyYWwoJ3JhZGlvJyksIHoubGl0ZXJhbCgnY2hlY2tib3gnKSwgei5saXRlcmFsKCdib29sZWFuY2hlY2tib3gnKSwgei5saXRlcmFsKCdjYWxjdWxhdGlvbl9lcXVhdGlvbicpXSk7XG5leHBvcnQgY29uc3QgQ3JlYXRlQ29udGFjdElucHV0U2NoZW1hID0gQ3JlYXRlQ29udGFjdFNjaGVtYS5yZWZpbmUoKGRhdGE6IHouaW5mZXI8dHlwZW9mIENyZWF0ZUNvbnRhY3RTY2hlbWE+KSA9PiB7XG4gIHJldHVybiBkYXRhLmVtYWlsIHx8IGRhdGEuZmlyc3RfbmFtZSB8fCBkYXRhLmxhc3RfbmFtZTtcbn0sIHtcbiAgbWVzc2FnZTogJ0F0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgbXVzdCBiZSBwcmVzZW50OiBlbWFpbCwgZmlyc3RuYW1lLCBvciBsYXN0bmFtZS4nXG59KTtcbmV4cG9ydCBjb25zdCBVcGRhdGVDb250YWN0SW5wdXRTY2hlbWEgPSBVcGRhdGVDb250YWN0U2NoZW1hLnJlZmluZSgoZGF0YTogei5pbmZlcjx0eXBlb2YgVXBkYXRlQ29udGFjdFNjaGVtYT4pID0+IHtcbiAgY29uc3QgaGFzRW1haWxPcklkID0gZGF0YS5lbWFpbCAhPT0gdW5kZWZpbmVkIHx8IGRhdGEuaWQgIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgaGFzT3RoZXJQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoZGF0YSkuc29tZShcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBuYW5nb2hxL2N1c3RvbS1pbnRlZ3JhdGlvbnMtbGludGluZy9uby1vYmplY3QtY2FzdGluZ1xuICBrZXkgPT4ga2V5ICE9PSAnZW1haWwnICYmIGtleSAhPT0gJ2lkJyAmJiBkYXRhW2tleSBhcyBrZXlvZiB6LmluZmVyPHR5cGVvZiBVcGRhdGVDb250YWN0U2NoZW1hPl0gIT09IHVuZGVmaW5lZCk7XG4gIHJldHVybiBoYXNFbWFpbE9ySWQgJiYgaGFzT3RoZXJQcm9wZXJ0aWVzO1xufSwge1xuICBtZXNzYWdlOiAnQXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBtdXN0IGJlIHByZXNlbnQ6IGVtYWlsIG9yIGlkLCBhbmQgYXQgbGVhc3Qgb25lIG90aGVyIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkLidcbn0pO1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUNvbXBhbnlJbnB1dFNjaGVtYSA9IFVwZGF0ZUNvbXBhbnlTY2hlbWEucmVmaW5lKChkYXRhOiB6LmluZmVyPHR5cGVvZiBVcGRhdGVDb21wYW55U2NoZW1hPikgPT4ge1xuICBjb25zdCBoYXNJZCA9IGRhdGEuaWQgIT09IHVuZGVmaW5lZDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5hbmdvaHEvY3VzdG9tLWludGVncmF0aW9ucy1saW50aW5nL25vLW9iamVjdC1jYXN0aW5nXG4gIGNvbnN0IGhhc090aGVyUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvbWUoa2V5ID0+IGtleSAhPT0gJ2lkJyAmJiBkYXRhW2tleSBhcyBrZXlvZiB0eXBlb2YgVXBkYXRlQ29tcGFueVNjaGVtYS5zaGFwZV0gIT09IHVuZGVmaW5lZCk7XG4gIHJldHVybiBoYXNJZCAmJiBoYXNPdGhlclByb3BlcnRpZXM7XG59LCB7XG4gIG1lc3NhZ2U6IFwiVGhlICdpZCcgcHJvcGVydHkgbXVzdCBiZSBwcmVzZW50IGFuZCBhdCBsZWFzdCBvbmUgb3RoZXIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQuXCJcbn0pO1xuZXhwb3J0IGNvbnN0IENyZWF0ZVRhc2tJbnB1dFNjaGVtYSA9IHouaW50ZXJzZWN0aW9uKENyZWF0ZVRhc2tTY2hlbWEsIHoub2JqZWN0KHtcbiAgdGFza190eXBlOiB6LmxpdGVyYWwoJ1RPRE8nKSxcbiAgcHJpb3JpdHk6IHouZW51bShbJ0xPVycsICdNRURJVU0nLCAnSElHSCddKSxcbiAgZHVlX2RhdGU6IHouc3RyaW5nKCkubWluKDEsIHtcbiAgICBtZXNzYWdlOiAnRHVlIGRhdGUgaXMgcmVxdWlyZWQuJ1xuICB9KVxufSkpO1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVRhc2tJbnB1dFNjaGVtYSA9IHouaW50ZXJzZWN0aW9uKFVwZGF0ZVRhc2tTY2hlbWEsIHoub2JqZWN0KHt9KSkucmVmaW5lKGRhdGEgPT4ge1xuICBjb25zdCBoYXNJZCA9IGRhdGEuaWQgIT09IHVuZGVmaW5lZDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBuYW5nb2hxL2N1c3RvbS1pbnRlZ3JhdGlvbnMtbGludGluZy9uby1vYmplY3QtY2FzdGluZ1xuICBjb25zdCBoYXNPdGhlclByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb21lKGtleSA9PiBrZXkgIT09ICdpZCcgJiYgZGF0YVtrZXkgYXMga2V5b2Ygei5pbmZlcjx0eXBlb2YgVXBkYXRlVGFza1NjaGVtYT5dICE9PSB1bmRlZmluZWQpO1xuICByZXR1cm4gaGFzSWQgJiYgaGFzT3RoZXJQcm9wZXJ0aWVzO1xufSwge1xuICBtZXNzYWdlOiBcIlRoZSAnaWQnIHByb3BlcnR5IG11c3QgYmUgcHJlc2VudCBhbmQgYXQgbGVhc3Qgb25lIG90aGVyIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkLlwiXG59KTtcbmV4cG9ydCBjb25zdCBVcGRhdGVEZWFsSW5wdXRTY2hlbWEgPSB6LmludGVyc2VjdGlvbihVcGRhdGVEZWFsU2NoZW1hLCB6Lm9iamVjdCh7fSkpLnJlZmluZShkYXRhID0+IHtcbiAgY29uc3QgaGFzSWQgPSBkYXRhLmlkICE9PSB1bmRlZmluZWQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmFuZ29ocS9jdXN0b20taW50ZWdyYXRpb25zLWxpbnRpbmcvbm8tb2JqZWN0LWNhc3RpbmdcbiAgY29uc3QgaGFzT3RoZXJQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoZGF0YSkuc29tZShrZXkgPT4ga2V5ICE9PSAnaWQnICYmIGRhdGFba2V5IGFzIGtleW9mIHouaW5mZXI8dHlwZW9mIFVwZGF0ZURlYWxTY2hlbWE+XSAhPT0gdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGhhc0lkICYmIGhhc090aGVyUHJvcGVydGllcztcbn0sIHtcbiAgbWVzc2FnZTogXCJUaGUgJ2lkJyBwcm9wZXJ0eSBtdXN0IGJlIHByZXNlbnQgYW5kIGF0IGxlYXN0IG9uZSBvdGhlciBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZC5cIlxufSk7XG5leHBvcnQgY29uc3QgQ3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSA9IENyZWF0ZVByb3BlcnR5U2NoZW1hLmV4dGVuZCh7XG4gIGRhdGE6IENyZWF0ZVByb3BlcnR5U2NoZW1hLnNoYXBlLmRhdGEuZXh0ZW5kKHtcbiAgICB0eXBlOiB0eXBlU2NoZW1hLFxuICAgIGZpZWxkVHlwZTogZmllbGRUeXBlU2NoZW1hXG4gIH0pXG59KS5zdXBlclJlZmluZSgoZGF0YTogei5pbmZlcjx0eXBlb2YgQ3JlYXRlUHJvcGVydHlTY2hlbWE+ICYge1xuICBkYXRhOiB7XG4gICAgdHlwZTogei5pbmZlcjx0eXBlb2YgdHlwZVNjaGVtYT47XG4gICAgZmllbGRUeXBlOiB6LmluZmVyPHR5cGVvZiBmaWVsZFR5cGVTY2hlbWE+O1xuICB9O1xufSwgY3R4OiB6LlJlZmluZW1lbnRDdHgpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgb3B0aW9uc1xuICB9ID0gZGF0YS5kYXRhO1xuICBpZiAodHlwZSA9PT0gJ2VudW1lcmF0aW9uJyAmJiAhb3B0aW9ucykge1xuICAgIGN0eC5hZGRJc3N1ZSh7XG4gICAgICBjb2RlOiB6LlpvZElzc3VlQ29kZS5jdXN0b20sXG4gICAgICBtZXNzYWdlOiAnSWYgdGhlIGlucHV0IHR5cGUgaXMgZW51bWVyYXRpb24sIG9wdGlvbnMgbXVzdCBiZSBwcm92aWRlZCcsXG4gICAgICBwYXRoOiBbJ2RhdGEnLCAnb3B0aW9ucyddXG4gICAgfSk7XG4gIH1cbn0pOyIsICIvLyBHZW5lcmF0ZWQgYnkgdHMtdG8tem9kXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmV4cG9ydCBjb25zdCBpZEVudGl0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgc3VjY2Vzczogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IGNvbnN0IGlkU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgdGltZXN0YW1wc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IG9wdGlvbmFsT2JqZWN0VHlwZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBpbnB1dFByb3BlcnR5U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBvcHRpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkob3B0aW9uU2NoZW1hKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBodWJzcG90RGVmaW5lZDogei5ib29sZWFuKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCksXG4gIG1vZGlmaWNhdGlvbk1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgYXJjaGl2YWJsZTogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKSxcbiAgICByZWFkT25seVZhbHVlOiB6LmJvb2xlYW4oKVxuICB9KSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKSxcbiAgZGF0YVNlbnNpdGl2aXR5OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eVJlc3BvbnNlU2NoZW1hID0gei5vYmplY3Qoe1xuICByZXN1bHQ6IHByb3BlcnR5U2NoZW1hXG59KTtcbmV4cG9ydCBjb25zdCBjdXN0b21Qcm9wZXJ0eU9wdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgY3VzdG9tUHJvcGVydHlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgcmVmZXJlbmNlZE9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogei5hcnJheShjdXN0b21Qcm9wZXJ0eU9wdGlvblNjaGVtYSkub3B0aW9uYWwoKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlUHJvcGVydHlJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgb2JqZWN0VHlwZTogei5zdHJpbmcoKSxcbiAgZGF0YTogY3VzdG9tUHJvcGVydHlTY2hlbWFcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZWRQcm9wZXJ0eVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY3JlYXRlZFVzZXJJZDogei5zdHJpbmcoKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgbW9kaWZpY2F0aW9uTWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICByZWFkT25seU9wdGlvbnM6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlWYWx1ZTogei5ib29sZWFuKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKSxcbiAgICBhcmNoaXZhYmxlOiB6LmJvb2xlYW4oKVxuICB9KSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgc2hvd0N1cnJlbmN5U3ltYm9sOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgaHVic3BvdERlZmluZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCksXG4gIGRhdGFTZW5zaXRpdml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBncm91cE5hbWU6IHouc3RyaW5nKCksXG4gIHJlZmVyZW5jZWRPYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIG9wdGlvbnM6IHouYXJyYXkoei5vYmplY3Qoe1xuICAgIGhpZGRlbjogei5ib29sZWFuKCksXG4gICAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICAgIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICAgIGxhYmVsOiB6LnN0cmluZygpLFxuICAgIHZhbHVlOiB6LnN0cmluZygpXG4gIH0pKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICB1cGRhdGVkVXNlcklkOiB6LnN0cmluZygpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCByb2xlU2NoZW1hID0gei5vYmplY3Qoe1xuICByZXF1aXJlc0JpbGxpbmdXcml0ZTogei5ib29sZWFuKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCByb2xlUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHJlc3VsdHM6IHouYXJyYXkocm9sZVNjaGVtYSlcbn0pO1xuZXhwb3J0IGNvbnN0IHVzZXJSb2xlSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVkVXNlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLFxuICByb2xlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgY29uc3QgY2hhbmdlZFJvbGVSZXNwb25zZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICByb2xlSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LmFycmF5KHouc3RyaW5nKCkpLm9wdGlvbmFsKCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBodWJzcG90U2VydmljZVRpY2tldFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHoubnVtYmVyKCksXG4gIGNyZWF0ZWRBdDogei5kYXRlKCksXG4gIHVwZGF0ZWRBdDogei5kYXRlKCksXG4gIGlzQXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdWJqZWN0OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBvYmplY3RJZDogei5udW1iZXIoKSxcbiAgb3duZXJJZDogei5udW1iZXIoKSxcbiAgcGlwZWxpbmU6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lU3RhZ2U6IHoubnVtYmVyKCksXG4gIHRpY2tldENhdGVnb3J5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHRpY2tldFByaW9yaXR5OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBodWJzcG90T3duZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6Lm51bWJlcigpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgdXNlcklkOiB6Lm51bWJlcigpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IGNvbnN0IHVzZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgcm9sZUlkczogei5hcnJheSh6LnN0cmluZygpKSxcbiAgcHJpbWFyeVRlYW1JZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyU2NoZW1hID0gei5vYmplY3Qoe1xuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgcm9sZUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgaHVic3BvdEtub3dsZWRnZUJhc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGNhdGVnb3J5OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBwdWJsaXNoRGF0ZTogei5udW1iZXIoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGFjdElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBmaXJzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxhc3RfY29udGFjdGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDb250YWN0SW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNvbnRhY3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsYXN0X2NvbnRhY3RlZDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBsYXN0X2FjdGl2aXR5X2RhdGU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBvd25lcjogei5zdHJpbmcoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBjdXJyZW5jeUNvZGVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjb2RlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29tcGFueUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgaW5kdXN0cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ29tcGFueUlucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY2l0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY291bnRyeTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjb21wYW55U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgaW5kdXN0cnk6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgY291bnRyeTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBjaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBvd25lcjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICB5ZWFyX2ZvdW5kZWQ6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgYWNjb3VudFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIHRpbWVab25lOiB6LnN0cmluZygpLFxuICBjb21wYW55Q3VycmVuY3k6IHouc3RyaW5nKCksXG4gIGFkZGl0aW9uYWxDdXJyZW5jaWVzOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICB1dGNPZmZzZXQ6IHouc3RyaW5nKCksXG4gIHV0Y09mZnNldE1pbGxpc2Vjb25kczogei5udW1iZXIoKSxcbiAgdWlEb21haW46IHouc3RyaW5nKCksXG4gIGRhdGFIb3N0aW5nTG9jYXRpb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uVHlwZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGFzc29jaWF0aW9uX2NhdGVnb3J5OiB6LnN0cmluZygpLFxuICBhc3NvY2lhdGlvbl90eXBlX0lkOiB6Lm51bWJlcigpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdG86IHoubnVtYmVyKCksXG4gIHR5cGVzOiB6LmFycmF5KGFzc29jaWF0aW9uVHlwZXNTY2hlbWEpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRhc2tfdHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlVGFza0lucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBub3Rlczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVUYXNrT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBub3Rlczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBhc3NvY2lhdGlvbkNvbXBhbnlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uQ29udGFjdFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKClcbn0pO1xuZXhwb3J0IGNvbnN0IGFzc29jaWF0aW9uRGVhbFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbXBhbmllczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvbkNvbXBhbnlTY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgY29udGFjdHM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25Db250YWN0U2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxzOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uRGVhbFNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCB0YXNrU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogei51bmlvbihbcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEsIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVEZWFsSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IHoudW5pb24oW3ouYXJyYXkoYXNzb2NpYXRpb25TY2hlbWEpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGVhbElucHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogei51bmlvbihbei5hcnJheShhc3NvY2lhdGlvblNjaGVtYSksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVVcGRhdGVEZWFsT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGRlYWxTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogei51bmlvbihbcmV0dXJuZWRBc3NvY2lhdGlvbnNTY2hlbWEsIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCBjb25zdCBub3RlU2NoZW1hID0gei5vYmplY3Qoe1xuICBpZDogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIHRpbWVfc3RhbXA6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIGJvZHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoudW5kZWZpbmVkKCldKS5vcHRpb25hbCgpLFxuICBhdHRhY2htZW50X2lkczogei51bmlvbihbei5zdHJpbmcoKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6LnVuZGVmaW5lZCgpXSkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiB6LnVuaW9uKFt6LmFycmF5KGFzc29jaWF0aW9uU2NoZW1hKSwgei51bmRlZmluZWQoKV0pLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IGNvbnN0IGxpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5zdHJpbmcoKSxcbiAgcmVjdXJyaW5nYmlsbGluZ2ZyZXF1ZW5jeTogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICB0YXg6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLFxuICBjcmVhdGVkYXRlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZGlzY291bnQ6IHoubnVtYmVyKCkubnVsbGFibGUoKVxufSk7XG5leHBvcnQgY29uc3QgbGluZUl0ZW1TY2hlbWEgPSB6LnJlY29yZCh6LnN0cmluZygpLCB6LmFueSgpKS5hbmQoei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoubnVtYmVyKCkubnVsbGFibGUoKSxcbiAgdGF4OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIGlkOiB6LnN0cmluZygpXG59KSk7XG5leHBvcnQgY29uc3QgY3VzdG9tT2JqZWN0U2NoZW1hID0gei5yZWNvcmQoei5zdHJpbmcoKSwgei5hbnkoKSkuYW5kKHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pKTtcbmV4cG9ydCBjb25zdCBwcm9kdWN0U2NoZW1hID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFtb3VudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5udWxsYWJsZSgpLFxuICBkaXNjb3VudDogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICBza3U6IHouc3RyaW5nKCkubnVsbGFibGUoKSxcbiAgdXJsOiB6LnN0cmluZygpLm51bGxhYmxlKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei5udW1iZXIoKS5udWxsYWJsZSgpLFxuICByZWN1cnJpbmdCaWxsaW5nRnJlcXVlbmN5OiB6Lm51bWJlcigpLm51bGxhYmxlKCksXG4gIHRheDogei5udW1iZXIoKS5udWxsYWJsZSgpXG59KTtcbmV4cG9ydCBjb25zdCBzdGFnZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIG1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgaXNDbG9zZWQ6IHouYm9vbGVhbigpLFxuICAgIHByb2JhYmlsaXR5OiB6LnN0cmluZygpXG4gIH0pLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICB3cml0ZVBlcm1pc3Npb25zOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCBjb25zdCBwaXBlbGluZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIHN0YWdlczogei5hcnJheShzdGFnZVNjaGVtYSlcbn0pO1xuZXhwb3J0IGNvbnN0IHBpcGVsaW5lT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBwaXBlbGluZXM6IHouYXJyYXkocGlwZWxpbmVTY2hlbWEpXG59KTsiLCAiaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmV4cG9ydCBjb25zdCBJZEVudGl0eSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSWRFbnRpdHkgPSB6LmluZmVyPHR5cGVvZiBJZEVudGl0eT47XG5leHBvcnQgY29uc3QgU3VjY2Vzc1Jlc3BvbnNlID0gei5vYmplY3Qoe1xuICBzdWNjZXNzOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBTdWNjZXNzUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBTdWNjZXNzUmVzcG9uc2U+O1xuZXhwb3J0IGNvbnN0IElkID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBJZCA9IHouaW5mZXI8dHlwZW9mIElkPjtcbmV4cG9ydCBjb25zdCBUaW1lc3RhbXBzID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBUaW1lc3RhbXBzID0gei5pbmZlcjx0eXBlb2YgVGltZXN0YW1wcz47XG5leHBvcnQgY29uc3QgT3B0aW9uYWxPYmplY3RUeXBlID0gei5vYmplY3Qoe1xuICBvYmplY3RUeXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgT3B0aW9uYWxPYmplY3RUeXBlID0gei5pbmZlcjx0eXBlb2YgT3B0aW9uYWxPYmplY3RUeXBlPjtcbmV4cG9ydCBjb25zdCBJbnB1dFByb3BlcnR5ID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIElucHV0UHJvcGVydHkgPSB6LmluZmVyPHR5cGVvZiBJbnB1dFByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBPcHRpb24gPSB6Lm9iamVjdCh7XG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIE9wdGlvbiA9IHouaW5mZXI8dHlwZW9mIE9wdGlvbj47XG5leHBvcnQgY29uc3QgUHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIGZpZWxkVHlwZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogei5hbnkoKS5vcHRpb25hbCgpLmFycmF5KCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgY2FsY3VsYXRlZDogei5ib29sZWFuKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgaHVic3BvdERlZmluZWQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgbW9kaWZpY2F0aW9uTWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICBhcmNoaXZhYmxlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5RGVmaW5pdGlvbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICByZWFkT25seVZhbHVlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5T3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKVxuICB9KS5vcHRpb25hbCgpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLFxuICBkYXRhU2Vuc2l0aXZpdHk6IHouc3RyaW5nKClcbn0pLmNhdGNoYWxsKHouYW55KCkpO1xuZXhwb3J0IHR5cGUgUHJvcGVydHkgPSB6LmluZmVyPHR5cGVvZiBQcm9wZXJ0eT47XG5leHBvcnQgY29uc3QgUHJvcGVydHlSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgcmVzdWx0czogUHJvcGVydHkuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBQcm9wZXJ0eVJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgUHJvcGVydHlSZXNwb25zZT47XG5leHBvcnQgY29uc3QgQ3VzdG9tUHJvcGVydHlPcHRpb24gPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdmFsdWU6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3VzdG9tUHJvcGVydHlPcHRpb24gPSB6LmluZmVyPHR5cGVvZiBDdXN0b21Qcm9wZXJ0eU9wdGlvbj47XG5leHBvcnQgY29uc3QgQ3VzdG9tUHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIGhpZGRlbjogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgcmVmZXJlbmNlZE9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogQ3VzdG9tUHJvcGVydHlPcHRpb24uYXJyYXkoKSxcbiAgY2FsY3VsYXRpb25Gb3JtdWxhOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGhhc1VuaXF1ZVZhbHVlOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDdXN0b21Qcm9wZXJ0eSA9IHouaW5mZXI8dHlwZW9mIEN1c3RvbVByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVQcm9wZXJ0eUlucHV0ID0gei5vYmplY3Qoe1xuICBvYmplY3RUeXBlOiB6LnN0cmluZygpLFxuICBkYXRhOiBDdXN0b21Qcm9wZXJ0eVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVQcm9wZXJ0eUlucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlUHJvcGVydHlJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlZFByb3BlcnR5ID0gei5vYmplY3Qoe1xuICBjcmVhdGVkVXNlcklkOiB6LnN0cmluZygpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBtb2RpZmljYXRpb25NZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIHJlYWRPbmx5T3B0aW9uczogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgICByZWFkT25seVZhbHVlOiB6LmJvb2xlYW4oKSxcbiAgICByZWFkT25seURlZmluaXRpb246IHouYm9vbGVhbigpLFxuICAgIGFyY2hpdmFibGU6IHouYm9vbGVhbigpXG4gIH0pLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLFxuICBzaG93Q3VycmVuY3lTeW1ib2w6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICBodWJzcG90RGVmaW5lZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZm9ybUZpZWxkOiB6LmJvb2xlYW4oKSxcbiAgZGF0YVNlbnNpdGl2aXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIGdyb3VwTmFtZTogei5zdHJpbmcoKSxcbiAgcmVmZXJlbmNlZE9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgb3B0aW9uczogei5hcnJheSh6Lm9iamVjdCh7XG4gICAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gICAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gICAgbGFiZWw6IHouc3RyaW5nKCksXG4gICAgdmFsdWU6IHouc3RyaW5nKClcbiAgfSkpLFxuICBjYWxjdWxhdGlvbkZvcm11bGE6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLFxuICBmaWVsZFR5cGU6IHouc3RyaW5nKCksXG4gIHVwZGF0ZWRVc2VySWQ6IHouc3RyaW5nKCksXG4gIGNhbGN1bGF0ZWQ6IHouYm9vbGVhbigpLFxuICBleHRlcm5hbE9wdGlvbnM6IHouYm9vbGVhbigpLFxuICB1cGRhdGVkQXQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlZFByb3BlcnR5ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlZFByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBSb2xlID0gei5vYmplY3Qoe1xuICByZXF1aXJlc0JpbGxpbmdXcml0ZTogei5ib29sZWFuKCksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFJvbGUgPSB6LmluZmVyPHR5cGVvZiBSb2xlPjtcbmV4cG9ydCBjb25zdCBSb2xlUmVzcG9uc2UgPSB6Lm9iamVjdCh7XG4gIHJlc3VsdHM6IFJvbGUuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBSb2xlUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBSb2xlUmVzcG9uc2U+O1xuZXhwb3J0IGNvbnN0IFVzZXJSb2xlSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVzZXJSb2xlSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVc2VyUm9sZUlucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVkVXNlciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLFxuICByb2xlSWRzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgc3VwZXJBZG1pbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlZFVzZXIgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVkVXNlcj47XG5leHBvcnQgY29uc3QgQ2hhbmdlZFJvbGVSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICByb2xlSWRzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHNlY29uZGFyeVRlYW1JZHM6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5hcnJheSgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBDaGFuZ2VkUm9sZVJlc3BvbnNlID0gei5pbmZlcjx0eXBlb2YgQ2hhbmdlZFJvbGVSZXNwb25zZT47XG5leHBvcnQgY29uc3QgSHVic3BvdFNlcnZpY2VUaWNrZXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBpc0FyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgc3ViamVjdDogei5zdHJpbmcoKSxcbiAgY29udGVudDogei5zdHJpbmcoKSxcbiAgb2JqZWN0SWQ6IHoubnVtYmVyKCksXG4gIG93bmVySWQ6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lOiB6Lm51bWJlcigpLFxuICBwaXBlbGluZVN0YWdlOiB6Lm51bWJlcigpLFxuICB0aWNrZXRDYXRlZ29yeTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdGlja2V0UHJpb3JpdHk6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSHVic3BvdFNlcnZpY2VUaWNrZXQgPSB6LmluZmVyPHR5cGVvZiBIdWJzcG90U2VydmljZVRpY2tldD47XG5leHBvcnQgY29uc3QgSHVic3BvdE93bmVyID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHVzZXJJZDogei5udW1iZXIoKSxcbiAgY3JlYXRlZEF0OiB6LmRhdGUoKSxcbiAgdXBkYXRlZEF0OiB6LmRhdGUoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIEh1YnNwb3RPd25lciA9IHouaW5mZXI8dHlwZW9mIEh1YnNwb3RPd25lcj47XG5leHBvcnQgY29uc3QgVXNlciA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBmaXJzdE5hbWU6IHouc3RyaW5nKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLFxuICByb2xlSWRzOiB6LnN0cmluZygpLmFycmF5KCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc3VwZXJBZG1pbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgVXNlciA9IHouaW5mZXI8dHlwZW9mIFVzZXI+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVzZXIgPSB6Lm9iamVjdCh7XG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLFxuICBzZW5kV2VsY29tZUVtYWlsOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICByb2xlSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5zdHJpbmcoKS5vcHRpb25hbCgpLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXNlciA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVzZXI+O1xuZXhwb3J0IGNvbnN0IFVzZXJJbmZvcm1hdGlvbiA9IHoub2JqZWN0KHtcbiAgaWQ6IHoubnVtYmVyKCksXG4gIGVtYWlsOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFVzZXJJbmZvcm1hdGlvbiA9IHouaW5mZXI8dHlwZW9mIFVzZXJJbmZvcm1hdGlvbj47XG5leHBvcnQgY29uc3QgSHVic3BvdEtub3dsZWRnZUJhc2UgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0aXRsZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGNhdGVnb3J5OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBwdWJsaXNoRGF0ZTogei5udW1iZXIoKVxufSk7XG5leHBvcnQgdHlwZSBIdWJzcG90S25vd2xlZGdlQmFzZSA9IHouaW5mZXI8dHlwZW9mIEh1YnNwb3RLbm93bGVkZ2VCYXNlPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVDb250YWN0SW5wdXQgPSB6Lm9iamVjdCh7XG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlQ29udGFjdElucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlQ29udGFjdElucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBmaXJzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9jb250YWN0ZWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXBkYXRlQ29udGFjdE91dHB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlQ29udGFjdElucHV0ID0gei5vYmplY3Qoe1xuICBmaXJzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBqb2JfdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBVcGRhdGVDb250YWN0SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGRhdGVDb250YWN0SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENvbnRhY3QgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxhc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZW1haWw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGpvYl90aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9jb250YWN0ZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxhc3RfYWN0aXZpdHlfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgc2FsdXRhdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIENvbnRhY3QgPSB6LmluZmVyPHR5cGVvZiBDb250YWN0PjtcbmV4cG9ydCBjb25zdCBDdXJyZW5jeUNvZGUgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjb2RlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBDdXJyZW5jeUNvZGUgPSB6LmluZmVyPHR5cGVvZiBDdXJyZW5jeUNvZGU+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZUNvbXBhbnlJbnB1dCA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZUNvbXBhbnlJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZUNvbXBhbnlJbnB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlQ29tcGFueUlucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVwZGF0ZUNvbXBhbnlJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZUNvbXBhbnlJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpbmR1c3RyeTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHllYXJfZm91bmRlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0PjtcbmV4cG9ydCBjb25zdCBDb21wYW55ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBpbmR1c3RyeTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGNvdW50cnk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGNpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxlYWRfc3RhdHVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB5ZWFyX2ZvdW5kZWQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHdlYnNpdGVfdXJsOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIENvbXBhbnkgPSB6LmluZmVyPHR5cGVvZiBDb21wYW55PjtcbmV4cG9ydCBjb25zdCBBY2NvdW50ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgdGltZVpvbmU6IHouc3RyaW5nKCksXG4gIGNvbXBhbnlDdXJyZW5jeTogei5zdHJpbmcoKSxcbiAgYWRkaXRpb25hbEN1cnJlbmNpZXM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgdXRjT2Zmc2V0OiB6LnN0cmluZygpLFxuICB1dGNPZmZzZXRNaWxsaXNlY29uZHM6IHoubnVtYmVyKCksXG4gIHVpRG9tYWluOiB6LnN0cmluZygpLFxuICBkYXRhSG9zdGluZ0xvY2F0aW9uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIEFjY291bnQgPSB6LmluZmVyPHR5cGVvZiBBY2NvdW50PjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvblR5cGVzID0gei5vYmplY3Qoe1xuICBhc3NvY2lhdGlvbl9jYXRlZ29yeTogei5zdHJpbmcoKSxcbiAgYXNzb2NpYXRpb25fdHlwZV9JZDogei5udW1iZXIoKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvblR5cGVzID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb25UeXBlcz47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb24gPSB6Lm9iamVjdCh7XG4gIHRvOiB6Lm51bWJlcigpLFxuICB0eXBlczogQXNzb2NpYXRpb25UeXBlcy5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb24+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVRhc2tJbnB1dCA9IHoub2JqZWN0KHtcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVRhc2tJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVRhc2tJbnB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlVGFza0lucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIFVwZGF0ZVRhc2tJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZVRhc2tJbnB1dD47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXBkYXRlVGFza091dHB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmlvcml0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NpZ25lZF90bzogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkdWVfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBub3Rlczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXBkYXRlVGFza091dHB1dD47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25Db21wYW55ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvbkNvbXBhbnkgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbkNvbXBhbnk+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uQ29udGFjdCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxhc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvbkNvbnRhY3QgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbkNvbnRhY3Q+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uRGVhbCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQXNzb2NpYXRpb25EZWFsID0gei5pbmZlcjx0eXBlb2YgQXNzb2NpYXRpb25EZWFsPjtcbmV4cG9ydCBjb25zdCBSZXR1cm5lZEFzc29jaWF0aW9ucyA9IHoub2JqZWN0KHtcbiAgY29tcGFuaWVzOiBBc3NvY2lhdGlvbkNvbXBhbnkuYXJyYXkoKS5vcHRpb25hbCgpLFxuICBjb250YWN0czogQXNzb2NpYXRpb25Db250YWN0LmFycmF5KCkub3B0aW9uYWwoKSxcbiAgZGVhbHM6IEFzc29jaWF0aW9uRGVhbC5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgUmV0dXJuZWRBc3NvY2lhdGlvbnMgPSB6LmluZmVyPHR5cGVvZiBSZXR1cm5lZEFzc29jaWF0aW9ucz47XG5leHBvcnQgY29uc3QgVGFzayA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRhc2tfdHlwZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgdGl0bGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHByaW9yaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBhc3NpZ25lZF90bzogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZHVlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG5vdGVzOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICByZXR1cm5lZF9hc3NvY2lhdGlvbnM6IFJldHVybmVkQXNzb2NpYXRpb25zLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVGFzayA9IHouaW5mZXI8dHlwZW9mIFRhc2s+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZURlYWxJbnB1dCA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2xvc2VfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVEZWFsSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVEZWFsSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZURlYWxJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIG5hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNsb3NlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9kZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfcHJvYmFiaWxpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBkYXRlRGVhbElucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBkYXRlRGVhbElucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2xvc2VfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0PjtcbmV4cG9ydCBjb25zdCBEZWFsID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgYW1vdW50OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBjbG9zZV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBvd25lcjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGVhbF9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcmV0dXJuZWRfYXNzb2NpYXRpb25zOiBSZXR1cm5lZEFzc29jaWF0aW9ucy5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIERlYWwgPSB6LmluZmVyPHR5cGVvZiBEZWFsPjtcbmV4cG9ydCBjb25zdCBOb3RlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB0aW1lX3N0YW1wOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYm9keTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhdHRhY2htZW50X2lkczogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBOb3RlID0gei5pbmZlcjx0eXBlb2YgTm90ZT47XG5leHBvcnQgY29uc3QgTGluZUl0ZW1EZWZhdWx0UHJvcGVydGllcyA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgcHJpY2U6IHouc3RyaW5nKCksXG4gIHF1YW50aXR5OiB6LnN0cmluZygpLFxuICByZWN1cnJpbmdiaWxsaW5nZnJlcXVlbmN5OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICB0YXg6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pXG59KTtcbmV4cG9ydCB0eXBlIExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXMgPSB6LmluZmVyPHR5cGVvZiBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzPjtcbmV4cG9ydCBjb25zdCBMaW5lSXRlbSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgcHJpY2U6IHouc3RyaW5nKCksXG4gIHF1YW50aXR5OiB6LnN0cmluZygpLFxuICByZWN1cnJpbmdiaWxsaW5nZnJlcXVlbmN5OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICB0YXg6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIGFtb3VudDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZGF0ZTogei5zdHJpbmcoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIGRpc2NvdW50OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pLFxuICBpZDogei5zdHJpbmcoKVxufSkuY2F0Y2hhbGwoei5hbnkoKSk7XG5leHBvcnQgdHlwZSBMaW5lSXRlbSA9IHouaW5mZXI8dHlwZW9mIExpbmVJdGVtPjtcbmV4cG9ydCBjb25zdCBDdXN0b21PYmplY3QgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KS5jYXRjaGFsbCh6LmFueSgpKTtcbmV4cG9ydCB0eXBlIEN1c3RvbU9iamVjdCA9IHouaW5mZXI8dHlwZW9mIEN1c3RvbU9iamVjdD47XG5leHBvcnQgY29uc3QgUHJvZHVjdCA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhbW91bnQ6IHoudW5pb24oW3oubnVtYmVyKCksIHoubnVsbCgpXSksXG4gIGRlc2NyaXB0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkaXNjb3VudDogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgc2t1OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB1cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG5hbWU6IHouc3RyaW5nKCksXG4gIHByaWNlOiB6LnN0cmluZygpLFxuICBxdWFudGl0eTogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgcmVjdXJyaW5nQmlsbGluZ0ZyZXF1ZW5jeTogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgdGF4OiB6LnVuaW9uKFt6Lm51bGwoKSwgei5udW1iZXIoKV0pXG59KTtcbmV4cG9ydCB0eXBlIFByb2R1Y3QgPSB6LmluZmVyPHR5cGVvZiBQcm9kdWN0PjtcbmV4cG9ydCBjb25zdCBTdGFnZSA9IHoub2JqZWN0KHtcbiAgdXBkYXRlZEF0OiB6LnN0cmluZygpLFxuICBjcmVhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIG1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgaXNDbG9zZWQ6IHouYm9vbGVhbigpLFxuICAgIHByb2JhYmlsaXR5OiB6LnN0cmluZygpXG4gIH0pLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICB3cml0ZVBlcm1pc3Npb25zOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFN0YWdlID0gei5pbmZlcjx0eXBlb2YgU3RhZ2U+O1xuZXhwb3J0IGNvbnN0IFBpcGVsaW5lID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgc3RhZ2VzOiBTdGFnZS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIFBpcGVsaW5lID0gei5pbmZlcjx0eXBlb2YgUGlwZWxpbmU+O1xuZXhwb3J0IGNvbnN0IFBpcGVsaW5lT3V0cHV0ID0gei5vYmplY3Qoe1xuICBwaXBlbGluZXM6IFBpcGVsaW5lLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgUGlwZWxpbmVPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBQaXBlbGluZU91dHB1dD47XG5leHBvcnQgY29uc3QgbW9kZWxzID0ge1xuICBJZEVudGl0eTogSWRFbnRpdHksXG4gIFN1Y2Nlc3NSZXNwb25zZTogU3VjY2Vzc1Jlc3BvbnNlLFxuICBJZDogSWQsXG4gIFRpbWVzdGFtcHM6IFRpbWVzdGFtcHMsXG4gIE9wdGlvbmFsT2JqZWN0VHlwZTogT3B0aW9uYWxPYmplY3RUeXBlLFxuICBJbnB1dFByb3BlcnR5OiBJbnB1dFByb3BlcnR5LFxuICBPcHRpb246IE9wdGlvbixcbiAgUHJvcGVydHk6IFByb3BlcnR5LFxuICBQcm9wZXJ0eVJlc3BvbnNlOiBQcm9wZXJ0eVJlc3BvbnNlLFxuICBDdXN0b21Qcm9wZXJ0eU9wdGlvbjogQ3VzdG9tUHJvcGVydHlPcHRpb24sXG4gIEN1c3RvbVByb3BlcnR5OiBDdXN0b21Qcm9wZXJ0eSxcbiAgQ3JlYXRlUHJvcGVydHlJbnB1dDogQ3JlYXRlUHJvcGVydHlJbnB1dCxcbiAgQ3JlYXRlZFByb3BlcnR5OiBDcmVhdGVkUHJvcGVydHksXG4gIFJvbGU6IFJvbGUsXG4gIFJvbGVSZXNwb25zZTogUm9sZVJlc3BvbnNlLFxuICBVc2VyUm9sZUlucHV0OiBVc2VyUm9sZUlucHV0LFxuICBDcmVhdGVkVXNlcjogQ3JlYXRlZFVzZXIsXG4gIENoYW5nZWRSb2xlUmVzcG9uc2U6IENoYW5nZWRSb2xlUmVzcG9uc2UsXG4gIEh1YnNwb3RTZXJ2aWNlVGlja2V0OiBIdWJzcG90U2VydmljZVRpY2tldCxcbiAgSHVic3BvdE93bmVyOiBIdWJzcG90T3duZXIsXG4gIFVzZXI6IFVzZXIsXG4gIENyZWF0ZVVzZXI6IENyZWF0ZVVzZXIsXG4gIFVzZXJJbmZvcm1hdGlvbjogVXNlckluZm9ybWF0aW9uLFxuICBIdWJzcG90S25vd2xlZGdlQmFzZTogSHVic3BvdEtub3dsZWRnZUJhc2UsXG4gIENyZWF0ZUNvbnRhY3RJbnB1dDogQ3JlYXRlQ29udGFjdElucHV0LFxuICBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0OiBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0LFxuICBVcGRhdGVDb250YWN0SW5wdXQ6IFVwZGF0ZUNvbnRhY3RJbnB1dCxcbiAgQ29udGFjdDogQ29udGFjdCxcbiAgQ3VycmVuY3lDb2RlOiBDdXJyZW5jeUNvZGUsXG4gIENyZWF0ZUNvbXBhbnlJbnB1dDogQ3JlYXRlQ29tcGFueUlucHV0LFxuICBVcGRhdGVDb21wYW55SW5wdXQ6IFVwZGF0ZUNvbXBhbnlJbnB1dCxcbiAgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dDogQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCxcbiAgQ29tcGFueTogQ29tcGFueSxcbiAgQWNjb3VudDogQWNjb3VudCxcbiAgQXNzb2NpYXRpb25UeXBlczogQXNzb2NpYXRpb25UeXBlcyxcbiAgQXNzb2NpYXRpb246IEFzc29jaWF0aW9uLFxuICBDcmVhdGVUYXNrSW5wdXQ6IENyZWF0ZVRhc2tJbnB1dCxcbiAgVXBkYXRlVGFza0lucHV0OiBVcGRhdGVUYXNrSW5wdXQsXG4gIENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQ6IENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQsXG4gIEFzc29jaWF0aW9uQ29tcGFueTogQXNzb2NpYXRpb25Db21wYW55LFxuICBBc3NvY2lhdGlvbkNvbnRhY3Q6IEFzc29jaWF0aW9uQ29udGFjdCxcbiAgQXNzb2NpYXRpb25EZWFsOiBBc3NvY2lhdGlvbkRlYWwsXG4gIFJldHVybmVkQXNzb2NpYXRpb25zOiBSZXR1cm5lZEFzc29jaWF0aW9ucyxcbiAgVGFzazogVGFzayxcbiAgQ3JlYXRlRGVhbElucHV0OiBDcmVhdGVEZWFsSW5wdXQsXG4gIFVwZGF0ZURlYWxJbnB1dDogVXBkYXRlRGVhbElucHV0LFxuICBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0OiBDcmVhdGVVcGRhdGVEZWFsT3V0cHV0LFxuICBEZWFsOiBEZWFsLFxuICBOb3RlOiBOb3RlLFxuICBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzOiBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzLFxuICBMaW5lSXRlbTogTGluZUl0ZW0sXG4gIEN1c3RvbU9iamVjdDogQ3VzdG9tT2JqZWN0LFxuICBQcm9kdWN0OiBQcm9kdWN0LFxuICBTdGFnZTogU3RhZ2UsXG4gIFBpcGVsaW5lOiBQaXBlbGluZSxcbiAgUGlwZWxpbmVPdXRwdXQ6IFBpcGVsaW5lT3V0cHV0XG59OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDa0NPLFNBQVMsaUJBQWlCLE1BQWtEO0FBQ2pGLFNBQU87QUFBQSxJQUNMLElBQUksS0FBSztBQUFBLElBQ1QsV0FBVyxLQUFLLFdBQVc7QUFBQSxJQUMzQixPQUFPLEtBQUssV0FBVztBQUFBLElBQ3ZCLFVBQVUsS0FBSyxXQUFXO0FB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
