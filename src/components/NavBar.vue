<template>
    <nav>
        <div class="title">
            <h4 class="text-xl ml-5">{{title}}</h4>
        </div>       
        <div class="text-base mx-10 flex flex-col" v-if="links">
            <button 
                v-for="link in links"
                :key="link.label"
                @click="onClick(link)"
                >{{ link.label }}  
            </button>
        </div>        
    </nav>
  
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Link } from '@/interfaces/link';
import { useStore } from 'vuex';


interface NavBarProps {
    title: string,
    links: Link [],
    color?: string
}

export default defineComponent({
    name: 'NavBar',
    emits: ['buttonClicked'],
    props: {
        title: {
            type: String,
            required: true
        },
        links: {
            type: Array as PropType <Link []>,
            default () : Link [] {
                return [
                {label: 'Instagram', link: 'https://www.instagram.com/'},
                {label: 'Facebook', link: 'https://www.facebook.com/'}
                ]
            }
        },
        color: {
            type: String
        }
    },
    setup(props: NavBarProps, ctx) {
        const store = useStore()
        return {
            
            onClick: (link: Link) => {
                console.log('onClick', link)
                ctx.emit('buttonClicked', link)
            },
        }
    }
})
</script>


<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(35,47,62);
  color: white;
}

h4 {
    color: white;
}

</style>


