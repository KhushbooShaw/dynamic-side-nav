
import React from 'react';
import { Layout } from 'antd';
import './SideNav.scss';
import { menuItems } from 'shared/utilities/constants';
const { Sider } = Layout;

interface ISideNavProps {
  collapsed: boolean;
  userChoices: any[];
};

const SideNav: React.FC<ISideNavProps> = (props: ISideNavProps) => {   
    
        return(<Sider trigger={null} collapsible collapsed={props.collapsed}>
          <div className="logo" />
          {menuItems(props.userChoices)}
        </Sider>);    
}

export default SideNav;

