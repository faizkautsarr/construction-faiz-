<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { Dayjs } from 'dayjs'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'

const store = useStore()

const props = defineProps<{
  project: {
    id: string
    creatorId: string
    name: string
    location: string
    stage: string
    category: string
    othersCategory: string
    startDate: Dayjs
    description: string
  }
}>()

const handleView = () => {
  store.dispatch('project/setSelectedProject', props.project.id)
  setTimeout(() => {
    store.dispatch('project/setActionType', 'view')
  }, 500)
}

const handleEdit = () => {
  store.dispatch('project/setSelectedProject', props.project.id)
  setTimeout(() => {
    store.dispatch('project/setActionType', 'edit')
  }, 500)
}

const handleDelete = () => {
  store.dispatch('project/setSelectedProject', props.project.id)
  setTimeout(() => {
    store.dispatch('project/setActionType', 'remove')
  }, 500)
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
      @click="handleView"
    >
      <template #icon>
        <EyeOutlined />
      </template>
    </a-button>

    <a-button
      type="primary"
      size="medium"
      class="flex items-center justify-center"
      @click="handleEdit"
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
      @click="handleDelete"
    >
      <template #icon>
        <DeleteOutlined />
      </template>
    </a-button>
  </a-col>
</template>
