import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProductGrid from "../components/ProductGrid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <ProductGrid />
  </Layout>
)

export default IndexPage
