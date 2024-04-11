<script>
import AppHeader from './components/AppHeader.vue';
import CardsSection from './components/CardsSection.vue';
import Footer from './components/Footer.vue';


export default{
  components: {
    AppHeader,
    CardsSection,
    Footer

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
