import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'
import components from './components'
import { fontSizes } from './foundations/typography'

// Define your custom ivy green colors
const colors = {
  primary: {
    50: '#f0f9f8',
    100: '#d4f0ec',
    200: '#a9e2d8',
    300: '#7dd3c4',
    400: '#4eb89f',
    500: '#1f8567', // Rich, deep ivy green
    600: '#1b7058',
    700: '#175b49',
    800: '#13463a',
    900: '#0f312b',
  },
  // You can keep or modify other colors as needed
}

// Customize the button component
const customComponents = {
  ...components,
  Button: {
    // Extend the current button styles
    variants: {
      primary: {
        bg: 'primary.500',
        color: 'white', // White text for good contrast with ivy green
        _hover: {
          bg: 'primary.600',
          color: 'white',
        },
        _active: {
          bg: 'primary.700',
          color: 'white',
        },
      },
      // You can also customize other button variants here if needed
    },
  },
}

export const theme = extendTheme(
  {
    colors,
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components: customComponents, // Use the extended components
  },
  baseTheme,
)