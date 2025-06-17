import bcrypt from 'bcrypt'

export const createHash = (passwordString: string) => {
    const passwordHash = bcrypt.hashSync(passwordString, 10)
    return passwordHash
} 