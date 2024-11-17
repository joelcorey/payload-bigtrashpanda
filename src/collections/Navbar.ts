import { CollectionConfig } from 'payload'

import slug from '../fields/slug'

const Navbar: CollectionConfig = {
	slug: 'navbar',
	labels: {
		singular: 'Navbar',
		plural: 'Navbar'
	},
  fields: [
    {
      name: 'title',
			label: 'Title',
      type: 'text',
      required: true,
    },
		{
			name: 'navItems',
			label: 'Nav Items',
			type: 'array',
			labels: {
				singular: 'Navbar Item',
				plural: 'Navbar Items'
			},
			fields: [
				{
					name: 'icon', // required
					type: 'select', // required
					hasMany: false,
					admin: {
						isClearable: true,
						isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
					},
					options: [
						{
							label: 'Align Right',
							value: 'AlignRight',
						},
						{
							label: 'Baggage Claim',
							value: 'BaggageClaim',
						},
						{
							label: 'At Sign',
							value: 'AtSign',
						},
						{
							label: 'Message Square',
							value: 'MessageSquare',
						},
						{
							label: 'Message Circle Heart',
							value: 'MessageCircleHeart',
						},
						{
							label: 'Map Pin',
							value: 'MapPin',
						},
						{
							label: 'Smile',
							value: 'Smile',
						},
						{
							label: 'Sticker',
							value: 'Sticker',
						},
						{
							label: 'Milestone',
							value: 'Milestone',
						},
					],
				},
				{
					name: 'title',
					type: 'text',
				},
				{
					name: 'description',
					type: 'text'
				},
				{
					name: 'href',
					label: 'Href',
					type: 'text'
				},
				{
					name: 'hrefTitle',
					label: 'Href Title',
					type: 'text'
				}
			]
		},
  ],
}

export default Navbar