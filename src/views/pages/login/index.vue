<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { QuestionCircleFilled } from '@ant-design/icons-vue'

import { openNotification } from '@/utils/notification'

const email = ref('')
const password = ref('')

const store = useStore()
const router = useRouter()

const handleLogin = () => {
  if (!isInputValid.value) {
    return
  } else {
    if (
      email.value === store.getters['auth/getValidLoginEmail'] &&
      password.value === store.getters['auth/getValidLoginPassword']
    ) {
      openNotification('success', 'Login Success', 'You have successfully logged in.')
      store.dispatch('auth/login', { email: email.value, password: password.value })
      router.push('/home')
    } else {
      openNotification('error', 'Login Failed', 'Invalid email or password.')
    }
  }
}

const isInputValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value) && password.value.length > 2
})
</script>

<template>
  <main>
    <a-card title="Construction Site" class="w-96">
      <template #extra
        ><a-tooltip placement="topLeft">
          <template #title>
            <span> Email: a@a.com, Password: 123</span>
          </template>
          <question-circle-filled /> </a-tooltip
      ></template>
      <div class="flex flex-col items-start gap-4">
        <a-input v-model:value="email" placeholder="Email" />
        <a-input-password
          v-model:value="password"
          placeholder="Password"
          @keyup.enter="handleLogin"
        />

        <a-button class="w-full" :type="isInputValid ? 'primary' : 'disabled'" @click="handleLogin"
          >Login</a-button
        >
      </div>
    </a-card>
  </main>
</template>
