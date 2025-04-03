<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-transparent text-white py-10 border-t-4 border-white font-primario" data-aos="fade-down">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between lg:justify-center">

      <!-- Sección de texto -->
      <div class="text-center md:text-left mb-6 md:mb-0">
        <h2 class="text-3xl font-bold mb-2 lg:text-center">¡Conecta conmigo!</h2>
        <p class="text-lg text-white max-w-md lg:text-center">
          Sígueme en mis redes sociales para estar al tanto de mis proyectos y novedades.
        </p>
      </div>

      <!-- Íconos de redes sociales -->
      <div class="flex gap-6 lg:hidden">
        <a href="https://github.com/tuusuario" target="_blank" class="animate-wiggle animate-infinite hover:animate-jump hover:animate-duration-1000">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.95.57.1.78-.25.78-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.73.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.12-.12-.3-.52-1.5.12-3.12 0 0 1-.32 3.3 1.2a11.4 11.4 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.3-1.53 3.3-1.2 3.3-1.2.65 1.62.25 2.82.12 3.12.75.82 1.2 1.86 1.2 3.12 0 4.44-2.68 5.4-5.23 5.7.42.36.78 1.07.78 2.16 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
        </a>

        <a href="https://linkedin.com/in/tuusuario" target="_blank" class="animate-wiggle animate-infinite hover:animate-jump hover:animate-duration-1000">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.041-1.851-3.041-1.853 0-2.136 1.445-2.136 2.941v5.669H9.354V9h3.414v1.561h.049c.477-.902 1.637-1.851 3.372-1.851 3.605 0 4.271 2.371 4.271 5.455v6.287zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.206 24 24 23.23 24 22.277V1.723C24 .77 23.206 0 22.225 0z" />
          </svg>
        </a>

        <a href="https://twitter.com/tuusuario" target="_blank" class="animate-wiggle animate-infinite hover:animate-jump hover:animate-duration-1000">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 512 512">
            <path
              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
          </svg>
        </a>
      </div>

    </div>
  </footer>

</template>
