<template>
  <div class="overflow-hidden whitespace-nowrap py-6 bg-gray-50 border-t border-b border-gray-200">
    <div class="flex animate-marquee">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="flex items-center space-x-3 mx-8"
      >
        <img
          :src="tech.img"
          :alt="tech.name + ' logo'"
          class="w-10 h-10 object-contain"
        />
        <span class="text-gray-700 font-medium">{{ tech.name }}</span>
      </div>
      <!-- Duplicate for seamless loop -->
      <div
        v-for="tech in technologies"
        :key="'dup-' + tech.name"
        class="flex items-center space-x-3 mx-8"
      >
        <img
          :src="tech.img"
          :alt="tech.name + ' logo'"
          class="w-10 h-10 object-contain"
        />
        <span class="text-gray-700 font-medium">{{ tech.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
  { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Firebase", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Vue.js", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  { name: "React.js", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "MongoDB", img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { name: "Express.js", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "Solidity", img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" },
  { name: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { name: "GitHub", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
];

</script>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  animation: marquee 30s linear infinite;
}
</style>
