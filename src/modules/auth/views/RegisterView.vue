<template>
    <div class="container mx-auto max-w-fit mt-10">
      <p>REGISTRO</p>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Nombre de usuario
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="username"
        placeholder="Tu nombre de usuario"
        required>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Correo
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="tucorreo@email.com"
        required>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Contraseña
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
        required>
      
      <div class="flex items-center justify-center pt-5">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Crear cuenta
      </button>
    </div>

      <div class="text-red-500 text-xs italic pt-5">
        <router-link :to="{ name: 'login'}">¿Ya tienes cuenta?</router-link> 
      </div>
    </div>
    
  </form>
</div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  

  export default defineComponent ({
    
  })
  </script>
  
  <style>
  
  </style>