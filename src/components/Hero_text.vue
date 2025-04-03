<script setup>
const downloadPDF = () => {
  // Crear un enlace temporal para descargar el PDF
  const link = document.createElement('a');
  link.href = '/CV_2025_F.pdf';  // Ruta relativa al archivo PDF en public
  link.download = 'CV_2025_F.pdf';  // Nombre del archivo descargado
  link.click();  // Ejecutar la descarga
};
</script>

<template>
  <div class="flex flex-col text-center  md:space-y-6 space-y-2 justify-center max-lg:h-1/2  max-md:px-6 px-4">
    <div class="flex flex-col items-center text-center space-y-4 md:space-y-6">
      <h2 class="text-white font-primario text-3xl md:text-4xl lg:text-5xl">
        <strong class="text-terciario">¡Bienvenido!, soy</strong>
      </h2>
      <h1 class="text-white font-primario text-2xl md:text-4xl lg:text-5xl font-bold">
        Gabriel Cervantes Hernández
      </h1>
      <h3 class="text-terciario font-primario text-lg md:text-2xl lg:text-3xl font-semibold">
        Ingeniero en TI & Desarrollador Web
      </h3>
      <p class="text-white text-sm md:text-lg lg:text-xl max-w-2xl">
        Apasionado por la tecnología, la resolución de problemas y el aprendizaje constante.
      </p>
    </div>
    <div class="flex justify-center font-primario font-bold text-sm md:text-lg">
      <button
        class="bg-secundario text-white py-3 px-6 rounded-2xl hover:bg-red-800" @click="downloadPDF"><i
          class="fa-solid fa-file-arrow-down"></i> Descargar CV</button>
    </div>

  </div>
</template>
