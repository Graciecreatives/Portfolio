<script setup>
import { computed, reactive, ref } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'light',
  },
})

const isSending = ref(false)
const statusMessage = ref('')
const statusType = ref('')

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const form = reactive({
  from_name: '',
  from_email: '',
  phone: '',
  project_type: '',
  budget: '',
  message: '',
})

const isEmailConfigured = computed(() => {
  return Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey)
})

const isDark = computed(() => props.theme === 'dark')

const resetForm = () => {
  form.from_name = ''
  form.from_email = ''
  form.phone = ''
  form.project_type = ''
  form.budget = ''
  form.message = ''
}

const sendMessage = async () => {
  statusMessage.value = ''
  statusType.value = ''

  if (!isEmailConfigured.value) {
    statusType.value = 'error'
    statusMessage.value = 'Email service is not configured yet. Add your EmailJS values to .env.'
    return
  }

  isSending.value = true

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailConfig.serviceId,
        template_id: emailConfig.templateId,
        user_id: emailConfig.publicKey,
        template_params: {
          from_name: form.from_name,
          from_email: form.from_email,
          reply_to: form.from_email,
          phone: form.phone,
          project_type: form.project_type,
          budget: form.budget,
          message: form.message,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(errorText || `EmailJS request failed with status ${response.status}`)
    }

    statusType.value = 'success'
    statusMessage.value = 'Message sent successfully. I will reply as soon as possible.'
    resetForm()
  } catch (error) {
    statusType.value = 'error'
    statusMessage.value = error.message.includes('Invalid grant')
      ? 'Email service needs to be reconnected. Please email me directly for now.'
      : 'Message could not be sent. Please try again or email me directly.'
    console.error('EmailJS send failed:', error)
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <div
    class="rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden border"
    :class="isDark ? 'bg-white/[0.08] border-white/[0.12] shadow-black/30 backdrop-blur-xl' : 'bg-white border-gray-100'"
    data-aos="fade-left"
  >
    <div
      class="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"
      :class="isDark ? 'bg-purple-500/20' : 'bg-purple-100'"
    ></div>

    <form class="space-y-6 relative z-10" @submit.prevent="sendMessage">
      <div class="space-y-2">
        <label for="from_name" class="text-sm font-bold ml-1" :class="isDark ? 'text-violet-100' : 'text-gray-700'">Your Name</label>
        <input
          id="from_name"
          v-model="form.from_name"
          type="text"
          name="from_name"
          placeholder="Precious Grace"
          autocomplete="name"
          required
          class="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none transition-all font-medium"
          :class="isDark ? 'bg-white/10 text-white placeholder-violet-200/45' : 'bg-gray-50 text-gray-800 placeholder-gray-400'"
        />
      </div>

      <div class="space-y-2">
        <label for="from_email" class="text-sm font-bold ml-1" :class="isDark ? 'text-violet-100' : 'text-gray-700'">Your Email</label>
        <input
          id="from_email"
          v-model="form.from_email"
          type="email"
          name="from_email"
          placeholder="you@example.com"
          autocomplete="email"
          required
          class="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none transition-all font-medium"
          :class="isDark ? 'bg-white/10 text-white placeholder-violet-200/45' : 'bg-gray-50 text-gray-800 placeholder-gray-400'"
        />
      </div>

      <input type="hidden" name="reply_to" :value="form.from_email">

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label for="phone" class="text-sm font-bold ml-1" :class="isDark ? 'text-violet-100' : 'text-gray-700'">Phone</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            name="phone"
            placeholder="+234 800 000 0000"
            autocomplete="tel"
            class="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none transition-all font-medium"
            :class="isDark ? 'bg-white/10 text-white placeholder-violet-200/45' : 'bg-gray-50 text-gray-800 placeholder-gray-400'"
          />
        </div>

        <div class="space-y-2">
          <label for="project_type" class="text-sm font-bold ml-1" :class="isDark ? 'text-violet-100' : 'text-gray-700'">Project Type</label>
          <select
            id="project_type"
            v-model="form.project_type"
            name="project_type"
            required
            :data-theme="theme"
            class="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none transition-all font-medium"
            :class="isDark ? 'bg-white/10 text-white' : 'bg-gray-50 text-gray-800'"
          >
            <option value="" disabled>Select one</option>
            <option value="Website">Website</option>
            <option value="Web Application">Web Application</option>
            <option value="Dashboard">Dashboard</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div class="space-y-2">
        <label for="budget" class="text-sm font-bold ml-1" :class="isDark ? 'text-violet-100' : 'text-gray-700'">Budget Range</label>
        <select
          id="budget"
          v-model="form.budget"
          name="budget"
          :data-theme="theme"
          class="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none transition-all font-medium"
          :class="isDark ? 'bg-white/10 text-white' : 'bg-gray-50 text-gray-800'"
        >
          <option value="">Not sure yet</option>
          <option value="Below $500">Below $500</option>
          <option value="$500 - $1,000">$500 - $1,000</option>
          <option value="$1,000 - $3,000">$1,000 - $3,000</option>
          <option value="$3,000+">$3,000+</option>
        </select>
      </div>

      <div class="space-y-2">
        <label for="message" class="text-sm font-bold ml-1" :class="isDark ? 'text-violet-100' : 'text-gray-700'">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          rows="5"
          placeholder="Tell me about your project..."
          required
          class="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none transition-all font-medium resize-none"
          :class="isDark ? 'bg-white/10 text-white placeholder-violet-200/45' : 'bg-gray-50 text-gray-800 placeholder-gray-400'"
        ></textarea>
      </div>

      <p
        v-if="statusMessage"
        class="rounded-xl px-4 py-3 text-sm font-semibold"
        :class="statusType === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'"
      >
        {{ statusMessage }}
      </p>

      <button
        type="submit"
        :disabled="isSending"
        class="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        <span>{{ isSending ? 'Sending...' : 'Send Message' }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped>
select[data-theme="dark"] {
  color-scheme: dark;
}

select[data-theme="dark"] option {
  background: #13001f;
  color: #ffffff;
}
</style>
