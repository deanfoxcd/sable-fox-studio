import { createTheme } from 'flowbite-react';

export const customTheme = createTheme({
  button: {
    base: 'relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4',
    disabled: 'pointer-events-none opacity-50',
    fullSized: 'w-full',
    grouped:
      'rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2',
    pill: 'rounded-full',
    size: {
      xs: 'h-8 px-3 text-xs',
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-5 text-sm',
      lg: 'h-12 text-base px-5',
      xl: 'h-[52px] px-6 text-base',
    },
    color: {
      default: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-300',
      alternative: 'border !border-[var(--main-brown)] !bg-gray-300 !text-gray-900 hover:cursor-pointer hover:!bg-gray-200 !hover:text-[#3E4825] hover:ring-1 focus:ring-gray-100',
      light: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100',
    },
    outlineColor: {
      default: 'border border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-300',
    },
  },

  navbar: {
    root: {
      base: '!bg-transparent px-2 py-2.5 sm:px-4 border-white flex',
      rounded: {
        on: 'rounded',
        off: '',
      },
      bordered: {
        on: 'border',
        off: '',
      },
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
        fluid: {
          on: '',
          off: 'container',
        },
      },
    },
    brand: {
      base: 'flex items-center',
    },
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-12 md:text-lg md:font-medium divide-white border-white',
      hidden: {
        on: 'hidden',
        off: '',
      },
    },
    link: {
      base: 'block py-2 pl-3 pr-4 md:p-0 !text-white text-xl',
      active: {
        on: 'text-xl md:bg-transparent text-white underline',
        off: 'border-b border-white text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 text-gray-400 hover:text-white md:hover:bg-transparent md:hover:text-white',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed text-gray-600',
        off: '',
      },
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white md:hidden',
      icon: 'h-6 w-6 shrink-0',
      title: 'sr-only',
    },
  },

  accordion: {
    root: {
      base: 'divide-y divide-white border-none',
      flush: {
        off: '!border-none',
        on: '!border-none',
      },
    },
    content: {
      base: 'p-5 text-white !text-xl',
    },
    title: {
      arrow: {
        base: 'h-6 w-6 shrink-0',
        open: {
          off: 'bg-transparent',
          on: 'rotate-180',
        },
      },
      base: 'flex w-full items-center justify-between p-5 text-left font-medium !bg-transparent !text-white !text-2xl',
      flush: {
        off: 'hover:bg-gray-100 focus:ring-none focus:ring-0 hover:bg-gray-800 focus:ring-gray-800',
        on: 'bg-transparent bg-transparent',
      },
      heading: '!focus:ring-none !focus:ring-offset-0',
      open: {
        off: '',
        on: '!focus:ring-none !focus:ring-offset-0',
      },
    },
  },
});
