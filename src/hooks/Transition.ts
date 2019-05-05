import * as type from '../type'

export default interface TransitionHooks {
  enter?: type.transitionEnter
  leave?: type.transitionLeave
}