<script setup lang="ts">
import { useStore } from 'vuex' // Import the store
import { useRouter } from 'vue-router' // Import the router

const store = useStore()
const router = useRouter()

const handleLogout = () => {
  store.dispatch('logout') // Dispatch the logout action to Vuex store
  router.push('/') // Redirect to the login page after logout
}
</script>

<template>
  <main>
    <p>User logged in, hi {{ store.state.username }}</p>
    <a-button type="primary" @click="handleLogout">Logout</a-button>
    <!-- Logout button to trigger logout action -->
  </main>
</template>
