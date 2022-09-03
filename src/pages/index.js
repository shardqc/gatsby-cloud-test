import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { PageHeader,Carousel,Heading,Image,Anchor } from "grommet"



import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
async function get3Cats() {
    const catsArray = [];
    for (let index = 0; index < 3; index++) {
        const response = fetch("https://cataas.com/cat");
        const data = await (await response).json;
        catsArray[index] = data;
        
    }
    return catsArray;    
}
console.log(catsArray);
const IndexPage = () =>{
    return(
    <main>
        
        <Heading >Carousel with 3 random cat photos from the Cataas API</Heading>

    </main>
    )
  
}

export default IndexPage
