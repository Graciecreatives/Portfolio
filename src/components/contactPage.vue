<template>
  <section class="py-16 px-5 md:px-20 bg-gray-50">
    <h2 class="text-4xl font-bold text-center mb-6 text-[#9318FA]">Contact Me</h2>
    <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      Got a project, idea, or just want to say hello? Drop me a message through the form or reach me via the contact details below—I’d love to hear from you
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <!-- Contact Info -->
      <div class="flex flex-col space-y-6">
        <!-- Email -->
        <div class="flex items-center gap-4 p-5 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#a138fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:1;"><path  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><path d="m2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8"/></svg>
          <div>
            <p class="font-semibold text-gray-800">Email</p>
            <p class="text-gray-600">graceegbewale@gmail.com</p>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex items-center gap-4 p-5 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#8c1ae5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:1;"><path d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.2 29.2 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.46.46 0 0 1-.553.088a14.56 14.56 0 0 1-5.36-5.367a.46.46 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465"/></svg>
          <div>
            <p class="font-semibold text-gray-800">Phone</p>
            <p class="text-gray-600">+234 812 591 1966</p>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center gap-4 p-5 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#9122ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:1;"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"/></svg>
          <div>
            <p class="font-semibold text-gray-800">Location</p>
            <p class="text-gray-600">Ogun State, Nigeria</p>
          </div>
        </div>

        <!-- Map -->
        <div class="rounded-lg overflow-hidden shadow-lg flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8772721288074!2d3.9227149735062086!3d6.78478662007492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039688d1f317175%3A0xb9d73d74457473b2!2sBsf%20tasued!5e0!3m2!1sen!2sch!4v1762261691954!5m2!1sen!2sch"
            class="w-full h-64 md:h-full border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Contact Form -->
      <form class="flex flex-col justify-between space-y-6 p-8 rounded-lg shadow-lg bg-white">
        <div class="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            class="w-full p-4 rounded border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="w-full p-4 rounded border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-800"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            class="w-full p-4 rounded border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none text-gray-800 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-4 rounded text-white font-semibold hover:from-purple-600 hover:to-purple-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
