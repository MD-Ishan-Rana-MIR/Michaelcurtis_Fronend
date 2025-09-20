// redux/services/api.ts
import { EmailVerifyApiPayload, EmailVerifyApiResponse, ForgetOtpVerifyApiResponse, NewPasswordSetApiPayload, NewPasswordSetApiRespone, OtpVerifyApiPayload, OtpVerifyApiResponse, OtpVeriryApiPayload, RegistrationApiPayload, RegistrationApiResponse } from "@/utility/types/authType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "api", // unique key
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    endpoints: (builder) => ({

        // registrationApi

        registrationApi: builder.mutation<RegistrationApiResponse, RegistrationApiPayload>({
            query: (payload) => ({
                url: `auth/register`,
                method: "POST",
                body: payload
            })
        }),

        // otp verify 

        otpVerify: builder.mutation({
            query: (payload) => ({
                url: `auth/verify `,
                method: "POST",
                body: payload
            })
        }),

        // resend otp 

        resendOtp: builder.mutation<OtpVerifyApiResponse, OtpVerifyApiPayload>({
            query: (payload) => ({
                url: `auth/resend-verification`,
                method: "POST",
                body: payload
            })
        }),

        // login api 

        loginOtp: builder.mutation({
            query: (payload) => ({
                url: `auth/login`,
                method: "POST",
                body: payload
            })
        }),


        // forget password 

        emailVerify: builder.mutation<EmailVerifyApiResponse, EmailVerifyApiPayload>({
            query: (payload) => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: payload
            })
        }),

        // verify password api 

        forgetOtpVerify: builder.mutation<ForgetOtpVerifyApiResponse, OtpVeriryApiPayload>({
            query: (payload) => ({
                url: `auth/verify-password-otp`,
                method: "POST",
                body: payload
            })
        }),

        forgetResendOtp: builder.mutation({
            query: (payload) => ({
                url: `auth/resend-verification`,
                method: "POST",
                body: payload
            })
        }),

        newPasswordSetApi: builder.mutation<NewPasswordSetApiRespone, NewPasswordSetApiPayload>({
            query: (paylod) => ({
                url: `/auth/reset-password-with-token`,
                method: "POST",
                body: paylod
            })
        }),


    }),
});

export const { useRegistrationApiMutation, useOtpVerifyMutation, useResendOtpMutation, useLoginOtpMutation, useEmailVerifyMutation, useForgetOtpVerifyMutation, useNewPasswordSetApiMutation, useForgetResendOtpMutation } = authApi;
