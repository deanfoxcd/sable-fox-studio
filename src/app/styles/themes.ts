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
      lg: 'h-12 px-5 text-base',
      xl: 'h-[52px] px-6 text-base',
    },
    color: {
      default:
        'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
      alternative:
        'border !border-[var(--main-brown)] !bg-gray-300 !text-gray-600 hover:cursor-pointer hover:bg-gray-200 hover:text-[#3E4825] hover:ring-1 focus:ring-gray-100',
      dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
      light:
        'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
    },
    outlineColor: {
      default:
        'border border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-300 dark:border-primary-600 dark:text-primary-500 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:hover:text-white dark:focus:ring-primary-800',

      dark: 'border border-gray-800 text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800',
    },
  },

  navbar: {
    root: {
      base: '!bg-transparent px-2 py-2.5 sm:px-4 dark:border-gray-70 flex',
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
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-12 md:text-lg md:font-medium',
      hidden: {
        on: 'hidden',
        off: '',
      },
    },
    link: {
      base: 'block py-2 pl-3 pr-4 md:p-0 !text-white',
      active: {
        on: ' text-white font-bold text-xl md:bg-transparent dark:text-white',
        off: 'border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: '',
      },
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
      icon: 'h-6 w-6 shrink-0',
      title: 'sr-only',
    },
  },
});
