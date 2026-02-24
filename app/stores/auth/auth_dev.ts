import { defineStore } from 'pinia'
import type { AuthResponse, LoginCredentials } from '~/types/auth'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const isAuthenticated = computed(() => !!token.value)
  
  async function login(credentials: LoginCredentials) {
    const { data, error } = await useDevAuthApi<AuthResponse>('/auth/login', {
      method: 'POST',
      body: credentials
    })

    if (error.value) {
      throw new Error(error.value.data?.message || 'Login error')
    }

    if (data.value) {
      token.value = data.value.token
    }
  }
  
  function logout() {
    token.value = null
    navigateTo('/login')
  }

  return {
    token,
    isAuthenticated,
    login,
    logout
  }
}, 
{
  persist: true
})