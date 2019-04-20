import * as type from '../../index'

export default interface TransitionHooks {
  enter?: type.transitionEnter
  leave?: type.transitionLeave
}