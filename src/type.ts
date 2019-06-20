export type hint = 1 | 2 | 3

export type lazy = number | true

export type propType = (key: string, value: any) => void

export type propValue = () => any

export type data = Record<string, any>

export type dataGenerator = (options: YoxOptions) => data

export type getter = () => any

export type setter = (value: any) => void

export type formater = (...args: any) => string | number | boolean

export type filter = formater | Record<string, formater>

export type watcher = (newValue: any, oldValue: any, keypath: string) => void

export type listener = (event: CustomEventInterface, data?: data) => false | void

export type nativeListener = (event: CustomEventInterface | Event) => false | void

export type enter = (node: HTMLElement) => void

export type leave = (node: HTMLElement, done: () => void) => void

export type bind = (node: HTMLElement | YoxInterface, directive: Directive, vnode: VNode) => void

export type unbind = (node: HTMLElement | YoxInterface, directive: Directive, vnode: VNode) => void

export type on = (node: HTMLElement | Window | Document, listener: nativeListener) => void

export type off = (node: HTMLElement | Window | Document, listener: nativeListener) => void

export type componentCallback = (options: YoxOptions) => void

export type componentLoader = (callback: componentCallback) => void

export type component = YoxOptions | componentLoader

export type optionsBeforeCreateHook = (options: YoxOptions) => void

export type optionsOtherHook = () => void

export type routerBeforeHook = (to: Location, from: Location | void, next: (value?: false | string | RouteTarget) => void) => void

export type routerAfterHook = (to: Location, from: Location | void) => void

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
  parent?: YoxInterface

  // 插槽名称
  slot?: string

  // 渲染节点时的 keypath
  readonly keypath: string

  // 渲染该节点的组件
  readonly context: YoxInterface

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

export interface Task {

  // 待执行的函数
  fn: Function

  // 执行函数的上下文对象
  ctx?: any

}

export interface NextTaskInterface {

  append(func: Function, context?: any): void

  prepend(func: Function, context?: any): void

  clear(): void

  run(): void

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

export interface CustomEventInterface {

  // 事件名称
  type: string

  // 事件当前的阶段
  // 0: 当前组件发射的事件，且当前组件正在处理
  // 1: 当前组件向上发射的事件，且已流转到父组件
  // -1: 当前组件向下发射的事件，且已流转到子组件
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

export interface EmitterInterface {

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

export declare var EmitterInterface: {

  prototype: EmitterInterface

  new(ns?: boolean): EmitterInterface

}

export interface ObserverInterface {

  data: data

  context: any

  nextTask: NextTaskInterface

  addComputed(
    keypath: string,
    options: getter | ComputedOptions
  ): ComputedInterface | void

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

export declare var ObserverInterface: {

  prototype: ObserverInterface

  new(data?: data, context?: any): ObserverInterface

}

export interface ComputedInterface {

  get(force?: boolean): any

  set(value: any): void

}

export declare var ComputedInterface: {

  prototype: ComputedInterface

  current?: ComputedInterface

  build(keypath: string, observer: ObserverInterface, options: any): ComputedInterface | void

  new(
    keypath: string,
    sync: boolean,
    cache: boolean,
    deps: string[],
    observer: ObserverInterface,
    getter: getter,
    setter: setter | void
  ): ComputedInterface

}

export interface PropRule {
  type: string | string[] | propType
  value?: any | propValue
  required?: boolean
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