<template>
    <div class="product-item">
      <div class="product-img">
          <img :src="product.category.image" :alt="product.title">
      </div>
      <div class="product-info">
          <div class="product-title">{{ product.title }}</div>
          <div class="product-price">{{ product.price }}</div>
          <div class="product-description">{{ product.description }}</div>
          <div class="buttons">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                @click="$emit('goToDetail', product)">Details</button>
          </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Product } from '@/models/product';
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
      props: {
          product: {
              type: Object as PropType<Product>,
              required: true
          },
      }
  })
  
  </script>