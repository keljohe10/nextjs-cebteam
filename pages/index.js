import React from 'react';
import Layout from '../components/Layout';
import { getCourses } from '../api/request';
import CoursesBasicInfo from '../components/CoursesBasicInfo';

export default class extends React.Component {
  static async getInitialProps({ res }) {
    try {
      let data = await getCourses();
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
        <CoursesBasicInfo courses={data} />
      </Layout>
    );
  }
}
