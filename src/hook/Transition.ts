import * as signature from '../signature'

export default interface TransitionHook {
  enter?: signature.transitionEnter
  leave?: signature.transitionLeave
}