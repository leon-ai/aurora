import { generateKeyId } from '../../lib/utils'

import './loader.sass'

// interface Props {
// size?: 'sm' | 'md'
// }

export interface LoaderProps {}

export function Loader() {
  return (
    <span className="aurora-loader" key={`aurora-loader_${generateKeyId()}`} />
    /*<span
      className={classNames('aurora-loader', {
        [`aurora-loader--${size}`]: size
      })}
    />*/
  )
}
