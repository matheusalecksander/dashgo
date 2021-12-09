import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Alecksander</Text>
          <Text
            color="gray.400"
            fontSize="small"
          >
            matheusalecksander@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Matheus Alecksander" src="https://github.com/projetos-matheusalecksander.png" />
    </Flex>
  )
}