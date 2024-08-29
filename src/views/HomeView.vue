<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { openNotification } from '@/utils/notification'

const store = useStore()
const router = useRouter()

onBeforeMount(() => {
  console.log(store.state)

  if (!store.getters['auth/getIsLoggedIn']) {
    handleLogout()
  }
})

const handleLogout = () => {
  store.dispatch('auth/logout')
  router.push('/')
  openNotification('success', 'Logout Success', 'You have successfully logged out.')
}
</script>

<template>
  <main>
    <p>User logged in, hi {{ store.getters['auth/getEmail'] }}</p>
    <a-button type="primary" @click="handleLogout">Logout</a-button>
  </main>
</template>
