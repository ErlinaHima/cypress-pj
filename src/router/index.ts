import { createRouter, createWebHistory } from "vue-router";
import type { NavigationGuard } from "vue-router";

import SuppliersView from "../views/SuppliersView.vue";
import QuotesView from "../views/QuotesView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import SingleSupplierView from "../views/SingleSupplierView.vue";
import AppHome from "../views/AppHome.vue";

import { redirectToLogin } from "@/router/guards/redirectToLogin";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHome,
    },
    {
      path: "/suppliers/:page?",
      name: "Suppliers",
      component: SuppliersView,
    },
    {
      path: "/quotes/:page?",
      name: "Quotes",
      component: QuotesView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "Signup",
      component: SignupView,
    },
    {
      path: "/supplier/:id",
      name: "Single Supplier",
      component: SingleSupplierView,
    },
  ],
});

/**
 * Collection of global navigation guards to be applied to the router.
 */
const globalGuards: NavigationGuard[] = [redirectToLogin];

globalGuards.forEach((navigationGuard) => {
  router.beforeEach(navigationGuard);
});

export default router;
