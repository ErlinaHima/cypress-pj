<script setup lang="ts">
import { RouterView } from "vue-router";

import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <div class="row">
        <div class="col"><RouterView /></div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
