// redux/services/api.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: (headers, { }) => {
            // Try to get tokens from localStorage
            const adminToken = Cookies.get("admin_token");
            const userToken = Cookies.get("user_token");

            if (adminToken) {
                headers.set("Authorization", `Bearer ${adminToken}`);
            } else if (userToken) {
                headers.set("Authorization", `Bearer ${userToken}`);
            }

            return headers;
        },
    }),

    tagTypes: ["blog"],

    endpoints: (builder) => ({

        createBlog: builder.mutation({
            query: (payload) => ({
                url: "/admin/blogs",
                method: "POST",
                body: payload
            })
        })


    }),
});

export const { useCreateBlogMutation } = blogApi;
