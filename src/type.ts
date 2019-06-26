import {
  Watcher,
  Listener,
  WatcherOptions,
  ComputedOptions,
  YoxOptions,
  YoxInterface,
  DirectiveHooks,
  TransitionHooks,
  SpecialEventHooks,
} from './global'

export type data = Record<string, any>

export type dataGenerator = (options: YoxOptions) => data

export type lazyValue = number | true

export type propTypeFunction = (key: string, value: any) => void

export type propValueFunction = () => any

export type propertyHint = 1 | 2 | 3

export type filterFunction = (...args: any) => string | number | boolean

export type filter = filterFunction | Record<string, filterFunction>

export type componentCallback = (options: YoxOptions) => void

export type componentLoader = (callback: componentCallback) => Promise<YoxOptions> | void

export type component = YoxOptions | componentLoader

export type optionsBeforeCreateHook = (options: YoxOptions) => void

export type optionsOtherHook = () => void

export type routerBeforeHook = (to: Location, from: Location | void, next: (value?: false | string | RouteTarget) => void) => void

export type routerAfterHook = (to: Location, from: Location | void) => void

export type ComputedGetter<T> = (this: T) => any

export type ComputedSetter<T> = (this: T, value: any) => void

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

  readonly hint: propertyHint

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
  readonly getter?: () => any | void

  // 事件或函数调用式的指令会编译成 handler
  readonly handler?: Listener<any> | void

  // 单向绑定的 keypath
  readonly binding?: string | void

  // 单向绑定的 hint，用于区分 attr 和 prop
  readonly hint?: propertyHint | void

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
  readonly lazy?: Record<string, lazyValue>

  readonly transition?: TransitionHooks

  readonly ref?: string

  readonly key?: string

  readonly text?: string

  readonly html?: string

  readonly children?: VNode[]

}

export interface DomUtil {

  createElement(tag: string, isSvg?: boolean): Element

  createText(text: string): Text

  createComment(text: string): Comment

  prop(node: HTMLElement, name: string, value?: string | number | boolean): string | number | boolean | void

  removeProp(node: HTMLElement, name: string, hint?: propertyHint): void

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

  on(node: HTMLElement | Window | Document, type: string, listener: Listener<null>): void

  off(node: HTMLElement | Window | Document, type: string, listener: Listener<null>): void

  addSpecialEvent(type: string, hooks: SpecialEventHooks): void

}

export interface ArrayUtil {

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

export interface IsUtil {

  func(value: any): boolean

  array(value: any): boolean

  object(value: any): boolean

  string(value: any): boolean

  number(value: any): boolean

  boolean(value: any): boolean

  numeric(value: any): boolean

}

export interface LoggerUtil {

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

export interface ObjectUtil {

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

export interface StringUtil {

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

export interface NextTaskInterface {

  append(func: Function, context?: any): void

  prepend(func: Function, context?: any): void

  clear(): void

  run(): void

}

export interface ObserverInterface<T> {

  data: data

  context: T

  nextTask: NextTaskInterface

  addComputed(
    keypath: string,
    options: ComputedGetter<T> | ComputedOptions<T, any>
  ): ComputedInterface<T> | void

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
    keypath: string | Record<string, Watcher<T> | WatcherOptions<T>>,
    watcher?: Watcher<T> | WatcherOptions<T>,
    immediate?: boolean
  ): void

  unwatch(
    keypath?: string,
    watcher?: Watcher<T>
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

export interface ComputedInterface<T> {

  get(force?: boolean): any

  set(value: any): void

}

export interface PropRule {
  type: string | string[] | propTypeFunction
  value?: any | propValueFunction
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