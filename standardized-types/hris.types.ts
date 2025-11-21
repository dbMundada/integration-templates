/**
 * Standardized HR/HRIS Entity Types
 *
 * This file defines standard interfaces for HR entities across different providers
 * like BambooHR, Workday, Gusto, ADP, Greenhouse, Lever, etc.
 */

// Base interfaces
interface StandardBaseEntity {
    id: string;
    createdAt: string;
    updatedAt: string;
    providerSpecific?: Record<string, any>;
}

interface StandardAddress {
    street1?: string;
    street2?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    type?: 'HOME' | 'WORK' | 'MAILING' | 'OTHER';
}

interface StandardPhone {
    number: string;
    type?: 'MOBILE' | 'WORK' | 'HOME' | 'OTHER';
    isPrimary?: boolean;
}

interface StandardEmail {
    email: string;
    type?: 'WORK' | 'PERSONAL' | 'OTHER';
    isPrimary?: boolean;
}

// HR Specific Types
export type EmploymentType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'INTERN' | 'TEMPORARY' | 'CONSULTANT' | 'OTHER';

export type EmploymentStatus = 'ACTIVE' | 'TERMINATED' | 'ON_LEAVE' | 'SUSPENDED' | 'PENDING' | 'INACTIVE';

export type WorkLocationType = 'OFFICE' | 'REMOTE' | 'HYBRID';

export type ApplicationStatus = 'APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'HIRED' | 'REJECTED' | 'WITHDRAWN';

export type CandidateSource = 'REFERRAL' | 'JOB_BOARD' | 'COMPANY_WEBSITE' | 'LINKEDIN' | 'RECRUITER' | 'OTHER';

// Standard HR Entities
export interface StandardEmployee extends StandardBaseEntity {
    employeeNumber?: string;
    firstName: string;
    lastName: string;
    displayName: string;
    preferredName?: string;
    emails: StandardEmail[];
    phones: StandardPhone[];
    addresses: StandardAddress[];

    employment: {
        type: EmploymentType;
        status: EmploymentStatus;
        startDate: string;
        endDate?: string;
        title?: string;
        level?: string;
        salary?: {
            amount: number;
            currency: string;
            frequency: 'ANNUAL' | 'MONTHLY' | 'HOURLY';
        };
    };

    organization: {
        department: {
            id: string;
            name: string;
        };
        manager?: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
        };
        location: {
            name: string;
            type: WorkLocationType;
            address?: StandardAddress;
        };
        costCenter?: string;
        division?: string;
    };

    personal: {
        dateOfBirth?: string;
        gender?: 'MALE' | 'FEMALE' | 'NON_BINARY' | 'PREFER_NOT_TO_SAY';
        maritalStatus?: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED' | 'OTHER';
        emergencyContacts?: EmergencyContact[];
    };

    customFields?: Record<string, any>;
}

export interface EmergencyContact {
    name: string;
    relationship: string;
    phone: string;
    email?: string;
    isPrimary?: boolean;
}

export interface StandardDepartment extends StandardBaseEntity {
    name: string;
    description?: string;
    parentDepartmentId?: string;
    managerId?: string;
    managerName?: string;
    employeeCount?: number;
    costCenter?: string;
    isActive: boolean;
    customFields?: Record<string, any>;
}

export interface StandardLocation extends StandardBaseEntity {
    name: string;
    type: WorkLocationType;
    address?: StandardAddress;
    timezone?: string;
    isHeadquarters?: boolean;
    capacity?: number;
    isActive: boolean;
    customFields?: Record<string, any>;
}

export interface StandardJob extends StandardBaseEntity {
    title: string;
    description?: string;
    requirements?: string;
    status: 'DRAFT' | 'OPEN' | 'CLOSED' | 'ON_HOLD';
    departmentIds: string[];
    locationIds: string[];
    employmentType: EmploymentType;
    salaryRange?: {
        min?: number;
        max?: number;
        currency: string;
        frequency: 'ANNUAL' | 'MONTHLY' | 'HOURLY';
    };
    hiringManagerId?: string;
    hiringManagerName?: string;
    openedAt?: string;
    closedAt?: string;
    customFields?: Record<string, any>;
}

export interface StandardCandidate extends StandardBaseEntity {
    firstName: string;
    lastName: string;
    emails: StandardEmail[];
    phones: StandardPhone[];
    addresses: StandardAddress[];

    profile: {
        currentTitle?: string;
        currentCompany?: string;
        experience?: string;
        education?: string;
        skills?: string[];
        linkedinUrl?: string;
        portfolioUrl?: string;
        resumeUrl?: string;
    };

    source: CandidateSource;
    sourceDetails?: string;
    referrerId?: string;
    referrerName?: string;

    tags?: string[];
    notes?: string;
    customFields?: Record<string, any>;
}

export interface StandardApplication extends StandardBaseEntity {
    candidateId: string;
    jobId: string;
    status: ApplicationStatus;
    appliedAt: string;
    source: CandidateSource;
    sourceDetails?: string;

    currentStageId?: string;
    currentStageName?: string;

    interviewerIds: string[];

    rejectedAt?: string;
    rejectionReason?: string;

    offerExtendedAt?: string;
    offerAcceptedAt?: string;

    customFields?: Record<string, any>;
}

export interface StandardInterview extends StandardBaseEntity {
    applicationId: string;
    candidateId: string;
    jobId: string;

    scheduledAt: string;
    duration?: number; // in minutes
    location?: string;
    type: 'PHONE' | 'VIDEO' | 'ON_SITE' | 'TAKE_HOME';

    interviewerIds: string[];

    status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';

    feedback?: {
        overallRating?: number; // 1-5 scale
        comments?: string;
        recommendation?: 'STRONG_YES' | 'YES' | 'NO' | 'STRONG_NO';
    };

    customFields?: Record<string, any>;
}

export interface StandardTeam extends StandardBaseEntity {
    name: string;
    description?: string;
    parentTeamId?: string;
    leaderId?: string;
    leaderName?: string;
    memberIds: string[];
    departmentId?: string;
    isActive: boolean;
    customFields?: Record<string, any>;
}

// Input/Update Types
export interface CreateEmployeeInput {
    employeeNumber?: string;
    firstName: string;
    lastName: string;
    emails: StandardEmail[];
    phones?: StandardPhone[];
    addresses?: StandardAddress[];
    employment: {
        type: EmploymentType;
        status: EmploymentStatus;
        startDate: string;
        title?: string;
        departmentId: string;
        managerId?: string;
        locationId?: string;
    };
    customFields?: Record<string, any>;
}

export interface UpdateEmployeeInput extends Partial<CreateEmployeeInput> {
    id: string;
}

export interface CreateCandidateInput {
    firstName: string;
    lastName: string;
    emails: StandardEmail[];
    phones?: StandardPhone[];
    source: CandidateSource;
    sourceDetails?: string;
    referrerId?: string;
    customFields?: Record<string, any>;
}

export interface UpdateCandidateInput extends Partial<CreateCandidateInput> {
    id: string;
}

export interface CreateJobInput {
    title: string;
    description?: string;
    departmentIds: string[];
    locationIds: string[];
    employmentType: EmploymentType;
    hiringManagerId?: string;
    customFields?: Record<string, any>;
}

export interface UpdateJobInput extends Partial<CreateJobInput> {
    id: string;
}

// Standard responses
export interface StandardActionResponse {
    id: string;
    success: boolean;
    errors: string[];
}

export interface StandardBatchResponse<T> {
    successful: T[];
    failed: Array<{
        record: Partial<T>;
        errors: string[];
    }>;
}
