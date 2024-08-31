import { Field } from 'payload'
import formatSlug from '../utilities/formatSlug'

const slug: Field = {
	name: 'slug',
	label: 'Slug',
	type: 'text',
	index: true,
	admin: {
		position: 'sidebar',
	},
	hooks: {
		beforeValidate: [formatSlug('title')],
	},
}

export default slug