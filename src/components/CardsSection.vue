<script>
export default {
  data() {
    return {
      cards: [
        {
            img: "../../public/1.webp",
            imgHover: "../../public/1b.webp",
            discount50: true,
            discount30: true,
            sostenible: true
        },
        {
            img: "../../public/2.webp",
            imgHover: "../../public/2b.webp",
            discount50: true,
            discount30: true,
            sostenible: true
        },
        {
            img: "../../public/3.webp",
            imgHover: "../../public/3b.webp",
            discount50: true,
            discount30: true,
            sostenible: true
        },
        {
            img: "../../public/4.webp",
            imgHover: "../../public/4b.webp",
            discount50: true,
            discount30: true,
            sostenible: true
        },
        {
            img: "../../public/5.webp",
            imgHover: "../../public/5b.webp",
            discount50: true,
            discount30: true,
            sostenible: true
        },
        {
            img: "../../public/6.webp",
            imgHover: "../../public/6b.webp",
            discount50: true,
            discount30: true,
            sostenible: true,
        },
      ],
    }
  }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row cap-16">
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

                        <div class="badge discount">-50%</div>
                        <div class="badge sostenibile">Sostenibile</div>

                            <div class="card__caption">
                                <p class="caption">Levi's</p>
                                <div class="card__header">
                                    <h2>Relaxed fit tee unisex</h2>
                                        <div class="card__price">
                                            <span class="red__price">14,99&euro;</span>
                                            <span class="black__price">29,99&euro;</span>
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