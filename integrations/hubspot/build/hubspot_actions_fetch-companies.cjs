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

// hubspot/actions/fetch-companies.ts
var fetch_companies_exports = {};
__export(fetch_companies_exports, {
  default: () => fetch_companies_default
});
module.exports = __toCommonJS(fetch_companies_exports);

// hubspot/mappers/toCompany.ts
function toCompany(company) {
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

// models.ts
var import_zod = require("zod");
var IdEntity = import_zod.z.object({
  id: import_zod.z.string()
});
var SuccessResponse = import_zod.z.object({
  success: import_zod.z.boolean()
});
var Id = import_zod.z.object({
  id: import_zod.z.string()
});
var Timestamps = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string()
});
var OptionalObjectType = import_zod.z.object({
  objectType: import_zod.z.string().optional()
});
var InputProperty = import_zod.z.object({
  name: import_zod.z.string()
});
var Option = import_zod.z.object({
  label: import_zod.z.string(),
  value: import_zod.z.string(),
  displayOrder: import_zod.z.number(),
  hidden: import_zod.z.boolean()
});
var Property = import_zod.z.object({
  createdAt: import_zod.z.string().optional(),
  updatedAt: import_zod.z.string().optional(),
  name: import_zod.z.string(),
  label: import_zod.z.string(),
  type: import_zod.z.string(),
  fieldType: import_zod.z.string(),
  description: import_zod.z.string(),
  groupName: import_zod.z.string(),
  options: import_zod.z.any().optional().array(),
  displayOrder: import_zod.z.number(),
  calculated: import_zod.z.boolean(),
  externalOptions: import_zod.z.boolean(),
  hasUniqueValue: import_zod.z.boolean(),
  hidden: import_zod.z.boolean(),
  hubspotDefined: import_zod.z.boolean().optional(),
  showCurrencySymbol: import_zod.z.boolean().optional(),
  modificationMetadata: import_zod.z.object({
    archivable: import_zod.z.boolean().optional(),
    readOnlyDefinition: import_zod.z.boolean().optional(),
    readOnlyValue: import_zod.z.boolean().optional(),
    readOnlyOptions: import_zod.z.boolean().optional()
  }).optional(),
  formField: import_zod.z.boolean(),
  dataSensitivity: import_zod.z.string()
}).catchall(import_zod.z.any());
var PropertyResponse = import_zod.z.object({
  results: Property.array()
});
var CustomPropertyOption = import_zod.z.object({
  hidden: import_zod.z.boolean(),
  displayOrder: import_zod.z.number().optional(),
  description: import_zod.z.string().optional(),
  label: import_zod.z.string(),
  value: import_zod.z.string()
});
var CustomProperty = import_zod.z.object({
  hidden: import_zod.z.boolean().optional(),
  displayOrder: import_zod.z.number().optional(),
  description: import_zod.z.string().optional(),
  label: import_zod.z.string(),
  type: import_zod.z.string(),
  formField: import_zod.z.boolean().optional(),
  groupName: import_zod.z.string(),
  referencedObjectType: import_zod.z.string().optional(),
  name: import_zod.z.string(),
  options: CustomPropertyOption.array(),
  calculationFormula: import_zod.z.string().optional(),
  hasUniqueValue: import_zod.z.boolean().optional(),
  fieldType: import_zod.z.string(),
  externalOptions: import_zod.z.boolean().optional()
});
var CreatePropertyInput = import_zod.z.object({
  objectType: import_zod.z.string(),
  data: CustomProperty
});
var CreatedProperty = import_zod.z.object({
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
var Role = import_zod.z.object({
  requiresBillingWrite: import_zod.z.boolean(),
  name: import_zod.z.string(),
  id: import_zod.z.string()
});
var RoleResponse = import_zod.z.object({
  results: Role.array()
});
var UserRoleInput = import_zod.z.object({
  id: import_zod.z.string(),
  firstName: import_zod.z.string().optional(),
  lastName: import_zod.z.string().optional(),
  primaryTeamId: import_zod.z.string().optional()
});
var CreatedUser = import_zod.z.object({
  id: import_zod.z.string(),
  firstName: import_zod.z.string(),
  lastName: import_zod.z.string(),
  primaryTeamId: import_zod.z.string().optional(),
  email: import_zod.z.string(),
  sendWelcomeEmail: import_zod.z.boolean(),
  roleIds: import_zod.z.string().array(),
  secondaryTeamIds: import_zod.z.string().array(),
  superAdmin: import_zod.z.boolean()
});
var ChangedRoleResponse = import_zod.z.object({
  id: import_zod.z.string(),
  firstName: import_zod.z.string().optional(),
  lastName: import_zod.z.string().optional(),
  primaryTeamId: import_zod.z.string().optional(),
  email: import_zod.z.string(),
  sendWelcomeEmail: import_zod.z.boolean().optional(),
  roleIds: import_zod.z.string().array(),
  secondaryTeamIds: import_zod.z.string().optional().array(),
  superAdmin: import_zod.z.boolean()
});
var HubspotServiceTicket = import_zod.z.object({
  id: import_zod.z.string(),
  createdAt: import_zod.z.date(),
  updatedAt: import_zod.z.date(),
  isArchived: import_zod.z.boolean(),
  subject: import_zod.z.string(),
  content: import_zod.z.string(),
  objectId: import_zod.z.number(),
  ownerId: import_zod.z.number(),
  pipeline: import_zod.z.number(),
  pipelineStage: import_zod.z.number(),
  ticketCategory: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  ticketPriority: import_zod.z.string()
});
var HubspotOwner = import_zod.z.object({
  id: import_zod.z.string(),
  email: import_zod.z.string(),
  firstName: import_zod.z.string(),
  lastName: import_zod.z.string(),
  userId: import_zod.z.number(),
  createdAt: import_zod.z.date(),
  updatedAt: import_zod.z.date(),
  archived: import_zod.z.boolean()
});
var User = import_zod.z.object({
  id: import_zod.z.string(),
  email: import_zod.z.string(),
  firstName: import_zod.z.string(),
  lastName: import_zod.z.string(),
  roleIds: import_zod.z.string().array(),
  primaryTeamId: import_zod.z.string().optional(),
  superAdmin: import_zod.z.boolean()
});
var CreateUser = import_zod.z.object({
  firstName: import_zod.z.string().optional(),
  lastName: import_zod.z.string().optional(),
  primaryTeamId: import_zod.z.string().optional(),
  email: import_zod.z.string(),
  sendWelcomeEmail: import_zod.z.boolean().optional(),
  roleId: import_zod.z.string().optional(),
  secondaryTeamIds: import_zod.z.string().optional().array()
});
var UserInformation = import_zod.z.object({
  id: import_zod.z.number(),
  email: import_zod.z.string()
});
var HubspotKnowledgeBase = import_zod.z.object({
  id: import_zod.z.string(),
  title: import_zod.z.string(),
  description: import_zod.z.string(),
  category: import_zod.z.string(),
  content: import_zod.z.string(),
  publishDate: import_zod.z.number()
});
var CreateContactInput = import_zod.z.object({
  first_name: import_zod.z.string().optional(),
  last_name: import_zod.z.string().optional(),
  email: import_zod.z.string().optional(),
  job_title: import_zod.z.string().optional(),
  lead_status: import_zod.z.string().optional(),
  lifecycle_stage: import_zod.z.string().optional(),
  salutation: import_zod.z.string().optional(),
  mobile_phone_number: import_zod.z.string().optional(),
  website_url: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional()
});
var CreateUpdateContactOutput = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.string(),
  first_name: import_zod.z.string().optional(),
  last_name: import_zod.z.string().optional(),
  email: import_zod.z.string().optional(),
  job_title: import_zod.z.string().optional(),
  last_contacted: import_zod.z.string().optional(),
  last_activity_date: import_zod.z.string().optional(),
  lead_status: import_zod.z.string().optional(),
  lifecycle_stage: import_zod.z.string().optional(),
  salutation: import_zod.z.string().optional(),
  mobile_phone_number: import_zod.z.string().optional(),
  website_url: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional()
});
var UpdateContactInput = import_zod.z.object({
  first_name: import_zod.z.string().optional(),
  last_name: import_zod.z.string().optional(),
  email: import_zod.z.string().optional(),
  job_title: import_zod.z.string().optional(),
  lead_status: import_zod.z.string().optional(),
  lifecycle_stage: import_zod.z.string().optional(),
  salutation: import_zod.z.string().optional(),
  mobile_phone_number: import_zod.z.string().optional(),
  website_url: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  id: import_zod.z.string()
});
var Contact = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.string(),
  first_name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  last_name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  email: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  job_title: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  last_contacted: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  last_activity_date: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  salutation: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  mobile_phone_number: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.null()])
});
var CurrencyCode = import_zod.z.object({
  id: import_zod.z.string(),
  code: import_zod.z.string(),
  description: import_zod.z.string()
});
var CreateCompanyInput = import_zod.z.object({
  name: import_zod.z.string().optional(),
  industry: import_zod.z.string().optional(),
  description: import_zod.z.string().optional(),
  country: import_zod.z.string().optional(),
  city: import_zod.z.string().optional(),
  lead_status: import_zod.z.string().optional(),
  lifecycle_stage: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  year_founded: import_zod.z.string().optional(),
  website_url: import_zod.z.string().optional()
});
var UpdateCompanyInput = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string().optional(),
  industry: import_zod.z.string().optional(),
  description: import_zod.z.string().optional(),
  country: import_zod.z.string().optional(),
  city: import_zod.z.string().optional(),
  lead_status: import_zod.z.string().optional(),
  lifecycle_stage: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  year_founded: import_zod.z.string().optional(),
  website_url: import_zod.z.string().optional()
});
var CreateUpdateCompanyOutput = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.string(),
  name: import_zod.z.string().optional(),
  industry: import_zod.z.string().optional(),
  description: import_zod.z.string().optional(),
  country: import_zod.z.string().optional(),
  city: import_zod.z.string().optional(),
  lead_status: import_zod.z.string().optional(),
  lifecycle_stage: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  year_founded: import_zod.z.string().optional(),
  website_url: import_zod.z.string().optional()
});
var Company = import_zod.z.object({
  id: import_zod.z.string(),
  created_date: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  industry: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  description: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  country: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  city: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  lead_status: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  lifecycle_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  year_founded: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  website_url: import_zod.z.union([import_zod.z.string(), import_zod.z.null()])
});
var Account = import_zod.z.object({
  id: import_zod.z.string(),
  type: import_zod.z.string(),
  timeZone: import_zod.z.string(),
  companyCurrency: import_zod.z.string(),
  additionalCurrencies: import_zod.z.string().array(),
  utcOffset: import_zod.z.string(),
  utcOffsetMilliseconds: import_zod.z.number(),
  uiDomain: import_zod.z.string(),
  dataHostingLocation: import_zod.z.string()
});
var AssociationTypes = import_zod.z.object({
  association_category: import_zod.z.string(),
  association_type_Id: import_zod.z.number()
});
var Association = import_zod.z.object({
  to: import_zod.z.number(),
  types: AssociationTypes.array()
});
var CreateTaskInput = import_zod.z.object({
  task_type: import_zod.z.string().optional(),
  title: import_zod.z.string().optional(),
  priority: import_zod.z.string().optional(),
  assigned_to: import_zod.z.string().optional(),
  due_date: import_zod.z.string().optional(),
  notes: import_zod.z.string().optional(),
  associations: Association.array().optional()
});
var UpdateTaskInput = import_zod.z.object({
  id: import_zod.z.string(),
  task_type: import_zod.z.string().optional(),
  title: import_zod.z.string().optional(),
  priority: import_zod.z.string().optional(),
  assigned_to: import_zod.z.string().optional(),
  due_date: import_zod.z.string().optional(),
  notes: import_zod.z.string().optional(),
  associations: Association.array().optional()
});
var CreateUpdateTaskOutput = import_zod.z.object({
  id: import_zod.z.string(),
  task_type: import_zod.z.string().optional(),
  title: import_zod.z.string().optional(),
  priority: import_zod.z.string().optional(),
  assigned_to: import_zod.z.string().optional(),
  due_date: import_zod.z.string().optional(),
  notes: import_zod.z.string().optional(),
  associations: Association.array().optional()
});
var AssociationCompany = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()])
});
var AssociationContact = import_zod.z.object({
  id: import_zod.z.string(),
  first_name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  last_name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()])
});
var AssociationDeal = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()])
});
var ReturnedAssociations = import_zod.z.object({
  companies: AssociationCompany.array().optional(),
  contacts: AssociationContact.array().optional(),
  deals: AssociationDeal.array().optional()
});
var Task = import_zod.z.object({
  id: import_zod.z.string(),
  task_type: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  title: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  priority: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  assigned_to: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  due_date: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  notes: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  returned_associations: ReturnedAssociations.optional()
});
var CreateDealInput = import_zod.z.object({
  name: import_zod.z.string().optional(),
  amount: import_zod.z.string().optional(),
  close_date: import_zod.z.string().optional(),
  deal_description: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  deal_stage: import_zod.z.string().optional(),
  deal_probability: import_zod.z.string().optional(),
  associations: Association.array().optional()
});
var UpdateDealInput = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string().optional(),
  amount: import_zod.z.string().optional(),
  close_date: import_zod.z.string().optional(),
  deal_description: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  deal_stage: import_zod.z.string().optional(),
  deal_probability: import_zod.z.string().optional(),
  associations: Association.array().optional()
});
var CreateUpdateDealOutput = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string().optional(),
  amount: import_zod.z.string().optional(),
  close_date: import_zod.z.string().optional(),
  deal_description: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  deal_stage: import_zod.z.string().optional(),
  deal_probability: import_zod.z.string().optional()
});
var Deal = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  amount: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  close_date: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  deal_description: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  owner: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  deal_stage: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  deal_probability: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  returned_associations: ReturnedAssociations.optional()
});
var Note = import_zod.z.object({
  id: import_zod.z.string().optional(),
  time_stamp: import_zod.z.string(),
  created_date: import_zod.z.string().optional(),
  body: import_zod.z.string().optional(),
  attachment_ids: import_zod.z.string().optional(),
  owner: import_zod.z.string().optional(),
  associations: Association.array().optional()
});
var LineItemDefaultProperties = import_zod.z.object({
  name: import_zod.z.string(),
  price: import_zod.z.string(),
  quantity: import_zod.z.string(),
  recurringbillingfrequency: import_zod.z.union([import_zod.z.null(), import_zod.z.number()]),
  tax: import_zod.z.union([import_zod.z.null(), import_zod.z.number()]),
  amount: import_zod.z.string(),
  createdate: import_zod.z.string(),
  description: import_zod.z.string(),
  discount: import_zod.z.union([import_zod.z.null(), import_zod.z.number()])
});
var LineItem = import_zod.z.object({
  name: import_zod.z.string(),
  price: import_zod.z.string(),
  quantity: import_zod.z.string(),
  recurringbillingfrequency: import_zod.z.union([import_zod.z.null(), import_zod.z.number()]),
  tax: import_zod.z.union([import_zod.z.null(), import_zod.z.number()]),
  amount: import_zod.z.string(),
  createdate: import_zod.z.string(),
  description: import_zod.z.string(),
  discount: import_zod.z.union([import_zod.z.null(), import_zod.z.number()]),
  id: import_zod.z.string()
}).catchall(import_zod.z.any());
var CustomObject = import_zod.z.object({
  id: import_zod.z.string()
}).catchall(import_zod.z.any());
var Product = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string(),
  id: import_zod.z.string(),
  amount: import_zod.z.union([import_zod.z.number(), import_zod.z.null()]),
  description: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  discount: import_zod.z.union([import_zod.z.number(), import_zod.z.null()]),
  sku: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  url: import_zod.z.union([import_zod.z.string(), import_zod.z.null()]),
  name: import_zod.z.string(),
  price: import_zod.z.string(),
  quantity: import_zod.z.union([import_zod.z.number(), import_zod.z.null()]),
  recurringBillingFrequency: import_zod.z.union([import_zod.z.number(), import_zod.z.null()]),
  tax: import_zod.z.union([import_zod.z.null(), import_zod.z.number()])
});
var Stage = import_zod.z.object({
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
var Pipeline = import_zod.z.object({
  updatedAt: import_zod.z.string(),
  createdAt: import_zod.z.string(),
  label: import_zod.z.string(),
  displayOrder: import_zod.z.number(),
  id: import_zod.z.string(),
  archived: import_zod.z.boolean(),
  stages: Stage.array()
});
var PipelineOutput = import_zod.z.object({
  pipelines: Pipeline.array()
});

// hubspot/actions/fetch-companies.ts
var import_zod2 = require("zod");
var FetchCompaniesInput = import_zod2.z.object({
  limit: import_zod2.z.number().optional(),
  properties: import_zod2.z.array(import_zod2.z.string()).optional()
});
var FetchCompaniesOutput = import_zod2.z.object({
  companies: import_zod2.z.array(Company)
});
var action = {
  type: "action",
  description: "Fetch companies from HubSpot",
  version: "1.0.0",
  endpoint: {
    method: "GET",
    path: "/companies",
    group: "Companies"
  },
  input: FetchCompaniesInput,
  output: FetchCompaniesOutput,
  scopes: ["crm.objects.companies.read", "oauth"],
  exec: async (nango, input) => {
    const defaultProperties = ["name", "industry", "description", "country", "city", "createdAt", "hs_lead_status", "lifecyclestage", "hubspot_owner_id", "founded_year", "website"];
    const properties = input?.properties || defaultProperties;
    const limit = input?.limit || 100;
    const config = {
      endpoint: "/crm/v3/objects/companies",
      params: {
        properties: properties.join(","),
        limit: limit.toString()
      },
      retries: 10
    };
    const response = await nango.get(config);
    const companies = response.data.results.map((company) => toCompany(company));
    return {
      companies
    };
  }
};
var fetch_companies_default = action;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaHVic3BvdC9hY3Rpb25zL2ZldGNoLWNvbXBhbmllcy50cyIsICJodWJzcG90L21hcHBlcnMvdG9Db21wYW55LnRzIiwgIm1vZGVscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHsgdG9Db21wYW55IH0gZnJvbSAnLi4vbWFwcGVycy90b0NvbXBhbnkuanMnO1xuaW1wb3J0IHR5cGUgeyBIdWJTcG90Q29tcGFueU5vblVuZGVmaW5lZCB9IGZyb20gJy4uL3R5cGVzLmpzJztcbmltcG9ydCB0eXBlIHsgUHJveHlDb25maWd1cmF0aW9uIH0gZnJvbSAnbmFuZ28nO1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uLy4uL21vZGVscy5qcyc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmNvbnN0IEZldGNoQ29tcGFuaWVzSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGxpbWl0OiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIHByb3BlcnRpZXM6IHouYXJyYXkoei5zdHJpbmcoKSkub3B0aW9uYWwoKVxufSk7XG5jb25zdCBGZXRjaENvbXBhbmllc091dHB1dCA9IHoub2JqZWN0KHtcbiAgY29tcGFuaWVzOiB6LmFycmF5KENvbXBhbnkpXG59KTtcbmNvbnN0IGFjdGlvbiA9IHtcbiAgdHlwZTogXCJhY3Rpb25cIixcbiAgZGVzY3JpcHRpb246ICdGZXRjaCBjb21wYW5pZXMgZnJvbSBIdWJTcG90JyxcbiAgdmVyc2lvbjogJzEuMC4wJyxcbiAgZW5kcG9pbnQ6IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHBhdGg6ICcvY29tcGFuaWVzJyxcbiAgICBncm91cDogJ0NvbXBhbmllcydcbiAgfSxcbiAgaW5wdXQ6IEZldGNoQ29tcGFuaWVzSW5wdXQsXG4gIG91dHB1dDogRmV0Y2hDb21wYW5pZXNPdXRwdXQsXG4gIHNjb3BlczogWydjcm0ub2JqZWN0cy5jb21wYW5pZXMucmVhZCcsICdvYXV0aCddLFxuICBleGVjOiBhc3luYyAobmFuZ28sIGlucHV0KTogUHJvbWlzZTx7XG4gICAgY29tcGFuaWVzOiBDb21wYW55W107XG4gIH0+ID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvcGVydGllcyA9IFsnbmFtZScsICdpbmR1c3RyeScsICdkZXNjcmlwdGlvbicsICdjb3VudHJ5JywgJ2NpdHknLCAnY3JlYXRlZEF0JywgJ2hzX2xlYWRfc3RhdHVzJywgJ2xpZmVjeWNsZXN0YWdlJywgJ2h1YnNwb3Rfb3duZXJfaWQnLCAnZm91bmRlZF95ZWFyJywgJ3dlYnNpdGUnXTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gaW5wdXQ/LnByb3BlcnRpZXMgfHwgZGVmYXVsdFByb3BlcnRpZXM7XG4gICAgY29uc3QgbGltaXQgPSBpbnB1dD8ubGltaXQgfHwgMTAwO1xuICAgIGNvbnN0IGNvbmZpZzogUHJveHlDb25maWd1cmF0aW9uID0ge1xuICAgICAgZW5kcG9pbnQ6ICcvY3JtL3YzL29iamVjdHMvY29tcGFuaWVzJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLmpvaW4oJywnKSxcbiAgICAgICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICByZXRyaWVzOiAxMFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuYW5nby5nZXQ8e1xuICAgICAgcmVzdWx0czogSHViU3BvdENvbXBhbnlOb25VbmRlZmluZWRbXTtcbiAgICAgIHBhZ2luZz86IGFueTtcbiAgICB9Pihjb25maWcpO1xuICAgIGNvbnN0IGNvbXBhbmllcyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cy5tYXAoKGNvbXBhbnk6IEh1YlNwb3RDb21wYW55Tm9uVW5kZWZpbmVkKSA9PiB0b0NvbXBhbnkoY29tcGFueSkpO1xuICAgIHJldHVybiB7XG4gICAgICBjb21wYW5pZXNcbiAgICB9O1xuICB9XG59O1xuZXhwb3J0IHR5cGUgTmFuZ29BY3Rpb25Mb2NhbCA9IFBhcmFtZXRlcnM8KHR5cGVvZiBhY3Rpb24pWydleGVjJ10+WzBdO1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9uOyIsICJpbXBvcnQgdHlwZSB7IENvbXBhbnksIENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQsIENyZWF0ZUNvbXBhbnlJbnB1dCwgVXBkYXRlQ29tcGFueUlucHV0IH0gZnJvbSAnLi4vLi4vbW9kZWxzLmpzJztcbmltcG9ydCB0eXBlIHsgSHViU3BvdENvbXBhbnksIEh1YlNwb3RDb21wYW55Tm9uVW5kZWZpbmVkLCBIdWJTcG90Q29tcGFueU5vbk51bGwgfSBmcm9tICcuLi90eXBlcy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gdG9Db21wYW55KGNvbXBhbnk6IEh1YlNwb3RDb21wYW55Tm9uVW5kZWZpbmVkKTogQ29tcGFueSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGNvbXBhbnkuaWQsXG4gICAgY3JlYXRlZF9kYXRlOiBjb21wYW55LmNyZWF0ZWRBdCxcbiAgICBuYW1lOiBjb21wYW55LnByb3BlcnRpZXMubmFtZSxcbiAgICBpbmR1c3RyeTogY29tcGFueS5wcm9wZXJ0aWVzLmluZHVzdHJ5LFxuICAgIGRlc2NyaXB0aW9uOiBjb21wYW55LnByb3BlcnRpZXMuZGVzY3JpcHRpb24sXG4gICAgY291bnRyeTogY29tcGFueS5wcm9wZXJ0aWVzLmNvdW50cnksXG4gICAgY2l0eTogY29tcGFueS5wcm9wZXJ0aWVzLmNpdHksXG4gICAgbGVhZF9zdGF0dXM6IGNvbXBhbnkucHJvcGVydGllcy5oc19sZWFkX3N0YXR1cyxcbiAgICBsaWZlY3ljbGVfc3RhZ2U6IGNvbXBhbnkucHJvcGVydGllcy5saWZlY3ljbGVzdGFnZSxcbiAgICBvd25lcjogY29tcGFueS5wcm9wZXJ0aWVzLmh1YnNwb3Rfb3duZXJfaWQsXG4gICAgeWVhcl9mb3VuZGVkOiBjb21wYW55LnByb3BlcnRpZXMuZm91bmRlZF95ZWFyLFxuICAgIHdlYnNpdGVfdXJsOiBjb21wYW55LnByb3BlcnRpZXMud2Vic2l0ZVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVwZGF0ZUNvbXBhbnkoY29tcGFueTogSHViU3BvdENvbXBhbnlOb25OdWxsKTogQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGNvbXBhbnkuaWQsXG4gICAgY3JlYXRlZF9kYXRlOiBjb21wYW55LmNyZWF0ZWRBdCxcbiAgICBuYW1lOiBjb21wYW55LnByb3BlcnRpZXMubmFtZSxcbiAgICBpbmR1c3RyeTogY29tcGFueS5wcm9wZXJ0aWVzLmluZHVzdHJ5LFxuICAgIGRlc2NyaXB0aW9uOiBjb21wYW55LnByb3BlcnRpZXMuZGVzY3JpcHRpb24sXG4gICAgY291bnRyeTogY29tcGFueS5wcm9wZXJ0aWVzLmNvdW50cnksXG4gICAgY2l0eTogY29tcGFueS5wcm9wZXJ0aWVzLmNpdHksXG4gICAgbGVhZF9zdGF0dXM6IGNvbXBhbnkucHJvcGVydGllcy5oc19sZWFkX3N0YXR1cyxcbiAgICBsaWZlY3ljbGVfc3RhZ2U6IGNvbXBhbnkucHJvcGVydGllcy5saWZlY3ljbGVzdGFnZSxcbiAgICBvd25lcjogY29tcGFueS5wcm9wZXJ0aWVzLmh1YnNwb3Rfb3duZXJfaWQsXG4gICAgeWVhcl9mb3VuZGVkOiBjb21wYW55LnByb3BlcnRpZXMuZm91bmRlZF95ZWFyLFxuICAgIHdlYnNpdGVfdXJsOiBjb21wYW55LnByb3BlcnRpZXMud2Vic2l0ZVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvSHVic3BvdENvbXBhbnkoY29tcGFueTogQ3JlYXRlQ29tcGFueUlucHV0IHwgVXBkYXRlQ29tcGFueUlucHV0KTogUGFydGlhbDxIdWJTcG90Q29tcGFueT4ge1xuICBjb25zdCBodWJTcG90Q29tcGFueTogUGFydGlhbDxIdWJTcG90Q29tcGFueT4gPSB7XG4gICAgcHJvcGVydGllczoge31cbiAgfTtcbiAgaWYgKGNvbXBhbnkubmFtZSkge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLm5hbWUgPSBjb21wYW55Lm5hbWU7XG4gIH1cbiAgaWYgKGNvbXBhbnkuaW5kdXN0cnkpIHtcbiAgICBodWJTcG90Q29tcGFueS5wcm9wZXJ0aWVzIS5pbmR1c3RyeSA9IGNvbXBhbnkuaW5kdXN0cnk7XG4gIH1cbiAgaWYgKGNvbXBhbnkuZGVzY3JpcHRpb24pIHtcbiAgICBodWJTcG90Q29tcGFueS5wcm9wZXJ0aWVzIS5kZXNjcmlwdGlvbiA9IGNvbXBhbnkuZGVzY3JpcHRpb247XG4gIH1cbiAgaWYgKGNvbXBhbnkuY291bnRyeSkge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLmNvdW50cnkgPSBjb21wYW55LmNvdW50cnk7XG4gIH1cbiAgaWYgKGNvbXBhbnkuY2l0eSkge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLmNpdHkgPSBjb21wYW55LmNpdHk7XG4gIH1cbiAgaWYgKGNvbXBhbnkubGVhZF9zdGF0dXMpIHtcbiAgICBodWJTcG90Q29tcGFueS5wcm9wZXJ0aWVzIS5oc19sZWFkX3N0YXR1cyA9IGNvbXBhbnkubGVhZF9zdGF0dXM7XG4gIH1cbiAgaWYgKGNvbXBhbnkubGlmZWN5Y2xlX3N0YWdlKSB7XG4gICAgaHViU3BvdENvbXBhbnkucHJvcGVydGllcyEubGlmZWN5Y2xlc3RhZ2UgPSBjb21wYW55LmxpZmVjeWNsZV9zdGFnZTtcbiAgfVxuICBpZiAoY29tcGFueS5vd25lcikge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLmh1YnNwb3Rfb3duZXJfaWQgPSBjb21wYW55Lm93bmVyO1xuICB9XG4gIGlmIChjb21wYW55LnllYXJfZm91bmRlZCkge1xuICAgIGh1YlNwb3RDb21wYW55LnByb3BlcnRpZXMhLmZvdW5kZWRfeWVhciA9IGNvbXBhbnkueWVhcl9mb3VuZGVkO1xuICB9XG4gIGlmIChjb21wYW55LndlYnNpdGVfdXJsKSB7XG4gICAgaHViU3BvdENvbXBhbnkucHJvcGVydGllcyEud2Vic2l0ZSA9IGNvbXBhbnkud2Vic2l0ZV91cmw7XG4gIH1cbiAgcmV0dXJuIGh1YlNwb3RDb21wYW55O1xufSIsICJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuZXhwb3J0IGNvbnN0IElkRW50aXR5ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBJZEVudGl0eSA9IHouaW5mZXI8dHlwZW9mIElkRW50aXR5PjtcbmV4cG9ydCBjb25zdCBTdWNjZXNzUmVzcG9uc2UgPSB6Lm9iamVjdCh7XG4gIHN1Y2Nlc3M6IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIFN1Y2Nlc3NSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIFN1Y2Nlc3NSZXNwb25zZT47XG5leHBvcnQgY29uc3QgSWQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIElkID0gei5pbmZlcjx0eXBlb2YgSWQ+O1xuZXhwb3J0IGNvbnN0IFRpbWVzdGFtcHMgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFRpbWVzdGFtcHMgPSB6LmluZmVyPHR5cGVvZiBUaW1lc3RhbXBzPjtcbmV4cG9ydCBjb25zdCBPcHRpb25hbE9iamVjdFR5cGUgPSB6Lm9iamVjdCh7XG4gIG9iamVjdFR5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBPcHRpb25hbE9iamVjdFR5cGUgPSB6LmluZmVyPHR5cGVvZiBPcHRpb25hbE9iamVjdFR5cGU+O1xuZXhwb3J0IGNvbnN0IElucHV0UHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgSW5wdXRQcm9wZXJ0eSA9IHouaW5mZXI8dHlwZW9mIElucHV0UHJvcGVydHk+O1xuZXhwb3J0IGNvbnN0IE9wdGlvbiA9IHoub2JqZWN0KHtcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHZhbHVlOiB6LnN0cmluZygpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCksXG4gIGhpZGRlbjogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgT3B0aW9uID0gei5pbmZlcjx0eXBlb2YgT3B0aW9uPjtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0eSA9IHoub2JqZWN0KHtcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgdHlwZTogei5zdHJpbmcoKSxcbiAgZmllbGRUeXBlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiB6LmFueSgpLm9wdGlvbmFsKCkuYXJyYXkoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBjYWxjdWxhdGVkOiB6LmJvb2xlYW4oKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLFxuICBoaWRkZW46IHouYm9vbGVhbigpLFxuICBodWJzcG90RGVmaW5lZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgc2hvd0N1cnJlbmN5U3ltYm9sOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBtb2RpZmljYXRpb25NZXRhZGF0YTogei5vYmplY3Qoe1xuICAgIGFyY2hpdmFibGU6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlEZWZpbml0aW9uOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5VmFsdWU6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gICAgcmVhZE9ubHlPcHRpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpXG4gIH0pLm9wdGlvbmFsKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCksXG4gIGRhdGFTZW5zaXRpdml0eTogei5zdHJpbmcoKVxufSkuY2F0Y2hhbGwoei5hbnkoKSk7XG5leHBvcnQgdHlwZSBQcm9wZXJ0eSA9IHouaW5mZXI8dHlwZW9mIFByb3BlcnR5PjtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0eVJlc3BvbnNlID0gei5vYmplY3Qoe1xuICByZXN1bHRzOiBQcm9wZXJ0eS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIFByb3BlcnR5UmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBQcm9wZXJ0eVJlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBDdXN0b21Qcm9wZXJ0eU9wdGlvbiA9IHoub2JqZWN0KHtcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhYmVsOiB6LnN0cmluZygpLFxuICB2YWx1ZTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBDdXN0b21Qcm9wZXJ0eU9wdGlvbiA9IHouaW5mZXI8dHlwZW9mIEN1c3RvbVByb3BlcnR5T3B0aW9uPjtcbmV4cG9ydCBjb25zdCBDdXN0b21Qcm9wZXJ0eSA9IHoub2JqZWN0KHtcbiAgaGlkZGVuOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBkaXNwbGF5T3JkZXI6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIGZvcm1GaWVsZDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICByZWZlcmVuY2VkT2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiBDdXN0b21Qcm9wZXJ0eU9wdGlvbi5hcnJheSgpLFxuICBjYWxjdWxhdGlvbkZvcm11bGE6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaGFzVW5pcXVlVmFsdWU6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIGZpZWxkVHlwZTogei5zdHJpbmcoKSxcbiAgZXh0ZXJuYWxPcHRpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIEN1c3RvbVByb3BlcnR5ID0gei5pbmZlcjx0eXBlb2YgQ3VzdG9tUHJvcGVydHk+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVByb3BlcnR5SW5wdXQgPSB6Lm9iamVjdCh7XG4gIG9iamVjdFR5cGU6IHouc3RyaW5nKCksXG4gIGRhdGE6IEN1c3RvbVByb3BlcnR5XG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVByb3BlcnR5SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVQcm9wZXJ0eUlucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVkUHJvcGVydHkgPSB6Lm9iamVjdCh7XG4gIGNyZWF0ZWRVc2VySWQ6IHouc3RyaW5nKCksXG4gIGhpZGRlbjogei5ib29sZWFuKCksXG4gIG1vZGlmaWNhdGlvbk1ldGFkYXRhOiB6Lm9iamVjdCh7XG4gICAgcmVhZE9ubHlPcHRpb25zOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICAgIHJlYWRPbmx5VmFsdWU6IHouYm9vbGVhbigpLFxuICAgIHJlYWRPbmx5RGVmaW5pdGlvbjogei5ib29sZWFuKCksXG4gICAgYXJjaGl2YWJsZTogei5ib29sZWFuKClcbiAgfSksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgZGVzY3JpcHRpb246IHouc3RyaW5nKCksXG4gIHNob3dDdXJyZW5jeVN5bWJvbDogei5ib29sZWFuKCkub3B0aW9uYWwoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIHR5cGU6IHouc3RyaW5nKCksXG4gIGh1YnNwb3REZWZpbmVkOiB6LmJvb2xlYW4oKS5vcHRpb25hbCgpLFxuICBmb3JtRmllbGQ6IHouYm9vbGVhbigpLFxuICBkYXRhU2Vuc2l0aXZpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBhcmNoaXZlZEF0OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFyY2hpdmVkOiB6LmJvb2xlYW4oKSxcbiAgZ3JvdXBOYW1lOiB6LnN0cmluZygpLFxuICByZWZlcmVuY2VkT2JqZWN0VHlwZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiB6LmFycmF5KHoub2JqZWN0KHtcbiAgICBoaWRkZW46IHouYm9vbGVhbigpLFxuICAgIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgICBsYWJlbDogei5zdHJpbmcoKSxcbiAgICB2YWx1ZTogei5zdHJpbmcoKVxuICB9KSksXG4gIGNhbGN1bGF0aW9uRm9ybXVsYTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBoYXNVbmlxdWVWYWx1ZTogei5ib29sZWFuKCksXG4gIGZpZWxkVHlwZTogei5zdHJpbmcoKSxcbiAgdXBkYXRlZFVzZXJJZDogei5zdHJpbmcoKSxcbiAgY2FsY3VsYXRlZDogei5ib29sZWFuKCksXG4gIGV4dGVybmFsT3B0aW9uczogei5ib29sZWFuKCksXG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVkUHJvcGVydHkgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVkUHJvcGVydHk+O1xuZXhwb3J0IGNvbnN0IFJvbGUgPSB6Lm9iamVjdCh7XG4gIHJlcXVpcmVzQmlsbGluZ1dyaXRlOiB6LmJvb2xlYW4oKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgaWQ6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgUm9sZSA9IHouaW5mZXI8dHlwZW9mIFJvbGU+O1xuZXhwb3J0IGNvbnN0IFJvbGVSZXNwb25zZSA9IHoub2JqZWN0KHtcbiAgcmVzdWx0czogUm9sZS5hcnJheSgpXG59KTtcbmV4cG9ydCB0eXBlIFJvbGVSZXNwb25zZSA9IHouaW5mZXI8dHlwZW9mIFJvbGVSZXNwb25zZT47XG5leHBvcnQgY29uc3QgVXNlclJvbGVJbnB1dCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBwcmltYXJ5VGVhbUlkOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXNlclJvbGVJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVzZXJSb2xlSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZWRVc2VyID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgc2VuZFdlbGNvbWVFbWFpbDogei5ib29sZWFuKCksXG4gIHJvbGVJZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5zdHJpbmcoKS5hcnJheSgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVkVXNlciA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZWRVc2VyPjtcbmV4cG9ydCBjb25zdCBDaGFuZ2VkUm9sZVJlc3BvbnNlID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHJvbGVJZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgc2Vjb25kYXJ5VGVhbUlkczogei5zdHJpbmcoKS5vcHRpb25hbCgpLmFycmF5KCksXG4gIHN1cGVyQWRtaW46IHouYm9vbGVhbigpXG59KTtcbmV4cG9ydCB0eXBlIENoYW5nZWRSb2xlUmVzcG9uc2UgPSB6LmluZmVyPHR5cGVvZiBDaGFuZ2VkUm9sZVJlc3BvbnNlPjtcbmV4cG9ydCBjb25zdCBIdWJzcG90U2VydmljZVRpY2tldCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5kYXRlKCksXG4gIHVwZGF0ZWRBdDogei5kYXRlKCksXG4gIGlzQXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdWJqZWN0OiB6LnN0cmluZygpLFxuICBjb250ZW50OiB6LnN0cmluZygpLFxuICBvYmplY3RJZDogei5udW1iZXIoKSxcbiAgb3duZXJJZDogei5udW1iZXIoKSxcbiAgcGlwZWxpbmU6IHoubnVtYmVyKCksXG4gIHBpcGVsaW5lU3RhZ2U6IHoubnVtYmVyKCksXG4gIHRpY2tldENhdGVnb3J5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0aWNrZXRQcmlvcml0eTogei5zdHJpbmcoKVxufSk7XG5leHBvcnQgdHlwZSBIdWJzcG90U2VydmljZVRpY2tldCA9IHouaW5mZXI8dHlwZW9mIEh1YnNwb3RTZXJ2aWNlVGlja2V0PjtcbmV4cG9ydCBjb25zdCBIdWJzcG90T3duZXIgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBlbWFpbDogei5zdHJpbmcoKSxcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLFxuICBsYXN0TmFtZTogei5zdHJpbmcoKSxcbiAgdXNlcklkOiB6Lm51bWJlcigpLFxuICBjcmVhdGVkQXQ6IHouZGF0ZSgpLFxuICB1cGRhdGVkQXQ6IHouZGF0ZSgpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKClcbn0pO1xuZXhwb3J0IHR5cGUgSHVic3BvdE93bmVyID0gei5pbmZlcjx0eXBlb2YgSHVic3BvdE93bmVyPjtcbmV4cG9ydCBjb25zdCBVc2VyID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIGZpcnN0TmFtZTogei5zdHJpbmcoKSxcbiAgbGFzdE5hbWU6IHouc3RyaW5nKCksXG4gIHJvbGVJZHM6IHouc3RyaW5nKCkuYXJyYXkoKSxcbiAgcHJpbWFyeVRlYW1JZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzdXBlckFkbWluOiB6LmJvb2xlYW4oKVxufSk7XG5leHBvcnQgdHlwZSBVc2VyID0gei5pbmZlcjx0eXBlb2YgVXNlcj47XG5leHBvcnQgY29uc3QgQ3JlYXRlVXNlciA9IHoub2JqZWN0KHtcbiAgZmlyc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxhc3ROYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW1hcnlUZWFtSWQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCksXG4gIHNlbmRXZWxjb21lRW1haWw6IHouYm9vbGVhbigpLm9wdGlvbmFsKCksXG4gIHJvbGVJZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzZWNvbmRhcnlUZWFtSWRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVVc2VyID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVXNlcj47XG5leHBvcnQgY29uc3QgVXNlckluZm9ybWF0aW9uID0gei5vYmplY3Qoe1xuICBpZDogei5udW1iZXIoKSxcbiAgZW1haWw6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgVXNlckluZm9ybWF0aW9uID0gei5pbmZlcjx0eXBlb2YgVXNlckluZm9ybWF0aW9uPjtcbmV4cG9ydCBjb25zdCBIdWJzcG90S25vd2xlZGdlQmFzZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgY2F0ZWdvcnk6IHouc3RyaW5nKCksXG4gIGNvbnRlbnQ6IHouc3RyaW5nKCksXG4gIHB1Ymxpc2hEYXRlOiB6Lm51bWJlcigpXG59KTtcbmV4cG9ydCB0eXBlIEh1YnNwb3RLbm93bGVkZ2VCYXNlID0gei5pbmZlcjx0eXBlb2YgSHVic3BvdEtub3dsZWRnZUJhc2U+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZUNvbnRhY3RJbnB1dCA9IHoub2JqZWN0KHtcbiAgZmlyc3RfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZW1haWw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgam9iX3RpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxlYWRfc3RhdHVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGxpZmVjeWNsZV9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBzYWx1dGF0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1vYmlsZV9waG9uZV9udW1iZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2Vic2l0ZV91cmw6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBDcmVhdGVDb250YWN0SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVDb250YWN0SW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHouc3RyaW5nKCksXG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X2NvbnRhY3RlZDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsYXN0X2FjdGl2aXR5X2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGVhZF9zdGF0dXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHNhbHV0YXRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbW9iaWxlX3Bob25lX251bWJlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB3ZWJzaXRlX3VybDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBvd25lcjogei5zdHJpbmcoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVDb250YWN0T3V0cHV0PjtcbmV4cG9ydCBjb25zdCBVcGRhdGVDb250YWN0SW5wdXQgPSB6Lm9iamVjdCh7XG4gIGZpcnN0X25hbWU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbGFzdF9uYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGVtYWlsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGpvYl90aXRsZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc2FsdXRhdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGlkOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIFVwZGF0ZUNvbnRhY3RJbnB1dCA9IHouaW5mZXI8dHlwZW9mIFVwZGF0ZUNvbnRhY3RJbnB1dD47XG5leHBvcnQgY29uc3QgQ29udGFjdCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKSxcbiAgZmlyc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBlbWFpbDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgam9iX3RpdGxlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsYXN0X2NvbnRhY3RlZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9hY3Rpdml0eV9kYXRlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBsZWFkX3N0YXR1czogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGlmZWN5Y2xlX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBzYWx1dGF0aW9uOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBtb2JpbGVfcGhvbmVfbnVtYmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB3ZWJzaXRlX3VybDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQ29udGFjdCA9IHouaW5mZXI8dHlwZW9mIENvbnRhY3Q+O1xuZXhwb3J0IGNvbnN0IEN1cnJlbmN5Q29kZSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGNvZGU6IHouc3RyaW5nKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpXG59KTtcbmV4cG9ydCB0eXBlIEN1cnJlbmN5Q29kZSA9IHouaW5mZXI8dHlwZW9mIEN1cnJlbmN5Q29kZT47XG5leHBvcnQgY29uc3QgQ3JlYXRlQ29tcGFueUlucHV0ID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlQ29tcGFueUlucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlQ29tcGFueUlucHV0PjtcbmV4cG9ydCBjb25zdCBVcGRhdGVDb21wYW55SW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBkYXRlQ29tcGFueUlucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBkYXRlQ29tcGFueUlucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZF9kYXRlOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGluZHVzdHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGNvdW50cnk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsZWFkX3N0YXR1czogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBsaWZlY3ljbGVfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgeWVhcl9mb3VuZGVkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHdlYnNpdGVfdXJsOiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXBkYXRlQ29tcGFueU91dHB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVwZGF0ZUNvbXBhbnlPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IENvbXBhbnkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBjcmVhdGVkX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG5hbWU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGluZHVzdHJ5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZXNjcmlwdGlvbjogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgY291bnRyeTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgY2l0eTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGVhZF9zdGF0dXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGxpZmVjeWNsZV9zdGFnZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgb3duZXI6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHllYXJfZm91bmRlZDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgd2Vic2l0ZV91cmw6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSlcbn0pO1xuZXhwb3J0IHR5cGUgQ29tcGFueSA9IHouaW5mZXI8dHlwZW9mIENvbXBhbnk+O1xuZXhwb3J0IGNvbnN0IEFjY291bnQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0eXBlOiB6LnN0cmluZygpLFxuICB0aW1lWm9uZTogei5zdHJpbmcoKSxcbiAgY29tcGFueUN1cnJlbmN5OiB6LnN0cmluZygpLFxuICBhZGRpdGlvbmFsQ3VycmVuY2llczogei5zdHJpbmcoKS5hcnJheSgpLFxuICB1dGNPZmZzZXQ6IHouc3RyaW5nKCksXG4gIHV0Y09mZnNldE1pbGxpc2Vjb25kczogei5udW1iZXIoKSxcbiAgdWlEb21haW46IHouc3RyaW5nKCksXG4gIGRhdGFIb3N0aW5nTG9jYXRpb246IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgQWNjb3VudCA9IHouaW5mZXI8dHlwZW9mIEFjY291bnQ+O1xuZXhwb3J0IGNvbnN0IEFzc29jaWF0aW9uVHlwZXMgPSB6Lm9iamVjdCh7XG4gIGFzc29jaWF0aW9uX2NhdGVnb3J5OiB6LnN0cmluZygpLFxuICBhc3NvY2lhdGlvbl90eXBlX0lkOiB6Lm51bWJlcigpXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uVHlwZXMgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvblR5cGVzPjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvbiA9IHoub2JqZWN0KHtcbiAgdG86IHoubnVtYmVyKCksXG4gIHR5cGVzOiBBc3NvY2lhdGlvblR5cGVzLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgQXNzb2NpYXRpb24gPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbj47XG5leHBvcnQgY29uc3QgQ3JlYXRlVGFza0lucHV0ID0gei5vYmplY3Qoe1xuICB0YXNrX3R5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzaWduZWRfdG86IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVGFza0lucHV0ID0gei5pbmZlcjx0eXBlb2YgQ3JlYXRlVGFza0lucHV0PjtcbmV4cG9ydCBjb25zdCBVcGRhdGVUYXNrSW5wdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICB0YXNrX3R5cGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgdGl0bGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcHJpb3JpdHk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzaWduZWRfdG86IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZHVlX2RhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgbm90ZXM6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbi5hcnJheSgpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgVXBkYXRlVGFza0lucHV0ID0gei5pbmZlcjx0eXBlb2YgVXBkYXRlVGFza0lucHV0PjtcbmV4cG9ydCBjb25zdCBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpdGxlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHByaW9yaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc2lnbmVkX3RvOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGR1ZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG5vdGVzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZVVwZGF0ZVRhc2tPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBDcmVhdGVVcGRhdGVUYXNrT3V0cHV0PjtcbmV4cG9ydCBjb25zdCBBc3NvY2lhdGlvbkNvbXBhbnkgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uQ29tcGFueSA9IHouaW5mZXI8dHlwZW9mIEFzc29jaWF0aW9uQ29tcGFueT47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25Db250YWN0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgZmlyc3RfbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbGFzdF9uYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pXG59KTtcbmV4cG9ydCB0eXBlIEFzc29jaWF0aW9uQ29udGFjdCA9IHouaW5mZXI8dHlwZW9mIEFzc29jaWF0aW9uQ29udGFjdD47XG5leHBvcnQgY29uc3QgQXNzb2NpYXRpb25EZWFsID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKVxufSk7XG5leHBvcnQgdHlwZSBBc3NvY2lhdGlvbkRlYWwgPSB6LmluZmVyPHR5cGVvZiBBc3NvY2lhdGlvbkRlYWw+O1xuZXhwb3J0IGNvbnN0IFJldHVybmVkQXNzb2NpYXRpb25zID0gei5vYmplY3Qoe1xuICBjb21wYW5pZXM6IEFzc29jaWF0aW9uQ29tcGFueS5hcnJheSgpLm9wdGlvbmFsKCksXG4gIGNvbnRhY3RzOiBBc3NvY2lhdGlvbkNvbnRhY3QuYXJyYXkoKS5vcHRpb25hbCgpLFxuICBkZWFsczogQXNzb2NpYXRpb25EZWFsLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBSZXR1cm5lZEFzc29jaWF0aW9ucyA9IHouaW5mZXI8dHlwZW9mIFJldHVybmVkQXNzb2NpYXRpb25zPjtcbmV4cG9ydCBjb25zdCBUYXNrID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgdGFza190eXBlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICB0aXRsZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgcHJpb3JpdHk6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGFzc2lnbmVkX3RvOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkdWVfZGF0ZTogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbm90ZXM6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHJldHVybmVkX2Fzc29jaWF0aW9uczogUmV0dXJuZWRBc3NvY2lhdGlvbnMub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBUYXNrID0gei5pbmZlcjx0eXBlb2YgVGFzaz47XG5leHBvcnQgY29uc3QgQ3JlYXRlRGVhbElucHV0ID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIENyZWF0ZURlYWxJbnB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZURlYWxJbnB1dD47XG5leHBvcnQgY29uc3QgVXBkYXRlRGVhbElucHV0ID0gei5vYmplY3Qoe1xuICBpZDogei5zdHJpbmcoKSxcbiAgbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhbW91bnQ6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2xvc2VfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX2Rlc2NyaXB0aW9uOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfc3RhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9wcm9iYWJpbGl0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9uLmFycmF5KCkub3B0aW9uYWwoKVxufSk7XG5leHBvcnQgdHlwZSBVcGRhdGVEZWFsSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBVcGRhdGVEZWFsSW5wdXQ+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFtb3VudDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjbG9zZV9kYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGRlYWxfZGVzY3JpcHRpb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3duZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgZGVhbF9zdGFnZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnN0cmluZygpLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVXBkYXRlRGVhbE91dHB1dCA9IHouaW5mZXI8dHlwZW9mIENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQ+O1xuZXhwb3J0IGNvbnN0IERlYWwgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLFxuICBuYW1lOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBhbW91bnQ6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGNsb3NlX2RhdGU6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRlYWxfZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIG93bmVyOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZWFsX3N0YWdlOiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICBkZWFsX3Byb2JhYmlsaXR5OiB6LnVuaW9uKFt6LnN0cmluZygpLCB6Lm51bGwoKV0pLFxuICByZXR1cm5lZF9hc3NvY2lhdGlvbnM6IFJldHVybmVkQXNzb2NpYXRpb25zLm9wdGlvbmFsKClcbn0pO1xuZXhwb3J0IHR5cGUgRGVhbCA9IHouaW5mZXI8dHlwZW9mIERlYWw+O1xuZXhwb3J0IGNvbnN0IE5vdGUgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHRpbWVfc3RhbXA6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRfZGF0ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBib2R5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGF0dGFjaG1lbnRfaWRzOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG93bmVyOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFzc29jaWF0aW9uczogQXNzb2NpYXRpb24uYXJyYXkoKS5vcHRpb25hbCgpXG59KTtcbmV4cG9ydCB0eXBlIE5vdGUgPSB6LmluZmVyPHR5cGVvZiBOb3RlPjtcbmV4cG9ydCBjb25zdCBMaW5lSXRlbURlZmF1bHRQcm9wZXJ0aWVzID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIHRheDogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLFxuICBjcmVhdGVkYXRlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZGlzY291bnQ6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSlcbn0pO1xuZXhwb3J0IHR5cGUgTGluZUl0ZW1EZWZhdWx0UHJvcGVydGllcyA9IHouaW5mZXI8dHlwZW9mIExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXM+O1xuZXhwb3J0IGNvbnN0IExpbmVJdGVtID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLFxuICBwcmljZTogei5zdHJpbmcoKSxcbiAgcXVhbnRpdHk6IHouc3RyaW5nKCksXG4gIHJlY3VycmluZ2JpbGxpbmdmcmVxdWVuY3k6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIHRheDogei51bmlvbihbei5udWxsKCksIHoubnVtYmVyKCldKSxcbiAgYW1vdW50OiB6LnN0cmluZygpLFxuICBjcmVhdGVkYXRlOiB6LnN0cmluZygpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKSxcbiAgZGlzY291bnQ6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSksXG4gIGlkOiB6LnN0cmluZygpXG59KS5jYXRjaGFsbCh6LmFueSgpKTtcbmV4cG9ydCB0eXBlIExpbmVJdGVtID0gei5pbmZlcjx0eXBlb2YgTGluZUl0ZW0+O1xuZXhwb3J0IGNvbnN0IEN1c3RvbU9iamVjdCA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKClcbn0pLmNhdGNoYWxsKHouYW55KCkpO1xuZXhwb3J0IHR5cGUgQ3VzdG9tT2JqZWN0ID0gei5pbmZlcjx0eXBlb2YgQ3VzdG9tT2JqZWN0PjtcbmV4cG9ydCBjb25zdCBQcm9kdWN0ID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgaWQ6IHouc3RyaW5nKCksXG4gIGFtb3VudDogei51bmlvbihbei5udW1iZXIoKSwgei5udWxsKCldKSxcbiAgZGVzY3JpcHRpb246IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIGRpc2NvdW50OiB6LnVuaW9uKFt6Lm51bWJlcigpLCB6Lm51bGwoKV0pLFxuICBza3U6IHoudW5pb24oW3ouc3RyaW5nKCksIHoubnVsbCgpXSksXG4gIHVybDogei51bmlvbihbei5zdHJpbmcoKSwgei5udWxsKCldKSxcbiAgbmFtZTogei5zdHJpbmcoKSxcbiAgcHJpY2U6IHouc3RyaW5nKCksXG4gIHF1YW50aXR5OiB6LnVuaW9uKFt6Lm51bWJlcigpLCB6Lm51bGwoKV0pLFxuICByZWN1cnJpbmdCaWxsaW5nRnJlcXVlbmN5OiB6LnVuaW9uKFt6Lm51bWJlcigpLCB6Lm51bGwoKV0pLFxuICB0YXg6IHoudW5pb24oW3oubnVsbCgpLCB6Lm51bWJlcigpXSlcbn0pO1xuZXhwb3J0IHR5cGUgUHJvZHVjdCA9IHouaW5mZXI8dHlwZW9mIFByb2R1Y3Q+O1xuZXhwb3J0IGNvbnN0IFN0YWdlID0gei5vYmplY3Qoe1xuICB1cGRhdGVkQXQ6IHouc3RyaW5nKCksXG4gIGNyZWF0ZWRBdDogei5zdHJpbmcoKSxcbiAgbGFiZWw6IHouc3RyaW5nKCksXG4gIGRpc3BsYXlPcmRlcjogei5udW1iZXIoKSxcbiAgbWV0YWRhdGE6IHoub2JqZWN0KHtcbiAgICBpc0Nsb3NlZDogei5ib29sZWFuKCksXG4gICAgcHJvYmFiaWxpdHk6IHouc3RyaW5nKClcbiAgfSksXG4gIGlkOiB6LnN0cmluZygpLFxuICBhcmNoaXZlZDogei5ib29sZWFuKCksXG4gIHdyaXRlUGVybWlzc2lvbnM6IHouc3RyaW5nKClcbn0pO1xuZXhwb3J0IHR5cGUgU3RhZ2UgPSB6LmluZmVyPHR5cGVvZiBTdGFnZT47XG5leHBvcnQgY29uc3QgUGlwZWxpbmUgPSB6Lm9iamVjdCh7XG4gIHVwZGF0ZWRBdDogei5zdHJpbmcoKSxcbiAgY3JlYXRlZEF0OiB6LnN0cmluZygpLFxuICBsYWJlbDogei5zdHJpbmcoKSxcbiAgZGlzcGxheU9yZGVyOiB6Lm51bWJlcigpLFxuICBpZDogei5zdHJpbmcoKSxcbiAgYXJjaGl2ZWQ6IHouYm9vbGVhbigpLFxuICBzdGFnZXM6IFN0YWdlLmFycmF5KClcbn0pO1xuZXhwb3J0IHR5cGUgUGlwZWxpbmUgPSB6LmluZmVyPHR5cGVvZiBQaXBlbGluZT47XG5leHBvcnQgY29uc3QgUGlwZWxpbmVPdXRwdXQgPSB6Lm9iamVjdCh7XG4gIHBpcGVsaW5lczogUGlwZWxpbmUuYXJyYXkoKVxufSk7XG5leHBvcnQgdHlwZSBQaXBlbGluZU91dHB1dCA9IHouaW5mZXI8dHlwZW9mIFBpcGVsaW5lT3V0cHV0PjtcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7XG4gIElkRW50aXR5OiBJZEVudGl0eSxcbiAgU3VjY2Vzc1Jlc3BvbnNlOiBTdWNjZXNzUmVzcG9uc2UsXG4gIElkOiBJZCxcbiAgVGltZXN0YW1wczogVGltZXN0YW1wcyxcbiAgT3B0aW9uYWxPYmplY3RUeXBlOiBPcHRpb25hbE9iamVjdFR5cGUsXG4gIElucHV0UHJvcGVydHk6IElucHV0UHJvcGVydHksXG4gIE9wdGlvbjogT3B0aW9uLFxuICBQcm9wZXJ0eTogUHJvcGVydHksXG4gIFByb3BlcnR5UmVzcG9uc2U6IFByb3BlcnR5UmVzcG9uc2UsXG4gIEN1c3RvbVByb3BlcnR5T3B0aW9uOiBDdXN0b21Qcm9wZXJ0eU9wdGlvbixcbiAgQ3VzdG9tUHJvcGVydHk6IEN1c3RvbVByb3BlcnR5LFxuICBDcmVhdGVQcm9wZXJ0eUlucHV0OiBDcmVhdGVQcm9wZXJ0eUlucHV0LFxuICBDcmVhdGVkUHJvcGVydHk6IENyZWF0ZWRQcm9wZXJ0eSxcbiAgUm9sZTogUm9sZSxcbiAgUm9sZVJlc3BvbnNlOiBSb2xlUmVzcG9uc2UsXG4gIFVzZXJSb2xlSW5wdXQ6IFVzZXJSb2xlSW5wdXQsXG4gIENyZWF0ZWRVc2VyOiBDcmVhdGVkVXNlcixcbiAgQ2hhbmdlZFJvbGVSZXNwb25zZTogQ2hhbmdlZFJvbGVSZXNwb25zZSxcbiAgSHVic3BvdFNlcnZpY2VUaWNrZXQ6IEh1YnNwb3RTZXJ2aWNlVGlja2V0LFxuICBIdWJzcG90T3duZXI6IEh1YnNwb3RPd25lcixcbiAgVXNlcjogVXNlcixcbiAgQ3JlYXRlVXNlcjogQ3JlYXRlVXNlcixcbiAgVXNlckluZm9ybWF0aW9uOiBVc2VySW5mb3JtYXRpb24sXG4gIEh1YnNwb3RLbm93bGVkZ2VCYXNlOiBIdWJzcG90S25vd2xlZGdlQmFzZSxcbiAgQ3JlYXRlQ29udGFjdElucHV0OiBDcmVhdGVDb250YWN0SW5wdXQsXG4gIENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQ6IENyZWF0ZVVwZGF0ZUNvbnRhY3RPdXRwdXQsXG4gIFVwZGF0ZUNvbnRhY3RJbnB1dDogVXBkYXRlQ29udGFjdElucHV0LFxuICBDb250YWN0OiBDb250YWN0LFxuICBDdXJyZW5jeUNvZGU6IEN1cnJlbmN5Q29kZSxcbiAgQ3JlYXRlQ29tcGFueUlucHV0OiBDcmVhdGVDb21wYW55SW5wdXQsXG4gIFVwZGF0ZUNvbXBhbnlJbnB1dDogVXBkYXRlQ29tcGFueUlucHV0LFxuICBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0OiBDcmVhdGVVcGRhdGVDb21wYW55T3V0cHV0LFxuICBDb21wYW55OiBDb21wYW55LFxuICBBY2NvdW50OiBBY2NvdW50LFxuICBBc3NvY2lhdGlvblR5cGVzOiBBc3NvY2lhdGlvblR5cGVzLFxuICBBc3NvY2lhdGlvbjogQXNzb2NpYXRpb24sXG4gIENyZWF0ZVRhc2tJbnB1dDogQ3JlYXRlVGFza0lucHV0LFxuICBVcGRhdGVUYXNrSW5wdXQ6IFVwZGF0ZVRhc2tJbnB1dCxcbiAgQ3JlYXRlVXBkYXRlVGFza091dHB1dDogQ3JlYXRlVXBkYXRlVGFza091dHB1dCxcbiAgQXNzb2NpYXRpb25Db21wYW55OiBBc3NvY2lhdGlvbkNvbXBhbnksXG4gIEFzc29jaWF0aW9uQ29udGFjdDogQXNzb2NpYXRpb25Db250YWN0LFxuICBBc3NvY2lhdGlvbkRlYWw6IEFzc29jaWF0aW9uRGVhbCxcbiAgUmV0dXJuZWRBc3NvY2lhdGlvbnM6IFJldHVybmVkQXNzb2NpYXRpb25zLFxuICBUYXNrOiBUYXNrLFxuICBDcmVhdGVEZWFsSW5wdXQ6IENyZWF0ZURlYWxJbnB1dCxcbiAgVXBkYXRlRGVhbElucHV0OiBVcGRhdGVEZWFsSW5wdXQsXG4gIENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQ6IENyZWF0ZVVwZGF0ZURlYWxPdXRwdXQsXG4gIERlYWw6IERlYWwsXG4gIE5vdGU6IE5vdGUsXG4gIExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXM6IExpbmVJdGVtRGVmYXVsdFByb3BlcnRpZXMsXG4gIExpbmVJdGVtOiBMaW5lSXRlbSxcbiAgQ3VzdG9tT2JqZWN0OiBDdXN0b21PYmplY3QsXG4gIFByb2R1Y3Q6IFByb2R1Y3QsXG4gIFN0YWdlOiBTdGFnZSxcbiAgUGlwZWxpbmU6IFBpcGVsaW5lLFxuICBQaXBlbGluZU91dHB1dDogUGlwZWxpbmVPdXRwdXRcbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNFTyxTQUFTLFVBQVUsU0FBOEM7QUFDdEUsU0FBTztBQUFBLElBQ0wsSUFBSSxRQUFRO0FBQUEsSUFDWixjQUFjLFFBQVE7QUFBQSxJQUN0QixNQUFNLFFBQVEsV0FBVztBQUFBLElBQ3pCLFVBQVUsUUFBUSxXQUFXO0FBQUEsSUFDN0IsYUFBYSxRQUFRLFdBQVc7QUFBQSxJQUNoQyxTQUFTLFFBQVEsV0FBVztBQUFBLElBQzVCLE1BQU0sUUFBUSxXQUFXO0FBQUEsSUFDekIsYUFBYSxRQUFRLFdBQVc7QUFBQSxJQUNoQyxpQkFBaUIsUUFBUSxXQUFXO0FBQUEsSUFDcEMsT0FBTyxRQUFRLFdBQVc7QUFBQSxJQUMxQixjQUFjLFFBQVEsV0FBVztBQUFBLElBQ2pDLGFBQWEsUUFBUSxXQUFXO0FBQUEsRUFDbEM7QUFDRjs7O0FDakJBLGlCQUFrQjtBQUNYLElBQU0sV0FBVyxhQUFFLE9BQU87QUFBQSxFQUMvQixJQUFJLGFBQUUsT0FBTztBQUNmLENBQUM7QUFFTSxJQUFNLGtCQUFrQixhQUFFLE9BQU87QUFBQSxFQUN0QyxTQUFTLGFBQUUsUUFBUTtBQUNyQixDQUFDO0FBRU0sSUFBTSxLQUFLLGFBQUUsT0FBTztBQUFBLEVBQ3pCLElBQUksYUFBRSxPQUFPO0FBQ2YsQ0FBQztBQUVNLElBQU0sYUFBYSxhQUFFLE9BQU87QUFBQSxFQUNqQyxXQUFXLGFBQUUsT0FBTztBQUFBLEVBQ3BCLFdBQVcsYUFBRSxPQUFPO0FBQ3RCLENBQUM7QUFFTSxJQUFNLHFCQUFxQixhQUFFLE9BQU87QUFBQSxFQUN6QyxZQUFZLGFBQUUsT0FBTyxFQUFFLFNBQVM7QUFDbEMsQ0FBQztB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
