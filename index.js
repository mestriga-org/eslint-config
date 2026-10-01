import antfu from '@antfu/eslint-config'

const myConfig = (options, ...configs) => {
	return antfu(
		{
			...options
		},
		...configs
	)
}

export default myConfig
