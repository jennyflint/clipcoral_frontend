<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">

      <div class="flex flex-col h-full justify-center max-w-md mx-auto">

        <div class="text-center mb-8">
          <div
            class="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <ion-icon :icon="logInOutline" class="text-4xl text-white" />
          </div>
          <h1 class="text-3xl font-bold text-gray-900">Hello Dev!</h1>
          <p class="text-gray-500 mt-2">Enter your credentials to continue</p>
        </div>

        <div class="space-y-4">

          <div
            class="bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <ion-input
              v-model="email" label="Email" label-placement="floating" type="email"
              placeholder="name@example.com" class="custom-input"/>
          </div>

          <div
            class="bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <ion-input
              v-model="password" label="Password" label-placement="floating" type="password"
              class="custom-input"/>
          </div>

          <p v-if="errorMessage" class="text-red-500 text-sm text-center font-medium animate-pulse">
            {{ errorMessage }}
          </p>

          <ion-button expand="block" class="h-12 mt-6 font-bold rounded-xl" :disabled="isLoading" @click="handleLogin">
            <span v-if="!isLoading">Login</span>
            <ion-spinner v-else name="crescent"/>
          </ion-button>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import {  logInOutline } from 'ionicons/icons'


const authStore = useAuthStore()
const router = useRouter()

const email = ref()
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''
  
  if (!email.value || !password.value) {
    errorMessage.value = 'Fill all fields'
    return
  }

  try {
    isLoading.value = true
    await authStore.login({
      email: email.value,
      password: password.value
    })
    router.replace('/')

  } catch (e: unknown) {

    console.error(e)
    errorMessage.value = (e as Error).message || 'Invalid login or password'
  } finally {
    isLoading.value = false
  }
}
</script>
<style scoped>
ion-input.custom-input {
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 10px;
  --padding-bottom: 10px;
  --background: transparent;
}
</style>