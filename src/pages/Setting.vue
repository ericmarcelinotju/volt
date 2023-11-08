<template>
  <DefaultCreateEdit
    :has-back="false"
    :title="$t('app.columns.setting')"
  >
    <template #form>
      <div class="px-2 overflow-y-auto min-h-[92%] mb-14">
        <DefaultTabs
          :options="[
            { label: 'Scheduler', value: 'scheduler' },
            { label: 'Storage', value: 'storage' },
            { label: 'Email', value: 'email' },
          ]"
        >
          <template #scheduler>
            <div class="grid grid-cols-12 gap-6 px-4 py-5">
              <div class="col-span-6 default-field">
                <label class="default-label">Backup Time</label>
                <VueDatepicker
                  id="first_backup_time"
                  v-model="firstBackupTime"
                  auto-apply
                  class="default-input"
                  :clearable="false"
                  time-picker
                  vertical
                />
              </div>

              <div class="col-span-6 default-field">
                <VueDatepicker
                  id="second_backup_time"
                  v-model="secondBackupTime"
                  auto-apply
                  class="default-input"
                  :clearable="false"
                  time-picker
                  vertical
                />
              </div>
            </div>
          </template>

          <template #storage>
            <div class="grid grid-cols-12 gap-6 px-4 py-5">
              <div class="col-span-12 text-info text-xl font-bold">
                Archive
                <hr class="mt-2 border-info">
              </div>
              <div class="col-span-6 default-field">
                <label
                  class="default-label"
                  for="archive_sftp_host"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.host") }}
                </label>
                <input
                  id="archive_sftp_host"
                  v-model="form.archive_sftp_host"
                  class="default-input"
                  required
                  type="text"
                >
              </div>

              <div class="col-span-6 mt-2 default-field">
                <label
                  class="default-label"
                  for="archive_sftp_port"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.port") }}
                </label>
                <input
                  id="archive_sftp_port"
                  v-model="form.archive_sftp_port"
                  class="default-input"
                  required
                  type="number"
                >
              </div>
              <div class="col-span-6 default-field">
                <label
                  class="default-label"
                  for="archive_sftp_username"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.username") }}
                </label>
                <input
                  id="archive_sftp_username"
                  v-model="form.archive_sftp_username"
                  class="default-input"
                  required
                  type="text"
                >
              </div>

              <div class="col-span-6 default-field">
                <label
                  class="default-label"
                  for="archive_sftp_password"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.password") }}
                </label>
                <input
                  id="archive_sftp_password"
                  v-model="form.archive_sftp_password"
                  class="default-input"
                  required
                  type="password"
                >
              </div>

              <div class="col-span-12 default-field">
                <label
                  class="default-label"
                  for="archive_storage_folder"
                >
                  {{ $t("app.columns.recording") }}
                  {{ $t("app.columns.folder") }}
                </label>
                <input
                  id="archive_storage_folder"
                  v-model="form.archive_storage_folder"
                  class="default-input"
                  required
                  type="text"
                >
              </div>

              <div class="col-span-12 text-info text-xl font-bold">
                Legacy
                <hr class="mt-2 border-info">
              </div>
              <div class="col-span-6 mt-2 default-field">
                <label
                  class="default-label"
                  for="legacy_sftp_host"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.host") }}
                </label>
                <input
                  id="legacy_sftp_host"
                  v-model="form.legacy_sftp_host"
                  class="default-input"
                  required
                  type="text"
                >
              </div>

              <div class="col-span-6 mt-2 default-field">
                <label
                  class="default-label"
                  for="legacy_sftp_port"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.port") }}
                </label>
                <input
                  id="legacy_sftp_port"
                  v-model="form.legacy_sftp_port"
                  class="default-input"
                  required
                  type="number"
                >
              </div>
              <div class="col-span-6 default-field">
                <label
                  class="default-label"
                  for="legacy_sftp_username"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.username") }}
                </label>
                <input
                  id="legacy_sftp_username"
                  v-model="form.legacy_sftp_username"
                  class="default-input"
                  required
                  type="text"
                >
              </div>

              <div class="col-span-6 default-field">
                <label
                  class="default-label"
                  for="legacy_sftp_password"
                >
                  {{ $t("app.columns.sftp") }}
                  {{ $t("app.columns.password") }}
                </label>
                <input
                  id="legacy_sftp_password"
                  v-model="form.legacy_sftp_password"
                  class="default-input"
                  required
                  type="password"
                >
              </div>

              <div class="col-span-12 default-field">
                <label
                  class="default-label"
                  for="legacy_storage_folder"
                >
                  {{ $t("app.columns.backup") }}
                  {{ $t("app.columns.folder") }}
                </label>
                <input
                  id="legacy_storage_folder"
                  v-model="form.legacy_storage_folder"
                  class="default-input"
                  required
                  type="text"
                >
              </div>
            </div>
          </template>

          <template #email>
            <div class="grid grid-cols-12 gap-6 px-4 py-5">
              <div class="col-span-6 mt-2 default-field">
                <label
                  class="default-label"
                  for="smtp_host"
                >
                  {{ $t("app.columns.smtp") }}
                  {{ $t("app.columns.host") }}
                </label>
                <input
                  id="smtp_host"
                  v-model="form.smtp_host"
                  class="default-input"
                  required
                  type="text"
                >
              </div>

              <div class="col-span-6 mt-2 default-field">
                <label
                  class="default-label"
                  for="smtp_port"
                >
                  {{ $t("app.columns.smtp") }}
                  {{ $t("app.columns.port") }}
                </label>
                <input
                  id="smtp_port"
                  v-model="form.smtp_port"
                  class="default-input"
                  required
                  type="number"
                >
              </div>
              <div class="col-span-12 default-field">
                <input
                  id="smtp_is_use_auth"
                  v-model="form.smtp_is_use_auth"
                  class="default-checkbox"
                  type="checkbox"
                >
                <label
                  class="default-label"
                  for="smtp_is_use_auth"
                >
                  Require authentication?
                </label>
              </div>
              <template v-if="form.smtp_is_use_auth">
                <div class="col-span-6 default-field">
                  <label
                    class="default-label"
                    for="smtp_email"
                  >
                    {{ $t("app.columns.smtp") }}
                    {{ $t("app.columns.email") }}
                  </label>
                  <input
                    id="smtp_email"
                    v-model="form.smtp_email"
                    class="default-input"
                    required
                    type="text"
                  >
                </div>

                <div class="col-span-6 default-field">
                  <label
                    class="default-label"
                    for="smtp_password"
                  >
                    {{ $t("app.columns.smtp") }}
                    {{ $t("app.columns.password") }}
                  </label>
                  <input
                    id="smtp_password"
                    v-model="form.smtp_password"
                    class="default-input"
                    required
                    type="password"
                  >
                </div>
              </template>
              <div class="col-span-6 default-field">
                <input
                  id="test_email"
                  v-model="testEmailParams.email"
                  class="default-input mr-6"
                  placeholder="Email"
                  required
                  type="text"
                >
                <button
                  class="info-button"
                  :disabled="testEmailLoading"
                  type="submit"
                  @click.prevent="testEmail"
                >
                  <Loading v-if="testEmailLoading" />
                  Test
                </button>
              </div>
            </div>
          </template>
        </DefaultTabs>
        <div class="create-edit-submit-container">
          <button
            class="warning-button mr-4"
            type="reset"
            @click.prevent="reset"
          >
            {{ $t("app.reset") }}
          </button>
          <button
            class="success-button"
            :disabled="saveLoading"
            type="submit"
            @click.prevent="submit"
          >
            <Loading v-if="saveLoading" />
            {{ $t("app.save") }}
          </button>
        </div>
      </div>
    </template>
  </DefaultCreateEdit>
</template>

<script setup lang="ts">
import { onMounted, computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import VueDatepicker from '@vuepic/vue-datepicker'
import {
  get as getSettings,
  save as saveSettings,
  testEmail as testEmailSetting
} from '@/api/setting'
import { useForm } from '@/composables/use-form'
import { useNotify } from '@/composables/use-notify'
import { FormSetting } from '@/typings/form-setting'

const store = useStore()

const formSettings = [
  {
    key: 'username',
    label: 'Username',
    isRequired: true
  },
  {
    key: 'email',
    label: 'Email',
    isRequired: true
  },
  {
    key: 'password',
    label: 'Password',
    isRequired: true
  },
  {
    key: 'confirm_password',
    label: 'Confirm Password',
    isRequired: true
  },
  {
    key: 'role',
    label: 'Role',
    isRequired: true
  }
] as FormSetting[]

const { form } = useForm(formSettings)
const { notify } = useNotify('setting')

const initialState = reactive({})
const formLoading = ref(false)
const saveLoading = ref(false)

const tabOption = ref('scheduler')

const firstBackupTime = computed({
  get () {
    if (form.first_backup_time) {
      const firstBackupTimeStrs = form.first_backup_time.split(':')
      return {
        hours: firstBackupTimeStrs[0],
        minutes: firstBackupTimeStrs[1]
      }
    }
    return null
  },
  set (value) {
    form.first_backup_time = `${value.hours.toString().padStart(2, '0')}:${value.minutes.toString().padStart(2, '0')}`
  }
})

const secondBackupTime = computed({
  get () {
    if (form.second_backup_time) {
      const secondBackupTimeStrs = form.second_backup_time.split(':')
      return {
        hours: secondBackupTimeStrs[0],
        minutes: secondBackupTimeStrs[1]
      }
    }
    return null
  },
  set (value) {
    form.second_backup_time = `${value.hours.toString().padStart(2, '0')}:${value.minutes.toString().padStart(2, '0')}`
  }
})

const initPage = () => {
  formLoading.value = true
  getSettings()
    .then(() => {
      const settings = store.getters['setting/settings']
      Object.assign(initialState, settings)
      Object.assign(form, initialState)
    })
    .catch(() => {
      notify('loaded', 'danger')
    })
    .finally(() => {
      formLoading.value = false
    })
}

const reset = () => {
  Object.assign(form, initialState)
}

const submit = async () => {
  saveLoading.value = true

  saveSettings({ ...form })
    .then(() => {
      notify('save')
    })
    .catch(() => {
      notify('save', 'danger')
    })
    .finally(() => {
      saveLoading.value = false
    })
}

const onChangeOption = (option) => {
  tabOption.value = option
}

onMounted(() => {
  initPage()
})

const testEmailParams = reactive({
  email: null
})
const testEmailLoading = ref(false)
const testEmail = () => {
  testEmailLoading.value = true
  testEmailSetting(testEmailParams.email)
    .then(() => {
      notify('email')
    })
    .catch(() => {
      notify('email', 'danger')
    })
    .finally(() => {
      testEmailLoading.value = false
    })
}
</script>
