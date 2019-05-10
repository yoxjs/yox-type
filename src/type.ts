import CustomEvent from './event/CustomEvent'
import YoxOptions from './options/Yox'

import Yox from './interface/Yox'
import VNode from './vnode/VNode'
import Directive from './vnode/Directive'

export type hint = 1 | 2 | 3

export type lazy = number | true

export type data = Record<string, any>

export type getter = () => any

export type setter = (value: any) => void

export type filter = Function | Record<string, Function>

export type watcher = (newValue: any, oldValue: any, keypath: string) => void

export type listener = (event: CustomEvent, data?: data) => true | void

export type nativeListener = (event: CustomEvent | Event) => true | void

export type enter = (node: HTMLElement) => void

export type leave = (node: HTMLElement, done: () => void) => void

export type bind = (node: HTMLElement | Yox, directive: Directive, vnode: VNode) => void

export type unbind = (node: HTMLElement | Yox, directive: Directive, vnode: VNode) => void

export type specialEvent = (node: HTMLElement | Window | Document, listener: nativeListener) => void

export type componentCallback = (options: YoxOptions) => void

export type componentLoader = (callback: componentCallback) => void

export type component = YoxOptions | componentLoader

export type lifeCycleHook = (options: YoxOptions) => void

export type dataGenerator = (options: YoxOptions) => data

export type propType = (props: data) => boolean

export type propValue = (props: data) => any

export type propRequired = (props: data) => boolean
