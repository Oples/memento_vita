import { writable } from "svelte/store";

export const statusbar = writable({
    text: "",
});
