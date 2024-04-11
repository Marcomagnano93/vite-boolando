<script>
import Cards from './Cards.vue';
import dataProducts from '../assets/db.json';

export default {
  data() {
    return {
        products: dataProducts.products,
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
                <cards class="col-4"
                    v-for="(product, i) in products" :key="i"
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
    </section>

</template>

<style lang="scss" scoped>
  @use '../style/general.scss';
</style>