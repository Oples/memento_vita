// svelte store
import { writable } from "svelte/store";

export const defaultTheme = {
    background_color: "#242424",
    text_color: "#ffffff",
};

export const theme = writable({
    // state
    ...defaultTheme,
});
