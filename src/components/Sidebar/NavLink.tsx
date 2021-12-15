import { ElementType } from 'react'

import { Link as ChakraLink, Icon, Text, LinkProps } from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends LinkProps {
  title: string,
  icon: ElementType,
  href: string
}

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}