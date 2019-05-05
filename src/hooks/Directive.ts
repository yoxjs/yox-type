import * as type from '../type'

export default interface DirectiveHooks {
  bind: type.directiveBind
  unbind?: type.directiveUnbind
}