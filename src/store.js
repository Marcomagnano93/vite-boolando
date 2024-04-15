import { reactive } from 'vue';
// import dataProducts from '../db.json';

export const store = reactive({
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
    productsStore: [],
})