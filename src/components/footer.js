import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby'


export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
        }
      }
    }
  `)
  
  return(
    <footer>
      <p>Created By {data.site.siteMetadata.author}, 2021</p>
    </footer>
  )
}