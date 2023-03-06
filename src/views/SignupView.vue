<script setup lang="ts">
import SignupForm from "@/components/SignupForm.vue";
</script>

<template>
  <div class="signup-view">
    <h1 class="text-success align-center text-center mb-3">Signup</h1>
    <div class="d-flex justify-content-center mb-3">
      <SignupForm />
    </div>

    <p class="d-flex justify-content-center">
      <span class="mr-1">Already have an account?</span>&nbsp;
      <RouterLink to="/login">Login here</RouterLink>.
    </p>
  </div>
</template>
