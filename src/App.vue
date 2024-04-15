<script>
import AppHeader from './components/AppHeader.vue';
import CardsSection from './components/CardsSection.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';
import { store } from './store';


export default{
  components: {
    AppHeader,
    CardsSection,
    Footer

  },
  methods: {
    fetchData(){
      axios.get('http://localhost:3000/products').then((res) => {
        store.productsStore = res.data
      })
    }
  },
  created() {
    this.fetchData()
  }
}

</script>

<template>
<!-- section header -->
  <header>
    <AppHeader/>
  </header>
  
<!-- section cards -->
  <main>
    <CardsSection/>
  </main>

  <!-- section footer -->

    <Footer />
  
</template>

<style lang="scss">
  @use './style/general.scss';
</style>
