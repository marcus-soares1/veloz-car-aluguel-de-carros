import bcrypt from 'bcrypt'

export const compareStringToHash = (string: string, hash: string) => {
    const valid = bcrypt.compareSync(string, hash)
    return valid
}