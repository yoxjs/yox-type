import CustomEvent from './event/CustomEvent'
import YoxOptions from './options/Yox'

import Yox from './interface/Yox'
import VNode from './vnode/VNode'
import Directive from './vnode/Directive'

export type data = Record<string, any>

export type getter = () => any

export type setter = (value: any) => void

export type watcher = (newValue: any, oldValue: any, keypath: string) => void

export type listener = (event: CustomEvent, data?: data) => true | void

export type nativeListener = (event: CustomEvent | Event) => true | void

export type enter = (node: HTMLElement, done: () => void) => void

export type leave = (node: HTMLElement, done: () => void) => void

export type bind = (node: HTMLElement | Yox, directive: Directive, vnode: VNode) => void

export type unbind = (node: HTMLElement | Yox, directive: Directive, vnode: VNode) => void

export type asyncComponent = (options: YoxOptions) => void

export type specialEvent = (node: HTMLElement, listener: nativeListener) => void

export type lifeCycleHook = (options: YoxOptions) => void

export type dataGenerator = (options: YoxOptions) => data

export type propType = (props: data) => boolean

export type propValue = (props: data) => any

export type propRequired = (props: data) => boolean
