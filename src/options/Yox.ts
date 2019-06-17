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

  template?: string | Function

  model?: string

  props?: type.data

  root?: Yox

  parent?: Yox

  context?: Yox

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

  [config.HOOK_BEFORE_CREATE]?: type.yoxOptionsBeforeCreateHook

  [config.HOOK_AFTER_CREATE]?: type.yoxOptionsOtherHook

  [config.HOOK_BEFORE_MOUNT]?: type.yoxOptionsOtherHook

  [config.HOOK_AFTER_MOUNT]?: type.yoxOptionsOtherHook

  [config.HOOK_BEFORE_UPDATE]?: type.yoxOptionsOtherHook

  [config.HOOK_AFTER_UPDATE]?: type.yoxOptionsOtherHook

  [config.HOOK_BEFORE_DESTROY]?: type.yoxOptionsOtherHook

  [config.HOOK_AFTER_DESTROY]?: type.yoxOptionsOtherHook

  [config.HOOK_BEFORE_ROUTE_ENTER]?: type.yoxRouterBeforeHook

  [config.HOOK_AFTER_ROUTE_ENTER]?: type.yoxRouterAfterHook

  [config.HOOK_BEFORE_ROUTE_UPDATE]?: type.yoxRouterBeforeHook

  [config.HOOK_AFTER_ROUTE_UPDATE]?: type.yoxRouterAfterHook

  [config.HOOK_BEFORE_ROUTE_LEAVE]?: type.yoxRouterBeforeHook

  [config.HOOK_AFTER_ROUTE_LEAVE]?: type.yoxRouterAfterHook

}