const htmlResponse = compose(
  buildHTMLPage,		   // 3단계
  renderComponentsToHTML,	   // 2단계
  makeClientStoreFrom(serverStore) // 1단계
)
