import ButtonDelete from './ButtonDelete';

export default {
  title: 'components/ButtonDelete',
  component: ButtonDelete,
};

const Template = args => <ButtonDelete {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'children',
};
