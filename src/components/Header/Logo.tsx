import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text
      fontSize={["xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="light"
      w="64"
    >
      dashGo
      <Text as="span" color="pink.500">.</Text>
    </Text>
  )
}