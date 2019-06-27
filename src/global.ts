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
  Data,
  DataGenerator,
  ComputedGetter,
  Filter,
  Component,
  ComponentCallback,
  OptionsBeforeCreateHook,
  OptionsOtherHook,
  RouterBeforeHook,
  RouterAfterHook,
  PropRule,
  ComputedInterface,
  ObserverInterface,
  Directive,
  Task,
  VNode,
} from './type'

export type Watcher<T> = (this: T, newValue: any, oldValue: any, keypath: string) => void

export type Listener<T> = (this: T, event: CustomEventInterface, data?: Data) => false | void

export type NativeListener = (event: CustomEventInterface | Event) => false | void

export interface ComputedOptions<T, V> {

  // getter，必填
  get: (this: T) => V

  // setter
  set?: (this: T, value: V) => void

  // 是否开启缓存，默认为 true
  cache?: boolean

  // 是否同步监听变化，默认为 true
  sync?: boolean

  // 写死依赖，从而跳过依赖自动收集
  deps?: string[]

}

export interface WatcherOptions<T> {

  // 数据变化处理器，必填
  watcher: Watcher<T>

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

export interface EmitterInterface<T> {

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
    listener?: Listener<T> | EmitterOptions
  ): void

  off(
    type?: string,
    listener?: Listener<T>
  ): void

  has(
    type: string,
    listener?: Listener<T>
  ): boolean

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

export interface YoxOptions<Methods> {

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

  computed?: Record<string, ComputedGetter<YoxInterface> | ComputedOptions<YoxInterface, any>>

  watchers?: Record<string, Watcher<YoxInterface> | WatcherOptions<YoxInterface>>

  transitions?: Record<string, TransitionHooks>

  components?: Record<string, YoxOptions<YoxInterface>>

  directives?: Record<string, DirectiveHooks>

  partials?: Record<string, string>

  filters?: Record<string, Filter>

  events?: Record<string, Listener<YoxInterface>>

  methods?: Methods

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

export interface YoxInterface {

  $options: YoxOptions<YoxInterface>

  $emitter: EmitterInterface<YoxInterface>

  $observer: ObserverInterface<YoxInterface>

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
    computed: ComputedGetter<YoxInterface> | ComputedOptions<YoxInterface, any>
  ): ComputedInterface<YoxInterface> | void

  removeComputed(
    keypath: string
  ): void

  get(
    keypath: string,
    defaultValue?: any,
    depIgnore?: boolean
  ): any

  set(
    keypath: string | Data,
    value?: any
  ): void

  on(
    type: string | Record<string, Listener<YoxInterface>>,
    listener?: Listener<YoxInterface>
  ): YoxInterface

  once(
    type: string | Record<string, Listener<YoxInterface>>,
    listener?: Listener<YoxInterface>
  ): YoxInterface

  off(
    type?: string,
    listener?: Listener<YoxInterface>
  ): YoxInterface

  fire(
    type: string | CustomEventInterface,
    data?: Data | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, Watcher<YoxInterface> | WatcherOptions<YoxInterface>>,
    watcher?: Watcher<YoxInterface> | WatcherOptions<YoxInterface>,
    immediate?: boolean
  ): YoxInterface

  unwatch(
    keypath?: string,
    watcher?: Watcher<YoxInterface>
  ): YoxInterface

  loadComponent(
    name: string,
    callback: ComponentCallback
  ): void

  createComponent(
    options: YoxOptions<YoxInterface>,
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
    name: string | Record<string, Component>,
    component?: Component
  ): Component | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, Filter>,
    filter?: Filter
  ): Filter | void

  checkProps(props: Data): void

  checkProp(key: string, value: any): void

  forceUpdate(data?: Data): void

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
