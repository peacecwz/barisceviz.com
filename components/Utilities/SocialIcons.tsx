import React from 'react'
import {Stack, StackProps, Link, PseudoBox} from '@chakra-ui/core'
import {FiInstagram, FiMusic, FiYoutube, FiTwitter, FiGithub, FiLinkedin, FiMail} from 'react-icons/fi'
import {RiSpotifyLine, RiMediumLine} from 'react-icons/ri';
import {IconType} from 'react-icons/lib/cjs'

interface SocialIconLinkProps {
    Icon: IconType,
    link: string
}

const SocialIconLink = ({Icon, link, ...rest}: SocialIconLinkProps & StackProps) => (
    <PseudoBox
        transition="all .15s ease-in-out"
        _hover={{transform: "scale(1.05)"}}
        {...rest}>

        <Link href={link}>
            <Icon/>
        </Link>
    </PseudoBox>
)

const SocialIcons = (props: StackProps) => (
    <Stack isInline fontSize="2.5em" color="white" {...props}>
        <SocialIconLink Icon={RiSpotifyLine} link="spotify:user:peacecwz" mr={2}/>
        <SocialIconLink Icon={FiTwitter} link="https://twitter.com/peacecwz" mr={2}/>
        <SocialIconLink Icon={RiMediumLine} link="https://medium.com/@peacecwz" mr={2}/>
        <SocialIconLink Icon={FiInstagram} link="https://instagram.com/peacecwz.dev" mr={2}/>
        <SocialIconLink Icon={FiYoutube} link="https://youtube.com/c/BarisCeviz" mr={2}/>
        <SocialIconLink Icon={FiGithub} link="https://github.com/peacecwz" mx={2}/>
        <SocialIconLink Icon={FiLinkedin} link="https://www.linkedin.com/in/peacecwz" mx={2}/>
        <SocialIconLink Icon={FiMail} link="mailto:me@barisceviz.com" mx={2}/>
    </Stack>
)

export default SocialIcons
