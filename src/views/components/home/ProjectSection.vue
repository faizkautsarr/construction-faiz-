<script setup lang="ts">
import { useStore } from 'vuex'
import ProjectTableItem from './ProjectTableItem.vue'
import ProjectTableHeader from './ProjectTableHeader.vue'

const store = useStore()

console.log(store.getters['project/getProjects'])
</script>

<template>
  <div class="w-full bg-white flex flex-col">
    <ProjectTableHeader />

    <a-row
      class="bg-gray-100 p-4 text-xxs mb-2 rounded-xl flex flex-row items-center"
      :gutter="[8, 8]"
      v-for="project in store.getters['project/getProjects']"
      :key="project.id"
    >
      <ProjectTableItem :project="project" />
    </a-row>
  </div>
</template>
