import { computed, ref } from "vue";
import type { Ref } from "vue";

const loggedIn: Ref<boolean> = ref(!!localStorage.getItem("token"));

/**
 * Logs in the user by setting the token in the local storage.
 * IMPORTANT NOTE: The best place to store a token is an http-only cookie, as when in local storage
 * expose to the risk of xss attack, being local storage accessible by the browser.
 * @param token
 */
export const loginUser = (token: string) => {
  localStorage.setItem("token", token);
  loggedIn.value = true;
};

export const getToken = computed((): string | null => {
  return localStorage.getItem("token");
});

/**
 * Destroys the token and set the loggedIn reference value to false.
 */
export const logoutUser = () => {
  localStorage.removeItem("token");
  loggedIn.value = false;
};

/**
 * Computed reference to the loggedIn object.
 */
export const isLoggedIn = computed((): boolean => {
  return loggedIn.value;
});
