<template>
  <footer class="bg-gray-900 text-white py-16 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#2e054e] to-black opacity-95"></div>
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
    <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10" data-aos="fade-up">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-12 mb-12">
        
        <!-- Brand & Socials -->
        <div class="md:col-span-5 space-y-8">
          <div>
            <h1 class="text-3xl font-black tracking-tight text-white mb-4">Gracie Creatives<span class="text-[#9318FA]">.</span></h1>
            <p class="text-gray-400 max-w-sm leading-relaxed font-light">
              Building digital products, brands, and experiences. I combine technical expertise with design thinking to create solutions that matter.
            </p>
          </div>

          <!-- Social Icons -->
          <div class="flex gap-4">
            <a href="https://github.com/Graciecreatives" target="_blank" class="p-3 bg-white/5 rounded-full hover:bg-[#9318FA] hover:text-white transition-all border border-white/10 group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.656 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/graciecreatives" target="_blank" class="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-all border border-white/10 group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.767s.784-1.767 1.75-1.767 1.75.792 1.75 1.767-.784 1.767-1.75 1.767zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.865 0-2.151 1.454-2.151 2.958v5.708h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.035 0 3.596 1.998 3.596 4.592v5.603z"/>
              </svg>
            </a>
            <a href="https://twitter.com/gr32523" target="_blank" class="p-3 bg-white/5 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all border border-white/10 group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.142-5.144-.423.724-.666 1.562-.666 2.457 0 1.695.863 3.191 2.175 4.069-.802-.026-1.556-.246-2.214-.614v.062c0 2.37 1.684 4.348 3.918 4.794-.41.111-.843.171-1.287.171-.314 0-.615-.03-.911-.086.616 1.926 2.407 3.327 4.526 3.363-1.66 1.3-3.757 2.074-6.034 2.074-.392 0-.779-.023-1.161-.068 2.15 1.379 4.708 2.184 7.455 2.184 8.944 0 13.835-7.406 13.835-13.835 0-.211-.005-.423-.014-.634.951-.687 1.777-1.548 2.433-2.529z"/>
              </svg>
            </a>
            <a href="https://instagram.com/iamgraciecreatives" target="_blank" class="p-3 bg-white/5 rounded-full hover:bg-[#E1306C] hover:text-white transition-all border border-white/10 group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07s3.667-.012 4.947-.072c1.579-.072 2.983-.34 4.073-1.429 1.09-1.09 1.357-2.494 1.429-4.073.06-1.28.072-1.69.072-4.947s-.012-3.667-.072-4.947c-.072-1.579-.34-2.983-1.429-4.073-1.09-1.09-2.494-1.357-4.073-1.429-1.28-.06-1.69-.072-4.947-.072z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
            <!-- WhatsApp -->
            <a href="https://wa.me/message/OHWB5TWVL35DH1" target="_blank" class="p-3 bg-white/5 rounded-full hover:bg-[#25D366] hover:text-white transition-all border border-white/10 group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.297.347-.497.116-.2.058-.372-.03-.52-.088-.149-.78-1.905-1.09-2.612-.301-.686-.605-.613-.827-.616h-.7c-.225 0-.616.088-.94.444-.324.354-1.238 1.21-1.238 2.951 0 1.742 1.268 3.425 1.445 3.673.176.249 2.5 3.82 6.059 5.356 2.455 1.059 3.054.912 3.606.819.895-.151 1.758-.72 2.006-1.413.248-.694.019-1.217-.074-1.364-.094-.148-.291-.235-.588-.384M12 21a9 9 0 1 0-.001-18.001A9 9 0 0 0 12 21m0-20a11 11 0 0 1 11 11c0 2.63-.927 5.07-2.492 7.02l2.316 6.843-7.143-2.224A10.957 10.957 0 0 1 12 23c-6.07 0-11-4.93-11-11S4.93 1 12 1"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Column -->
        <div class="md:col-span-3">
          <h2 class="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Navigation</h2>
          <ul class="space-y-4">
            <li><a href="#about" class="text-gray-400 hover:text-[#9318FA] hover:pl-2 transition-all block">About Me</a></li>
            <li><a href="#projects" class="text-gray-400 hover:text-[#9318FA] hover:pl-2 transition-all block">Projects</a></li>
            <li><a href="#experience" class="text-gray-400 hover:text-[#9318FA] hover:pl-2 transition-all block">Experience</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-[#9318FA] hover:pl-2 transition-all block">Contact</a></li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div class="md:col-span-4">
          <h2 class="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Stay Updated</h2>
          <p class="text-gray-400 mb-6 text-sm">
            Subscribe to my newsletter for the latest project updates and tech insights.
          </p>
          <form class="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#9318FA] focus:border-transparent outline-none transition-all"
            >
            <button class="bg-[#9318FA] hover:bg-[#7a12d4] text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-purple-900/20">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div class="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-white/5 pt-8">
        <p>&copy; 2025 Gracie Creatives. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* No extra styles needed */
</style>
