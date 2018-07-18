import { Component } from 'react';
import Head from 'next/head';
import Weather from '../components/Weather';

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
          body {
            background: red;
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}
