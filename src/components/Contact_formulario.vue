<script setup>
import { onMounted } from 'vue';
import $ from 'jquery';
import 'jquery-validation';
import emailjs from '@emailjs/browser';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

$.validator.addMethod("emailRegex", function (value, element) {
    return this.optional(element) || /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value);
}, "No corresponde a una ruta de email");

onMounted(() => {
    let form = $("#contactForm");
    form.validate({
        rules: {
            nombre: {
                required: true,
                rangelength: [3, 50]
            },
            correo: {
                required: true,
                emailRegex: true,
                email: true,
                rangelength: [5, 70]
            },
            mensaje: {
                required: true,
                minlength: 10,
            }
        },
        messages: {
            nombre: {
                required: "Por favor, ingresa tu nombre.",
                rangelength: 'El nombre debe tener entre 3 y 50 caracteres.'
            },
            correo: {
                required: "Por favor, ingresa tu correo.",
                emailRegex: 'El correo electrónico debe tener el siguiente formato: ejemplo@dominio.com',
                email: "El correo electrónico debe tener el siguiente formato: ejemplo@dominio.com",
                rangelength: 'El correo electrónico no debe exceder los 70 caracteres.'
            },
            mensaje: {
                required: "Por favor, escribe un mensaje.",
                minlength: "Debe tener al menos 10 caracteres."
            }
        },
        highlight: function (element) {
            $(element).addClass("border-red-500 text-red");
        },
        unhighlight: function (element) {
            $(element).removeClass("border-red-500 text-red");
        },
        errorPlacement: function (error, element) {
            error.addClass("text-red-500 text-sm mt-1");
            error.insertAfter(element);
        }
    });

    // Manejo del envío del formulario
    form.on("submit", function (event) {
        event.preventDefault(); // Evita el envío normal

        if (!form.valid()) {
            return; // No ejecutar EmailJS si hay errores
        }

        // Capturar los datos del formulario
        let params = {
            nombre: $("#contactForm input[name='nombre']").val(),
            correo: $("#contactForm input[name='correo']").val(),
            mensaje: $("#contactForm textarea[name='mensaje']").val()
        };

        // Usamos toast.promise() para manejar la promesa
        toast.promise(
            emailjs.send("service_occslgv", "template_hz8wjzf", params, "LrAJb84ZT1J4daVJw"),
            {
                pending: 'Enviando mensaje...',
                success: 'Mensaje enviado correctamente 🎉',
                error: 'Error al enviar el mensaje 😞'
            }
        ).then((response) => {
            //console.log("Correo enviado con éxito", response);
            form[0].reset(); // Resetear formulario
        }).catch((error) => {
            //console.log("Error al enviar correo", error);
        });
    });
});
</script>



<template>
    <!-- Sección del formulario (Segundo en móvil, izquierda en desktop) -->
    <div class="p-5 z-10 bg-neutral-50 rounded-3xl w-full md:w-1/2 font-primario " data-aos="fade-up-right">
        <h2 class="text-3xl font-bold text-center">Contacto</h2>
        <p class="mt-2 text-justify">
            Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en enviarme un mensaje.
        </p>
        <form id="contactForm" class="mt-6 space-y-4">
            <div> <input type="text" name="nombre" placeholder="Nombre" class="w-full p-3 border rounded-md" /></div>
            <div><input type="email" name="correo" placeholder="Correo" class="w-full p-3 border rounded-md" /></div>
            <div><textarea name="mensaje" placeholder="Mensaje" class="w-full p-3 border rounded-md"></textarea></div>


            <div class="flex justify-end">
                <button type="submit"
                    class="bg-secundario text-white py-3 px-6 rounded-2xl hover:bg-red-800 transition hover:animate-jump hover:animate-duration-1000">
                    <i class="fa-solid fa-paper-plane"></i> Enviar
                </button>
            </div>
        </form>

    </div>
</template>