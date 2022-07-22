import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
import Preloader from "../resources/components/preloader";
class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
	<title>Cabe - Minimal and Personal Blog Template</title>
	<meta name="description" content="Cabe - Minimal and Personal Blog Template"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.png"/>
	<link href="../../external.html?link=https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet"/>
	<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="all"/>
	<link rel="stylesheet" href="css/style.css" type="text/css" media="all"/>
	<link rel="stylesheet" href="css/font-awesome.min.css"/>
	<link rel="stylesheet" href="css/owl.carousel.min.css"/>
	<link rel="stylesheet" href="css/owl.theme.default.min.css"/>
    <Script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></Script>
    <Script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></Script>
    </Head>
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
         <Preloader />
          <Main />
          <NextScript />
          <Script src="js/jquery-1.12.3.min.js"></Script>
          <Script src="js/popper.min.js"></Script>
<Script src="js/plugin.js"></Script>
<Script src="js/main.js"></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;