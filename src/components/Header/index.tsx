import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'

import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { NotificationBox } from './NotificationBox'
import { Profile } from './Profile'


export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {
        !isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          />
        )
      }
      <Logo />
      {
        isWideVersion && (
          <SearchBox />
        )
      }
      <NotificationBox />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}