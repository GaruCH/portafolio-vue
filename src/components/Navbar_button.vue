<script setup>
defineProps({
  url: String,
  titulo: String
});
</script>

<template>
  <div class="hover:font-bold  hover:animate-jump hover:animate-duration-1000 font-primario text-xl text-white">
    <a :href="url" class="py-4 px-4 ">{{ titulo }}</a>
  </div>
</template>
