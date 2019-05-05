import * as type from '../type'

import Yox from '../interface/Yox'
import PropRule from '../interface/PropRule'

import VNode from '../vnode/VNode'
import DirectiveHook from '../hooks/Directive'
import TransitionHook from '../hooks/Transition'

import ComputedOptions from './Computed'
import WatcherOptions from './Watcher'

export default interface YoxOptions {

  propTypes?: Record<string, PropRule>

  el?: string | Node

  data?: type.data | type.dataGenerator

  template?: string

  model?: string

  props?: type.data

  parent?: Yox

  replace?: boolean

  computed?: Record<string, type.computedGetter | ComputedOptions>

  transitions?: Record<string, TransitionHook>

  components?: Record<string, YoxOptions>

  directives?: Record<string, DirectiveHook>

  partials?: Record<string, string>

  filters?: Record<string, Function | Record<string, Function>>

  slots?: Record<string, VNode[]>

  events?: Record<string, type.listener>

  methods?: Record<string, Function>

  watchers?: Record<string, type.watcher | WatcherOptions>

  extensions?: type.data

  beforeCreate?: type.lifeCycleHook

  afterCreate?: Function

  beforeMount?: Function

  afterMount?: Function

  beforeUpdate?: Function

  afterUpdate?: Function

  beforeDestroy?: Function

  afterDestroy?: Function

}