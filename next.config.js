require('dotenv').config()

function getAllAllowedEnvironmentVariables() {
  return Object.entries(process.env).reduce(
    (vars, [name, value]) => (/^(?:__|NODE_)/.test(name) ? vars : { ...vars, [name]: value }),
    {},
  )
}

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: {
        mode: ['html', 'react-component'],
        markdownIt: { html: true, linkify: true, breaks: true, xhtmlOut: true },
      },
    })
    return cfg
  },
  env: {
    ...getAllAllowedEnvironmentVariables(),
  },
}
