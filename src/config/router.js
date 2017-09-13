
import My from '../my/my.vue'
import MusicHall from '../musicHall/musicHall.vue'
import Find from '../find/find.vue'
import Play from '../play/play.vue'
import Ranking from '../musicHall/ranking/ranking.vue'

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
            name: 'play',
            path: '/play',
            component: Play
        },
        {
            name: 'ranking',
            path: '/ranking',
            component: Ranking
        }
    ]
}