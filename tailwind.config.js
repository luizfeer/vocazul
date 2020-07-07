/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    fontFamily: {
      'base': ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
      'alternate': ['RobotoSlab', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],


    },

    fontSize: {
      '5xs': '.25em',
      '4xs': '.375em',
      '3xs': '.5em',
      '2xs': '.675em',
      'xs': '.75em',
      '2sm': '.8125em',
      'sm': '.875em',
      'tight': '.9375em',
      'base': '1em',
      'lg': '1.125em',
      'xl': '1.25em',
      '2xl': '1.5em',
      '3xl': '1.875em',
      '4xl': '2.25em',
      '5xl': '3em',
      '6xl': '3.5em',
      '7xl': '4em',
      '8xl': '4.5em',
      '9xl': '5em',
      '10xl': '6em',
    },

    inset: {
      '-6px': '-6px',
      '0': '0'
    },

    container: {
      center: true,
      padding: {
        'default': '1rem',
        'md': '2rem'
      }
    },

    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50% ': '50%',
        '16': '4rem'
      },

      maxHeight: {
        'none': 'none',
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        'full': '100%',
        'mobile': '60vh',
        'screen': '100vh',
      },

      maxWidth: {
        'none': 'none',
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       
      },

      spacing: {
        '36': '9rem',
        '44': '11rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
        
      },

      bottom: {
        '0': '0em',
        'mobile': '-0.1em',
      },

      left: {
        'mobile': '0.4em',
      },

      colors: {
        white: {
          'default': 'var(--color-white-default)',
          '95': 'var(--color-white-95)',
          '90': 'var(--color-white-90)',
          '80': 'var(--color-white-80)',
          '75': 'var(--color-white-75)',
          '70': 'var(--color-white-70)',
          '60': 'var(--color-white-60)',
          '50': 'var(--color-white-50)',
          '40': 'var(--color-white-40)',
          '30': 'var(--color-white-30)',
          '25': 'var(--color-white-25)',
          '20': 'var(--color-white-20)',
          '10': 'var(--color-white-10)',
          '5': 'var(--color-white-5)'
        },
        yellow:{
          'default': 'var(--color-yellow)',
        },
        blue:{
          '5': 'var(--color-blue-5)',
          '10': 'var(--color-blue-10)',
          '15': 'var(--color-blue-15)',
        },

        gray: {
          '100': 'var(--color-gray-100)',
          '200': 'var(--color-gray-200)',
          '300': 'var(--color-gray-300)',
          '400': 'var(--color-gray-400)',
          '500': 'var(--color-gray-500)',
          '600': 'var(--color-gray-600)',
          '700': 'var(--color-gray-700)',
          '800': 'var(--color-gray-800)',
          '900': 'var(--color-gray-900)'
        },

        purple: {
          '100': 'var(--color-purple-100)',
          '200': 'var(--color-purple-200)',
          '300': 'var(--color-purple-300)',
          '400': 'var(--color-purple-400)',
          '500': 'var(--color-purple-500)',
          '600': 'var(--color-purple-600)',
          '700': 'var(--color-purple-700)',
          '800': 'var(--color-purple-800)',
          '900': 'var(--color-purple-900)'
        },

        pink: {
          '100': 'var(--color-pink-100)',
          '200': 'var(--color-pink-200)',
          '300': 'var(--color-pink-300)',
          '400': 'var(--color-pink-400)',
          '500': 'var(--color-pink-500)',
          '600': 'var(--color-pink-600)',
          '700': 'var(--color-pink-700)',
          '800': 'var(--color-pink-800)',
          '900': 'var(--color-pink-900)',
          'footer': 'var(--color-footer-error)'
        },
      }
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },

    flexGrow: {
      '0': '0',
      default: '1',
    },

    flexShrink: {
      '0': '0',
      default: '1',
    },
    minWidth: {
    '0': '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    'full': '100%',
    },

    fill: theme => ({          
          'blue': theme('colors.blue.5'),
         })

  },

  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
