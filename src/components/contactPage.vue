<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <section class="contactPageSection">
    <div class="contactGlow contactGlowOne"></div>
    <div class="contactGlow contactGlowTwo"></div>

    <div class="contactInner">
      
      <!-- Header -->
      <div class="contactHeading" data-aos="fade-down">
        <span>Contact</span>
        <h2>GET IN TOUCH</h2>
        <p>
          Have a project in mind or just want to chat? I’m always open to new ideas and collaborations. Let’s create something amazing together.
        </p>
      </div>

      <div class="contactGrid">
        
        <!-- Contact Information & Map -->
        <div class="contactDetails">
          <!-- Info Cards -->
          <div class="infoCards" data-aos="fade-right">
            <!-- Email -->
            <a href="mailto:graceegbewale@gmail.com" class="infoCard">
              <div class="infoIcon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Email</h3>
              <p>graceegbewale@gmail.com</p>
            </a>

            <!-- Phone -->
            <a href="tel:+2348125911966" class="infoCard">
              <div class="infoIcon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3>Phone</h3>
              <p>+234 812 591 1966</p>
            </a>
          </div>

          <!-- Socials -->
          <div class="socialPanel" data-aos="fade-up">
             <div class="socialTitle">
               <div class="smallIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
               </div>
               <span>Follow Me</span>
             </div>
             
             <div class="socialLinks">
                <!-- GitHub -->
                <a href="https://github.com/Graciecreatives" target="_blank">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.656 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <!-- LinkedIn -->
                <a href="https://linkedin.com/in/graciecreatives" target="_blank">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.767s.784-1.767 1.75-1.767 1.75.792 1.75 1.767-.784 1.767-1.75 1.767zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.865 0-2.151 1.454-2.151 2.958v5.708h-3v-10h2.879v1.367h.041c.401-.76 1.379-1.562 2.838-1.562 3.035 0 3.596 1.998 3.596 4.592v5.603z"/></svg>
                </a>
                <!-- Twitter -->
                <a href="https://twitter.com/gr32523" target="_blank">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.142-5.144-.423.724-.666 1.562-.666 2.457 0 1.695.863 3.191 2.175 4.069-.802-.026-1.556-.246-2.214-.614v.062c0 2.37 1.684 4.348 3.918 4.794-.41.111-.843.171-1.287.171-.314 0-.615-.03-.911-.086.616 1.926 2.407 3.327 4.526 3.363-1.66 1.3-3.757 2.074-6.034 2.074-.392 0-.779-.023-1.161-.068 2.15 1.379 4.708 2.184 7.455 2.184 8.944 0 13.835-7.406 13.835-13.835 0-.211-.005-.423-.014-.634.951-.687 1.777-1.548 2.433-2.529z"/></svg>
                </a>
                <!-- Instagram -->
                <a href="https://instagram.com/iamgraciecreatives" target="_blank">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07s3.667-.012 4.947-.072c1.579-.072 2.983-.34 4.073-1.429 1.09-1.09 1.357-2.494 1.429-4.073.06-1.28.072-1.69.072-4.947s-.012-3.667-.072-4.947c-.072-1.579-.34-2.983-1.429-4.073-1.09-1.09-2.494-1.357-4.073-1.429-1.28-.06-1.69-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
                </a>
                <!-- WhatsApp -->
                <a href="https://wa.me/message/OHWB5TWVL35DH1" target="_blank">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.297.347-.497.116-.2.058-.372-.03-.52-.088-.149-.78-1.905-1.09-2.612-.301-.686-.605-.613-.827-.616h-.7c-.225 0-.616.088-.94.444-.324.354-1.238 1.21-1.238 2.951 0 1.742 1.268 3.425 1.445 3.673.176.249 2.5 3.82 6.059 5.356 2.455 1.059 3.054.912 3.606.819.895-.151 1.758-.72 2.006-1.413.248-.694.019-1.217-.074-1.364-.094-.148-.291-.235-.588-.384M12 21a9 9 0 1 0-.001-18.001A9 9 0 0 0 12 21m0-20a11 11 0 0 1 11 11c0 2.63-.927 5.07-2.492 7.02l2.316 6.843-7.143-2.224A10.957 10.957 0 0 1 12 23c-6.07 0-11-4.93-11-11S4.93 1 12 1"/></svg>
                </a>
             </div>
          </div>

          <!-- Location Map -->
          <div class="mapPanel" data-aos="fade-up">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8772721288074!2d3.9227149735062086!3d6.78478662007492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039688d1f317175%3A0xb9d73d74457473b2!2sBsf%20tasued!5e0!3m2!1sen!2sch!4v1762261691954!5m2!1sen!2sch"
              title="Location map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <ContactForm theme="dark" />

      </div>
    </div>
  </section>
</template>

<style scoped>
.contactPageSection {
  position: relative;
  overflow: hidden;
  padding: 9rem 1.25rem 5rem;
  scroll-margin-top: 80px;
  background:
    radial-gradient(circle at 16% 18%, rgba(236, 72, 153, 0.16), transparent 25rem),
    radial-gradient(circle at 82% 25%, rgba(34, 211, 238, 0.12), transparent 24rem),
    linear-gradient(135deg, #09030f 0%, #210533 52%, #05020b 100%);
}

.contactPageSection::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.16) 1px, transparent 1px);
  background-size: 64px 64px;
  background-position: center top;
  opacity: 0.48;
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.24));
  pointer-events: none;
}

.contactGlow {
  position: absolute;
  z-index: 1;
  border-radius: 999px;
  filter: blur(76px);
  opacity: 0.28;
  pointer-events: none;
}

.contactGlowOne {
  width: 28rem;
  height: 28rem;
  right: -9rem;
  top: 8rem;
  background: #a855f7;
}

.contactGlowTwo {
  width: 24rem;
  height: 24rem;
  left: -8rem;
  bottom: 6rem;
  background: #22d3ee;
}

.contactInner {
  position: relative;
  z-index: 2;
  max-width: 72rem;
  margin: 0 auto;
}

.contactHeading {
  max-width: 48rem;
  margin: 0 auto 4rem;
  text-align: center;
}

.contactHeading span {
  display: inline-block;
  margin-bottom: 1rem;
  color: #67e8f9;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contactHeading h2 {
  color: #fff;
  font-size: clamp(2.55rem, 5vw, 5rem);
  font-weight: 950;
  line-height: 1;
}

.contactHeading p {
  margin-top: 1.25rem;
  color: rgba(237, 233, 254, 0.76);
  font-size: 1.05rem;
  line-height: 1.8;
}

.contactGrid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(20rem, 1.05fr);
  align-items: start;
  gap: 3rem;
}

.contactDetails {
  display: grid;
  gap: 1.5rem;
}

.infoCards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.infoCard,
.socialPanel,
.mapPanel {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(18px);
}

.infoCard {
  display: flex;
  min-width: 0;
  min-height: 12rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  padding: 1.4rem;
  text-align: center;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.infoCard:hover {
  transform: translateY(-4px);
  border-color: rgba(168, 85, 247, 0.52);
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.22), 0 18px 48px rgba(0, 0, 0, 0.28);
}

.infoIcon,
.smallIcon {
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(168, 85, 247, 0.16);
  color: #f0abfc;
}

.infoIcon {
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 1rem;
}

.smallIcon {
  width: 2.5rem;
  height: 2.5rem;
}

.infoIcon svg,
.smallIcon svg {
  width: 1.35rem;
  height: 1.35rem;
}

.infoCard h3 {
  color: #fff;
  font-weight: 900;
}

.infoCard p {
  margin-top: 0.25rem;
  color: rgba(237, 233, 254, 0.68);
  font-size: 0.9rem;
  overflow-wrap: anywhere;
}

.socialPanel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  border-radius: 1.25rem;
  padding: 1.25rem;
}

.socialTitle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  font-weight: 900;
}

.socialLinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.65rem;
}

.socialLinks a {
  display: grid;
  width: 2.55rem;
  height: 2.55rem;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
}

.socialLinks a:hover {
  transform: translateY(-3px);
  border-color: rgba(168, 85, 247, 0.5);
  background: rgba(168, 85, 247, 0.28);
}

.socialLinks svg {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}

.mapPanel {
  overflow: hidden;
  height: 20rem;
  border-radius: 1.25rem;
  padding: 0.45rem;
}

.mapPanel iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 1rem;
  filter: saturate(0.9) contrast(1.04);
}

@media (max-width: 900px) {
  .contactPageSection {
    padding: 8rem 1rem 4rem;
  }

  .contactGrid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 560px) {
  .infoCards {
    grid-template-columns: 1fr;
  }

  .socialPanel {
    align-items: flex-start;
    flex-direction: column;
  }

  .socialLinks {
    justify-content: flex-start;
  }
}
</style>
