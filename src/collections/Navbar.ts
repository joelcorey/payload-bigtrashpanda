import { CollectionConfig } from 'payload'

import icon from '@/fields/icon'

const Navbar: CollectionConfig = {
	slug: 'navbar',
	labels: {
		singular: 'Navbar',
		plural: 'Navbar'
	},
	access: {
		read: () => true
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
				icon,
				{
					name: 'title',
					label: 'Title',
					type: 'text',
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
				},
				{
					name: 'description',
					label: 'Description',
					type: 'text'
				},
			]
		},
  ],
}

export default Navbar