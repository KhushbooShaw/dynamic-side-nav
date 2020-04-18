import React from "react";
import { Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined, AccountBookFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";

export const plainOptions = ['PO', 'Rate Contract', 'Release Order'];

export const userChoices: any[] = [
	{
		key: "1",
		displayName: "Config",
		link: "/",
		icon:(<UserOutlined />)
	},
	{
		key: "2",
		displayName: "PO",
		link: "/po",
		icon: (<UploadOutlined />)
	},
	{
		key: "3",
		displayName: "Rate Contract",
		link: "/rateContract",
		icon: (<VideoCameraOutlined />)
	},
	{
		key: "4",
		displayName: "Release Order",
		link: "/releaseOrder",
		icon: (<AccountBookFilled />)
	}
];

export const menuItems = (userChoices: any[]=[]) => {
	const menuUI= userChoices.map(i => {
		return (<Menu.Item key={i.key}>
		<Link to={i.link}>
	{i.icon}
	<span>{i.displayName}</span>
	</Link>
	</Menu.Item>)
	})
return (<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
{menuUI}
</Menu>);
};