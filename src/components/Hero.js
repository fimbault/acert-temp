import { Flex, Heading } from '@chakra-ui/core'

export const Hero = ({ title }) => (

  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading as="h1" fontSize="10vw">{title}</Heading>
  </Flex>

)

Hero.defaultProps = {
  title: 'acert.io',
}
