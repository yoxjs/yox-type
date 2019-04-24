import * as type from '../index'
import Computed from './Computed'
import ComputedOptions from './options/Computed'
import WatcherOptions from './options/Watcher'

export default interface Observer {

  data: Record<string, any>

  context: any

  addComputed(
    keypath: string,
    options: type.computedGetter | ComputedOptions
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
    defaultValue?: any
  ): any

  set(
    keypath: string | Record<string, any>,
    value?: any
  ): void

  watch(
    keypath: string | Record<string, type.watcher | WatcherOptions>,
    watcher?: type.watcher,
    options?: WatcherOptions | boolean
  ): void

  unwatch(
    keypath: string,
    watcher?: type.watcher
  ): void

  toggle(keypath: string): boolean

  increase(keypath: string, step?: number, max?: number): number | void

  decrease(keypath: string, step: number, min?: number): number | void

  insert(keypath: string, item: any, index: number | boolean): boolean | void

  append(keypath: string, item: any): boolean | void

  prepend(keypath: string, item: any): boolean | void

  removeAt(keypath: string, index: number): boolean | void

  remove(keypath: string, item: any): boolean | void

  copy<T>(data: T, deep?: boolean): T

  destroy(): void

}