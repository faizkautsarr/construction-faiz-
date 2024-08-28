<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { notification } from 'ant-design-vue'
import { QuestionCircleFilled } from '@ant-design/icons-vue'

const email = ref('')
const password = ref('')

const store = useStore()
const router = useRouter()

type NotificationType = 'success' | 'error'

const openNotificationWithIcon = (type: NotificationType, message: string, description: string) => {
  notification[type]({
    message: message,
    description: description
  })
}
const handleLogin = () => {
  if (!isInputValid.value) {
    return
  } else {
    if (
      email.value === store.state.validLogiEmail &&
      password.value === store.state.validLoginPassword
    ) {
      openNotificationWithIcon('success', 'Login Success', 'You have successfully logged in.')
      store.dispatch('login', { email: email.value, password: password.value })
    } else {
      openNotificationWithIcon('error', 'Login Failed', 'Invalid email or password.')
    }
  }
}

const isInputValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value) && password.value.length > 2
})

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
      <template #extra
        ><a-tooltip placement="topLeft">
          <template #title>
            <span> Email: a@a.com, Password: 123</span>
          </template>
          <question-circle-filled /> </a-tooltip
      ></template>
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px">
        <a-input v-model:value="email" placeholder="Email" />
        <a-input-password v-model:value="password" placeholder="Password" />

        <a-button
          style="width: 100%"
          :type="isInputValid ? 'primary' : 'disabled'"
          @click="handleLogin"
          >Login</a-button
        >
      </div>
    </a-card>
  </main>
</template>
