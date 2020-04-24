import React from 'react';
import Layout from '../components/Layout';
import BasicInfo from '../components/BasicInfo';
import { getProvider } from '../api/request';

export default class extends React.Component {
  static async getInitialProps({ res }) {
    try {
      let data = await getProvider();
      return { data, statusCode: 200 };
    } catch (e) {
      console.error(e);
      res.statusCode = 503;
      return { data: null, statusCode: 503 };
    }
  }
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <BasicInfo provider={data} />
      </Layout>
    );
  }
}
