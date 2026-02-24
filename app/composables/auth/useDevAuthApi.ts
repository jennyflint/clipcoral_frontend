import type { UseFetchOptions } from 'nuxt/app'

export function useDevAuthApi<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    onRequest() {
    //onRequest({ options }) {
      // const token = useCookie('auth_token')
      // if (token.value) {
      //   options.headers.set('Authorization', `Bearer ${token.value}`)
      // }
    }
  }
  return useFetch(url, {
    ...defaults,
    ...options,
  })
}