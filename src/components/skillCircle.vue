<template>
  <div class="flex flex-col items-center">
    <svg class="w-20 h-20">
      <circle
        class="text-gray-200"
        stroke-width="6"
        stroke="currentColor"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
      />
      <circle
        :stroke="color"
        class="transition-all duration-1000"
        stroke-width="6"
        stroke-dasharray="188.4"
        :stroke-dashoffset="188.4 - (188.4 * percentage) / 100"
        stroke-linecap="round"
        fill="transparent"
        r="30"
        cx="40"
        cy="40"
      />
      <text x="50%" y="50%" text-anchor="middle" dy="7" class="text-lg font-semibold fill-current" :class="textColor">
        {{ percentage }}%
      </text>
    </svg>
    <span class="mt-2 text-gray-700 font-medium">{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  percentage: Number,
  color: { type: String, default: '#9318FA' }, // primary accent
  textColor: { type: String, default: 'text-gray-900' }
})
</script>
