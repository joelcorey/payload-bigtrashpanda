import { CollectionConfig } from 'payload'
// import { text } from 'payload/fields/validations'

export type Type = {
  color?: {
    color: ''
  }
}

const Color: CollectionConfig = {
	slug: 'colors',
	access: {
		read: () => true
	},
	admin: {
		useAsTitle: 'name'
	},
  fields: [
		{
			name: 'name',
			label: 'Name',
			type: 'text',
		},
		{
			name: 'html',
			label: 'HTML Value',
			type: 'text',
			defaultValue: '#FFFFFF' // white
		},
		{
			name: 'rgba',
			label: 'RGBA Value',
			type: 'text',
			defaultValue: '255,255,255, 0.9' // white
		},
		{
			name: 'cmyk',
			label: 'CMYK Value',
			type: 'text',
			defaultValue: 'C = 0, M = 0, Y = 0, K = 0' // it would be the stock paper you are using for CMYK, but this could count as a white
		},
		{
			name: 'preferredColorCode',
			label: 'Preferred Color Code',
			type: 'select',
			defaultValue: 'HTML',
			options: [
				{
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'RGBA',
          value: 'rgba',
        },
        {
          label: 'CMYK',
          value: 'cmyk',
        },
			]
		},
	],
}

export default Color