<script>
export default {
  data() {
    return {
      cards: 6,
      img: ["../assets/img/1.webp", "../assets/img/2.webp", "../assets/img/3.webp", "../assets/img/4.webp", "../assets/img/5.webp", "../assets/img/6.webp"],
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
                            
                            <img  src="../assets/img/1.webp" alt="">

                            <div class="hover">
                                <img src="../assets/img/1b.webp" alt="">

                            </div>

                        </div>
                        

                        <div class="like"><a href="">&hearts;</a></div>

                            <!-- QUI DOVEVI UTILIZZARE UNA LISTA DI BADGE,
                                COSI DA RENDERE PIU SEMPLICE GESTIR GLI ELEMENTI 
                                QUANDO CE NE PRESENTE UNO SOLO O NESSUNO 
                                <ul class="badge__list">    ul{ dislpay: flex;}
                                    <li class="discount">-50%</>
                                    <li class="sostenibile">Sostenibile</li>
                                </ul>
                             -->

                        <div class="discount">-50%</div>
                        <div class="sostenibile">Sostenibile</div>

                            <div class="card__caption">
                                <p class="caption">Levi's</p>
                                <div class="card__header">
                                    <h2>Relaxed fit tee unisex</h2>
                                        <div class="card__price">
                                            <span class="red__price">14,99&euro;</span>
                                            <span class="black__price">29,99&euro;</span>
                                            <!-- QUI potevi utilizzare come SELETTORI :first-child :nth-child(2), NON 2 classi -->
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