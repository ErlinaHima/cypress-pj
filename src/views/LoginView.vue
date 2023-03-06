<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
</script>

<template>
  <div class="login-view">
    <h1 class="text-success align-center text-center mb-3">Login</h1>
    <div class="d-flex justify-content-center mb-3">
      <LoginForm />
    </div>

    <p class="d-flex justify-content-center">
      <span class="mr-1">Don't have an account?</span>&nbsp;
      <RouterLink to="/signup">Signup here</RouterLink>.
    </p>
  </div>
</template>
