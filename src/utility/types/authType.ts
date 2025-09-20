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