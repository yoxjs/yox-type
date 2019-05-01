import DirectiveHooks from './hooks/Directive'
import TransitionHooks from './hooks/Transition'
import YoxOptions from './options/Yox'

import * as type from '../index'

interface Yox {

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, YoxOptions>,
    component?: YoxOptions | type.asyncComponent
  ): YoxOptions | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, Function | Record<string, Function>>,
    filter?: Function | Record<string, Function | Record<string, Function>>
  ): Function | Record<string, Function> | void

}

export default interface YoxPlugin {
  install: (Yox: Yox) => void
}
