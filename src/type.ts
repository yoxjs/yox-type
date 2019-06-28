import {
  YoxTypedOptions
} from './options'

import {
  Location,
  RouteTarget,
} from './router'

import {
  CustomEventInterface
} from './emitter'

export type Data = Record<string, any>

export type LazyValue = number | true

export type PropTypeFunction = (key: string, value: any) => void

export type PropValueFunction = () => any

export type PropertyHint = 1 | 2 | 3

export type ComponentCallback = (options: YoxTypedOptions) => void

export type ComponentLoader = (callback: ComponentCallback) => Promise<YoxTypedOptions> | void

export type Component = YoxTypedOptions | ComponentLoader

export type FilterFunction = (this: any, ...args: any) => string | number | boolean

export type Filter = FilterFunction | Record<string, FilterFunction>

export type TypedWatcher<T> = (this: T, newValue: any, oldValue: any, keypath: string) => void

export type Watcher = (newValue: any, oldValue: any, keypath: string) => void

export type TypedListener<T> = (this: T, event: CustomEventInterface, data?: Data) => false | void

export type Listener = (event: CustomEventInterface, data?: Data) => false | void

export type NativeListener = (event: CustomEventInterface | Event) => false | void

export type ComputedGetter = () => any

export type ComputedSetter = (value: any) => void

export type OptionsBeforeCreateHook = (options: YoxTypedOptions) => void

export type OptionsOtherHook = () => void

export type RouterBeforeHook = (to: Location, from: Location | void, next: (value?: false | string | RouteTarget) => void) => void

export type RouterAfterHook = (to: Location, from: Location | void) => void

export type ValueHolder = {

  keypath?: string

  value: any

}

export type Task = {

  // 待执行的函数
  fn: Function

  // 执行函数的上下文对象
  ctx?: any

}

export type PropRule = {
  type: string | string[] | PropTypeFunction
  value?: any | PropValueFunction
  required?: boolean
}
