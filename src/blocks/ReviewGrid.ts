import { Block } from 'payload';

import icon from '@/fields/icon';

export type Type = {
  size: 'small' | 'medium' | 'large'
}

const ReviewGrid: Block = {
  slug: 'reviewGrid',
  labels: {
    singular: 'Review Grid',
    plural: 'Review Grids',
  },
  fields: [
		{
			name: 'stars',
			label: 'Stars',
			type: 'number',
			max: 5
		},
		{
			name: 'review',
			label: 'Review',
			type: 'text',
		},
		{
			name: 'name',
			label: 'Name',
			type: 'text',
		},
  ],
};

export default Spacer;