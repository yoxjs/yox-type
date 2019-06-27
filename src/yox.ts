import {
  Data,
  Component,
  ComponentCallback,
  Filter,
  TypedWatcher,
  TypedListener,
  TypedComputedGetter,
} from './type'

import {
  YoxTypedOptions,
  TypedWatcherOptions,
  TypedComputedOptions,
} from './options'

import {
  DirectiveHooks,
  TransitionHooks,
} from './hooks'

import {
  VNode,
} from './vnode'

import {
  EmitterInterface,
  CustomEventInterface,
} from './emitter'

import {
  ObserverInterface,
  ComputedInterface,
} from './observer'

export interface NextTaskInterface {

  append(func: Function, context?: any): void

  prepend(func: Function, context?: any): void

  clear(): void

  run(): void

}

export interface YoxInterface {

  $options: YoxTypedOptions

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
    computed: TypedComputedGetter<this> | TypedComputedOptions<this>
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
    keypath: string | Data,
    value?: any
  ): void

  on(
    type: string | Record<string, TypedListener<this>>,
    listener?: TypedListener<this>
  ): YoxInterface

  once(
    type: string | Record<string, TypedListener<this>>,
    listener?: TypedListener<this>
  ): YoxInterface

  off(
    type?: string,
    listener?: TypedListener<this>
  ): YoxInterface

  fire(
    type: string | CustomEventInterface,
    data?: Data | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, TypedWatcher<this> | TypedWatcherOptions<this>>,
    watcher?: TypedWatcher<this> | TypedWatcherOptions<this>,
    immediate?: boolean
  ): YoxInterface

  unwatch(
    keypath?: string,
    watcher?: TypedWatcher<this>
  ): YoxInterface

  loadComponent(
    name: string,
    callback: ComponentCallback
  ): void

  createComponent(
    options: YoxTypedOptions,
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