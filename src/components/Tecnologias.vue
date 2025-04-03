<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Tecnologias_icono from './Tecnologias_icono.vue';
import PHP from '@/assets/PHP.SVG';
import BOOTSTRAP from '@/assets/bootstrap-4.SVG';
import GIT from '@/assets/github.SVG';
import HTML from '@/assets/html-5.SVG';
import JS from '@/assets/javascript.SVG';
import TW from '@/assets/tailwind.SVG';
import CSS from '@/assets/css-3.SVG';
import CI4 from '@/assets/codeigniter.SVG';
import MYSQL from '@/assets/mysql.SVG';
import NODE from '@/assets/nodejs.SVG';
import VUE from '@/assets/vue.SVG';
import VITE from '@/assets/vite.SVG';
import tech from '@/assets/tech_image.svg';

</script>

<template>
    <section id="tecnologias" class=" text-center pt-20 md:mt-15">
        <h2 class="text-3xl font-bold text-white pb-6" data-aos="fade-down">Tecnologías</h2>
        <div class="lg:flex lg:justify-center lg:px-20 gap-40 md:mt-5">
            <!-- Sección de la imagen (Primero en móvil, derecha en desktop) -->
            <div class="flex justify-center justify-self-center items-center max-lg:p-10  w-full lg:w-1/3" data-aos="fade-up-right">
                <img :src="tech" alt="Contacto"
                    class="w-full max-w-[400px] object-contain drop-shadow-[5px_5px_7px_rgba(255,255,255,0.7)]">
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center "
                data-aos="fade-up-left">
                <Tecnologias_icono :direccion="PHP" texto="php_image"
                    class="hover:drop-shadow-[0px_0px_5px_#777BB4] sm:hover:drop-shadow-[0px_0px_10px_#777BB4] lg:hover:drop-shadow-[0px_0px_20px_#777BB4]" />
                <Tecnologias_icono :direccion="BOOTSTRAP" texto="bootstrap_image"
                    class="hover:drop-shadow-[0px_0px_5px_#7952B3] sm:hover:drop-shadow-[0px_0px_10px_#7952B3] lg:hover:drop-shadow-[0px_0px_20px_#7952B3]" />
                <Tecnologias_icono :direccion="GIT" texto="git_image"
                    class="hover:drop-shadow-[0px_0px_5px_#FFF] sm:hover:drop-shadow-[0px_0px_10px_#FFF] lg:hover:drop-shadow-[0px_0px_20px_#FFF]" />
                <Tecnologias_icono :direccion="HTML" texto="html_image"
                    class="hover:drop-shadow-[0px_0px_5px_#E34F26] sm:hover:drop-shadow-[0px_0px_10px_#E34F26] lg:hover:drop-shadow-[0px_0px_20px_#E34F26]" />
                <Tecnologias_icono :direccion="JS" texto="js_image"
                    class="hover:drop-shadow-[0px_0px_5px_#F7DF1E] sm:hover:drop-shadow-[0px_0px_10px_#F7DF1E] lg:hover:drop-shadow-[0px_0px_20px_#F7DF1E]" />
                <Tecnologias_icono :direccion="TW" texto="tailwind_image"
                    class="hover:drop-shadow-[0px_0px_5px_#06B6D4] sm:hover:drop-shadow-[0px_0px_10px_#06B6D4] lg:hover:drop-shadow-[0px_0px_20px_#06B6D4]" />
                <Tecnologias_icono :direccion="CSS" texto="css_image"
                    class="hover:drop-shadow-[0px_0px_5px_#1572B6] sm:hover:drop-shadow-[0px_0px_10px_#1572B6] lg:hover:drop-shadow-[0px_0px_20px_#1572B6]" />
                <Tecnologias_icono :direccion="CI4" texto="codeigniter_image"
                    class="hover:drop-shadow-[0px_0px_5px_#EF4223] sm:hover:drop-shadow-[0px_0px_10px_#EF4223] lg:hover:drop-shadow-[0px_0px_20px_#EF4223]" />
                <Tecnologias_icono :direccion="MYSQL" texto="mysql_image"
                    class="hover:drop-shadow-[0px_0px_5px_#4479A1] sm:hover:drop-shadow-[0px_0px_10px_#4479A1] lg:hover:drop-shadow-[0px_0px_20px_#4479A1]" />
                <Tecnologias_icono :direccion="NODE" texto="node_image"
                    class="hover:drop-shadow-[0px_0px_5px_#339933] sm:hover:drop-shadow-[0px_0px_10px_#339933] lg:hover:drop-shadow-[0px_0px_20px_#339933]" />
                <Tecnologias_icono :direccion="VUE" texto="vue_image"
                    class="hover:drop-shadow-[0px_0px_5px_#4FC08D] sm:hover:drop-shadow-[0px_0px_10px_#4FC08D] lg:hover:drop-shadow-[0px_0px_20px_#4FC08D]" />
                <Tecnologias_icono :direccion="VITE" texto="vite_image"
                    class="hover:drop-shadow-[0px_0px_5px_#646CFF] sm:hover:drop-shadow-[0px_0px_10px_#646CFF] lg:hover:drop-shadow-[0px_0px_20px_#646CFF]" />


            </div>

        </div>

    </section>

</template>