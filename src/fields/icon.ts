import { Field } from 'payload/types'

export type IconType = 'arrowUpperRight' | 'phoneOutline'

export type Type = {
  icon?: {
    icon: IconType
  }
}

const icon: Field = {
	name: 'icon',
	label: 'Icon',
	type: 'select',
	options: [
		{
			label: 'Arrow upper right',
			value: 'arrowUpperRight'
		},
		{
			label: 'Phone outline',
			value: 'phoneOutline'
		},
		
	]
}

export default icon