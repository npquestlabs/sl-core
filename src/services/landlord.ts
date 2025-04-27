import { IdType } from '../../generated/prisma'
import { prisma } from '../configs/prisma'
import { hash } from 'bcryptjs'

export const registerLandlordStep1 = async (data: {
  firstName: string,
  lastName: string,
  email: string
  phone: string
  password: string
}) => {
  const passwordHash = await hash(data.password, 10)
  return prisma.landlord.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      passwordHash,
    },
  })
}

export const registerLandlordStep2 = async (
  id: string,
  data: {
    idType: string
    idNumber: string
    idDocumentUrl: string
    proofOfOwnership: string
    bankName: string
    bankAccount: string
  },
) => {
  return prisma.landlord.update({
    where: { id },
    data: {
      idType: data.idType as IdType,
      idNumber: data.idNumber,
      idDocumentUrl: data.idDocumentUrl,
      proofOfOwnership: data.proofOfOwnership,
      bankName: data.bankName,
      bankAccount: data.bankAccount,
      isVerified: true,
    },
  })
}