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
}
