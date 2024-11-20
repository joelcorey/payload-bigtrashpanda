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
			name: 'review',
			label: 'Review',
			type: 'array',
			minRows: 1,
			maxRows: 10,
			labels: {
				singular: 'Review',
				plural: 'Reviews'
			},
			fields: [
				{
					name: 'stars',
					type: 'number',
					max: 5
				},
				{
					name: 'reviewText',
					label: 'Review Text',
					type: 'text'
				},
				{
					name: 'name',
					label: 'Name',
					type: 'text',
				},
				// {
				// 	name: 'backgroundColor',
				// 	label: 'Backbround Color',
				// 	type: 'relationship',
				// 	relationTo: ['Color']
				// }
			]
		},
	]
};

export default ReviewGrid;