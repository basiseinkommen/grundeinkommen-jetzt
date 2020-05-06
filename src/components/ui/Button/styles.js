import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { motion } from 'framer-motion'

const shared = css`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-pink-500 text-white`};

  ${({ primary }) => (primary ? tw`bg-pink-500` : tw`text-pink-500`)};

  ${({ block }) => block && tw`w-full`};
`

export const Button = motion.custom(styled.button`
  ${shared};
`)

export const Link = motion.custom(
  styled.a`
    ${shared};
    user-select: none;
  `
)
