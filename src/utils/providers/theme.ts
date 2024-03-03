export const Theme = {
  Default: {
    color: {
      primary: '#333F63',
      secondary: '#715C8C',
      terciary: '#D7D4DD',
      forth: '#838BC2',
      success: '#61A630',
      warning: '#FEC901',
      error: '#ff3d3d',
      disabled: '#c8d3bc',
      fontDisabled: '#898989'
    },

    font: {
      family:
        "--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      size: {
        default: '1rem',
        small: 'small',
        medium: 'medium',
        large: 'large',
        xl: 'x-large',
        xxl: '2rem'

      },
      weight: {
        default: 'normal',
        bolt: '700'
      },
      color: {
        default: '#333333',
        light: '#f2effc',
        disabled: '#6d6b6b'
      }
    },

    border: {
      width: {
        default: 'medium',
        thin: 'thin',
        large: 'thick'
      },
      style: {
        default: 'solid',
        dotted: 'dotted',
        dashed: 'dashed'
      },
      radius: {
        square: 'none',
        soft: '0.3rem',
        medium: '0.6rem',
        hard: '1.5rem',
        circle: '50%'
      }
    },

    shadow: {
      color: {
        default: '#bfbfbf',
        medium: '#828282',
        hard: '#666666'
      },
      distance: {
        default: '0px 5px 5px -2px',
        pressed: '0px 3px 3px -2px'
      }
    }
  }
}
