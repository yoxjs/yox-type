import * as type from '../type'

export default interface DirectiveHooks {
  once?: boolean
  bind: type.bind
  unbind?: type.unbind
}