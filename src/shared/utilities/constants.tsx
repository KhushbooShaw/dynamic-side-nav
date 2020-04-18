import { IUserResponse, IActivityPeriods } from "shared/models/user.model";
import React from "react";
import { Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined, AccountBookFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";

export const plainOptions = ['PO', 'Rate Contract', 'Release Order'];
export const users: IUserResponse = {
	"ok": true,
	"members": [{
			"id": "W012A3CDE",
			"real_name": "Egon Spengler",
			"tz": "America/Los_Angeles",
			"activity_periods": [{
					"start_time": "Feb 01 2020 1:33 PM",
					"end_time": "Feb 01 2020 1:54 PM"
				},
				{
					"start_time": "Mar 01 2020 11:11 AM",
					"end_time": "Mar 01 2020 2:00 PM"
				},
				{
					"start_time": "Apr 15 2020 5:33 PM",
					"end_time": "Apr 15 2020 8:02 PM"
				}
			]
		},
		{
			"id": "W07QCRPA4",
			"real_name": "Glinda Southgood",
			"tz": "Asia/Kolkata",
			"activity_periods": [{
					"start_time": "Feb 01 2020  1:33 PM",
					"end_time": "Feb 01 2020 1:54 PM"
				},
				{
					"start_time": "Mar 1 2020  11:11 AM",
					"end_time": "Mar 1 2020 2:00 PM"
				},
				{
					"start_time": "Mar 16 2020  5:33 PM",
					"end_time": "Mar 16 2020 8:02 PM"
				}
			]
		}
	]
}

export const userColumn = [
    {
      title: 'Name',
      dataIndex: 'real_name',
      key: 'real_name',
      width: '100%'
    }
];

export const dateFormat = 'YYYY-MM-DD';

export const getActivityPeriodUI = (activityPeriods: IActivityPeriods[] = []) => {
	const mockUI = activityPeriods.length > 0 ? activityPeriods.map(item => {
		return (<li><b>Start Time:</b> {item.start_time} <b>End Time:</b> {item.end_time}</li> );
	})
	: (<li>No activity on selected date</li>);
	return (<ul>{mockUI}</ul>);
};

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