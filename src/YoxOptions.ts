import Event from 'yox-common/util/Event'

import Yox from './Yox'
import ComputedOptions from './ComputedOptions'
import WatcherOptions from './WatcherOptions'
import DirectiveHook from './hook/Directive'
import TransitionHook from './hook/Transition'

export default interface Options {

  el?: HTMLElement

  data?: Record<string, any> | Function

  template?: string

  props?: Record<string, any>

  parent?: Yox

  replace?: boolean

  computed?: Record<string, () => any | ComputedOptions>

  transitions?: Record<string, TransitionHook>

  components?: Record<string, Options>

  directives?: Record<string, DirectiveHook>

  partials?: Record<string, string>

  filters?: Record<string, Function | Record<string, Function>>

  slots?: Record<string, any>

  events?: Record<string, (event: Event, data?: Record<string, any>) => boolean | void>

  methods?: Record<string, Function>

  watchers?: Record<string, () => void | WatcherOptions>

  extensions?: Record<string, any>

}