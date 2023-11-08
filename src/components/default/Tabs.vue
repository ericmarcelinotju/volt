<template>
  <TabGroup>
    <TabList class="flex">
      <Tab
        v-for="option in options"
        :key="option.value"
        v-slot="{ selected }"
        class="outline-0"
      >
        <button
          class="relative top-[1px] w-full py-2 px-4 text-gray-500"
          :class="selected
            ? 'bg-white text-info border-t border-x border-gray-300'
            : 'hover:text-gray-700'
          "
        >
          {{ option.label }}
        </button>
      </Tab>
    </TabList>
    <TabPanels class="border-t border-gray-300">
      <TabPanel
        v-for="option in options"
        :key="option.value"
        class="p-3 outline-0"
      >
        <slot :name="option.value" />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Option } from '@/typings/option.type'

interface Props {
  options: Option[];
}
defineProps<Props>()
</script>
