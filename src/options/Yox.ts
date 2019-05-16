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

  root?: Yox

  parent?: Yox

  replace?: true

  vnode?: VNode

  slots?: Record<string, VNode[]>

  computed?: Record<string, type.getter | ComputedOptions>

  watchers?: Record<string, type.watcher | WatcherOptions>

  transitions?: Record<string, TransitionHook>

  components?: Record<string, YoxOptions>

  directives?: Record<string, DirectiveHook>

  partials?: Record<string, string>

  filters?: Record<string, type.filter>

  events?: Record<string, type.listener>

  methods?: Record<string, Function>

  extensions?: type.data

  beforeCreate?: type.lifeCycleHook

  afterCreate?: Function

  beforeMount?: Function

  afterMount?: Function

  beforeUpdate?: Function

  afterUpdate?: Function

  beforeDestroy?: Function

  afterDestroy?: Function

  beforeChildCreate?: type.lifeCycleHook

  afterChildCreate?: (child: Yox) => void

  beforeChildDestroy?: (child: Yox) => void

  afterChildDestroy?: (child: Yox) => void

}