const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
    links: [
    'Blogs',
    'Bio'
    ],

    menus: [
    {text: 'Dev', icon: 'mdi-application-variable-outline' },
    {text: 'DIYs', icon: 'mdi-hammer-screwdriver' },
    {text: 'Photos', icon: 'mdi-camera-iris' },
    {text: 'Misc', icon: 'mdi-emoticon-cool-outline' }
    ],
    
    items: [
    {number: "1", title: 'about engineering', category: 'Dev', date: '2021/02/23' },
    {number: "2", title: 'who is', category: 'Misc', date: '2021/02/28' },
    {number: "3", title: 'wordle', category: 'Misc', date: '2021/03/15' },
    {number: "4", title: 'designing APIs', category: 'Dev', date: '2021/04/30' },
    {number: "5", title: 'Machine Learning', category: 'Dev', date: '2021/07/05' },
    {number: "6", title: 'Playground', category: 'DIYs', date: '2021/09/15' },
    ]

    })
})