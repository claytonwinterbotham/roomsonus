/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
    if (page.path.match(/^\/search/)) {
        page.matchPath = '/search/*';
        actions.createPage(page);
    }

    if (page.path.match(/^\/destination/)) {
        page.matchPath = '/destination/*';
        actions.createPage(page);
    }
}