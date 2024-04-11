<script>
import Cards from './Cards.vue';
import dataProducts from '../assets/db.json';

export default {
  data() {
    return {
        products: dataProducts.products,
    //   products: [
    //     {
    //         img: "../../public/1.webp",
    //         imgHover: "../../public/1b.webp",
    //         discounted: true,
    //         discount: 50,
    //         sostenible: true,
    //         sostenibleOnly: false,
    //         brand: "Levi's",
    //         cardTitle: "Relaxed fit tee unisex",
    //         normalPrice: 29.99,
    //         discountedPrice: 14.99,
    //     },
    //     {
    //         img: "../../public/2.webp",
    //         imgHover: "../../public/2b.webp",
    //         discounted: true,
    //         discount: 30,
    //         sostenible: false,
    //         sostenibleOnly: false,
    //         brand: 'Guess',
    //         cardTitle: "Roses Tee",
    //         normalPrice: 30,
    //         discountedPrice: 19.99,
    //     },
    //     {
    //         img: "../../public/3.webp",
    //         imgHover: "../../public/3b.webp",
    //         discounted: true,
    //         discount: 30,
    //         sostenible: false,
    //         sostenibleOnly: false,
    //         brand: 'Come zucchero filato',
    //         cardTitle: "Voglia di colori pastello",
    //         normalPrice: 180,
    //         discountedPrice: 125.99,
    //     },
    //     {
    //         img: "../../public/4.webp",
    //         imgHover: "../../public/4b.webp",
    //         discounted: true,
    //         discount: 50,
    //         sostenible: true,
    //         sostenibleOnly: false,
    //         brand: "Levi's",
    //         cardTitle: "Tee unisex",
    //         normalPrice: 45.99,
    //         discountedPrice: 24.99,
    //     },
    //     {
    //         img: "../../public/5.webp",
    //         imgHover: "../../public/5b.webp",
    //         discounted: false,
    //         discount: 50,
    //         sostenible: false,
    //         sostenibleOnly: false,
    //         brand: 'Maya Deluxe',
    //         cardTitle: "Stripe Bodice",
    //         normalPrice: 102.50,
    //         discountedPrice: 49.99,
    //     },
    //     {
    //         img: "../../public/6.webp",
    //         imgHover: "../../public/6b.webp",
    //         discounted: false,
    //         discount: 50,
    //         sostenible: false,
    //         sostenibleOnly: true,
    //         brand: 'Esprit',
    //         cardTitle: "Maglione - Black",
    //         normalPrice: 35.99,
    //         discountedPrice: 29.00,
    //     },
    //   ],
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
                    :badgesProps="product.badges"                />

            </div>       
        </div>
    </section>

</template>

<style lang="scss" scoped>
  @use '../style/general.scss';
</style>