import * as type from '../type'

export default interface DirectiveHooks {
  bind: type.directiveBind
  update?: type.directiveUpdate
  unbind?: type.directiveUnbind
}