import {
  HOOK_BEFORE_CREATE,
  HOOK_AFTER_CREATE,
  HOOK_BEFORE_RENDER,
  HOOK_AFTER_RENDER,
  HOOK_BEFORE_MOUNT,
  HOOK_AFTER_MOUNT,
  HOOK_BEFORE_UPDATE,
  HOOK_AFTER_UPDATE,
  HOOK_BEFORE_DESTROY,
  HOOK_AFTER_DESTROY,
  HOOK_BEFORE_PROPS_UPDATE,
} from 'yox-config/src/config'

import {
  VNode,
  Slots,
} from './vnode'

import {
  Data,
  Filter,
  PropRule,
  Watcher,
  Listener,
  ThisWatcher,
  ThisListener,
  ComputedGetter,
  ComputedSetter,
  ComputedOutput,
  DirectiveFunction,
} from './type'

import {
  TransitionHooks,
} from './hooks'

import {
  YoxInterface,
} from './yox'

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

  // 入口参数，调用 getter 函数的参数列表
  input?: any[]

  // 出口函数，方便获取计算属性最终的返回值
  output?: ComputedOutput,

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

export interface ThisWatcherOptions<This = any> {

  // 数据变化处理器，必填
  watcher: ThisWatcher<This>

  // 是否立即执行一次 watcher，默认为 false
  immediate?: boolean

  // 是否同步监听变化，默认为 false
  sync?: boolean

  // 是否只监听一次，默认为 false
  once?: boolean

}

export interface ListenerOptions {

  // 数据变化处理器，必填
  listener: Listener

  // 命名空间
  ns: string

}

export interface ThisListenerOptions<This = any> {

  // 数据变化处理器，必填
  listener: ThisListener<This>

  // 命名空间
  ns: string

}

export interface TypeListenerOptions {

  // 事件名称，必填
  type: string

  // 数据变化处理器，必填
  listener: Listener

  // 命名空间
  ns: string

}

export interface ThisTypeListenerOptions<This = any> {

  // 事件名称，必填
  type: string

  // 数据变化处理器，必填
  listener: ThisListener<This>

  // 命名空间
  ns: string

}

export interface EmitterEvent {

  // 事件名称
  type: string

  // 命名空间
  ns?: string

}

export interface EmitterFilter {

  // 事件名称
  type?: string

  // 命名空间
  ns?: string

  // 事件处理函数
  listener?: Function

}

export interface EmitterOptions {

  // 所在的命名空间
  ns?: string

  // 监听函数已执行次数
  num?: number

  // 监听函数的最大可执行次数
  max?: number

  // 计数器，用于扩展，随便做什么计数都行
  count?: number

  // 执行函数的上下文对象
  ctx?: any

  // 事件处理函数
  listener: Function

}

type DataGenerator<T> = (options: ComponentOptions<T>) => Data

type Accessors<T, V> = { [K in keyof T]: V }

type ComponentOptionsHook = () => void

export interface ComponentOptions<Computed = any, Watchers = any, Events = any, Methods = any> {

  // 给外部命名组件的机会
  name?: string

  propTypes?: Record<string, PropRule>

  el?: string | Node

  data?: Data | DataGenerator<YoxInterface>

  template?: string | Function

  model?: string

  props?: Data

  root?: YoxInterface

  parent?: YoxInterface

  context?: YoxInterface

  replace?: true

  vnode?: VNode

  slots?: Slots

  computed?: Accessors<Computed, ComputedGetter | ComputedOptions>

  watchers?: Accessors<Watchers, Watcher | WatcherOptions>

  events?: Accessors<Events, Listener | ListenerOptions> | TypeListenerOptions[]

  methods?: Methods

  transitions?: Record<string, TransitionHooks>

  components?: Record<string, ComponentOptions>

  directives?: Record<string, DirectiveFunction>

  filters?: Record<string, Filter>

  extensions?: Data

  [HOOK_BEFORE_CREATE]?: (options: ComponentOptions) => void

  [HOOK_AFTER_CREATE]?: ComponentOptionsHook

  [HOOK_BEFORE_RENDER]?: (props: Data) => void

  [HOOK_AFTER_RENDER]?: ComponentOptionsHook

  [HOOK_BEFORE_MOUNT]?: ComponentOptionsHook

  [HOOK_AFTER_MOUNT]?: ComponentOptionsHook

  [HOOK_BEFORE_UPDATE]?: ComponentOptionsHook

  [HOOK_AFTER_UPDATE]?: ComponentOptionsHook

  [HOOK_BEFORE_DESTROY]?: ComponentOptionsHook

  [HOOK_AFTER_DESTROY]?: ComponentOptionsHook

  [HOOK_BEFORE_PROPS_UPDATE]?: (props: Data) => void

}
