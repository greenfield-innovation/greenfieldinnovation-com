/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const resolve = require('path').resolve;

const createFilePath = require(`gatsby-source-filesystem`).createFilePath;

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode});
    createNodeField({node, name: `slug`, value: slug});
    createNodeField({node, name: `date`, value: slug});
  }
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const sitePageTemplate = resolve(__dirname, 'src/templates/site-page.js');
  const blogTemplate = resolve(__dirname, 'src/templates/blog-page.js');

  return graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                # redirect
                slug
              }
            }
          }
        }
      }
    `,
  ).then(allMarkdown => {
    if (allMarkdown.errors) {
      console.error(allMarkdown.errors);

      throw Error(allMarkdown.errors);
    }

    allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
      const slug = edge.node.fields.slug;
      let template;
      if (slug.includes('/blog')) {
        template = blogTemplate;
      } else {
        template = sitePageTemplate;
      }

      // const createArticlePage = path =>
      createPage({
        path: slug,
        component: template,
        context: {
          slug,
        },
      });

      // Register primary URL.
      // createArticlePage(slug);
    });
  });

};
