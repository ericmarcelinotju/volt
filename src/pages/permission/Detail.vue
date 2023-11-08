<template>
  <CustomDetail
    :data="data"
    :excluded-fields="[]"
    :loading="loading"
  >
    <div class="min-w-full">
      <div class="text-gray-900 border-b-2 border-green-500 pb-5">
        <h3 class="text-lg font-medium ml-5">
          User Details
        </h3>
      </div>
      <div class="grid grid-cols-12 gap-6 mt-4">
        <div class="col-span-12 sm:col-span-6">
          <label
            class="default-label pb-1 pl-2"
            for="username"
          >
            {{ $t('app.columns.username') }}
          </label>
          <h1 class="default-detail">
            {{ data.module }}
          </h1>
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label
            class="default-label pb-1 pl-2"
            for="email"
          >
            {{ $t('app.columns.email') }}
          </label>
          <h1 class="default-detail">
            {{ data.method }}
          </h1>
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label
            class="default-label pb-1 pl-2"
            for="email"
          >
            {{ $t('app.columns.email') }}
          </label>
          <h1 class="default-detail">
            {{ data.description }}
          </h1>
        </div>
      </div>
    </div>
  </CustomDetail>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue'
import { detail } from '@/api/permission'
import { Permission } from '@/typings/permission'
import { useRoute } from 'vue-router'
import { useNotify } from '@/composables/use-notify'

const route = useRoute()
const { notify } = useNotify('permission')

const data: Ref<Permission> = ref(null)
const loading = ref(false)

let id = ''
if (typeof route.params.id === 'string') {
  id = route.params.id
}

onMounted(() => {
  loading.value = true
  detail(id)
    .then(resp => {
      data.value = resp.data
    })
    .catch(() => {
      notify('load', 'danger')
    })
    .finally(() => {
      loading.value = false
    })
})
</script>
