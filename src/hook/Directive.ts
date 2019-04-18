import * as signature from '../signature'

export default interface DirectiveHook {
  bind: signature.directiveBind
  update?: signature.directiveUpdate
  unbind?: signature.directiveUnbind
}