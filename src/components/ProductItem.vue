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
                class="btn btn-sm btn-success"
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