import * as type from '../type'

export default interface DirectiveHook {
  bind: type.directiveBind
  update?: type.directiveUpdate
  unbind?: type.directiveUnbind
}