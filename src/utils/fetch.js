import root from 'window-or-global'
import fetch from 'isomorphic-fetch'
export default root.fetch || fetch
