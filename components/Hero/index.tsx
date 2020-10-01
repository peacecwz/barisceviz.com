import React, {FunctionComponent} from 'react'
import {GradientBackground} from "./style"
import Container from "../Container"
import {Heading, Box} from "@chakra-ui/core"
import SocialIcons from "../Utilities/SocialIcons"

type HeroProps = {
    className?: string
}

const Hero: FunctionComponent<HeroProps> = ({className}) => (
    <GradientBackground>
        <Box pb="100px;" pt="158px;">
            <Container>
                <Heading size="2xl" color="white">
                    Hi! I'm Baris Ceviz
                </Heading>

                <Heading size="lg" mt={2} color="white">
                    Jedi Software Engineer
                </Heading>

                <SocialIcons my={6}/>
            </Container>
        </Box>
    </GradientBackground>
)

export default Hero
