const sendHTMLPage = (req, res) =>
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>리액트 조리법 앱</title>
      </head>
      <body>
        <div id="react-container">${html}</div>
        <script>
          window.__DATA__ = ${JSON.stringify(data)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `)

const app = express()
  .use(logger)
  .use(express.static('./assets'))
  .use(sendHTMLPage)
