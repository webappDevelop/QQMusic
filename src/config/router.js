
import My from '../my/my.vue'
import MusicHall from '../musicHall/musicHall.vue'
import Find from '../find/find.vue'
import Play from '../play/play.vue'
import History from '../my/history/history.vue'
import Ranking from '../musicHall/ranking/ranking.vue'
import List from '../my/list/list.vue'
import localMusic from '../my/localmusic/localmusic.vue'

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
            name: 'history',
            path: '/history',
            component: History
        },
        {
            name: 'ranking',
            path: '/ranking',
            component: Ranking
        },
        {
            name: 'list',
            path: '/list',
            component: List
        },
        {
            name: 'localMusic',
            path: '/localMusic',
            component: localMusic
        }
    ]
}