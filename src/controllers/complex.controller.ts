import { Request, Response } from 'express'
import * as complexService from '../services/complex.service'

export async function getLandlordComplexes(req: Request, res: Response) {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.landlord) {
        return res.status(400).json({ error: 'User is not a landlord' })
    }

    const paginatedData = await complexService.getComplexesOfLandlord(
        user.landlord.id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        req.query as any,
    )

    return res.status(200).json(paginatedData)
}

export async function getLandLordComplex(req: Request, res: Response) {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.landlord) {
        return res.status(400).json({ error: 'User is not a landlord' })
    }

    const complexId = req.params.complexId

    if (!complexId) {
        return res.status(400).json({ error: 'Complex ID is required' })
    }

    const complex = await complexService.getComplexById(complexId)

    if (!complex) {
        return res.status(404).json({ error: 'Complex not found' })
    }

    if (complex.landlordId !== user.landlord.id) {
        return res.status(403).json({ error: 'Forbidden' })
    }

    return res.status(200).json(complex)
}

export async function createComplex(req: Request, res: Response) {
    const user = req.user

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    if (!user.landlord) {
        return res.status(400).json({ error: 'User is not a landlord' })
    }

    const createdComplex = await complexService.createComplex(user.landlord.id, req.body)

    if (!createdComplex) {
        return res.status(500).json()
    }
}