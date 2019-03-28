const renderComponentsToHTML = ({url, store}) =>
  ({
    state: store.getState(),
    html: renderToString(
      <Provider store={store}>
	<StaticRouter location={url} context={{}}>
	  <App />
	</StaticRouter>
      </Provider>
    )
  })
