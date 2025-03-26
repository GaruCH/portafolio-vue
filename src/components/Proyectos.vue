<script setup>
import Proyectos_card from './Proyectos_card.vue';
</script>

<template>
    <section id="Proyectos" class=" px-20 text-white">
        <div class="py-5" data-aos="fade-down">
            <h3 class="text-4xl font-bold mb-4 font-primario text-center">Mis Proyectos</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-5 text-wrap">
            <Proyectos_card nombre_proyecto="Gestor de Información y Pruebas Psicológicas" src="/GIPP.png"
                alt="gipp_image" descripcion="El Gestor de Información y Pruebas Psicológicas de la Universidad Politécnica de Tlaxcala centraliza
                    la administración de pruebas, optimizando tiempos y reduciendo errores. Mejora el análisis de datos,
                    agiliza la toma de decisiones y contribuye a la sostenibilidad institucional al minimizar el uso de
                    recursos físicos." sizeImage="w-2/6"/>
            <Proyectos_card nombre_proyecto="Próximo proyecto"
                descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro doloribus ut exercitationem consequuntur eum provident debitis ipsa officiis consequatur. Explicabo, eveniet a accusamus impedit pariatur repudiandae id at est. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                src="/Engranaje.gif" sizeImage="w-4/8"/>
        </div>
    </section>
</template>