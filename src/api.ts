import {
  Data,
  Listener,
  ValueHolder,
} from './type'

import {
  SpecialEventHooks,
} from './hooks'

export interface DomApi {

  getBodyElement(): Element

  createElement(tag: string, isSvg?: boolean): Element

  createText(text: string): Text

  createComment(text: string): Comment

  getAttr(node: HTMLElement, name: string): string | void

  setAttr(node: HTMLElement, name: string, value: string): void

  removeAttr(node: HTMLElement, name: string): void

  setStyle(style: CSSStyleDeclaration, name: string, value: string | number | void): void

  removeStyle(style: CSSStyleDeclaration, name: string): void

  before(parentNode: Node, node: Node, beforeNode: Node): void

  append(parentNode: Node, node: Node): void

  replace(parentNode: Node, node: Node, oldNode: Node): void

  remove(parentNode: Node, node: Node): void

  parent(node: Node): Node | void

  next(node: Node): Node | void

  find(selector: string): Element | void

  tag(node: Node): string | void

  getNodeText(node: Node): string | void

  setNodeText(node: Node, text: string): void

  getElementText(node: Node): string | void

  setElementText(node: Node, text: string): void

  getHtml(node: Element): string | void

  setHtml(node: Element, html: string): void

  addClass(node: HTMLElement, className: string): void

  removeClass(node: HTMLElement, className: string): void

  on(node: HTMLElement | Window | Document, type: string, listener: Listener): void

  // 因为 Emitter.listener 的类型是 Function，这里对 listener 的类型不做要求，只要是注册的函数就行
  off(node: HTMLElement | Window | Document, type: string, listener: Function): void

  addSpecialEvent(type: string, hooks: SpecialEventHooks): void

}

export interface ArrayApi {

  each<T>(
    array: T[],
    callback: (item: T, index: number) => boolean | void,
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

  toObject(array: any[], key?: string | null, value?: any): object

  join(array: string[], separator: string): string

  falsy(array: any): boolean

}

export interface IsApi {

  func(value: any): boolean

  array(value: any): boolean

  object(value: any): boolean

  string(value: any): boolean

  number(value: any): boolean

  boolean(value: any): boolean

  numeric(value: any): boolean

}

export interface LoggerApi {

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

export interface ObjectApi {

  keys(object: Data): string[]

  each(object: Data, callback: (value: any, key: string) => boolean | void): void

  extend(original: Data, object: Data): Data

  merge(object1: Data | void, object2: Data | void): Data | void

  copy(object: any, deep?: boolean): any

  get(object: any, keypath: string): ValueHolder | undefined

  set(object: Data, keypath: string, value: any, autofill?: boolean): void

  has(object: Data, key: string | number): boolean

  falsy(object: any): boolean

}

export interface StringApi {

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
