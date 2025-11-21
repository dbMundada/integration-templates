/**
 * Standardized Accounting Entity Types
 *
 * This file defines standard interfaces for Accounting entities across different providers
 * like QuickBooks, Xero, Stripe, Bill, Chargebee, etc.
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
    type?: 'BILLING' | 'SHIPPING' | 'MAILING' | 'OTHER';
}

interface StandardPhone {
    number: string;
    type?: 'MOBILE' | 'WORK' | 'HOME' | 'FAX' | 'OTHER';
    isPrimary?: boolean;
}

// Accounting Specific Types
export type ContactType = 'CUSTOMER' | 'VENDOR' | 'EMPLOYEE' | 'OTHER';

export type AccountType = 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE' | 'COST_OF_GOODS_SOLD';

export type TransactionStatus = 'DRAFT' | 'PENDING' | 'AUTHORIZED' | 'SENT' | 'PAID' | 'PARTIALLY_PAID' | 'OVERDUE' | 'CANCELLED' | 'VOIDED';

export type PaymentStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';

export type PaymentMethod = 'CASH' | 'CHECK' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'BANK_TRANSFER' | 'ACH' | 'WIRE_TRANSFER' | 'PAYPAL' | 'OTHER';

export type TaxType = 'SALES_TAX' | 'VAT' | 'GST' | 'EXEMPT' | 'ZERO_RATED';

// Standard Accounting Entities
export interface StandardContact extends StandardBaseEntity {
    name: string;
    type: ContactType;
    email?: string;
    phones: StandardPhone[];
    addresses: StandardAddress[];

    financial: {
        balance: number;
        creditLimit?: number;
        paymentTerms?: string; // e.g., "Net 30"
        taxNumber?: string;
        currency: string;
    };

    billing: {
        billingAddress?: StandardAddress;
        defaultPaymentMethod?: PaymentMethod;
        invoiceDeliveryMethod?: 'EMAIL' | 'PRINT' | 'BOTH';
    };

    settings: {
        isActive: boolean;
        isTaxable?: boolean;
        taxRate?: number;
        discountRate?: number;
    };

    customFields?: Record<string, any>;
}

export interface StandardAccount extends StandardBaseEntity {
    name: string;
    code: string;
    type: AccountType;
    parentAccountId?: string;

    financial: {
        balance: number;
        currency: string;
        isDebit: boolean; // true for debit, false for credit
    };

    settings: {
        isActive: boolean;
        isTaxable?: boolean;
        description?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardInvoice extends StandardBaseEntity {
    number: string;
    contactId: string;
    contactName?: string;

    amounts: {
        subtotal: number;
        taxAmount: number;
        discountAmount?: number;
        totalAmount: number;
        paidAmount: number;
        dueAmount: number;
        currency: string;
    };

    dates: {
        issueDate: string;
        dueDate: string;
        lastPaymentDate?: string;
    };

    status: TransactionStatus;

    lineItems: StandardLineItem[];

    addresses: {
        billingAddress?: StandardAddress;
        shippingAddress?: StandardAddress;
    };

    settings: {
        reference?: string;
        memo?: string;
        poNumber?: string;
        terms?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardLineItem {
    id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    totalAmount: number;

    product?: {
        id?: string;
        name?: string;
        sku?: string;
    };

    tax: {
        taxable: boolean;
        taxRate?: number;
        taxAmount?: number;
        taxType?: TaxType;
    };

    account?: {
        id?: string;
        name?: string;
        code?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardPayment extends StandardBaseEntity {
    contactId: string;
    contactName?: string;

    amount: number;
    currency: string;

    method: PaymentMethod;
    status: PaymentStatus;

    dates: {
        paymentDate: string;
        clearedDate?: string;
    };

    references: {
        reference?: string;
        checkNumber?: string;
        transactionId?: string;
    };

    allocations: PaymentAllocation[];

    customFields?: Record<string, any>;
}

export interface PaymentAllocation {
    invoiceId: string;
    invoiceNumber?: string;
    allocatedAmount: number;
}

export interface StandardItem extends StandardBaseEntity {
    name: string;
    description?: string;
    type: 'INVENTORY' | 'NON_INVENTORY' | 'SERVICE';

    pricing: {
        unitPrice?: number;
        salesPrice?: number;
        purchasePrice?: number;
        currency: string;
    };

    inventory: {
        sku?: string;
        quantityOnHand?: number;
        reorderPoint?: number;
        trackInventory?: boolean;
    };

    accounts: {
        incomeAccountId?: string;
        expenseAccountId?: string;
        assetAccountId?: string;
    };

    tax: {
        isTaxable?: boolean;
        salesTaxType?: TaxType;
        purchaseTaxType?: TaxType;
    };

    settings: {
        isActive: boolean;
        isSold?: boolean;
        isPurchased?: boolean;
    };

    customFields?: Record<string, any>;
}

export interface StandardBill extends StandardBaseEntity {
    number?: string;
    vendorId: string;
    vendorName?: string;

    amounts: {
        subtotal: number;
        taxAmount: number;
        totalAmount: number;
        paidAmount: number;
        dueAmount: number;
        currency: string;
    };

    dates: {
        billDate: string;
        dueDate: string;
        lastPaymentDate?: string;
    };

    status: TransactionStatus;

    lineItems: StandardLineItem[];

    settings: {
        reference?: string;
        memo?: string;
        poNumber?: string;
    };

    customFields?: Record<string, any>;
}

export interface StandardJournalEntry extends StandardBaseEntity {
    number?: string;

    amounts: {
        totalDebit: number;
        totalCredit: number;
        currency: string;
    };

    date: string;

    entries: JournalEntryLine[];

    settings: {
        reference?: string;
        memo?: string;
        isAdjusting?: boolean;
    };

    customFields?: Record<string, any>;
}

export interface JournalEntryLine {
    accountId: string;
    accountName?: string;
    accountCode?: string;
    debitAmount?: number;
    creditAmount?: number;
    description?: string;
    reference?: string;
}

export interface StandardTaxRate extends StandardBaseEntity {
    name: string;
    rate: number; // as percentage, e.g., 8.5 for 8.5%
    type: TaxType;

    settings: {
        isActive: boolean;
        isDefault?: boolean;
        description?: string;
    };

    applicability: {
        salesTax?: boolean;
        purchaseTax?: boolean;
    };

    customFields?: Record<string, any>;
}

// Input/Update Types
export interface CreateContactInput {
    name: string;
    type: ContactType;
    email?: string;
    phones?: StandardPhone[];
    addresses?: StandardAddress[];
    currency?: string;
    paymentTerms?: string;
    taxNumber?: string;
    customFields?: Record<string, any>;
}

export interface UpdateContactInput extends Partial<CreateContactInput> {
    id: string;
}

export interface CreateInvoiceInput {
    contactId: string;
    issueDate: string;
    dueDate: string;
    currency: string;
    lineItems: Omit<StandardLineItem, 'id'>[];
    reference?: string;
    memo?: string;
    customFields?: Record<string, any>;
}

export interface UpdateInvoiceInput extends Partial<CreateInvoiceInput> {
    id: string;
}

export interface CreatePaymentInput {
    contactId: string;
    amount: number;
    currency: string;
    method: PaymentMethod;
    paymentDate: string;
    reference?: string;
    allocations?: PaymentAllocation[];
    customFields?: Record<string, any>;
}

export interface UpdatePaymentInput extends Partial<CreatePaymentInput> {
    id: string;
}

export interface CreateItemInput {
    name: string;
    type: 'INVENTORY' | 'NON_INVENTORY' | 'SERVICE';
    unitPrice?: number;
    currency: string;
    description?: string;
    sku?: string;
    customFields?: Record<string, any>;
}

export interface UpdateItemInput extends Partial<CreateItemInput> {
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
