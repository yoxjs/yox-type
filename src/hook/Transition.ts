import * as type from '../type'

export default interface TransitionHook {
  enter?: type.transitionEnter
  leave?: type.transitionLeave
}