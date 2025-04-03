<script setup>

defineProps({
    src: String,
});



</script>

<template>
    <div class="flex justify-center items-center w-full  max-w-full lg:max-w-1/2">
        <img :src="src" alt="image_hero"
            class="lg:w-full lg:max-w-xl w-3/6 object-contain drop-shadow-[5px_5px_7px_rgba(255,255,255,0.7)] ">
    </div>
</template>