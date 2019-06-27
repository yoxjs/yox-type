import {
  HOOK_BEFORE_CREATE,
  HOOK_AFTER_CREATE,
  HOOK_BEFORE_MOUNT,
  HOOK_AFTER_MOUNT,
  HOOK_BEFORE_UPDATE,
  HOOK_AFTER_UPDATE,
  HOOK_BEFORE_DESTROY,
  HOOK_AFTER_DESTROY,
  HOOK_BEFORE_ROUTE_ENTER,
  HOOK_AFTER_ROUTE_ENTER,
  HOOK_BEFORE_ROUTE_UPDATE,
  HOOK_AFTER_ROUTE_UPDATE,
  HOOK_BEFORE_ROUTE_LEAVE,
  HOOK_AFTER_ROUTE_LEAVE,
} from '../../yox-config/src/config'

import {
  VNode,
} from './vnode'

import {
  Task,
  Data,
  DataGenerator,
  Filter,
  Listener,
  PropRule,
  Watcher,
  TypedWatcher,
  ComputedGetter,
  ComputedSetter,
  TypedComputedGetter,
  TypedComputedSetter,
  OptionsBeforeCreateHook,
  OptionsOtherHook,
  RouterBeforeHook,
  RouterAfterHook,
} from './type'

import {
  TransitionHooks,
  DirectiveHooks,
} from './hooks'

import {
  YoxInterface,
} from './yox'

type Accessors<T, V> = { [K in keyof T]: V }

export interface ComputedOptions {

  // getter，必填
  get: ComputedGetter

  // setter
  set?: ComputedSetter

  // 是否开启缓存，默认为 true
  cache?: boolean

  // 是否同步监听变化，默认为 true
  sync?: boolean

  // 写死依赖，从而跳过依赖自动收集
  deps?: string[]

}

export interface TypedComputedOptions<T> extends ComputedOptions {

  // getter，必填
  get: TypedComputedGetter<T>

  // setter
  set?: TypedComputedSetter<T>

}

export interface WatcherOptions {

  // 数据变化处理器，必填
  watcher: Watcher

  // 是否立即执行一次 watcher，默认为 false
  immediate?: boolean

  // 是否同步监听变化，默认为 false
  sync?: boolean

  // 是否只监听一次，默认为 false
  once?: boolean

}

export interface TypedWatcherOptions<T> extends WatcherOptions {

  // 数据变化处理器，必填
  watcher: TypedWatcher<T>

}

export interface EmitterOptions extends Task {

  // 所在的命名空间
  ns?: string

  // 监听函数已执行次数
  num?: number

  // 监听函数的最大可执行次数
  max?: number

  // 计数器，用于扩展，随便做什么计数都行
  count?: number

}

export interface YoxOptions<Computed, Watchers, Events, Methods> {

  // 给外部命名组件的机会
  name?: string

  propTypes?: Record<string, PropRule>

  el?: string | Node

  data?: Data | DataGenerator

  template?: string | Function

  model?: string

  props?: Data

  root?: YoxInterface

  parent?: YoxInterface

  context?: YoxInterface

  replace?: true

  vnode?: VNode

  slots?: Record<string, VNode[]>

  computed?: Accessors<Computed, ComputedGetter | ComputedOptions>

  watchers?: Accessors<Watchers, Watcher | WatcherOptions>

  events?: Accessors<Events, Listener>

  methods?: Methods

  transitions?: Record<string, TransitionHooks>

  components?: Record<string, YoxOptions<Computed, Watchers, Events, Methods>>

  directives?: Record<string, DirectiveHooks>

  partials?: Record<string, string>

  filters?: Record<string, Filter>

  extensions?: Data

  [HOOK_BEFORE_CREATE]?: OptionsBeforeCreateHook

  [HOOK_AFTER_CREATE]?: OptionsOtherHook

  [HOOK_BEFORE_MOUNT]?: OptionsOtherHook

  [HOOK_AFTER_MOUNT]?: OptionsOtherHook

  [HOOK_BEFORE_UPDATE]?: OptionsOtherHook

  [HOOK_AFTER_UPDATE]?: OptionsOtherHook

  [HOOK_BEFORE_DESTROY]?: OptionsOtherHook

  [HOOK_AFTER_DESTROY]?: OptionsOtherHook

  [HOOK_BEFORE_ROUTE_ENTER]?: RouterBeforeHook

  [HOOK_AFTER_ROUTE_ENTER]?: RouterAfterHook

  [HOOK_BEFORE_ROUTE_UPDATE]?: RouterBeforeHook

  [HOOK_AFTER_ROUTE_UPDATE]?: RouterAfterHook

  [HOOK_BEFORE_ROUTE_LEAVE]?: RouterBeforeHook

  [HOOK_AFTER_ROUTE_LEAVE]?: RouterAfterHook

}

export type YoxTypedOptions = YoxOptions<any, any, any, any>