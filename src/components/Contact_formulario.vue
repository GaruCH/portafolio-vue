<template>
    <!-- Sección del formulario (Segundo en móvil, izquierda en desktop) -->
    <div class="p-5 z-10 bg-white rounded-3xl w-full md:w-1/2" data-aos="fade-up-right">
                <h2 class="text-3xl font-bold text-center">Contacto</h2>
                <p class="mt-2 text-justify">
                    Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en enviarme un mensaje.
                </p>
                <form class="mt-6 space-y-4">
                    <input type="text" placeholder="Nombre" class="w-full p-3 border rounded-md" />
                    <input type="email" placeholder="Correo" class="w-full p-3 border rounded-md" />
                    <textarea placeholder="Mensaje" class="w-full p-3 border rounded-md"></textarea>
                    <div class="flex justify-end">
                        <button
                            class="bg-secundario text-white py-3 px-6 rounded-2xl hover:bg-red-800 transition hover:animate-jump hover:animate-duration-1000"><i class="fa-solid fa-paper-plane"></i> Enviar</button>
                    </div>
                </form>
            </div>
</template>