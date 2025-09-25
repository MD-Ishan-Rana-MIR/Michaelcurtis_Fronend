import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/website/auth/authApi";
import { userApi } from "./api/admin/userApi";
import { policyApi } from "./api/admin/policyApi";
import { blogApi } from "./api/admin/blogApi";
import { faqApi } from "./api/admin/faqApi";
import { contentApi } from "./api/admin/contentApi";


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [policyApi.reducerPath]: policyApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer,
        [contentApi.reducerPath]: contentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, policyApi.middleware, blogApi.middleware, faqApi.middleware, contentApi.middleware),
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
