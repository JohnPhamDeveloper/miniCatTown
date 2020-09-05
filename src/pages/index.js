import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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
import Header from '../components/Header'
import CTASection from '../components/CTASection'
import Headline from '../components/Headline'

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const headline = data.allContentfulPageHeadline.edges[0].node.quote
  const siteLogo = data.allContentfulWebsiteLogo.edges[0].node.logoImage.fluid
  const section = data.allContentfulPageSection.edges[0].node

  console.log(section)

  // const posts = data.allContentfulBlogPost.edges
  // const [author] = data.allContentfulPerson.edges

  const sectionCTAPrimary = {
    text: section.ctaPrimaryButtonText,
    link: section.ctaPrimaryButtonLink,
  }

  const sectionCTASecondary = {
    text: section.ctaSecondaryButtonText,
    link: section.ctaSecondaryButtonLink,
  }

  return (
    <div className="main">
      <Header />
      {/* Logo */}
      <div className="logo-merger">
        <Img className="site-logo" fluid={siteLogo} />
      </div>
      <Headline headlineText={headline} />
      <CTASection
        title={section.title}
        description={section.description.description}
        fluidImg={section.backgroundImage.fluid}
        ctaPrimary={sectionCTAPrimary}
        ctaSecondary={sectionCTASecondary}
        icons={section.icons}
      />
      <div
        style={{
          height: '180px',
          width: '100%',
          background: 'rgb(255, 242, 221)',
        }}
      ></div>
      <CTASection
        title={section.title}
        description={section.description.description}
        fluidImg={section.backgroundImage.fluid}
        ctaPrimary={sectionCTAPrimary}
        icons={section.icons}
      />
      {/* FOOTER */}
      <footer>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </footer>
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
    allContentfulWebsiteLogo {
      edges {
        node {
          logoImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
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
          icons {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    # allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
    #   edges {
    #     node {
    #       title
    #       slug
    #       publishDate(formatString: "MMMM Do, YYYY")
    #       tags
    #       heroImage {
    #         fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
    #           ...GatsbyContentfulFluid_tracedSVG
    #         }
    #       }
    #       description {
    #         childMarkdownRemark {
    #           html
    #         }
    #       }
    #     }
    #   }
    # }
    # allContentfulPerson(
    #   filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    # ) {
    #   edges {
    #     node {
    #       name
    #       shortBio {
    #         shortBio
    #       }
    #       title
    #       heroImage: image {
    #         fluid(
    #           maxWidth: 1180
    #           maxHeight: 480
    #           resizingBehavior: PAD
    #           background: "rgb:000000"
    #         ) {
    #           ...GatsbyContentfulFluid_tracedSVG
    #         }
    #       }
    #     }
    #   }
    # }
  }
`
