import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./users";
import usersSlice from "./users"

const persistConfig = {
    key: '@users',
    storage,
}

const persistedReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
    reducer: {
        persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export const persistor = persistStore(store)

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;