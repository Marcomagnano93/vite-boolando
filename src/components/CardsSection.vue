<script>
import Cards from './Cards.vue';

import { store } from '../store.js';

export default {
  data() {
    return {
        store: store,
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
                v-for="(product, i) in store.productsStore" :key="i"
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