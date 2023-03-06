import type { NavigationGuard } from "vue-router";

import { isLoggedIn } from "@/util/userStatus";

export const redirectToLogin: NavigationGuard = (to, from, next) => {
  if (typeof to.name === "string" && ["Login", "Signup"].includes(to.name)) {
    return next();
  }

  if (!isLoggedIn.value) {
    return next({ name: "Login" });
  }

  next();
};
