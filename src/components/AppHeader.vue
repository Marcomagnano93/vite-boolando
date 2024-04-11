<script>
export default {
  data() {
    return {
      shopCategories: [
        {
            folder: 'Donna',
            href: '#'
        },
        {
            folder: 'Uomo',
            href: '#'
        },
        {
            folder: 'Bambino',
            href: '#'
        }
      ],
    }
  }
}
</script>

<template>
<nav class="row navbar">
                <ul class="col-4 link-list">
                    <li
                    v-for="(link, i) in shopCategories" :key="i"
                    >
                    <a :href="link.href"> {{ link.folder }} </a>
                    </li>
                    
                </ul>

                <div class="col-4 flx-center">
                    <a href="#"><img class="logo" src="../../public/boolean-logo.png" alt=""></a>   
                </div>

                <ul class="col-4 link-list">
                    <li><a href="#">P</a></li>
                    <li><a href="#">C</a></li>
                    <li><a href="#">S</a></li>
                </ul>
            </nav>
</template>

<style lang="scss" scoped>
  @use '../style/general.scss';

  .navbar {
    display: flex;
    justify-content: space-between;
    background-color: orange;
    position: fixed;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0.1);
    padding: 40px 0;
    }

.link-list{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    }

.logo {
     width: 200px !important;
    }

</style>
