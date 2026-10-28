import type { Linter } from 'eslint'
import factory from './index.js'

const config: Promise<Linter.Config[]> = factory({
	pnpm: {
		catalogs: false,
	},
})
export default config
