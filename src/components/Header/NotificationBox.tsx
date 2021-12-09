import { Flex, HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserLine } from 'react-icons/ri'

export function NotificationBox() {
  return (
    <Flex
      align="center"
      ml="auto"
    >
      <HStack
        spacing={["6", "8"]}
        mx={["6", "8"]}
        pr={["6", "8"]}
        py="1"
        color="gray.500"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} />
        <Icon as={RiUserLine} />
      </HStack>


    </Flex>
  )
}