import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
       Laboriosam quam tenetur alias animi in atque dolorem!
       Hic voluptatibus inventore quas reiciendis accusantium facere,
       similique nobis impedit.Excepturi itaque doloribus facere!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  // parameters: {
  //   backgrounds: {
  //     default: 'dark',
  //   },
  // },
};

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
