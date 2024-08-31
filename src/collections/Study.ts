import { CollectionConfig } from 'payload'

import slug from '../fields/slug'
import meta from '../fields/meta'

const Study: CollectionConfig = {
	slug: 'studies',
  fields: [
    {
      name: 'title',
			label: 'Title',
      type: 'text',
      required: true,
    },
		{
			name: 'featuredImage',
			label: 'Featured Image',
			type: 'upload',
			relationTo: 'media'
		},
		{
      name: 'description',
			label: 'Description',
      type: 'textarea',
    },
		{
			name: 'client',
			label: 'Client',
			type: 'text',
			admin: {
				position: 'sidebar'
			}
		},
		{
			name: 'location',
			// label: 'Location',
			type: 'group',
			admin: {
				position: 'sidebar'
			},
			fields: [
				{
					name: 'location',
					label: 'Location',
					type: 'text',
				},
			]
		},
		{
			name: 'categories',
			label: 'Categories',
			type: 'relationship',
			relationTo: 'categories',
			hasMany: true,
			admin: {
				position: 'sidebar'
			}
		},
		slug,
		meta
  ],
}

export default Study