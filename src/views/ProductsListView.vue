<template>
     <div class="products-list">
    <div v-if="isLoading">Loading...</div>
    <div class="product-list" v-else>
      
      <ProductItem
        v-for="product in products"
        :key="product.id" :product="product"
      />
        
    </div>
  </div>
  </template>
  
  <script lang="ts">
  import useProducts from '@/composables/useProducts';
  import { defineComponent } from 'vue';
  import ProductItem from '@/components/ProductItem.vue';
  import { Product } from '@/models/product';
  import { useRouter } from 'vue-router';

  export default defineComponent({
  name: 'ProductsListView',
  components: {
    ProductItem
  },
  setup() {
    const { products, isLoading, fetchProducts } = useProducts();
    const router = useRouter()

    fetchProducts();
 
    
    return {
      products,
      isLoading,
      goToDetail: (product: Product) => router.push({name: 'detail', params: { id: product.id}})
      
    }
    
  }
});
  </script>
  
  <style>
  .product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
  </style>