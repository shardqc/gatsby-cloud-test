import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { PageHeader,Carousel,Heading,Image } from "grommet"
import { Stack } from "@chakra-ui/core";


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
IndexPage = () =>{
    <Main>
        <PageHeader
            title="Photo Website"
            subtitle="Built using Gatsby cloud!"
            parent={<Anchor />}
        />
        <Heading responsive={true}>Carousel with 3 random cat photos from the Cataas API</Heading>
        <Stack>
            <Carousel>
                <Image src=""/>
                <Image src=""/>
                <Image src=""/>
            </Carousel>

        </Stack>

    </Main>
    
  
}

export default IndexPage
