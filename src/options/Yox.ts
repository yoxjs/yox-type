import * as config from '../../../yox-config/src/config'
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

  [config.HOOK_BEFORE_CREATE]?: type.lifeCycleHook

  [config.HOOK_AFTER_CREATE]?: Function

  [config.HOOK_BEFORE_MOUNT]?: Function

  [config.HOOK_AFTER_MOUNT]?: Function

  [config.HOOK_BEFORE_UPDATE]?: Function

  [config.HOOK_AFTER_UPDATE]?: Function

  [config.HOOK_BEFORE_DESTROY]?: Function

  [config.HOOK_AFTER_DESTROY]?: Function

  [config.HOOK_BEFORE_ROUTE_ENTER]?: type.routerBeforeHook

  [config.HOOK_AFTER_ROUTE_ENTER]?: type.routerAfterHook

  [config.HOOK_BEFORE_ROUTE_UPDATE]?: type.routerBeforeHook

  [config.HOOK_AFTER_ROUTE_UPDATE]?: type.routerAfterHook

  [config.HOOK_BEFORE_ROUTE_LEAVE]?: type.routerBeforeHook

  [config.HOOK_AFTER_ROUTE_LEAVE]?: type.routerAfterHook

}