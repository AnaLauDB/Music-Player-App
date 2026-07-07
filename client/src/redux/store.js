import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import musicReducer from "./music/musicSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        music: musicReducer,
    },
});