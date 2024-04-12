<script>
export default {
    props: {
        idProps: Number,
        frontImageProps: String,
        backImageProps: String,
        brandProps: String,
        nameProps: String ,
        priceProps: Number,
        isInFavoritesProps: Boolean,
        badgesProps: Array    
    },
    methods: {
        discountCalc (price, discount){
            
            const discounter = (price * discount) / 100;
            const finalPrice = price - discounter;
            return finalPrice.toFixed(2)
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card__product">
            <div>  
                <img :src="'/' + frontImageProps" alt="">

                <div class="hover">
                    <img :src="'/' + backImageProps" alt="">
                </div>
            </div>                           

            <div class="like"

            :class="isInFavoritesProps === true? 'red': ''">
                <a href="">&hearts;</a>
            </div>
            
            <ul class="badges">
                <li
                class="badge"
                v-for="(badge, i) in badgesProps" :key="i"
                :class="badge.type"
                >
                    {{ badge.value }}
                </li>
            </ul>

            <div class="card__caption">
                <p class="caption"> {{ brandProps }} </p>
                <div class="card__header">
                    <h2> {{ nameProps }} </h2>
                    <div class="card__price">
                        <span class="red__price">{{ discountCalc(priceProps, 50) }} &euro;</span>
                        <span class="black__price"> {{ priceProps }} &euro;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
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