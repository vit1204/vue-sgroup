<script setup>
import { vModelText } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter()

const Logout = () => {
  localStorage.removeItem('accessToken')
  router.push('/')
  console.log("You have been Logout")


}


</script>

<template>
  <div>
    Chào Mừng bạn đã vượt qua Login và register, và đây là :
  </div>
  <div class="text-base">
    DashBoard
  </div>
  <button @click.prevent="Logout" type="submit">Logout</button>
</template>

<style scoped>
button {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
}
</style>
