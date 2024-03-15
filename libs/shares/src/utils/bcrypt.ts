import configuration from "@app/shares/config/configuration"

export const comparePasswordUser = async (
    plainPassword,
    encryptedPassword,
): Promise<boolean> => {
    return await bcrypt.compare(
        plainPassword + configuration().api.secretUserPasswordKey,
        encryptedPassword,
    )
}