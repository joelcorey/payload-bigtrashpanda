import { Block } from 'payload';

import icon from '@/fields/icon';

export type Type = {
  size: 'small' | 'medium' | 'large'
}

const Spacer: Block = {
  slug: 'spacer',
  labels: {
    singular: 'Spacer',
    plural: 'Spacers',
  },
  fields: [
		{
			name: 'text',
			label: 'Text',
			type: 'text'
		},
		icon,
    {
      name: 'size',
      label: 'Size',
      type: 'radio',
      required: true,
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
  ],
};

export default Spacer;