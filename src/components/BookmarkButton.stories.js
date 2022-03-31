import BookmarkButton from './BookmarkButton';

export default {
  title: 'components/BookmarkButton',
  component: BookmarkButton,
};

const Template = args => <BookmarkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'children',
};
