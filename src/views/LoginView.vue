<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const store = useStore()
const router = useRouter()

const handleLogin = () => {
  store.dispatch('login', { username: username.value, password: password.value })
}
watch(
  () => store.state.isLoggedIn,
  (isLoggedIn) => {
    if (isLoggedIn) {
      router.push('/home')
    }
  }
)
</script>

<template>
  <main>
    <a-card title="Construction Site" style="width: 400px">
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px">
        <a-input v-model:value="username" placeholder="Username" />
        <a-input-password v-model:value="password" placeholder="Password" />

        <a-button style="width: 100%" type="primary" @click="handleLogin">Login</a-button>
      </div>
    </a-card>
  </main>
</template>
