import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import musicReducer from "./music/musicSlice";
import playerReducer from "./player/playerSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        music: musicReducer,
        player: playerReducer,
        search: searchReducer,
    },
});