import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
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

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const headline = data.allContentfulPageHeadline.edges[0].node.quote
  const siteLogo = data.allContentfulWebsiteLogo.edges[0].node.logoImage.fluid
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
      <Header />
      <div className="logo-merger">
        <Img className="site-logo" fluid={siteLogo} />
      </div>

      <div className="headline">
        <div className="headline-window">
          <svg
            id="Capa_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m452 452c0-19.364 0-379.049 0-392-17.189 0-374.781 0-392 0v392zm-181-30v-151h36.134c14.458 51.9 59.786 91.061 114.866 96.363v54.637zm151-84.811c-38.424-4.806-70.304-30.967-83.356-66.189h83.356zm-59.815-247.189v95.5h30v-95.5h29.815v151h-89.555c-.289-5.402-.097 1.389-.152-151zm-91.185 0h31.293c.05 154.65-.111 145.306.123 151h-31.416zm-30 0v151h-31.416c.235-5.735.074 1.792.123-151zm-151 0h29.814v95.5h30v-95.5h29.893c-.056 152.717.133 145.671-.152 151h-89.555zm83.356 181c-13.053 35.222-44.933 61.383-83.356 66.189v-66.189zm-83.356 151v-54.637c55.08-5.302 100.408-44.463 114.866-96.363h36.134v151z" />
              <path d="m0 0v512h512v-512zm482 482h-452v-452h452z" />
            </g>
          </svg>
          <div className="gap" />
          <svg
            id="Capa_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m452 452c0-19.364 0-379.049 0-392-17.189 0-374.781 0-392 0v392zm-181-30v-151h36.134c14.458 51.9 59.786 91.061 114.866 96.363v54.637zm151-84.811c-38.424-4.806-70.304-30.967-83.356-66.189h83.356zm-59.815-247.189v95.5h30v-95.5h29.815v151h-89.555c-.289-5.402-.097 1.389-.152-151zm-91.185 0h31.293c.05 154.65-.111 145.306.123 151h-31.416zm-30 0v151h-31.416c.235-5.735.074 1.792.123-151zm-151 0h29.814v95.5h30v-95.5h29.893c-.056 152.717.133 145.671-.152 151h-89.555zm83.356 181c-13.053 35.222-44.933 61.383-83.356 66.189v-66.189zm-83.356 151v-54.637c55.08-5.302 100.408-44.463 114.866-96.363h36.134v151z" />
              <path d="m0 0v512h512v-512zm482 482h-452v-452h452z" />
            </g>
          </svg>
        </div>
        <h1 className="headline-text">{headline}</h1>

        <Link
          to="/available-kittens"
          className="headline-button button button--primary button--shadow"
        >
          See Our Cats
        </Link>
      </div>

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
