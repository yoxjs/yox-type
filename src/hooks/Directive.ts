import * as type from '../../index'

export default interface DirectiveHooks {
  bind: type.directiveBind
  update?: type.directiveUpdate
  unbind?: type.directiveUnbind
}