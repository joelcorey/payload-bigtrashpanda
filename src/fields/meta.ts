import { Field } from 'payload'

export type Type = {
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
}

const meta: Field = {
	name: 'meta',
	label: 'Page Meta',
	type: 'group',
	admin: {
		position: 'sidebar',
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text'
		},
		{
			name: 'description',
			label: 'Description',
			type: 'text'
		},
		{
			name: 'keywords',
			label: 'Keywords',
			type: 'text'
		},
	]
}

export default meta