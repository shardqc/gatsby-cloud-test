import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { PageHeader,Carousel,Heading,Image } from "grommet"



import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
const IndexPage = () =>{
    return(
    <main>
        <PageHeader
            title="Photo Website"
            subtitle="Built using Gatsby cloud!"
            parent={<Anchor />}
        />
        <Heading >Carousel with 3 random cat photos from the Cataas API</Heading>

    </main>
    )
  
}

export default IndexPage
