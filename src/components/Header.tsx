import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserLine } from 'react-icons/ri'


export function Header() {
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
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="light"
        w="64"
      >
        dashGo
        <Text as="span" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          mr="4"
          px="4"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400"
          }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.500"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserLine} />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Matheus Alecksander</Text>
            <Text
              color="gray.400"
              fontSize="small"
            >
              matheusalecksander@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Matheus Alecksander" src="https://github.com/projetos-matheusalecksander.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}