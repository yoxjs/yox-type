import {
  Data,
  Watcher,
  ComputedGetter,
} from './type'

import {
  WatcherOptions,
  ComputedOptions,
} from './options'

import {
  NextTaskInterface,
} from './yox'

export interface ObserverInterface {

  data: Data

  context: any

  nextTask: NextTaskInterface

  addComputed(
    keypath: string,
    options: ComputedGetter | ComputedOptions
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
    keypath: string | Data,
    value?: any
  ): void

  watch(
    keypath: string | Record<string, Watcher | WatcherOptions>,
    watcher?: Watcher | WatcherOptions,
    immediate?: boolean
  ): void

  unwatch(
    keypath?: string,
    watcher?: Watcher
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

export interface ComputedInterface {

  get(force?: boolean): any

  set(value: any): void

}