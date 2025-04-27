Object.defineProperty(exports, '__esModule', { value: true })

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')

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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

const path = require('path')

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

exports.InvoiceStatus = exports.$Enums.InvoiceStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELED: 'CANCELED',
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

exports.PaymentType = exports.$Enums.PaymentType = {
  RENT: 'RENT',
  UTILITY: 'UTILITY',
  MAINTENANCE: 'MAINTENANCE',
  DEPOSIT: 'DEPOSIT',
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
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value: 'D:\\workspace\\sl-core\\generated\\prisma',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true,
      },
    ],
    previewFeatures: [],
    sourceFilePath: 'D:\\workspace\\sl-core\\prisma\\schema.prisma',
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
    schemaEnvPath: '../../.env',
  },
  relativePath: '../../prisma',
  clientVersion: '6.6.0',
  engineVersion: 'f676762280b54cd07c770017ed3711ddde35f37a',
  datasourceNames: ['db'],
  activeProvider: 'postgresql',
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'DATABASE_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    'generator client {\n  provider = "prisma-client-js"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider  = "postgresql"\n  url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_URL")\n}\n\nmodel User {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  landlordId String? @map("landlord_id") @db.Uuid\n  tenantId   String? @map("tenant_id") @db.Uuid\n  vendorId   String? @map("vendor_id") @db.Uuid\n\n  landlord Landlord? @relation(fields: [landlordId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  tenant   Tenant?   @relation(fields: [tenantId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  vendor   Vendor?   @relation(fields: [vendorId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n\n  notifications Notification[]\n\n  @@index([landlordId], map: "users_idx_landlord_id")\n  @@index([tenantId], map: "users_idx_tenant_id")\n  @@index([vendorId], map: "users_idx_vendor_id")\n  @@map("users")\n}\n\nmodel Complex {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  landlordId  String    @map("landlord_id") @db.Uuid\n  name        String    @db.VarChar(255)\n  countryCode String    @map("country_code") @db.Char(3)\n  cityName    String    @map("city_name")\n  street      String?\n  address     String?\n  description String?\n  notes       String?\n  createdAt   DateTime? @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt   DateTime? @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt   DateTime? @map("deleted_at") @db.Timestamptz(6)\n\n  landlord Landlord @relation(fields: [landlordId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  units    Unit[]\n\n  @@index([landlordId], map: "complexes_idx_landlord_id")\n  @@map("complexes")\n}\n\nmodel Landlord {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  firstName         String    @map("first_name") @db.VarChar(255)\n  lastName          String    @map("last_name") @db.VarChar(255)\n  email             String    @unique @db.VarChar(255)\n  phone             String    @unique @db.VarChar(50)\n  passwordHash      String    @map("password_hash")\n  idType            IdType?   @map("id_type")\n  idNumber          String?   @unique @map("id_number") @db.VarChar(100)\n  idDocumentUrl     String?   @map("id_document_url")\n  isVerified        Boolean?  @default(false) @map("is_verified")\n  proofOfOwnership  String?   @map("proof_of_ownership")\n  bankName          String?   @map("bank_name") @db.VarChar(100)\n  bankAccount       String?   @map("bank_account") @db.VarChar(100)\n  mobileMoneyNumber String?   @map("mobile_money_number") @db.VarChar(50)\n  notificationPrefs String?   @map("notification_prefs") @db.VarChar(255)\n  createdAt         DateTime? @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt         DateTime? @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt         DateTime? @map("deleted_at") @db.Timestamptz(6)\n\n  user      User[]\n  complexes Complex[]\n  leases    Lease[]\n\n  @@map("landlords")\n}\n\nmodel Lease {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  unitId        String       @map("unit_id") @db.Uuid\n  tenantId      String       @map("tenant_id") @db.Uuid\n  landlordId    String       @map("landlord_id") @db.Uuid\n  startedAt     DateTime     @map("started_at") @db.Timestamptz(6)\n  endsAt        DateTime     @map("ends_at") @db.Timestamptz(6)\n  rentAmount    Decimal      @map("rent_amount") @db.Decimal(10, 2)\n  currency      String       @default("GHS") @db.VarChar(3)\n  advanceMonths Int?         @default(0) @map("advance_months")\n  documentUrl   String?      @map("document_url")\n  status        LeaseStatus? @default(ACTIVE)\n  rules         String?\n  noticePeriod  Int?         @default(30) @map("notice_period")\n  parentLeaseId String?      @map("parent_lease_id") @db.Uuid\n  createdAt     DateTime?    @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt     DateTime?    @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt     DateTime?    @map("deleted_at") @db.Timestamptz(6)\n\n  landlord    Landlord  @relation(fields: [landlordId], references: [id], onUpdate: NoAction)\n  tenant      Tenant    @relation(fields: [tenantId], references: [id], onUpdate: NoAction)\n  unit        Unit      @relation(fields: [unitId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  payments    Payment[]\n  parentLease Lease?    @relation("LeaseRenewals", fields: [parentLeaseId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n  renewals    Lease[]   @relation("LeaseRenewals")\n\n  @@index([landlordId], map: "leases_idx_landlord_id")\n  @@index([parentLeaseId], map: "leases_idx_parent_lease_id")\n  @@index([tenantId], map: "leases_idx_tenant_id")\n  @@index([unitId], map: "leases_idx_unit_id")\n  @@map("leases")\n}\n\nmodel MaintenanceRequest {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  unitId         String             @map("unit_id") @db.Uuid\n  tenantId       String             @map("tenant_id") @db.Uuid\n  description    String\n  photoUrl       String?            @map("photo_url") @db.VarChar(1023)\n  status         MaintenanceStatus? @default(PENDING)\n  vendorId       String?            @map("vendor_id") @db.Uuid\n  vendorResponse String?            @map("vendor_response")\n  scheduledFor   DateTime?          @map("scheduled_for") @db.Timestamptz(6)\n  completedAt    DateTime?          @map("completed_at") @db.Timestamptz(6)\n  cost           Decimal?           @db.Decimal(10, 2)\n  costCurrency   String?            @default("GHS") @map("cost_currency") @db.VarChar(3)\n  paymentStatus  InvoiceStatus?     @map("payment_status")\n  createdAt      DateTime?          @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt      DateTime?          @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt      DateTime?          @map("deleted_at") @db.Timestamptz(6)\n\n  tenant Tenant  @relation(fields: [tenantId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  unit   Unit    @relation(fields: [unitId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  vendor Vendor? @relation(fields: [vendorId], references: [id], onUpdate: NoAction)\n\n  @@index([tenantId], map: "maintenance_requests_idx_tenant_id")\n  @@index([unitId], map: "maintenance_requests_idx_unit_id")\n  @@index([vendorId], map: "maintenance_requests_idx_vendor_id")\n  @@map("maintenance_requests")\n}\n\nmodel Payment {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  leaseId        String         @map("lease_id") @db.Uuid\n  amount         Decimal        @db.Decimal(10, 2)\n  currency       String         @default("GHS") @db.VarChar(3)\n  type           PaymentType\n  dueDate        DateTime       @map("due_date") @db.Timestamptz(6)\n  paidAt         DateTime?      @default(now()) @map("paid_at") @db.Timestamptz(6)\n  method         PaymentMethod\n  paymentStatus  PaymentStatus? @default(PENDING) @map("payment_status")\n  transactionRef String?        @unique @map("transaction_ref") @db.VarChar(255)\n  feeAmount      Decimal?       @map("fee_amount") @db.Decimal(10, 2)\n  receiptUrl     String?        @map("receipt_url") @db.VarChar(1023)\n  createdAt      DateTime?      @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt      DateTime?      @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt      DateTime?      @map("deleted_at") @db.Timestamptz(6)\n\n  lease Lease @relation(fields: [leaseId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@index([leaseId], map: "payments_idx_lease_id")\n  @@map("payments")\n}\n\nmodel Tenant {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  firstName     String    @map("first_name") @db.VarChar(255)\n  lastName      String    @map("last_name") @db.VarChar(255)\n  email         String    @unique @db.VarChar(255)\n  phone         String    @unique @db.VarChar(50)\n  passwordHash  String    @map("password_hash")\n  idType        IdType?   @map("id_type")\n  idNumber      String?   @unique @map("id_number") @db.VarChar(100)\n  idDocumentUrl String?   @map("id_document_url")\n  createdAt     DateTime? @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt     DateTime? @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt     DateTime? @map("deleted_at") @db.Timestamptz(6)\n\n  user                User[]\n  leases              Lease[]\n  maintenanceRequests MaintenanceRequest[]\n  units               Unit[]\n\n  @@map("tenants")\n}\n\nmodel Unit {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  complexId   String    @map("complex_id") @db.Uuid\n  label       String    @db.VarChar(100)\n  type        UnitType?\n  description String?\n  notes       String?\n  tenantId    String?   @map("tenant_id") @db.Uuid\n  createdAt   DateTime? @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt   DateTime? @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt   DateTime? @map("deleted_at") @db.Timestamptz(6)\n\n  leases              Lease[]\n  maintenanceRequests MaintenanceRequest[]\n  complex             Complex              @relation(fields: [complexId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n  tenant              Tenant?              @relation(fields: [tenantId], references: [id], onDelete: SetNull, onUpdate: NoAction)\n\n  @@index([complexId], map: "units_idx_complex_id")\n  @@index([tenantId], map: "units_idx_tenant_id")\n  @@map("units")\n}\n\nmodel Vendor {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  name          String    @db.VarChar(255)\n  phone         String    @unique @db.VarChar(50)\n  email         String?   @unique @db.VarChar(255)\n  specialty     String?   @db.VarChar(255)\n  idNumber      String?   @unique @map("id_number") @db.VarChar(100)\n  idDocumentUrl String?   @map("id_document_url")\n  isVerified    Boolean?  @default(false) @map("is_verified")\n  rating        Float?    @default(0.0)\n  createdAt     DateTime? @default(now()) @map("created_at") @db.Timestamptz(6)\n  updatedAt     DateTime? @updatedAt @map("updated_at") @db.Timestamptz(6)\n  deletedAt     DateTime? @map("deleted_at") @db.Timestamptz(6)\n\n  user                User[]\n  maintenanceRequests MaintenanceRequest[]\n\n  @@map("vendors")\n}\n\nmodel Notification {\n  id String @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid\n\n  userId      String    @map("user_id") @db.Uuid\n  type        String    @db.VarChar(50)\n  channel     String    @db.VarChar(50)\n  content     String\n  status      String    @default("PENDING") @db.VarChar(50)\n  scheduledAt DateTime? @map("scheduled_at") @db.Timestamptz(6)\n  sentAt      DateTime? @map("sent_at") @db.Timestamptz(6)\n  createdAt   DateTime? @default(now()) @map("created_at") @db.Timestamptz(6)\n  deletedAt   DateTime? @map("deleted_at") @db.Timestamptz(6)\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction)\n\n  @@index([userId], map: "notifications_idx_user_id")\n  @@map("notifications")\n}\n\nenum IdType {\n  VOTER_ID\n  PASSPORT\n  DRIVER_LICENSE\n  GH_CARD\n}\n\nenum InvoiceStatus {\n  PENDING\n  PAID\n  OVERDUE\n  CANCELED\n}\n\nenum LeaseStatus {\n  ACTIVE\n  PENDING\n  TERMINATED\n  EXPIRED\n  RENEWED\n}\n\nenum MaintenanceStatus {\n  PENDING\n  SCHEDULED\n  IN_PROGRESS\n  COMPLETED\n  CANCELED\n}\n\nenum PaymentMethod {\n  MOBILE_MONEY\n  BANK_TRANSFER\n  CARD\n  CASH\n}\n\nenum PaymentStatus {\n  PENDING\n  COMPLETED\n  FAILED\n  REFUNDED\n}\n\nenum PaymentType {\n  RENT\n  UTILITY\n  MAINTENANCE\n  DEPOSIT\n}\n\nenum UnitType {\n  ROOM\n  STUDIO\n  APARTMENT\n  HOUSE\n}\n',
  inlineSchemaHash:
    'dd04ee535768cec8e65b56dab9260d92b43623d4e115d9e3e79ca1e68c7ba651',
  copyEngine: true,
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = ['generated/prisma', 'prisma']

  const alternativePath =
    alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
    }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"User":{"dbName":"users","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"landlordId","dbName":"landlord_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"tenantId","dbName":"tenant_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"vendorId","dbName":"vendor_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"landlord","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Landlord","nativeType":null,"relationName":"LandlordToUser","relationFromFields":["landlordId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"tenant","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Tenant","nativeType":null,"relationName":"TenantToUser","relationFromFields":["tenantId"],"relationToFields":["id"],"relationOnDelete":"NoAction","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"vendor","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Vendor","nativeType":null,"relationName":"UserToVendor","relationFromFields":["vendorId"],"relationToFields":["id"],"relationOnDelete":"NoAction","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"notifications","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Notification","nativeType":null,"relationName":"NotificationToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Complex":{"dbName":"complexes","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"landlordId","dbName":"landlord_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"countryCode","dbName":"country_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["Char",["3"]],"isGenerated":false,"isUpdatedAt":false},{"name":"cityName","dbName":"city_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"street","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"address","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"notes","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"landlord","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Landlord","nativeType":null,"relationName":"ComplexToLandlord","relationFromFields":["landlordId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"units","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Unit","nativeType":null,"relationName":"ComplexToUnit","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Landlord":{"dbName":"landlords","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"firstName","dbName":"first_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"lastName","dbName":"last_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"phone","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","dbName":"password_hash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"idType","dbName":"id_type","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"IdType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"idNumber","dbName":"id_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"idDocumentUrl","dbName":"id_document_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isVerified","dbName":"is_verified","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"proofOfOwnership","dbName":"proof_of_ownership","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"bankName","dbName":"bank_name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"bankAccount","dbName":"bank_account","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"mobileMoneyNumber","dbName":"mobile_money_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"notificationPrefs","dbName":"notification_prefs","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"LandlordToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"complexes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Complex","nativeType":null,"relationName":"ComplexToLandlord","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"leases","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Lease","nativeType":null,"relationName":"LandlordToLease","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Lease":{"dbName":"leases","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"unitId","dbName":"unit_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"tenantId","dbName":"tenant_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"landlordId","dbName":"landlord_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"startedAt","dbName":"started_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"endsAt","dbName":"ends_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"rentAmount","dbName":"rent_amount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","nativeType":["Decimal",["10","2"]],"isGenerated":false,"isUpdatedAt":false},{"name":"currency","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["VarChar",["3"]],"default":"GHS","isGenerated":false,"isUpdatedAt":false},{"name":"advanceMonths","dbName":"advance_months","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"documentUrl","dbName":"document_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"LeaseStatus","nativeType":null,"default":"ACTIVE","isGenerated":false,"isUpdatedAt":false},{"name":"rules","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"noticePeriod","dbName":"notice_period","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":30,"isGenerated":false,"isUpdatedAt":false},{"name":"parentLeaseId","dbName":"parent_lease_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"landlord","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Landlord","nativeType":null,"relationName":"LandlordToLease","relationFromFields":["landlordId"],"relationToFields":["id"],"relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"tenant","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Tenant","nativeType":null,"relationName":"LeaseToTenant","relationFromFields":["tenantId"],"relationToFields":["id"],"relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"unit","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Unit","nativeType":null,"relationName":"LeaseToUnit","relationFromFields":["unitId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"payments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Payment","nativeType":null,"relationName":"LeaseToPayment","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"parentLease","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Lease","nativeType":null,"relationName":"LeaseRenewals","relationFromFields":["parentLeaseId"],"relationToFields":["id"],"relationOnDelete":"NoAction","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"renewals","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Lease","nativeType":null,"relationName":"LeaseRenewals","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"MaintenanceRequest":{"dbName":"maintenance_requests","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"unitId","dbName":"unit_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"tenantId","dbName":"tenant_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"photoUrl","dbName":"photo_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["1023"]],"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"MaintenanceStatus","nativeType":null,"default":"PENDING","isGenerated":false,"isUpdatedAt":false},{"name":"vendorId","dbName":"vendor_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"vendorResponse","dbName":"vendor_response","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"scheduledFor","dbName":"scheduled_for","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"completedAt","dbName":"completed_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"cost","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","nativeType":["Decimal",["10","2"]],"isGenerated":false,"isUpdatedAt":false},{"name":"costCurrency","dbName":"cost_currency","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["VarChar",["3"]],"default":"GHS","isGenerated":false,"isUpdatedAt":false},{"name":"paymentStatus","dbName":"payment_status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"InvoiceStatus","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"tenant","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Tenant","nativeType":null,"relationName":"MaintenanceRequestToTenant","relationFromFields":["tenantId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"unit","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Unit","nativeType":null,"relationName":"MaintenanceRequestToUnit","relationFromFields":["unitId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"vendor","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Vendor","nativeType":null,"relationName":"MaintenanceRequestToVendor","relationFromFields":["vendorId"],"relationToFields":["id"],"relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Payment":{"dbName":"payments","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"leaseId","dbName":"lease_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"amount","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","nativeType":["Decimal",["10","2"]],"isGenerated":false,"isUpdatedAt":false},{"name":"currency","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["VarChar",["3"]],"default":"GHS","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PaymentType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"dueDate","dbName":"due_date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"paidAt","dbName":"paid_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"method","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"PaymentMethod","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"paymentStatus","dbName":"payment_status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"PaymentStatus","nativeType":null,"default":"PENDING","isGenerated":false,"isUpdatedAt":false},{"name":"transactionRef","dbName":"transaction_ref","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"feeAmount","dbName":"fee_amount","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","nativeType":["Decimal",["10","2"]],"isGenerated":false,"isUpdatedAt":false},{"name":"receiptUrl","dbName":"receipt_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["1023"]],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"lease","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Lease","nativeType":null,"relationName":"LeaseToPayment","relationFromFields":["leaseId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Tenant":{"dbName":"tenants","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"firstName","dbName":"first_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"lastName","dbName":"last_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"phone","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","dbName":"password_hash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"idType","dbName":"id_type","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"IdType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"idNumber","dbName":"id_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"idDocumentUrl","dbName":"id_document_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"TenantToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"leases","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Lease","nativeType":null,"relationName":"LeaseToTenant","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"maintenanceRequests","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MaintenanceRequest","nativeType":null,"relationName":"MaintenanceRequestToTenant","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"units","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Unit","nativeType":null,"relationName":"TenantToUnit","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Unit":{"dbName":"units","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"complexId","dbName":"complex_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"label","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UnitType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"notes","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"tenantId","dbName":"tenant_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"leases","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Lease","nativeType":null,"relationName":"LeaseToUnit","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"maintenanceRequests","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MaintenanceRequest","nativeType":null,"relationName":"MaintenanceRequestToUnit","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"complex","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Complex","nativeType":null,"relationName":"ComplexToUnit","relationFromFields":["complexId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"tenant","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Tenant","nativeType":null,"relationName":"TenantToUnit","relationFromFields":["tenantId"],"relationToFields":["id"],"relationOnDelete":"SetNull","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Vendor":{"dbName":"vendors","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"phone","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"specialty","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"idNumber","dbName":"id_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"idDocumentUrl","dbName":"id_document_url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"isVerified","dbName":"is_verified","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"rating","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Float","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"UserToVendor","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"maintenanceRequests","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MaintenanceRequest","nativeType":null,"relationName":"MaintenanceRequestToVendor","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Notification":{"dbName":"notifications","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["Uuid",[]],"default":{"name":"dbgenerated","args":["uuid_generate_v4()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["Uuid",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"channel","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":["VarChar",["50"]],"default":"PENDING","isGenerated":false,"isUpdatedAt":false},{"name":"scheduledAt","dbName":"scheduled_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"sentAt","dbName":"sent_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":["Timestamptz",["6"]],"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"NotificationToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","relationOnUpdate":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"IdType":{"values":[{"name":"VOTER_ID","dbName":null},{"name":"PASSPORT","dbName":null},{"name":"DRIVER_LICENSE","dbName":null},{"name":"GH_CARD","dbName":null}],"dbName":null},"InvoiceStatus":{"values":[{"name":"PENDING","dbName":null},{"name":"PAID","dbName":null},{"name":"OVERDUE","dbName":null},{"name":"CANCELED","dbName":null}],"dbName":null},"LeaseStatus":{"values":[{"name":"ACTIVE","dbName":null},{"name":"PENDING","dbName":null},{"name":"TERMINATED","dbName":null},{"name":"EXPIRED","dbName":null},{"name":"RENEWED","dbName":null}],"dbName":null},"MaintenanceStatus":{"values":[{"name":"PENDING","dbName":null},{"name":"SCHEDULED","dbName":null},{"name":"IN_PROGRESS","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"CANCELED","dbName":null}],"dbName":null},"PaymentMethod":{"values":[{"name":"MOBILE_MONEY","dbName":null},{"name":"BANK_TRANSFER","dbName":null},{"name":"CARD","dbName":null},{"name":"CASH","dbName":null}],"dbName":null},"PaymentStatus":{"values":[{"name":"PENDING","dbName":null},{"name":"COMPLETED","dbName":null},{"name":"FAILED","dbName":null},{"name":"REFUNDED","dbName":null}],"dbName":null},"PaymentType":{"values":[{"name":"RENT","dbName":null},{"name":"UTILITY","dbName":null},{"name":"MAINTENANCE","dbName":null},{"name":"DEPOSIT","dbName":null}],"dbName":null},"UnitType":{"values":[{"name":"ROOM","dbName":null},{"name":"STUDIO","dbName":null},{"name":"APARTMENT","dbName":null},{"name":"HOUSE","dbName":null}],"dbName":null}},"types":{}}',
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, 'query_engine-windows.dll.node')
path.join(process.cwd(), 'generated/prisma/query_engine-windows.dll.node')
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma')
path.join(process.cwd(), 'generated/prisma/schema.prisma')
