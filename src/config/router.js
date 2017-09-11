
import My from '../my/my.vue'
import MusicHall from '../musicHall/musicHall.vue'
import Find from '../find/find.vue'
import PlayHeader from '../play/header.vue'
import PlayFooter from '../play/footer.vue'

export default {
    routes: [
        {
            name: 'my',
            path: '/my',
            component: My
        },
        {
            name: 'musicHall',
            path: '/musicHall',
            component: MusicHall
        },
        {
            name: 'find',
            path: '/find',
            component: Find
        },
        {
            name: 'header',
            path: '/header',
            component: PlayHeader
        },
        {
            name: 'footer',
            path: '/footer',
            component: PlayFooter
        }
    ]
}