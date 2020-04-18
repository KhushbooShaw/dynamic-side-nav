
import React from 'react';
import { Layout } from 'antd';
import './PageLayout.scss';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router-dom';
import ConfigPage from 'components/configPage/ConfigPage';
import RateContract from 'components/rateContract/RateContract';
import ReleaseOrder from 'components/releaseOrder/ReleaseOrder';
import PO from 'components/po/PO';
const { Header, Content } = Layout;

interface IPageLayoutProps {
  collapsed: boolean;
  toggle: () => void;
};

const PageLayout: React.FC<IPageLayoutProps> = (props: IPageLayoutProps) => {   
  return ( <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0}}>
          {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: props.toggle
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
         <Switch>
          <Route exact path="/" component={ConfigPage} />
          <Route path="/rateContract" component={RateContract} />
          <Route path="/releaseOrder" component={ReleaseOrder} />
          <Route path="/po" component={PO} />
         </Switch>
        </Content>
      </Layout>);
}

export default PageLayout;

