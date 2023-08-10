<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification()
import { ref, computed } from "vue";
import axios from "axios";

const username = ref('')
const password = ref('')

const accessToken = localStorage.getItem('accessToken')
const isLogin = computed(() => !!accessToken.value)

const login = () => {
  console.log("hello Viet")
  axios.post('http://localhost:3000/auth/login', {
    username: username.value,
    password: password.value
  })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.token))
      }
      console.log("login succes")
      return res.data
    })
}
const Logout = () => {
  localStorage.removeItem('accessToken')
  accessToken.value = null
  console.log("You have been Logout")
}

const showNoti = () => {
  console.log(showNoti);
  if (login) {
    notify({
      title: "Authorization",
      text: "You have been logged in!",

    })
  }

}
</script>

<template>
  <div class="login-form">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" name="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" name="password" />
      </div>
      <button @click.prevent="login" type="submit">Login</button>
      <h1> Not registed tet ? <router-link to="/register">Register</router-link> </h1>
      <button @click.prevent="Logout" type="submit">Logout</button>
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
