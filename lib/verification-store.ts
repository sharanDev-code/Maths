// Simple in-memory store for verification codes
// Note: In production, use Redis or a Database for persistence and horizontal scaling

type VerificationStore = {
    [email: string]: {
        code: string;
        expires: number;
        verified: boolean;
    };
};

// Use a global variable to persist during hot reloads in development
const globalForVerification = global as unknown as {
    verificationStore: VerificationStore;
};

export const verificationStore =
    globalForVerification.verificationStore || {};

if (process.env.NODE_ENV !== "production") {
    globalForVerification.verificationStore = verificationStore;
}

export const generateCode = (email: string): string => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 10 * 60 * 1000; // 10 minutes from now
    verificationStore[email] = { code, expires, verified: false };
    return code;
};

export const verifyCode = (email: string, code: string): boolean => {
    const record = verificationStore[email];
    if (!record) return false;

    if (record.code === code && record.expires > Date.now()) {
        record.verified = true;
        return true;
    }
    return false;
};

export const isEmailVerified = (email: string): boolean => {
    return verificationStore[email]?.verified || false;
};

export const clearVerification = (email: string) => {
    if (verificationStore[email]) {
        delete verificationStore[email];
    }
};
