import { Component } from 'react';
import Head from 'next/head';
import Weather from '../components/Weather/weather';

export default class Page extends Component {
  async getInitialProps() {
    return { };
  }

  render() {
    return (
      <div>
        <Head>
          <title>James Yoo Take-home Project</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Weather/>
        <style jsx global>{`
          @font-face {
            font-family: "Apercu";
            src: url('/../static/Apercu/apercu_regular_pro.otf') format("opentype");
          }

          @font-face {
            font-family: "ApercuBold";
            src: url('/../static/Apercu/apercu_bold_pro.otf') format("opentype");
          }

          @font-face {
            font-family: "Tiempos";
            src: url('/../static/Tiempos/TiemposHeadline-Semibold.otf') format("opentype");
          }

          html, body, header, nav, h1, a,
          ul, li, strong, main, button, i,
          section, img, div, h2, h3, p, form,
          label, input, textarea,
          span, article, footer, time, small {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font: inherit;
            text-align: inherit;
            text-decoration: inherit;
            vertical-align: inherit;
            box-sizing: inherit;
            background: transparent;
          }

          ul, li {
            list-style: none;
          }

          input[type="text"],
          input[type="submit"],
          textarea,
          button {
            -ms-appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          button,
          input[type="submit"] {
            cursor: pointer;
          }

          .clearfix::after {
              content: "";
              clear: both;
              display: table;
          }

          @-ms-viewport,
          @-moz-viewport,
          @-webkit-viewport {
            width: device-width ;
            zoom: 1.0 ;
          }
        `}</style>
      </div>
    )
  }
}
