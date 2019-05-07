import * as type from '../type'

export default interface DirectiveHooks {
  bind: type.bind
  unbind?: type.unbind
}