<script setup lang="ts">
import { useSignupForm } from "@/composables";

const {
  isSubmitButtonDisabled,
  handleSubmit,
  firstName,
  lastName,
  email,
  password,
} = useSignupForm();
</script>

<template>
  <div class="signup-form card flex-grow-1">
    <div class="card-body">
      <form @submit.prevent.stop="handleSubmit">
        <div class="mb-3">
          <label for="first-name" class="form-label">First Name</label>
          <input
            id="first-name"
            class="form-control"
            type="text"
            placeholder="Enter your first name"
            v-model="firstName"
          />
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last Name</label>
          <input
            id="last-name"
            class="form-control"
            type="text"
            placeholder="Enter your last name"
            v-model="lastName"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            class="form-control"
            type="text"
            placeholder="Enter your email"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            class="form-control"
            type="password"
            placeholder="Enter a password"
            v-model="password"
          />
        </div>

        <div class="bmb-3">
          <button
            class="btn btn-primary"
            type="submit"
            :disabled="isSubmitButtonDisabled"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@media only screen and (min-width: 992px) {
  .signup-form.card {
    max-width: 50%;
  }
}
</style>
