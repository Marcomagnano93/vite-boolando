<script>
import AppHeader from './components/AppHeader.vue';
import CardsSection from './components/CardsSection.vue'

export default{
  components: {
    AppHeader,
    CardsSection
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
</template>

<style lang="scss">
  @use './style/general.scss';
</style>
