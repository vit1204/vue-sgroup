<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification()
import { ref, computed, watch, unref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import useAuthStore from "../store/auth"


const username = ref('')
const password = ref('')
const authStore = useAuthStore()

const accessToken = localStorage.getItem('accessToken')
const isLogin = computed(() => Boolean(accessToken.value))


const loginStore = authStore()
const login = () => {
  loginStore.login(unref(username), unref(password))
}



const logOut = () => {
  if (isLogin) {
    localStorage.removeItem('accessToken')
    accessToken.value = null
    console.log("You have been Logout")

  }
}
</script>

<template>
  <div class="login-form ">
    <form @submit.prevent="login">
      <div class="form-group">

        <label for="username" >Username</label>
        <input v-model="username" type="text" id="username" name="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" name="password" />
      </div>
      <button @click.prevent="login" type="submit">Login</button>
      <h1> Not registed tet ? <router-link to="/register" class="text-green-600">Register</router-link> </h1>
      <button @click.prevent="logOut" type="submit">Logout</button>
    </form>

  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
}
</style>
