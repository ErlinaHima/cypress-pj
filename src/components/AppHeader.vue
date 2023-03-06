<script setup lang="ts">
import { onBeforeRouteUpdate, RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import type { Ref } from "vue";

import { isLoggedIn, logoutUser } from "@/util/userStatus";
import router from "@/router";

const navbarRef: Ref<null | HTMLDivElement> = ref(null);

onBeforeRouteUpdate(() => {
  const route = useRoute();

  console.log(route.name);
});

const logout = async () => {
  logoutUser();

  await router.push({ name: "Login" });
};

const toggleNavbar = () => {
  const display = navbarRef.value!.style.display;
  navbarRef.value!.style.display = display !== "block" ? "block" : "none";
};
</script>

<template>
  <header v-if="isLoggedIn">
    <div class="row">
      <div class="col">
        <div class="content">
          <nav class="navbar navbar-expand-lg fixed-top p-0 navbar-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse bg-dark justify-content-center"
              id="navbarNav"
              ref="navbarRef"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink
                    to="/"
                    class="nav-link"
                    :class="$route.name === 'Home' ? 'active' : ''"
                    >Home</RouterLink
                  >
                </li>

                <li class="nav-item">
                  <RouterLink
                    to="/suppliers"
                    class="nav-link"
                    :class="$route.name === 'Suppliers' ? 'active' : ''"
                    >Suppliers</RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink
                    to="/quotes"
                    class="nav-link"
                    :class="$route.name === 'Quotes' ? 'active' : ''"
                    >Quotes</RouterLink
                  >
                </li>

                <li class="nav-item">
                  <a
                    href="#"
                    @click.prevent="logout"
                    class="nav-link text-secondary"
                    >Logout</a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
nav {
  &.navbar {
    background-color: var(--bs-dark);
  }
  .navbar-toggler {
    border: none;
    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }
  .navbar-nav {
    li.nav-item {
      a.nav-link {
        color: white;
        padding-left: 0.75rem;
        &.active {
          color: var(--bs-yellow);
        }
      }
    }
  }
}
</style>
