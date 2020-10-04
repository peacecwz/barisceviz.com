import React from 'react';
import Container from '../../components/Container';
import {Heading, Link, Flex, Button} from '@chakra-ui/core';
import ReactMarkdown from 'react-markdown/with-html';
import Layout from '../../components/Layout';

const bio = `
  👋 Merhaba, Ben Barış. Trendyol'da milyonlarca müşterimiz için ölçeklenebilir uygulamalar geliştiriyorum. Yıldız Teknik ve Anadolu Üniversitesi öğrencisiyim.  🤘

  <br />

  Birçok stack üzerinde çalışan birisi olarak sık kullandığım stackler: .NET/.NET Core (C#), Spring Boot (Java), NodeJS (Typescript) ve Go. Aynı zamanda Frontend tarafında Angular, React ve Nextjs. Tabi sadece Web stackleri değil, Mobil dünyadaki stacklerde de deneyimlerim mevcuttur. React Native, Xamarin ve Android üzerinde de projeler geliştirdim.

  <br />

  Scode ismiyle Türkiye pazarında kodlama öğreten bir mobil platform olmayı hedefleyen startup kurduk. Yaklaşık 2,5 sene kadar çok güzel başarılar ve deneyimler kazandık. 3 kişilik ekip ile 400k+ indirmeye sahip bir mobil platform inşaa ettik. Google Play tarafından Yenilikçilik kategorisinde 2017'in en iyi uygulaması olarak seçildik. Birçok startup yarışmalarında dereceler kazandık. San Francisco ve Munich gibi startup dünyasının kalbinde sunumlar ve faaliyetler gösterdik

  <br />
  
  Medium üzerinde teknik yazılar yazıyorum, Github üzerinde Open Source dünyasına katkılarda bulunmaktayım. Yakın zamanda Youtube üzerinde yayın yapmaya başladım. Topluluklar için içerik üreten ve öğrendiklerimizi öğretmeyi hedeflemekteyim.
`

const About = () => (
    <Layout title="Hakkımda">
        <Container>
            <Flex alignItems="center" my={6}>
                <Heading flexGrow={1}>
                    Hakkımda
                </Heading>

                <Link target="_blank" href="https://linkedin.com/in/peacecwz" _hover={{textDecoration: "none"}}>
                    <Button rightIcon="external-link">
                        CV
                    </Button>
                </Link>
            </Flex>

            <ReactMarkdown source={bio} renderers={{link: Link}} escapeHtml={false}/>
        </Container>
    </Layout>
);

export default About;
