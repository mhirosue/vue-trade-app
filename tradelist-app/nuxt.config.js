require('dotenv').config();

module.exports = {
    mode: 'universal',
    runtimeCompiler: true,
	server:{
    	port: process.env.APP_PORT
	},
	router: {
		// middleware: 'betaAuth'
	},
    /*
	** Headers of the page
	*/
    head: {
        title: 'Tradelist - The Open Market',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Description'},
            {name: 'theme-color', content: '#48C0EB'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {
              src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
              type: "text/javascript"
            },
            {
                src: "lib/jquery/jquery.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/jquery/jquery-migrate.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/bootstrap/js/bootstrap.bundle.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/easing/easing.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/mobile-nav/mobile-nav.js",
                type: "text/javascript"
            },
            {
                src: "lib/wow/wow.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/waypoints/waypoints.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/counterup/counterup.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/owlcarousel/owl.carousel.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/isotope/isotope.pkgd.min.js",
                type: "text/javascript"
            },
            {
                src: "lib/lightbox/js/lightbox.min.js",
                type: "text/javascript"
            },
            {
                src: "main.js"
            }
        ]
    },
    
    /*
	** Customize the progress-bar color
	*/
    loading: {
        color: '#2DBD9B',
        height: '2px'
    },

    /*
	** Global CSS
	*/
    css: [
        { src: '~/assets/scss/main.scss', lang: 'sass' },
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-pusher.js',
        '~/plugins/auth.js',
    ],
    /*
	** Nuxt.js modules
	*/
    modules: [
	    'nuxt-device-detect',
        '@nuxtjs/dotenv',
        '@nuxtjs/component-cache',
        // '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/moment',
        'vue-geolocation-api/nuxt',
        'cookie-universal-nuxt',
        // 'nuxt-facebook-pixel-module',
		'@nuxtjs/google-analytics',
		['@nuxtjs/google-tag-manager', { id: 'GTM-WDP5VK2' }],
        ['nuxt-validate', {
            validity: true,
            // regular vee-validate options
        }],
        [
            'nuxt-sass-resources-loader',
            [
                'assets/scss/abstracts/_abstracts.scss',
            ]
        ]
    ],
    // facebook: {
    //     /* module options */
    //     track: 'PageView',
    //     pixelId: '2362390287178459',
    //     disabled: false
    // },
	googleAnalytics: {
		id: 'UA-136278496-1',
		debug: {
			sendHitTask: process.env.DISABLE_GA
		}
	},
    geolocation:  {
        watch: true,
    },
    /*
	** Axios module configuration
	*/
    axios: {
        baseURL: process.env.API_URL
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url : 'login', method: 'post', propertyName: 'result.token'
                    },
                    user: {
                        url: 'me', method: 'get', propertyName: 'result'
                    },
                    logout: {
                        url: 'logout', method: 'post'
                    }
                }
            }
        },
        redirect: {
            login: '/',
            logout: '/',
            callback: '/login',
            home: '/'
        }
    },
    /*
	** Build configuration
	*/
    build: {
        /*
		** You can extend webpack config here
		*/
        vendor: ['babel-polyfill'],
        presets: ['@nuxt/babel-preset-app'],
        postcss: [
            require('autoprefixer')({
                overrideBrowserslist: ['> 5%']
            })
        ],
        extend(config, ctx) {
        }
    }
}
