import React from 'react';
import { Material } from './Material';

export default {
  title: 'Example/Material',
  component: Material,
};

const Template = (args) => <Material {...args} />;
export const DefaultMat = Template.bind({});