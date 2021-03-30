module.exports = {
  title: 'Vue JS 3 (bluuweb - youtube)',
  description: 'Aprende a trabajar con Vue JS 3!',
  base: '/vue-js-3-youtube/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guías', link: 'https://bluuweb.github.io/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
      { text: 'Curso Vue 3', link: 'http://curso-vue-js-udemy.bluuweb.cl' },
      { text: 'Curso React', link: 'http://curso-react-js-udemy.bluuweb.cl' }
    ],
    sidebar:
      [
        '/',
        '/01-bases/',
      ]
  }
 
}


{/* <img :src="$withBase('/img/compu-1.gif')"> */}