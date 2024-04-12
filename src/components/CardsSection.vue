<script>
import Cards from './Cards.vue';

import { store } from '../store.js';

export default {
  data() {
    return {
        products: store.productsStore,
    }
  },
  components: {
    Cards
    }
}
</script>

<template>

    <section class="card-section">
        <div class="container">
            <div class="row">
                <div class="col-4"
                v-for="product in products" :key="product.id"
                >
                    <cards                    
                    :idProps="product.id"
                    :frontImageProps="product.frontImage"
                    :backImageProps="product.backImage"
                    :brandProps="product.brand"
                    :nameProps="product.name" 
                    :priceProps="product.price"
                    :isInFavoritesProps="product.isInFavorites"
                    :badgesProps="product.badges"
                    />
                </div>
            </div>       
        </div>
    </section>

</template>

<style lang="scss" scoped>
  @use '../style/general.scss';
</style>