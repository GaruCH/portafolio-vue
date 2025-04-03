<script setup>
import Proyectos_card from './Proyectos_card.vue';
import GIPP from '@/assets/login.png'
import Engranaje from '@/assets/Engranaje.gif'
</script>

<template>
    <section class="px-5 lg:px-20 text-white" data-aos="fade-down" id="Proyectos">
        <div class="pb-5">
            <h3 class="text-4xl font-bold mb-2 font-primario text-center">Mis Proyectos</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-5 text-wrap">
            <Proyectos_card nombre_proyecto="Gestor de Información y Pruebas Psicológicas" :src="GIPP" alt="gipp_image"
                descripcion="El Gestor de Información y Pruebas Psicológicas de la Universidad Politécnica de Tlaxcala centraliza
                    la administración de pruebas, optimizando tiempos y reduciendo errores." sizeImage="w-full" />
            <Proyectos_card nombre_proyecto="Próximo proyecto"
                descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro doloribus ut exercitationem consequuntur eum provident debitis ipsa officiis consequatur. Explicabo, eveniet a accusamus impedit pariatur repudiandae id at est. "
                :src="Engranaje" sizeImage="w-4/8" />
            <Proyectos_card nombre_proyecto="Próximo proyecto"
                descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro doloribus ut exercitationem consequuntur eum provident debitis ipsa officiis consequatur. Explicabo, eveniet a accusamus impedit pariatur repudiandae id at est. "
                :src="Engranaje" sizeImage="w-4/8" />
        </div>
    </section>
</template>

<style scoup></style>