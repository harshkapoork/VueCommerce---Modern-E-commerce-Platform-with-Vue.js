
<template>
  <button @click="LogOut">LogOut</button>
  <div class="Home">
    <h1>Home Page</h1>
    {{ data.products }}
    <div v-for="user in data.users">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.address }}</h2>

    </div>
    <hr></hr>
    {{ data.users }}
    
  </div>
</template>

<script setup>
import router from '@/router'
import {useDataStore } from '@/stores/counter'
const data =useDataStore()

const LogOut=()=>{
  localStorage.setItem("auth","false")
  router.push("/login")
}
</script>

<style scoped>
</style>
