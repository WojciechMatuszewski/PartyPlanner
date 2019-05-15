import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from 'next/document';
import React from 'react';
import { extractCritical } from 'emotion-server';
import { EmotionCritical } from 'create-emotion-server';

class MyDocument extends Document<EmotionCritical> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = ctx.renderPage();
    const styles = extractCritical(page.html || '');
    return { ...initialProps, ...styles };
  }

  constructor(props: any) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel="stylesheet" href="../static/nprogress.css" />
          <link rel="stylesheet" href="../static/utils.css" />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
