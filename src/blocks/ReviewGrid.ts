import { Block } from 'payload';

import icon from '@/fields/icon';
import { number } from 'payload/shared';

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
			name: 'reviews',
			label: 'Reviews',
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
			]
		},
		{
			name: 'reviewsToShow',
			label: 'Reviews to Show',
			type: 'number',
			defaultValue: 5
		}
		// {
		// 	name: 'backgroundColor',
		// 	label: 'Backbround Color',
		// 	type: 'relationship',
		// 	relationTo: 'Color'
		// }
	]
};

export default ReviewGrid;