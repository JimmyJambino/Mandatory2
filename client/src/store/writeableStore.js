import { writable } from "svelte/store";

export const isLoggedIn = writable(false)
export const beers = writable([])
export const cart = writable([])