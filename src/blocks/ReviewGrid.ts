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
					name: 'cols', 
					label: 'Columns to span',
					type: 'select',
					defaultValue: '1',
					options: [
						{
							label: '1',
							value: '1',
						},
						{
							label: '2',
							value: '2',
						},
						{
							label: '3',
							value: '3',
						},
						{
							label: '4',
							value: '4',
						},
						
					],
				},
				{
					name: 'type', 
					label: 'Type',
					type: 'select',
					defaultValue: 'review',
					options: [
						{
							label: 'Review',
							value: 'review',
						},
						{
							label: 'Call to Action Link',
							value: 'callToActionLink',
						},
						
					],
				},
				{
					name: 'stars',
					type: 'number',
					defaultValue: 5,
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
				{
					name: 'title',
					label: 'Title',
					type: 'text',
				},
				{
					name: 'url',
					label: 'Url',
					type: 'text',
				},
				{
					name: 'urlTitle',
					label: 'Url Title',
					type: 'text',
				},
				icon,
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