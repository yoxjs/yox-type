import {
  ComponentOptions,
} from './options'

import {
  CustomEventInterface,
} from './yox'

export type Data = Record<string, any>

export type LazyValue = number | true

export type PropTypeFunction = (key: string, value: any, componentName: string | void) => void

export type PropValueFunction = () => any

export type PropertyHint = 1 | 2 | 3

export type ComponentCallback = (options: ComponentOptions) => void

export type ComponentLoader = (callback: ComponentCallback) => Promise<ComponentOptions> | void

export type Component = ComponentOptions | ComponentLoader

export type FilterFunction = (this: any, ...args: any) => string | number | boolean

export type Filter = FilterFunction | Record<string, FilterFunction>

export type Partial = string | Function

export type ThisTask<This> = (this: This) => void

export type ThisWatcher<This> = (this: This, newValue: any, oldValue: any, keypath: string) => void

export type Watcher = (newValue: any, oldValue: any, keypath: string) => void

export type ThisListener<This> = (this: This, event: CustomEventInterface, data?: Data) => false | void

export type Listener = (event: CustomEventInterface, data?: Data) => false | void

export type NativeListener = (event: CustomEventInterface | Event) => false | void

export type ComputedGetter = () => any

export type ComputedSetter = (value: any) => void

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

  // 类型
  type: string | string[] | PropTypeFunction

  // 默认值
  value?: any | PropValueFunction

  // 是否必传
  required?: boolean

}
