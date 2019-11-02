import React from 'react';
import {graphql} from 'gatsby';
import {Typography} from 'antd';
import AShape from '../components/a-shape';
import {selectSiteMetadata} from '../selectors/siteMetadata';

import './styles.less';

const gitHubLogo = require('../../static/github-seeklogo.com.svg');

const {Text} = Typography;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }`;

interface IMetaData {
  site: {
    siteMetadata: {
      title: string,
      description: string,
    }
  };
}

interface IMainPageProps {
  data: IMetaData;
}

export const MainPage = ({data}: IMainPageProps) => (
  <div className='Root'>
      <h1 className='Logo'>
        <Text className='Name'>
          {selectSiteMetadata<IMetaData, string>(data, 'title')}
        </Text>
        <Text className='Description'>
          {selectSiteMetadata<IMetaData, string>(data, 'description')}
        </Text>
      </h1>
      <img className='GitHubLogo' src={gitHubLogo}/>
      <section className='Navigation'>
        <AShape type='develop'/>
        <AShape type='design'/>
        <AShape type='blog'/>
      </section>
  </div>
);

export default MainPage;

