module.exports = {
    base:"/youyitian-gulu/",
    title: "youyitian-gulu",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/youyitian123/guluui' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: 'auto',
        sidebar: [
            '/install/',
            '/get-start/',
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input'
                ]
            }
        ],
    },

}