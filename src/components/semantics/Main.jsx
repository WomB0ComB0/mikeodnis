import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'
import './Main.css'

export default function Main({ className, children, style }) {
  return (
      <main className={cn('', className)} style={style}>
        {children}
      </main>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}