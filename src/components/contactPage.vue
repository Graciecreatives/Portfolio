<template>
  <section class="py-20 px-6 sm:px-10 md:px-20 bg-gray-50 relative overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute -top-20 -right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
    <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6 tracking-tight">GET IN TOUCH</h2>
        <p class="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed font-light">
          Have a project in mind or just want to chat? I’m always open to new ideas and collaborations. Let’s create something amazing together.
        </p>
        <div class="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mx-auto mt-6"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <!-- Contact Information & Map -->
        <div class="space-y-8">
          <!-- Info Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-right">
            <!-- Email -->
            <a href="mailto:graceegbewale@gmail.com" class="group flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-1">Email</h3>
              <p class="text-gray-500 text-sm">graceegbewale@gmail.com</p>
            </a>

            <!-- Phone -->
            <a href="tel:+2348125911966" class="group flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-800 mb-1">Phone</h3>
              <p class="text-gray-500 text-sm">+234 812 591 1966</p>
            </a>
          </div>

          <!-- Socials -->
          <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-xl transition-all duration-300" data-aos="fade-up">
             <div class="flex items-center gap-3">
               <div class="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
               </div>
               <span class="font-bold text-gray-800">Follow Me</span>
             </div>
             
             <div class="flex gap-3">
                <!-- GitHub -->
                <a href="https://github.com/Graciecreatives" target="_blank" class="p-2.5 bg-gray-50 rounded-full hover:bg-[#9318FA] hover:text-white text-gray-600 transition-all border border-gray-100 group">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.656 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <!-- LinkedIn -->
                <a href="https://linkedin.com/in/graciecreatives" target="_blank" class="p-2.5 bg-gray-50 rounded-full hover:bg-[#0077b5] hover:text-white text-gray-600 transition-all border border-gray-100 group">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.767s.784-1.767 1.75-1.767 1.75.792 1.75 1.767-.784 1.767-1.75 1.767zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.865 0-2.151 1.454-2.151 2.958v5.708h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.035 0 3.596 1.998 3.596 4.592v5.603z"/></svg>
                </a>
                <!-- Twitter -->
                <a href="https://twitter.com/gr32523" target="_blank" class="p-2.5 bg-gray-50 rounded-full hover:bg-[#1DA1F2] hover:text-white text-gray-600 transition-all border border-gray-100 group">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.142-5.144-.423.724-.666 1.562-.666 2.457 0 1.695.863 3.191 2.175 4.069-.802-.026-1.556-.246-2.214-.614v.062c0 2.37 1.684 4.348 3.918 4.794-.41.111-.843.171-1.287.171-.314 0-.615-.03-.911-.086.616 1.926 2.407 3.327 4.526 3.363-1.66 1.3-3.757 2.074-6.034 2.074-.392 0-.779-.023-1.161-.068 2.15 1.379 4.708 2.184 7.455 2.184 8.944 0 13.835-7.406 13.835-13.835 0-.211-.005-.423-.014-.634.951-.687 1.777-1.548 2.433-2.529z"/></svg>
                </a>
                <!-- Instagram -->
                <a href="https://instagram.com/iamgraciecreatives" target="_blank" class="p-2.5 bg-gray-50 rounded-full hover:bg-[#E1306C] hover:text-white text-gray-600 transition-all border border-gray-100 group">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07s3.667-.012 4.947-.072c1.579-.072 2.983-.34 4.073-1.429 1.09-1.09 1.357-2.494 1.429-4.073.06-1.28.072-1.69.072-4.947s-.012-3.667-.072-4.947c-.072-1.579-.34-2.983-1.429-4.073-1.09-1.09-2.494-1.357-4.073-1.429-1.28-.06-1.69-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
                </a>
                <!-- WhatsApp -->
                <a href="https://wa.me/message/OHWB5TWVL35DH1" target="_blank" class="p-2.5 bg-gray-50 rounded-full hover:bg-[#25D366] hover:text-white text-gray-600 transition-all border border-gray-100 group">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.297.347-.497.116-.2.058-.372-.03-.52-.088-.149-.78-1.905-1.09-2.612-.301-.686-.605-.613-.827-.616h-.7c-.225 0-.616.088-.94.444-.324.354-1.238 1.21-1.238 2.951 0 1.742 1.268 3.425 1.445 3.673.176.249 2.5 3.82 6.059 5.356 2.455 1.059 3.054.912 3.606.819.895-.151 1.758-.72 2.006-1.413.248-.694.019-1.217-.074-1.364-.094-.148-.291-.235-.588-.384M12 21a9 9 0 1 0-.001-18.001A9 9 0 0 0 12 21m0-20a11 11 0 0 1 11 11c0 2.63-.927 5.07-2.492 7.02l2.316 6.843-7.143-2.224A10.957 10.957 0 0 1 12 23c-6.07 0-11-4.93-11-11S4.93 1 12 1"/></svg>
                </a>
             </div>
          </div>

          <!-- Location Map -->
          <div class="bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-white/60 shadow-sm h-64 sm:h-80 overflow-hidden relative group" data-aos="fade-up">
             <div class="absolute inset-0 bg-transparent z-10 pointer-events-none group-hover:bg-black/5 transition-colors"></div>
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8772721288074!2d3.9227149735062086!3d6.78478662007492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039688d1f317175%3A0xb9d73d74457473b2!2sBsf%20tasued!5e0!3m2!1sen!2sch!4v1762261691954!5m2!1sen!2sch"
              class="w-full h-full rounded-xl"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden border border-gray-100" data-aos="fade-left">
           <div class="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>

          <form class="space-y-6 relative z-10">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 ml-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                class="w-full px-6 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none text-gray-800 placeholder-gray-400 transition-all font-medium"
              />
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 ml-1">Your Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                class="w-full px-6 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none text-gray-800 placeholder-gray-400 transition-all font-medium"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 ml-1">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                class="w-full px-6 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-purple-500/50 outline-none text-gray-800 placeholder-gray-400 transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
