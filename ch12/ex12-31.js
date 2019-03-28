const buildHTMLPage = ({html, state}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>유니버설 색 관리 앱</title>
      <style>${staticCSS}</style>
    </head>
    <body>
      <div id="react-container">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(state)}
      </script>
      <script src="/bundle.js"></script>
    </body>
  </html>
`
