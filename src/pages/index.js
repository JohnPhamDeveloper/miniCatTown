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
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const headline = data.allContentfulPageHeadline.edges[0].node.quote
  const siteLogo = data.allContentfulWebsiteLogo.edges[0].node.logoImage.fluid

  // We extract each section one by one rather than mapping because
  // we might want custom elements in between or custom styling for different sections
  const section = data.allContentfulPageSection.edges[0].node
  const section2 = data.allContentfulPageSection.edges[1].node

  const testimonials = data.allContentfulPageTestimonial.edges

  console.log(testimonials)
  const sectionCTAPrimary = {
    text: section.ctaPrimaryButtonText,
    link: section.ctaPrimaryButtonLink,
  }

  const sectionCTASecondary = {
    text: section.ctaSecondaryButtonText,
    link: section.ctaSecondaryButtonLink,
  }

  const section2CTAPrimary = {
    text: section2.ctaPrimaryButtonText,
    link: section2.ctaPrimaryButtonLink,
  }

  const section2CTASecondary = {
    text: section2.ctaSecondaryButtonText,
    link: section2.ctaSecondaryButtonLink,
  }

  return (
    <div className="main">
      <Header />
      {/* Logo */}
      <div className="logo-merger">
        <Img className="site-logo" fluid={siteLogo} />
      </div>
      <main>
        <Headline headlineText={headline} />
        <CTASection
          title={section.title}
          question={section.question}
          description={section.description.description}
          fluidImg={section.backgroundImage.fluid}
          ctaPrimary={sectionCTAPrimary}
          ctaSecondary={sectionCTASecondary}
          icons={section.icons}
        />
        <div
          style={{
            height: '230px',
            width: '100%',
            background: 'rgb(255, 242, 221)',
          }}
        ></div>
        <CTASection
          title={section2.title}
          question={section2.question}
          questionClassName="question-theme--1"
          description={section2.description.description}
          fluidImg={section2.backgroundImage.fluid}
          ctaPrimary={section2CTAPrimary}
          ctaSecondary={section2CTASecondary}
          icons={section2.icons}
        />

        {/* Testimonial; make className for Testimonials? */}
        <section className="testimonial-section">
          <div className="testimonial__header">
            <h1 className="testimonial__header__title">Testimonials</h1>
            <p className="testimonial__header__subtitle">
              What’s all the meow about?
            </p>
          </div>

          <div className="testimonial-content">
            <Testimonial
              quote={testimonials[0].node.quote}
              image={testimonials[0].node.image.fluid}
              name={testimonials[0].node.companypersonName}
            />
            <Testimonial
              quote={testimonials[1].node.quote}
              image={testimonials[1].node.image.fluid}
              name={testimonials[1].node.companypersonName}
            />
          </div>
        </section>
      </main>

      <Footer />
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
    allContentfulPageTestimonial {
      edges {
        node {
          name
          quote
          companypersonName
          image {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulPageSection(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: ASC }
    ) {
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
          question
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
