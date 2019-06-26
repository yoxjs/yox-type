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
  data,
  dataGenerator,
  computedGetter,
  computedSetter,
  filter,
  component,
  componentCallback,
  optionsBeforeCreateHook,
  optionsOtherHook,
  routerBeforeHook,
  routerAfterHook,
  IsUtil,
  DomUtil,
  ArrayUtil,
  ObjectUtil,
  StringUtil,
  LoggerUtil,
  PropRule,
  ComputedInterface,
  ObserverInterface,
  Directive,
  Task,
  VNode,
} from './type'

export type Watcher = (newValue: any, oldValue: any, keypath: string) => void

export type YoxWatcher = (this: YoxInterface, newValue: any, oldValue: any, keypath: string) => void

export type Listener = (event: CustomEventInterface, data?: data) => false | void

export type NativeListener = (event: CustomEventInterface | Event) => false | void

export type YoxListener = (this: YoxInterface, event: CustomEventInterface, data?: data) => false | void

export interface ComputedOptions {

  // getter，必填
  get: computedGetter

  // setter
  set?: computedSetter

  // 是否开启缓存，默认为 true
  cache?: boolean

  // 是否同步监听变化，默认为 true
  sync?: boolean

  // 写死依赖，从而跳过依赖自动收集
  deps?: string[]

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

export interface EmitterInterface {

  ns: boolean

  listeners: Record<string, EmitterOptions[]>

  nativeListeners?: Record<string, NativeListener>

  fire(
    type: string,
    args: any[] | void,
    filter?: (type: string, args: any[] | void, options: EmitterOptions) => boolean | void
  ): boolean

  on(
    type: string,
    listener?: Listener | EmitterOptions
  ): void

  off(
    type?: string,
    listener?: Listener
  ): void

  has(
    type: string,
    listener?: Listener
  ): boolean

}

export declare var EmitterInterface: {

  prototype: EmitterInterface

  new(ns?: boolean): EmitterInterface

}

export interface CustomEventInterface {

  // 事件名称
  type: string

  // 事件当前的阶段
  phase: number

  // 哪个组件触发的事件
  target?: YoxInterface

  // 原始事件
  originalEvent?: CustomEventInterface | Event

  // 是否已阻止事件的默认行为
  isPrevented?: true

  // 事件是否已停止传递
  isStoped?: true

  // 处理当前事件的监听器
  listener?: Function

  // 模仿 Event 的两个方法签名，避免业务代码判断事件类型
  preventDefault(): CustomEventInterface

  stopPropagation(): CustomEventInterface

  // 简单版本
  prevent(): CustomEventInterface

  stop(): CustomEventInterface

}

export declare var CustomEventInterface: {

  prototype: CustomEventInterface

  PHASE_CURRENT: number

  PHASE_UPWARD: number

  PHASE_DOWNWARD: number

  new(type: string, originalEvent?: CustomEventInterface | Event): CustomEventInterface

}

export interface YoxOptions {

  // 给外部命名组件的机会
  name?: string

  propTypes?: Record<string, PropRule>

  el?: string | Node

  data?: data | dataGenerator

  template?: string | Function

  model?: string

  props?: data

  root?: YoxInterface

  parent?: YoxInterface

  context?: YoxInterface

  replace?: true

  vnode?: VNode

  slots?: Record<string, VNode[]>

  computed?: Record<string, computedGetter | ComputedOptions>

  watchers?: Record<string, YoxWatcher | WatcherOptions>

  transitions?: Record<string, TransitionHooks>

  components?: Record<string, YoxOptions>

  directives?: Record<string, DirectiveHooks>

  partials?: Record<string, string>

  filters?: Record<string, filter>

  events?: Record<string, YoxListener>

  methods?: Record<string, Function>

  extensions?: data

  [HOOK_BEFORE_CREATE]?: optionsBeforeCreateHook

  [HOOK_AFTER_CREATE]?: optionsOtherHook

  [HOOK_BEFORE_MOUNT]?: optionsOtherHook

  [HOOK_AFTER_MOUNT]?: optionsOtherHook

  [HOOK_BEFORE_UPDATE]?: optionsOtherHook

  [HOOK_AFTER_UPDATE]?: optionsOtherHook

  [HOOK_BEFORE_DESTROY]?: optionsOtherHook

  [HOOK_AFTER_DESTROY]?: optionsOtherHook

  [HOOK_BEFORE_ROUTE_ENTER]?: routerBeforeHook

  [HOOK_AFTER_ROUTE_ENTER]?: routerAfterHook

  [HOOK_BEFORE_ROUTE_UPDATE]?: routerBeforeHook

  [HOOK_AFTER_ROUTE_UPDATE]?: routerAfterHook

  [HOOK_BEFORE_ROUTE_LEAVE]?: routerBeforeHook

  [HOOK_AFTER_ROUTE_LEAVE]?: routerAfterHook

}

export interface YoxInterface {

  $options: YoxOptions

  $emitter: EmitterInterface

  $observer: ObserverInterface

  $el?: HTMLElement

  $vnode?: VNode

  $model?: string

  $root?: YoxInterface

  $parent?: YoxInterface

  $context?: YoxInterface

  $children?: YoxInterface[]

  $refs?: Record<string, YoxInterface | HTMLElement>

  addComputed(
    keypath: string,
    computed: computedGetter | ComputedOptions
  ): ComputedInterface | void

  removeComputed(
    keypath: string
  ): void

  get(
    keypath: string,
    defaultValue?: any,
    depIgnore?: boolean
  ): any

  set(
    keypath: string | data,
    value?: any
  ): void

  on(
    type: string | Record<string, YoxListener>,
    listener?: YoxListener
  ): YoxInterface

  once(
    type: string | Record<string, YoxListener>,
    listener?: YoxListener
  ): YoxInterface

  off(
    type?: string,
    listener?: YoxListener
  ): YoxInterface

  fire(
    type: string | CustomEventInterface,
    data?: data | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, YoxWatcher | WatcherOptions>,
    watcher?: YoxWatcher | WatcherOptions,
    immediate?: boolean
  ): YoxInterface

  unwatch(
    keypath?: string,
    watcher?: YoxWatcher
  ): YoxInterface

  loadComponent(
    name: string,
    callback: componentCallback
  ): void

  createComponent(
    options: YoxOptions,
    vnode: VNode
  ): YoxInterface

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, component>,
    component?: component
  ): component | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, filter>,
    filter?: filter
  ): filter | void

  checkProps(props: data): void

  checkProp(key: string, value: any): void

  forceUpdate(data?: data): void

  destroy(): void

  nextTick(task: Function): void

  toggle(keypath: string): boolean

  increase(keypath: string, step?: number, max?: number): number | void

  decrease(keypath: string, step: number, min?: number): number | void

  insert(keypath: string, item: any, index: number | boolean): true | void

  append(keypath: string, item: any): true | void

  prepend(keypath: string, item: any): true | void

  removeAt(keypath: string, index: number): true | void

  remove(keypath: string, item: any): true | void

  copy<T>(data: T, deep?: boolean): T

}

export declare const YoxInterface: {

  prototype: YoxInterface

  is: IsUtil

  dom: DomUtil

  array: ArrayUtil

  object: ObjectUtil

  string: StringUtil

  logger: LoggerUtil

  Emitter: EmitterClass

  Event: CustomEventClass

  new(options?: YoxOptions): YoxInterface

  use(plugin: YoxPlugin): void

  create(options?: YoxOptions): YoxOptions

  nextTick(task: Function, context?: any): void

  compile(template: string, stringify?: boolean): Function | string

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, component>,
    component?: component
  ): component | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, filter>,
    filter?: filter
  ): filter | void

}

export interface YoxPlugin {
  version: string
  install(Yox: YoxClass): void
}

export interface DirectiveHooks {
  once?: true
  bind: (node: HTMLElement | YoxInterface, directive: Directive, vnode: VNode) => void
  unbind?: (node: HTMLElement | YoxInterface, directive: Directive, vnode: VNode) => void
}

export interface SpecialEventHooks {
  on: (node: HTMLElement | Window | Document, listener: NativeListener) => void
  off: (node: HTMLElement | Window | Document, listener: NativeListener) => void
}

export interface TransitionHooks {
  enter?: (node: HTMLElement) => void
  leave?: (node: HTMLElement, done: () => void) => void
}

export type YoxClass = typeof YoxInterface
export type EmitterClass = typeof EmitterInterface
export type CustomEventClass = typeof CustomEventInterface
