import React from 'react'
import { withTheme } from 'emotion-theming'
import {
  Link as ChakraLink,
  Text,
  Heading,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container>
    <Hero />
    <Main>
    <Heading as="h5">The site is under construction. We focus on the doc and community site first.</Heading>
    </Main>
    <Footer/>
  </Container>
)

export default withTheme(Index)
