<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import ProjectSection from '@/views/components/home/ProjectSection.vue'
import ProjectActionModal from '@/views/components/home/ProjectActionModal.vue'

import { openNotification } from '@/utils/notification'

const store = useStore()
const router = useRouter()

onBeforeMount(() => {
  if (!store.getters['auth/getIsLoggedIn']) {
    handleLogout()
  }
})

const handleLogout = () => {
  store.dispatch('auth/logout')
  router.push('/')
  openNotification('success', 'Logout Success', 'You have successfully logged out.')
}

const handleAddProject = () => {
  store.dispatch('project/setActionType', 'create')
}
</script>

<template>
  <main
    class="min-h-screen flex flex-col items-center justify-start w-full px-4 pt-16 bg-gradient-to-tr from-[#006bff] to-[#006bff]"
  >
    <ProjectActionModal />

    <div
      class="w-11/12 p-4 bg-white h-full rounded-md mb-4 flex flex-row items-center justify-between"
    >
      <div class="flex flex-col">
        <p class="text-gray-500">Welcome to Construction Site</p>
        <p>
          hi, <span class="text-blue-700 font-bold"> {{ store.getters['auth/getEmail'] }}</span>
        </p>
      </div>

      <div class="flex flex-row gap-4">
        <a-button type="primary" @click="handleLogout" danger>Logout</a-button>
      </div>
    </div>

    <div
      class="w-11/12 p-4 bg-white h-full rounded-md flex flex-col items-center justify-start gap-4"
    >
      <a-button class="self-end" type="primary" @click="handleAddProject"
        >Create New Project</a-button
      >
      <ProjectSection />
    </div>
  </main>
</template>
