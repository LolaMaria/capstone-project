import ButtonSubmit from './ButtonSubmit';

export default {
  title: 'components/ButtonSubmit',
  component: ButtonSubmit,
};

const Template = args => <ButtonSubmit {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Navigation',
};
