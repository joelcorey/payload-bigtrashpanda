import { CollectionConfig } from 'payload/types'
import { text } from 'payload/fields/validations'

import slug from '../fields/slug'

const Color: CollectionConfig = {
	slug: 'colors',
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
			name: 'hexColorValue',
			label: 'Hex Color Value',
			type: 'text',
			required: true,
		},
    slug
  ],
	admin: {
		useAsTitle: 'title'
	}
}

export default Color