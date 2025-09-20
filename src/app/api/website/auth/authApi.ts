// redux/services/api.ts
import { RegistrationApiPayload, RegistrationApiResponse } from "@/utility/types/authType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "api", // unique key
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    endpoints: (builder) => ({
        registrationApi: builder.mutation<RegistrationApiResponse, RegistrationApiPayload>({
            query: (payload) => ({
                url: `auth/register`,
                method: "POST",
                body: payload
            })
        })

    }),
});

export const { useRegistrationApiMutation } = authApi;
