import * as type from '../type'

import Yox from '../Yox'
import ComputedOptions from './Computed'
import WatcherOptions from './Watcher'
import DirectiveHook from '../hooks/Directive'
import TransitionHook from '../hooks/Transition'

export default interface YoxOptions {

  el?: string | Node

  data?: Record<string, any> | Function

  template?: string

  model?: string

  props?: Record<string, any>

  parent?: Yox

  replace?: boolean

  computed?: Record<string, type.computedGetter | ComputedOptions>

  transitions?: Record<string, TransitionHook>

  components?: Record<string, YoxOptions>

  directives?: Record<string, DirectiveHook>

  partials?: Record<string, string>

  filters?: Record<string, Function | Record<string, Function>>

  slots?: Record<string, any>

  events?: Record<string, type.eventListener>

  methods?: Record<string, Function>

  watchers?: Record<string, type.watcher | WatcherOptions>

  extensions?: Record<string, any>

}