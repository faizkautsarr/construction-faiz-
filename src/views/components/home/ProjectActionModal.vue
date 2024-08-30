<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import dayjs, { Dayjs } from 'dayjs'

import { openNotification } from '@/utils/notification'
import { generateId } from '@/utils/generateId'

const store = useStore()

const name = ref('')
const location = ref('')
const stage = ref('')
const category = ref('')
const otherCategory = ref('')
const date = ref<Dayjs>()
const description = ref('')

const selectedProject = computed(() => store.getters['project/getSelectedProject'])

const inputValid = computed(
  () =>
    name.value &&
    location.value &&
    stage.value &&
    (!isOthers.value || otherCategory.value) &&
    category.value &&
    date.value &&
    (!isFutureProject.value || date.value.isAfter(dayjs())) &&
    description.value
)

const isFutureProject = computed(() => {
  return ['Concept', 'Design & Documentation', 'Pre-Construction'].includes(stage.value)
})

const isViewOnly = computed(() => {
  return store.getters['project/getActionType'] === 'view'
})

watch(selectedProject, () => {
  if (
    store.getters['project/getSelectedProject'] !== null &&
    store.getters['project/getSelectedProject'] !== undefined
  ) {
    name.value = store.getters['project/getSelectedProject'].name
    location.value = store.getters['project/getSelectedProject'].location
    stage.value = store.getters['project/getSelectedProject'].stage
    category.value = store.getters['project/getSelectedProject'].category
    otherCategory.value = store.getters['project/getSelectedProject'].othersCategory
    date.value = dayjs(store.getters['project/getSelectedProject'].startDate, 'YYYY-MM-DD')
    description.value = store.getters['project/getSelectedProject'].description
  }
})

const stageOptions = [
  { label: 'Concept', value: 'Concept' },
  { label: 'Design & Documentation', value: 'Design & Documentation' },
  { label: 'Pre-Construction', value: 'Pre-Construction' },
  { label: 'Construction', value: 'Construction' }
]

const categoryOptions = [
  { label: 'Education', value: 'Education' },
  { label: 'Health', value: 'Health' },
  { label: 'Office', value: 'Office' },
  { label: 'Others', value: 'Others' }
]

const title = computed(() => {
  switch (store.getters['project/getActionType']) {
    case 'create':
      return 'Create Project'
    case 'edit':
      return `Update Project ${store.getters['project/getSelectedProject']?.name || ''}`
    case 'remove':
      return `Remove Project ${store.getters['project/getSelectedProject']?.name || ''}`
    default:
      return `Project ${store.getters['project/getSelectedProject']?.name || ''}`
  }
})

const okText = computed(() => {
  switch (store.getters['project/getActionType']) {
    case 'create':
      return 'Create'
    case 'edit':
      return 'Edit'
    case 'remove':
      return 'Remove'
    default:
      return 'Ok'
  }
})

const isOthers = computed(() => {
  return category.value === 'Others'
})

const disabledDate = (current: Dayjs) => {
  return isFutureProject.value
    ? current && current < dayjs().endOf('day')
    : current && current < dayjs('1800-01-01')
}

function resetForm() {
  name.value = ''
  location.value = ''
  stage.value = ''
  category.value = ''
  otherCategory.value = ''
  date.value = undefined
  description.value = ''
}
function handleCancel() {
  store.commit('project/resetSelectedProject')

  setTimeout(() => {
    resetForm()
    store.commit('project/resetActionType')
  }, 200)
}

function submitAction() {
  if (!inputValid.value) {
    openNotification(
      'error',
      'Error',
      'All fields are required. Please fill in all fields and make sure your input date is valid.'
    )
  } else {
    if (store.getters['project/getActionType'] === 'remove') {
      store.dispatch('project/removeProject', store.getters['project/getSelectedProject'].id)
      openNotification('success', 'Remove project success', '')
    } else if (store.getters['project/getActionType'] === 'create') {
      store.dispatch('project/createProject', {
        id: generateId(),
        creatorId: store.getters['auth/getEmail'],
        name: name.value,
        location: location.value,
        stage: stage.value,
        category: category.value,
        othersCategory: isOthers.value ? otherCategory.value : '',
        startDate: date.value,
        description: description.value
      })
      openNotification('success', 'Create project success', '')
    } else if (store.getters['project/getActionType'] === 'edit') {
      store.dispatch('project/editProject', {
        id: store.getters['project/getSelectedProject'].id,
        project: {
          id: store.getters['project/getSelectedProject'].id,
          creatorId: store.getters['auth/getEmail'],
          name: name.value,
          location: location.value,
          stage: stage.value,
          category: category.value,
          othersCategory: otherCategory.value,
          startDate: date.value,
          description: description.value
        }
      })
      openNotification('success', 'Edit project success', '')
    }
    handleCancel()
  }
}
</script>

<template>
  <a-modal
    :open="store.getters['project/getActionType'] !== null"
    :title="title"
    @ok="submitAction"
    :okText="okText"
    @close="handleCancel"
    @cancel="handleCancel"
    destroyOnClose="true"
  >
    <div class="flex flex-col items-start gap-4">
      <div class="flex flex-row items-center justify-between gap-2 w-full">
        <div class="w-full">
          <p class="m-0">Name</p>
          <a-textarea
            v-model:value="name"
            placeholder="Name"
            maxlength="200"
            :rows="3"
            :disabled="isViewOnly"
          />
        </div>

        <div class="w-full">
          <p class="m-0">Location</p>
          <a-textarea
            v-model:value="location"
            placeholder="Location"
            maxlength="500"
            rows="3"
            :disabled="isViewOnly"
          />
        </div>
      </div>

      <div class="flex flex-row items-center justify-between gap-2 w-full">
        <div class="w-full">
          <p class="m-0">Stage</p>
          <a-select
            v-model:value="stage"
            :options="stageOptions"
            placeholder="Stage"
            class="w-full"
            :disabled="isViewOnly"
          />
        </div>

        <div class="w-full">
          <p class="m-0">Category</p>
          <a-select
            v-model:value="category"
            :options="categoryOptions"
            placeholder="Category"
            class="w-full"
            :disabled="isViewOnly"
          />
        </div>
      </div>

      <div v-if="isOthers" class="w-full">
        <p>Other Category</p>
        <a-input
          v-model:value="otherCategory"
          placeholder="Other Category"
          :disabled="isViewOnly"
        />
      </div>

      <div class="w-full">
        <p>Start Date</p>
        <a-date-picker
          class="w-full"
          v-model:value="date"
          :disabled="isViewOnly"
          :disabled-date="disabledDate"
        />
      </div>

      <div class="w-full">
        <p>Description</p>
        <a-textarea
          v-model:value="description"
          placeholder="Description"
          maxlength="2000"
          rows="4"
          :disabled="isViewOnly"
        />
      </div>
    </div>
  </a-modal>
</template>
