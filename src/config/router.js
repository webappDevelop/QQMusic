
import My from '../my/my.vue'
import MusicHall from '../musicHall/musicHall.vue'
import Find from '../find/find.vue'
import History from '../my/history/history.vue'
import Ranking from '../musicHall/ranking/ranking.vue'
import SongList from '../musicHall/songList/songList.vue'
import List from '../my/list/list.vue'
import LocalMusic from '../my/localmusic/localmusic.vue'
import ListOfSongs from '../musicHall/ranking/ListOfSongs/ListOfSongs.vue'
import Login from '../my/login/login.vue'

export default {
    routes: [
        {
            path: '/',
            redirect: '/my'
        },
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
            name: 'listofsongs',
            path: '/listofsongs',
            component: ListOfSongs
        },
        {
            name: 'songlist',
            path: '/songlist',
            component: SongList
        },
        {
            name: 'list',
            path: '/list',
            component: List
        },
        {
            name: 'localMusic',
            path: '/localMusic',
            component: LocalMusic
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
}