<template>
  <main>
  <section class="heroSection md:px-10  px-0 py-10 flex flex-col md:flex-row items-center gap-5 ">
    <div class="md:w-1/2 w-full px-5">
      <div class="bg-[#9318FA] px-3 text-white w-50 rounded mb-5">Available For Projects</div>
      <h1 class="text-3xl/10 md:text-5xl/14">Hi, I'm <span class="text-[#9318FA]">Graciecreatives</span> <br>
        A Frontend Developer & A Blockchain Developer
      </h1>
      <p class="text-base mt-5 mb-5 text-justify">I build seamless, scalable, and user-focused digital experiences that merge creativity with functionality. From intuitive web apps to decentralized solutions, I love turning ideas into innovation through clean, efficient code.</p>
      <router-link to="" class="md:me-5 me-3 viewWorks text-white p-2 md:px-4 px-2 rounded">View My Works</router-link>
      <router-link to="" class="md:me-5 me-3 contactMe text-black p-2 md:px-4 px-2 rounded">Contact Me</router-link>
    </div>

    <!-- RIGHT SIDE -->
    <div class="md:w-1/2 w-full flex justify-center items-center">
      <div class="circle-container flex justify-center items-center">
        <!-- Center image -->
        <img src="/src/assets/Images/Meee.png" alt="" class="rounded-full md:w-[75%] w-[70%] z-[2] border-5 border-[#9318FA]  relative" />

        <!-- Orbiting logos -->
        <img src="/src/assets/tailwingLogo.png" alt="" class="w-15 bg-black rounded-full logoimg" />
        <img src="/src/assets/nodeLogo.png" alt="" class="w-15 bg-black rounded-full logoimg" />
        <img src="/src/assets/materialUi_Logo.png" alt="" class="w-15 bg-black rounded-full logoimg" />
        <img src="/src/assets/javascriptLogo.png" alt="" class="w-15 bg-white border-2 border-[#9318FA] rounded-full logoimg" />
        <img src="/src/assets/gitLogo.png" alt="" class="w-15 bg-white border-2 border-[#9318FA] rounded-full logoimg" />
        <img src="/src/assets/githubLogo.png" alt="" class="w-15 bg-[#9318FA] rounded-full logoimg" />

      </div>
    </div>
  </section>
  </main>
</template>

<script setup>

</script>
<style scoped>
.heroSection {
  background: radial-gradient(circle, #F8F8FF 0%, #DECDF7 100%);
}

.viewWorks {
  background: linear-gradient(90deg, #9318FA 0%, #4F3AF6 50%, #00ABDF 100%);
}

.contactMe {
  border: 1px solid #9318FA;
  background: white;
}

.contactMe:hover {
  background: #9418fa28;
  transition: 0.5s;
}

/* --- MAIN ORBIT CONTAINER --- */
.circle-container {
  position: relative;
  width: clamp(280px, 40vw, 520px);
  height: clamp(280px, 40vw, 520px);
}

/* Center image positioning */
.circle-container > img:first-child {
  position: relative;
  z-index: 2;
}

/* Orbiting logos */
.logoimg {
  position: absolute;
  top: 45%;
  left: 40%;
  animation: rotate 12s linear infinite;
  transform-origin: center;
}

/* 🌍 Large orbit radius */
@keyframes rotate {
  0% {
    transform: rotate(0deg) translateX(250px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(250px) rotate(-360deg);
  }
}

/* --- RESPONSIVENESS --- */

/* Tablets */
@media (max-width: 1024px) {
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translateX(180px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(180px) rotate(-360deg);
    }
  }
}

/* Mobiles */
@media (max-width: 640px) {
  .circle-container {
    width: 280px;
    height: 280px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translateX(130px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(130px) rotate(-360deg);
    }
  }

  .logoimg {
    width: 2rem;
  }
}

/* Spread logos evenly */
.logoimg:nth-child(2) { animation-delay: 0s; }
.logoimg:nth-child(3) { animation-delay: 2s; }
.logoimg:nth-child(4) { animation-delay: 4s; }
.logoimg:nth-child(5) { animation-delay: 6s; }
.logoimg:nth-child(6) { animation-delay: 8s; }
.logoimg:nth-child(7) { animation-delay: 10s; }
</style>
