<template>
  <div class="product-detail" v-if="!isLoading">
      <img :src="product.category.image" alt="" />
      <h1>Title: {{ product.title }}</h1>
      <h2>Price: {{ product.price }}</h2>
      <h2>Name: {{ product.category.name }}</h2>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import useProducts from '@/composables/useProducts';
import { Product } from '@/models/product';
import { AxiosResponse } from 'axios';
import { defineComponent, ref } from 'vue';
import myStoreApi from '../api/myStoreApi';

export default defineComponent({
  props: {
          id: {
              type: Number,
              required: true
          },
          userRole: String
      },


  setup(props) {
      
      const { product, fetchProductById, isLoading } = useProducts();
      
      fetchProductById(props.id);
      return { 
          product,
          isLoading
      }
  },
})
</script>

<style scoped>
.product-detail {
    display: flex;
    flex-direction: column;
    width:fit-content;
    margin: 20px auto;
    gap: 10px;
}
</style>
