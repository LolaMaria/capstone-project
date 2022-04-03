import PlantCard from './PlantCard';

export default {
  title: 'components/PlantCard',
  component: PlantCard,
};

const Template = args => <PlantCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Farn',
  fact: 'Fancy',
};
