require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-stripe-elements',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-shopify-source',
      options: {
        shopName: process.env.SHOPIFY_STORE_NAME,
        accessToken: process.env.SHOPIFY_STORE_ACCESS_TOKEN,
        verbose: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Growfit PWA",
        short_name: "Growfit PWA",
        description: "Ecommerce App",
        start_url: "/",
        display: "standalone",
        icon: 'src/assets/images/512.png',
        "theme_color": "#ffffff",
        "background_color": "#57A3E8"
      }
    },
    
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
