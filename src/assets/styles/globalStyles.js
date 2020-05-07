import { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-900 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p + p {
    ${tw`mt-3`};
  }

  .format-html h3 {
    ${tw`mt-8 mb-4 text-lg font-bold w-full text-left`};
  }
`