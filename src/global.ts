import * as config from '../../yox-config/src/config'

import {
  data,
  dataGenerator,
  bind,
  unbind,
  on,
  off,
  enter,
  leave,
  getter,
  setter,
  watcher,
  listener,
  filter,
  component,
  componentCallback,
  optionsBeforeCreateHook,
  optionsOtherHook,
  routerBeforeHook,
  routerAfterHook,
  API,
  PropRule,
  Computed,
  Observer,
  Emitter,
  CustomEvent,
  ValueHolder,
  VNode,
} from './type'

type YoxClass = typeof Yox

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

declare const Yox: {

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

export interface YoxPlugin {
  version: string
  install(Yox: YoxClass): void
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