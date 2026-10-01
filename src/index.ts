import antfu from '@antfu/eslint-config'

const myConfig : typeof antfu = (options, ...userConfigs) => {
	return antfu(
		{
			...options
		},
		...userConfigs
	)
}

export default myConfig
