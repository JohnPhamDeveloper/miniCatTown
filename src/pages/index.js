import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import '../scss/main.scss'
// import '../scss/reset.scss'
// import '../scss/base.scss'
// import '../scss/typography.scss'
// import './index.scss'
// import get from 'lodash/get'
// import { Helmet } from 'react-helmet'
// import Hero from '../components/hero'
// import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'
import Navbar from '../components/Navbar'
import CTASection from '../components/CTASection'

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const headline = data.allContentfulPageHeadline.edges[0].node.quote
  const section = data.allContentfulPageSection.edges[0].node
  const posts = data.allContentfulBlogPost.edges
  const [author] = data.allContentfulPerson.edges

  const sectionCTAPrimary = {
    text: section.ctaPrimaryButtonText,
    link: section.ctaPrimaryButtonLink,
  }

  const sectionCTASecondary = {
    text: section.ctaSecondaryButtonText,
    link: section.ctaSecondaryButtonLink,
  }

  return (
    <div>
      <Navbar />
      <h1>{headline}</h1>
      <CTASection
        title={section.title}
        description={section.description.description}
        fluidImg={section.backgroundImage.fluid}
        ctaPrimary={sectionCTAPrimary}
        ctaSecondary={sectionCTASecondary}
      />
      <CTASection
        title={section.title}
        description={section.description.description}
        fluidImg={section.backgroundImage.fluid}
        ctaPrimary={sectionCTAPrimary}
      />
    </div>
  )
}

RootIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

RootIndex.defaultProps = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: 'Missing Title',
      }),
    }),
  }),
}

// class RootIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allContentfulBlogPost.edges')
//     const [author] = get(this, 'props.data.allContentfulPerson.edges')

//     return <div>clean</div>

//     // return (
//     //   <Layout location={this.props.location}>
//     //     <div style={{ background: '#fff' }}>
//     //       <Helmet title={siteTitle} />
//     //       <Hero data={author.node} />
//     //       <div className="wrapper">
//     //         <h2 className="section-headline">Recent articles</h2>
//     //         <ul className="article-list">
//     //           {posts.map(({ node }) => {
//     //             return (
//     //               <li key={node.slug}>
//     //                 <h2>{node.slug}</h2>
//     //                 <ArticlePreview article={node} />
//     //               </li>
//     //             )
//     //           })}
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </Layout>
//     // )
//   }
// }

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPageHeadline {
      edges {
        node {
          quote
        }
      }
    }
    allContentfulPageSection {
      edges {
        node {
          backgroundImage {
            fluid(maxWidth: 3000) {
              ...GatsbyContentfulFluid
            }
          }
          title
          description {
            description
          }
          ctaPrimaryButtonText
          ctaPrimaryButtonLink
          ctaSecondaryButtonLink
          ctaSecondaryButtonText
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
