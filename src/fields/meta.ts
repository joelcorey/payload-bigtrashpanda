 // @ts-nocheck 

import { Field } from 'payload/types'

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