import * as type from '../../index'

export default interface DirectiveHooks {
  bind: type.directiveBind
  unbind?: type.directiveUnbind
}