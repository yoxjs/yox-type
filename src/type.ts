import * as config from '../../yox-config/src/config'

export declare type hint = 1 | 2 | 3

export declare type lazy = number | true

export declare type propType = (key: string, value: any) => void

export declare type propValue = () => any

export declare type data = Record<string, any>

export declare type dataGenerator = (options: YoxOptions) => data

export declare type getter = () => any

export declare type setter = (value: any) => void

export declare type formater = (...args: any) => string | number | boolean

export declare type filter = formater | Record<string, formater>

export declare type watcher = (newValue: any, oldValue: any, keypath: string) => void

export declare type listener = (event: CustomEvent, data?: data) => false | void

export declare type nativeListener = (event: CustomEvent | Event) => false | void

export declare type enter = (node: HTMLElement) => void

export declare type leave = (node: HTMLElement, done: () => void) => void

export declare type bind = (node: HTMLElement | Yox, directive: Directive, vnode: VNode) => void

export declare type unbind = (node: HTMLElement | Yox, directive: Directive, vnode: VNode) => void

export declare type on = (node: HTMLElement | Window | Document, listener: nativeListener) => void

export declare type off = (node: HTMLElement | Window | Document, listener: nativeListener) => void

export declare type componentCallback = (options: YoxOptions) => void

export declare type componentLoader = (callback: componentCallback) => void

export declare type component = YoxOptions | componentLoader

export declare type optionsBeforeCreateHook = (options: YoxOptions) => void

export declare type optionsOtherHook = () => void

export declare type routerBeforeHook = (to: Location, from: Location | void, next: (value?: false | string | RouteTarget) => void) => void

export declare type routerAfterHook = (to: Location, from: Location | void) => void

export interface ValueHolder {
  keypath?: string
  value: any
}

export interface Attribute {

  readonly name: string

  readonly value: string

}

export interface Property {

  readonly name: string

  readonly value: any

  readonly hint: hint

}

export interface Directive {

  // 指令命名空间，如 event
  readonly ns: string

  // 指令名称，如 click
  readonly name: string

  // vnode 级别每个指令的 unique key
  readonly key: string

  // 指令的值，一般是字面量，比如 o-x="1" 中的 1
  // 如果不是字面量，则提供 getter 函数用于取值，同时 value 也会保留字面量
  readonly value?: string | number | boolean

  // 必须有 hooks
  readonly hooks: DirectiveHooks

  // 取值函数
  readonly getter?: getter | void

  // 事件或函数调用式的指令会编译成 handler
  readonly handler?: listener | void

  // 单向绑定的 keypath
  readonly binding?: string | void

  // 单向绑定的 hint，用于区分 attr 和 prop
  readonly hint?: hint | void

}

export interface VNode {

  data: data

  // 真实节点
  node: Node

  // 组件实际的父组件
  parent?: Yox

  // 插槽名称
  slot?: string

  // 渲染节点时的 keypath
  readonly keypath: string

  // 渲染该节点的组件
  readonly context: Yox

  // 元素节点或组件节点的标签名称
  readonly tag?: string | void

  // 是否是 组件节点
  readonly isComponent?: boolean

  // 是否是 注释节点
  readonly isComment?: boolean

  // 是否是 文本节点
  readonly isText?: boolean

  // 是否是 svg 元素
  readonly isSvg?: boolean

  // 是否是 style 元素
  readonly isStyle?: boolean

  // 是否是 option 元素
  readonly isOption?: boolean

  readonly isStatic?: boolean

  readonly props?: data

  readonly slots?: Record<string, VNode[]>

  readonly nativeProps?: Record<string, Property>

  readonly nativeAttrs?: Record<string, Attribute>

  readonly directives?: Record<string, Directive>

  // 如果 directives 有值，则 lazy 必有值
  readonly lazy?: Record<string, lazy>

  readonly transition?: TransitionHooks

  readonly ref?: string

  readonly key?: string

  readonly text?: string

  readonly html?: string

  readonly children?: VNode[]

}

export interface API {

  createElement(tag: string, isSvg?: boolean): Element

  createText(text: string): Text

  createComment(text: string): Comment

  prop(node: HTMLElement, name: string, value?: string | number | boolean): string | number | boolean | void

  removeProp(node: HTMLElement, name: string, hint?: hint): void

  attr(node: HTMLElement, name: string, value?: string): string | void

  removeAttr(node: HTMLElement, name: string): void

  before(parentNode: Node, node: Node, beforeNode: Node): void

  append(parentNode: Node, node: Node): void

  replace(parentNode: Node, node: Node, oldNode: Node): void

  remove(parentNode: Node, node: Node): void

  parent(node: Node): Node | void

  next(node: Node): Node | void

  find(selector: string): Element | void

  tag(node: Node): string | void

  text(node: Node, text?: string, isStyle?: boolean, isOption?: boolean): string | void

  html(node: Element, html?: string, isStyle?: boolean, isOption?: boolean): string | void

  addClass(node: HTMLElement, className: string): void

  removeClass(node: HTMLElement, className: string): void

  on(node: HTMLElement | Window | Document, type: string, listener: listener): void

  off(node: HTMLElement | Window | Document, type: string, listener: listener): void

  addSpecialEvent(type: string, hooks: SpecialEventHooks): void

}

interface arrayUtil {

  each<T>(
    array: T[],
    callback: (item: T, index: number, length: number) => boolean | void,
    reversed?: boolean
  ): void

  push<T>(array: T[], target: T | T[]): void

  unshift<T>(array: T[], target: T | T[]): void

  indexOf<T>(array: T[], target: T, strict?: boolean): number

  last<T>(array: T[]): T | void

  pop<T>(array: T[]): T | void

  remove<T>(array: T[], target: T, strict?: boolean): number

  has<T>(array: T[], target: T, strict?: boolean): boolean

  toArray<T>(array: T[] | ArrayLike<T>): T[]

  toObject(array: any[], key?: string | null, value?: any): Object

  join(array: string[], separator: string): string

  falsy(array: any): boolean

}

interface isUtil {

  func(value: any): boolean

  array(value: any): boolean

  object(value: any): boolean

  string(value: any): boolean

  number(value: any): boolean

  boolean(value: any): boolean

  numeric(value: any): boolean

}

interface loggerUtil {

  DEBUG: number

  INFO: number

  WARN: number

  ERROR: number

  FATAL: number

  debug(msg: string, tag?: string): void

  info(msg: string, tag?: string): void

  warn(msg: string, tag?: string): void

  error(msg: string, tag?: string): void

  fatal(msg: string, tag?: string): void

}

interface objectUtil {

  keys(object: data): string[]

  sort(object: data, desc?: boolean): string[]

  each(object: data, callback: (value: any, key: string) => boolean | void): void

  clear(object: data): void

  extend(original: data, object: data): data

  merge(object1: data | void, object2: data | void): data | void

  copy(object: any, deep?: boolean): any

  get(object: any, keypath: string): ValueHolder | undefined

  set(object: data, keypath: string, value: any, autofill?: boolean): void

  has(object: data, key: string | number): boolean

  falsy(object: any): boolean

}

interface stringUtil {

  camelize(str: string): string

  hyphenate(str: string): string

  capitalize(str: string): string

  trim(str: any): string

  slice(str: string, start: number, end?: number): string

  indexOf(str: string, part: string, start?: number): number

  lastIndexOf(str: string, part: string, end?: number): number

  startsWith(str: string, part: string): boolean

  endsWith(str: string, part: string): boolean

  charAt(str: string, index?: number): string

  codeAt(str: string, index?: number): number

  upper(str: string): string

  lower(str: string): string

  has(str: string, part: string): boolean

  falsy(str: any): boolean

}

export interface Task {

  // 待执行的函数
  fn: Function

  // 执行函数的上下文对象
  ctx?: any

}

export interface NextTask {

  append(func: Function, context?: any): void

  prepend(func: Function, context?: any): void

  clear(): void

  run(): void

}

export interface ComputedOptions {

  // getter，必填
  get: getter

  // setter
  set?: setter

  // 是否开启缓存，默认为 true
  cache?: boolean

  // 是否同步监听变化，默认为 true
  sync?: boolean

  // 写死依赖，从而跳过依赖自动收集
  deps?: string[]

}

export interface WatcherOptions {

  // 数据变化处理器，必填
  watcher: watcher

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

export interface YoxOptions {

  propTypes?: Record<string, PropRule>

  el?: string | Node

  data?: data | dataGenerator

  template?: string | Function

  model?: string

  props?: data

  root?: Yox

  parent?: Yox

  context?: Yox

  replace?: true

  vnode?: VNode

  slots?: Record<string, VNode[]>

  computed?: Record<string, getter | ComputedOptions>

  watchers?: Record<string, watcher | WatcherOptions>

  transitions?: Record<string, TransitionHooks>

  components?: Record<string, YoxOptions>

  directives?: Record<string, DirectiveHooks>

  partials?: Record<string, string>

  filters?: Record<string, filter>

  events?: Record<string, listener>

  methods?: Record<string, Function>

  extensions?: data

  [config.HOOK_BEFORE_CREATE]?: optionsBeforeCreateHook

  [config.HOOK_AFTER_CREATE]?: optionsOtherHook

  [config.HOOK_BEFORE_MOUNT]?: optionsOtherHook

  [config.HOOK_AFTER_MOUNT]?: optionsOtherHook

  [config.HOOK_BEFORE_UPDATE]?: optionsOtherHook

  [config.HOOK_AFTER_UPDATE]?: optionsOtherHook

  [config.HOOK_BEFORE_DESTROY]?: optionsOtherHook

  [config.HOOK_AFTER_DESTROY]?: optionsOtherHook

  [config.HOOK_BEFORE_ROUTE_ENTER]?: routerBeforeHook

  [config.HOOK_AFTER_ROUTE_ENTER]?: routerAfterHook

  [config.HOOK_BEFORE_ROUTE_UPDATE]?: routerBeforeHook

  [config.HOOK_AFTER_ROUTE_UPDATE]?: routerAfterHook

  [config.HOOK_BEFORE_ROUTE_LEAVE]?: routerBeforeHook

  [config.HOOK_AFTER_ROUTE_LEAVE]?: routerAfterHook

}

export interface CustomEvent {

  // 事件名称
  type: string

  // 事件当前的阶段
  // 0: 当前组件发射的事件，且当前组件正在处理
  // 1: 当前组件向上发射的事件，且已流转到父组件
  // -1: 当前组件向下发射的事件，且已流转到子组件
  phase: number

  // 哪个组件触发的事件
  target?: Yox

  // 原始事件
  originalEvent?: CustomEvent | Event

  // 是否已阻止事件的默认行为
  isPrevented?: true

  // 事件是否已停止传递
  isStoped?: true

  // 处理当前事件的监听器
  listener?: Function

  // 模仿 Event 的两个方法签名，避免业务代码判断事件类型
  preventDefault(): CustomEvent

  stopPropagation(): CustomEvent

  // 简单版本
  prevent(): CustomEvent

  stop(): CustomEvent

}

export declare var CustomEvent: {

  prototype: CustomEvent

  PHASE_CURRENT: number

  PHASE_UPWARD: number

  PHASE_DOWNWARD: number

  new(type: string, originalEvent?: CustomEvent | Event): CustomEvent

}

export interface Emitter {

  ns: boolean

  listeners: Record<string, EmitterOptions[]>

  nativeListeners?: Record<string, nativeListener>

  fire(
    type: string,
    args: any[] | void,
    filter?: (type: string, args: any[] | void, options: EmitterOptions) => boolean | void
  ): boolean

  on(
    type: string,
    listener?: Function | EmitterOptions
  ): void

  off(
    type?: string,
    listener?: Function
  ): void

  has(
    type: string,
    listener?: Function
  ): boolean

}

export declare var Emitter: {

  prototype: Emitter

  new(ns?: boolean): Emitter

}

export interface Observer {

  data: data

  context: any

  nextTask: NextTask

  addComputed(
    keypath: string,
    options: getter | ComputedOptions
  ): Computed | void

  removeComputed(
    keypath: string
  ): void

  diff(
    keypath: string,
    newValue: any,
    oldValue: any
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

  watch(
    keypath: string | Record<string, watcher | WatcherOptions>,
    watcher?: watcher | WatcherOptions,
    immediate?: boolean
  ): void

  unwatch(
    keypath?: string,
    watcher?: watcher
  ): void

  toggle(keypath: string): boolean

  increase(keypath: string, step?: number, max?: number): number | void

  decrease(keypath: string, step: number, min?: number): number | void

  insert(keypath: string, item: any, index: number | boolean): true | void

  append(keypath: string, item: any): true | void

  prepend(keypath: string, item: any): true | void

  removeAt(keypath: string, index: number): true | void

  remove(keypath: string, item: any): true | void

  copy<T>(data: T, deep?: boolean): T

  destroy(): void

}

export declare var Observer: {

  prototype: Observer

  new(data?: data, context?: any): Observer

}

export interface Computed {

  get(force?: boolean): any

  set(value: any): void

}

export declare var Computed: {

  prototype: Computed

  current?: Computed

  build(keypath: string, observer: Observer, options: any): Computed | void

  new(
    keypath: string,
    sync: boolean,
    cache: boolean,
    deps: string[],
    observer: Observer,
    getter: getter,
    setter: setter | void
  ): Computed

}

export interface Yox {

  $options: YoxOptions

  $emitter: Emitter

  $observer: Observer

  $el?: HTMLElement

  $vnode?: VNode

  $model?: string

  $root?: Yox

  $parent?: Yox

  $context?: Yox

  $children?: Yox[]

  $refs?: Record<string, Yox | HTMLElement>

  addComputed(
    keypath: string,
    computed: getter | ComputedOptions
  ): Computed | void

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
    type: string | Record<string, listener>,
    listener?: listener
  ): Yox

  once(
    type: string | Record<string, listener>,
    listener?: listener
  ): Yox

  off(
    type?: string,
    listener?: listener
  ): Yox

  fire(
    type: string | CustomEvent,
    data?: data | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, watcher | WatcherOptions>,
    watcher?: watcher | WatcherOptions,
    immediate?: boolean
  ): Yox

  unwatch(
    keypath?: string,
    watcher?: watcher
  ): Yox

  loadComponent(
    name: string,
    callback: componentCallback
  ): void

  createComponent(
    options: YoxOptions,
    vnode: VNode
  ): Yox

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

export declare var Yox: {

  prototype: Yox

  dom: API

  is: isUtil

  array: arrayUtil

  object: objectUtil

  string: stringUtil

  logger: loggerUtil

  Emitter: typeof Emitter

  Event: typeof CustomEvent

  new(options?: YoxOptions): Yox

  use(plugin: YoxPlugin): void

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

declare type YoxClass = typeof Yox

export interface YoxPlugin {
  version: string
  install(Yox: YoxClass): void
}

export interface PropRule {
  type: string | string[] | propType
  value?: any | propValue
  required?: boolean
}

export interface DirectiveHooks {
  once?: true
  bind: bind
  unbind?: unbind
}

export interface SpecialEventHooks {
  on: on
  off: off
}

export interface TransitionHooks {
  enter?: enter
  leave?: leave
}

export interface Location {
  path: string
  url?: string
  params?: data
  query?: data
}

export interface RouteTarget {
  name?: string
  path?: string
  params?: data
  query?: data
}