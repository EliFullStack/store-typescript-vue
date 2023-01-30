<template>
  <nav class="grid grid-cols-2">
        <ul class="flex justify-around">
            <li class="hover:text-gray-300">
                <router-link :to="{ name: 'home'}">Home</router-link> 
            </li>
            <li class="hover:text-gray-300">
                <router-link :to="{ name: 'products-list'}">Listado de Productos</router-link>
            </li>
            <li class="hover:text-gray-300">
                <router-link :to="{ name: 'profile'}">Profile</router-link>
            </li>
            <!-- <li class="hover:text-gray-300">
                <router-link :to="{ name: 'login'}">Log in</router-link>
            </li> -->
        </ul>
        <div class="justify-self-end">
            <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0.5 px-1 border border-gray-400 rounded shadow">Log
          out</button>
        </div>
        
    </nav>
</template>

<script lang="ts">
export default {
    setup() {
        return {}
    },
}
</script>

<style scoped>
nav {
    background-color: rgb(19,25,33);
    padding: 20px;
    color: white;
}

</style>