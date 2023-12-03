import './loader.sass'

// interface Props {
// size?: 'sm' | 'md'
// }

export interface LoaderProps {}

export function Loader() {
  return (
    <span className="aurora-loader" />
    /*<span
      className={classNames('aurora-loader', {
        [`aurora-loader--${size}`]: size
      })}
    />*/
  )
}
