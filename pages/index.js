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
        </Head>
        <Weather/>
        <style jsx global>{`
          @font-face {
            font-family: "Apercu";
            src: url('/../static/Apercu/apercu_regular_pro.otf') format("opentype");
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: "Apercu";
            src: url('/../static/Apercu/apercu_bold_pro.otf') format("opentype");
            font-weight: bold;
            font-style: normal;
          }

          @font-face {
            font-family: "Tiempos";
            src: url('/../static/Tiempos/TiemposHeadline-Semibold.otf') format("opentype");
            font-weight: bold;
            font-style: normal;
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

          img {
            display: block;
            width: 100%;
            height: auto;
          }

          input[type="password"],
          input[type="email"],
          input[type="text"],
          input[type="submit"],
          textarea,
          button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          select {
            -webkit-appearance: none;
            -webkit-border-radius: 0px;
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
        `}</style>
      </div>
    )
  }
}
