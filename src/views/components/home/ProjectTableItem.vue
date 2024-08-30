<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import type { Project, ActionType } from '@/store/modules/project/state'

const store = useStore()

const props = defineProps<{
  project: Project
}>()

const handleAction = (type: ActionType) => {
  store.dispatch('project/setSelectedProject', props.project.id)
  setTimeout(() => {
    store.dispatch('project/setActionType', type)
  })
}
</script>

<template>
  <a-col :span="1" class="text-xxs">{{ props.project.id }}</a-col>
  <a-col :span="2" class="text-xxs">{{ props.project.creatorId }}</a-col>
  <a-col :span="3" class="text-xxs">{{ props.project.name }}</a-col>
  <a-col :span="4" class="text-xxs">{{ props.project.location }} </a-col>
  <a-col :span="2" class="text-xxs">{{ props.project.stage }}</a-col>
  <a-col :span="2" class="text-xxs">{{ props.project.category }}</a-col>
  <a-col :span="2" class="text-xxs">{{ props.project.othersCategory }}</a-col>
  <a-col :span="2" class="text-xxs">{{ props.project.startDate.format('YYYY-MM-DD') }}</a-col>
  <a-col :span="3" class="text-xxs">{{ props.project.description }}</a-col>

  <a-col :span="3" class="text-xxs flex flex-row gap-2 items-center">
    <a-button
      type="default"
      size="medium"
      class="flex items-center justify-center"
      @click="handleAction('view')"
    >
      <template #icon>
        <EyeOutlined />
      </template>
    </a-button>

    <a-button
      type="primary"
      size="medium"
      class="flex items-center justify-center"
      @click="handleAction('edit')"
    >
      <template #icon>
        <EditOutlined />
      </template>
    </a-button>

    <a-button
      type="primary"
      size="medium"
      class="flex items-center justify-center"
      danger
      @click="handleAction('remove')"
    >
      <template #icon>
        <DeleteOutlined />
      </template>
    </a-button>
  </a-col>
</template>
