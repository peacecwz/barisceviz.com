import React from 'react';
import Container from '../components/Container';
import {Heading} from '@chakra-ui/core';
import Layout from '../components/Layout';

const Events = () => (
    <Layout title="Events">
        <Container>
            <Heading mt={6}>
                Events
            </Heading>
            <Heading size="md" mt={2} mb={4} color="gray.500">
                I've joined events as a speaker
            </Heading>
        </Container>
    </Layout>
);

export default Events;
