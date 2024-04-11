<script>
export default {
  data() {
    return {
      links: [
        {
            page: 'Informazioni Legali',
            href: '#'
        },
        {
            page: 'Informativa sulla privacy',
            href: '#'
        },
        {
            page: 'Diritto di recesso',
            href: '#'
        }
      ],
    }
  }
}

</script>

<template>
<footer>
    <div class="container">           
            <nav class="row f__navbar">
                <div class="col-6">
                    <h4>Boolando S.R.L.</h4>
                </div>
                <div class="col-6">
                    <h4>Trovaci anche su:</h4>
                </div>
            </nav>
                
            <div class="row f__navbar">
                <div class="col-6">
                    <ul class="flx">
                        <li
                        v-for="(link, i) in  links" :key="i"
                        ><a :href="link.href">

                            {{ link.page }}

                        </a></li>
                    </ul>
                </div>

                <div class="col-6">
                    <ul class="flx">
                        <li><a href="">P</a></li>
                        <li><a href="">C</a></li>
                        <li><a href="">S</a></li>
                    </ul>
                </div>
        </div>
    </div>
</footer>
</template>

<style lang="scss" scoped>
  @use '../style/general.scss';

  footer {
    background-color: rgb(57, 57, 57);
    color: white;
    padding: 12px 0;
    
}

h4 {
    text-align: center;
    margin: 20px 0;
}

.f__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 100px;
}

.flx {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.flx>li {
    font-size: 12px;
}
 
</style>