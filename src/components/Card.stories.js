import PlantCard from './Card.js';

export default {
  title: 'components/Card',
  component: PlantCard,
};

const Template = args => <PlantCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Farn',
  fact: 'clean',
};
