<script>
export default {
  data() {
    return {
      cards: [
        {
            img: "../../public/1.webp",
            imgHover: "../../public/1b.webp",
            discounted: true,
            discount: 50,
            sostenible: true,
            sostenibleOnly: false,
            brand: "Levi's",
            cardTitle: "Relaxed fit tee unisex",
            normalPrice: 29.99,
            discountedPrice: 14.99,
            price: ""
        },
        {
            img: "../../public/2.webp",
            imgHover: "../../public/2b.webp",
            discounted: true,
            discount: 30,
            sostenible: false,
            sostenibleOnly: false,
            brand: 'Guess',
            cardTitle: "Roses Tee",
            normalPrice: 20.99,
            discountedPrice: 29.99,
            price: ""
        },
        {
            img: "../../public/3.webp",
            imgHover: "../../public/3b.webp",
            discounted: true,
            discount: 30,
            sostenible: false,
            sostenibleOnly: false,
            brand: 'Come zucchero filato',
            cardTitle: "Voglia di colori pastello",
            normalPrice: 180.99,
            discountedPrice: 125.99,
            price: ""
        },
        {
            img: "../../public/4.webp",
            imgHover: "../../public/4b.webp",
            discounted: true,
            discount: 50,
            sostenible: true,
            sostenibleOnly: false,
            brand: "Levi's",
            cardTitle: "Tee unisex",
            normalPrice: 45.99,
            discountedPrice: 24.99,
            price: ""
        },
        {
            img: "../../public/5.webp",
            imgHover: "../../public/5b.webp",
            discounted: false,
            discount: 50,
            sostenible: false,
            sostenibleOnly: false,
            brand: 'Maya Deluxe',
            cardTitle: "Stripe Bodice",
            normalPrice: 102.99,
            discountedPrice: 49.99,
            price: ""
        },
        {
            img: "../../public/6.webp",
            imgHover: "../../public/6b.webp",
            discounted: false,
            discount: 50,
            sostenible: false,
            sostenibleOnly: true,
            brand: 'Esprit',
            cardTitle: "Maglione - Black",
            normalPrice: 35.99,
            discountedPrice: 29.99,
            price: ""
        },
      ],
    }
  }
}
</script>

<template>
    <section class="card-section">
        <div class="container">
            <div class="row">
                <div class="col-4"
                v-for="(card, i) in cards"
                >
                   <div class="card">
                    <div class="card__product">
                        <div>  
                            <img :src="card.img" alt="">

                            <div class="hover">
                                <img :src="card.imgHover" alt="">
                            </div>
                        </div>
                        

                        <div class="like"><a href="">&hearts;</a></div>

                        <div 
                        v-if="card.discounted === true"
                        class="badge discount"
                        >
                            {{ card.discount }}
                        </div>

                        <div 
                        v-if="card.sostenible === true"
                        class="badge sostenibile">
                                Sostenibile
                        </div>

                        <div 
                        v-if="card.sostenibleOnly === true"
                        class="badge sostenibile__only">                     
                            Sostenibile
                        </div>

                            <div class="card__caption">
                                <p class="caption"> {{ card.brand }} </p>
                                <div class="card__header">
                                    <h2> {{ card.cardTitle }} </h2>
                                        <div class="card__price">
                                            <span class="red__price">{{ card.discountedPrice }}&euro;</span>
                                            <span class="black__price"> {{ card.normalPrice }} &euro;</span>
                                        </div>
                                </div>
                            </div>
                    </div>
                   </div>
                </div>
            </div>       
        </div>
    </section>
</template>

<style lang="scss" scoped>
  @use '../style/general.scss';

  .hover {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: inline;
    opacity: 0;
    transition: opacity 300ms;
}

.card__product:hover .hover {
    opacity: 1;
}

.card__product {
    position: relative;
}

.card {
  padding: 0px 8px;
  margin-top: 80px;
}
</style>