import React from 'react';
import { Pagination } from 'antd';
export default {
    title: 'Example/Pagination',
    component: Pagination,
};

const Template = (args) => <Pagination {...args} />;
export const Normal = Template.bind({});
Normal.args = {
    defaultCurrent: 1,
    total: 50
}