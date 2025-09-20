

// registration api 

export interface RegistrationApiPayload {
    first_name: string | undefined;
    last_name: string | undefined;
    email: string | number;
    password: string | undefined;
    password_confirmation: string | undefined;
}

export interface RegistrationApiResponse {
    ok: boolean;
    message: string;
    data: string[];
}



// OtpVerify api 

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    avatar: string;
    contact_number?: string;
    status: string;
    joined_at?: string;
    last_login_at?: string;
    created_at: string;
    updated_at: string;
    full_name: string;
}


export interface UserData {
    access_token: string;
    token_type: string;
    user: User
}

export interface OtpVerifyApiResponse {
    ok: boolean;
    message: string;
    data: UserData
}


export interface OtpVerifyApiPayload {
    email: string | null;
    otp: number
}




// forget password api 

export interface EmailVerifyApiPayload {
    email: string | undefined
}


export interface EmailVerifyApiResponse {
    ok: boolean;
    message: string;
    data: string[]
}


// otp verify api 

export interface OtpVeriryApiPayload {
    email: string | null;
    otp: number | undefined
}

export interface UserToken {
    reset_token?: string;
}

export interface ForgetOtpVerifyApiResponse {
    ok: boolean;
    message: string;
    data: UserToken | null;
}





