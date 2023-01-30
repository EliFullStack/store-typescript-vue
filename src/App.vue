<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav> -->
  <NavBar class="flex justify-between"
  title="Welcome to MyStore" 
    :links="[
      { label: 'Facebook', link: 'http://facebook.com' },
      { label: 'Instagram', link: 'http://instagram.com' }
    ]"
    @buttonClicked="alertClick($event)"
  />
  <NavBarLinks/>
  
  <router-view/>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue"
import {Link} from "@/interfaces/link"
import { defineComponent } from 'vue'
import NavBarLinks from './components/NavBarLinks.vue'


export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
    NavBarLinks
  },
  setup() {
    return {
      alertClick: (link: Link) => alert(link.label + ' Pulsado!'),
    }
  }
  
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 5px;
}

</style>
