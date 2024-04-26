export const httpErrors = {
    COMMON: {
        message: 'Unknown error',
        code: 'COMMON_00000',
    },
    UNAUTHORIZED: {
        code: 'AUTH_00000',
        message: 'Unauthorized',
    },
    USER_NOT_FOUND: {
        message: 'User not found. Please try again',
        code: 'USER_00001',
    },
    USER_INVALID_PASSWORD: {
        message: 'Password of user invalid credentials. Please try again',
        code: 'USER_00002',
    },
    USER_EXISTED: {
        message: 'Password of user invalid credentials. Please try again',
        code: 'USER_00003',
    },
    // latop
    LAPTOP_NOT_FOUND: {
        message: 'laptop not found. Please try again',
        code: 'LAPTOP_00001',
    },
    //comment
    COMMENT_NOT_FOUND: {
        message: 'comment not found. Please try again',
        code: 'COMMENT_00001',
    },
}
