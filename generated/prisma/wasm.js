Object.defineProperty(exports, '__esModule', { value: true })

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip,
} = require('./runtime/index-browser.js')

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: '6.6.0',
  engine: 'f676762280b54cd07c770017ed3711ddde35f37a',
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
})

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  landlordId: 'landlordId',
  tenantId: 'tenantId',
  vendorId: 'vendorId',
}

exports.Prisma.ComplexScalarFieldEnum = {
  id: 'id',
  landlordId: 'landlordId',
  name: 'name',
  countryCode: 'countryCode',
  cityName: 'cityName',
  street: 'street',
  address: 'address',
  description: 'description',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.LandlordScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phone: 'phone',
  passwordHash: 'passwordHash',
  idType: 'idType',
  idNumber: 'idNumber',
  idDocumentUrl: 'idDocumentUrl',
  isVerified: 'isVerified',
  proofOfOwnership: 'proofOfOwnership',
  bankName: 'bankName',
  bankAccount: 'bankAccount',
  mobileMoneyNumber: 'mobileMoneyNumber',
  notificationPrefs: 'notificationPrefs',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.LeaseScalarFieldEnum = {
  id: 'id',
  unitId: 'unitId',
  tenantId: 'tenantId',
  landlordId: 'landlordId',
  startedAt: 'startedAt',
  endsAt: 'endsAt',
  rentAmount: 'rentAmount',
  currency: 'currency',
  advanceMonths: 'advanceMonths',
  documentUrl: 'documentUrl',
  status: 'status',
  rules: 'rules',
  noticePeriod: 'noticePeriod',
  parentLeaseId: 'parentLeaseId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.MaintenanceRequestScalarFieldEnum = {
  id: 'id',
  unitId: 'unitId',
  tenantId: 'tenantId',
  description: 'description',
  photoUrl: 'photoUrl',
  status: 'status',
  vendorId: 'vendorId',
  vendorResponse: 'vendorResponse',
  scheduledFor: 'scheduledFor',
  completedAt: 'completedAt',
  cost: 'cost',
  costCurrency: 'costCurrency',
  paymentStatus: 'paymentStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  leaseId: 'leaseId',
  amount: 'amount',
  currency: 'currency',
  type: 'type',
  dueDate: 'dueDate',
  paidAt: 'paidAt',
  method: 'method',
  paymentStatus: 'paymentStatus',
  transactionRef: 'transactionRef',
  feeAmount: 'feeAmount',
  receiptUrl: 'receiptUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phone: 'phone',
  passwordHash: 'passwordHash',
  idType: 'idType',
  idNumber: 'idNumber',
  idDocumentUrl: 'idDocumentUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.UnitScalarFieldEnum = {
  id: 'id',
  complexId: 'complexId',
  label: 'label',
  type: 'type',
  description: 'description',
  notes: 'notes',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  phone: 'phone',
  email: 'email',
  specialty: 'specialty',
  idNumber: 'idNumber',
  idDocumentUrl: 'idDocumentUrl',
  isVerified: 'isVerified',
  rating: 'rating',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  channel: 'channel',
  content: 'content',
  status: 'status',
  scheduledAt: 'scheduledAt',
  sentAt: 'sentAt',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
}

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
}

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
}

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last',
}
exports.IdType = exports.$Enums.IdType = {
  VOTER_ID: 'VOTER_ID',
  PASSPORT: 'PASSPORT',
  DRIVER_LICENSE: 'DRIVER_LICENSE',
  GH_CARD: 'GH_CARD',
}

exports.LeaseStatus = exports.$Enums.LeaseStatus = {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  TERMINATED: 'TERMINATED',
  EXPIRED: 'EXPIRED',
  RENEWED: 'RENEWED',
}

exports.MaintenanceStatus = exports.$Enums.MaintenanceStatus = {
  PENDING: 'PENDING',
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
}

exports.InvoiceStatus = exports.$Enums.InvoiceStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELED: 'CANCELED',
}

exports.PaymentType = exports.$Enums.PaymentType = {
  RENT: 'RENT',
  UTILITY: 'UTILITY',
  MAINTENANCE: 'MAINTENANCE',
  DEPOSIT: 'DEPOSIT',
}

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  MOBILE_MONEY: 'MOBILE_MONEY',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CARD: 'CARD',
  CASH: 'CASH',
}

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
}

exports.UnitType = exports.$Enums.UnitType = {
  ROOM: 'ROOM',
  STUDIO: 'STUDIO',
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
}

exports.Prisma.ModelName = {
  User: 'User',
  Complex: 'Complex',
  Landlord: 'Landlord',
  Lease: 'Lease',
  MaintenanceRequest: 'MaintenanceRequest',
  Payment: 'Payment',
  Tenant: 'Tenant',
  Unit: 'Unit',
  Vendor: 'Vendor',
  Notification: 'Notification',
}

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`
        } else {
          message =
            'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' +
            runtime.prettyName +
            '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      },
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
