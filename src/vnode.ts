import {
  Data,
  Listener,
  LazyValue,
  DirectiveFunction,
} from './type'

import {
  TransitionHooks,
} from './hooks'

import {
  DomApi
} from './api'

import {
  YoxInterface,
  CustomEventInterface,
} from './yox'

export type EventArgs = (event: CustomEventInterface, data?: Data) => any[]
export type DirectiveArgs = () => any

export interface EventRuntime {
  execute: EventArgs
}

export interface DirectiveRuntime {
  execute: DirectiveArgs
}

export interface Directive {

  name: string

  ns: string

  // 指令修饰符
  readonly modifier: string | void

  // 指令的值
  readonly value: any

  readonly create: DirectiveFunction

}

export interface EventValue {

  key: string

  name: string

  value: string

  runtime: EventRuntime | void

  // 事件命名空间
  readonly ns: string | void

  // 是否在组件上监听 DOM 事件
  readonly isNative?: boolean

  // 事件处理函数
  readonly listener: Listener

}

export interface ModelValue {

  keypath: string

  value: any

}

export type Slots = Record<string, (parent: YoxInterface) => VNode[] | void>

export interface VNodeOperator {
  create(api: DomApi, vnode: VNode): void
  update(api: DomApi, vnode: VNode, oldVNode: VNode): void
  destroy(api: DomApi, vnode: VNode): void
  insert(api: DomApi, parentNode: Node, vnode: VNode, before?: VNode): void
  remove(api: DomApi, vnode: VNode): void
  enter(vnode: VNode): void
  leave(vnode: VNode, done: Function): void
}

export interface VNode {

  type: number

  data?: Data

  // 真实节点
  node?: Node

  // 真实的父节点
  parentNode?: Node

  // 目标节点
  target?: Node

  // 影子节点
  shadow?: VNode

  // 组件实际的父组件
  parent?: YoxInterface

  // 节点对应的组件实例
  component?: YoxInterface

  // 渲染该节点的组件
  readonly context: YoxInterface

  // 处理该节点的各种方法
  readonly operator: VNodeOperator

  // 元素节点或组件节点的标签名称
  readonly tag?: string

  // 是否是 svg 元素
  readonly isSvg?: boolean

  // 是否是 静态节点
  readonly isStatic?: boolean

  // 是否是 纯净节点，即节点上没有框架发明的任何东西
  readonly isPure?: boolean

  readonly slots?: Slots

  readonly props?: Data

  readonly nativeAttrs?: Record<string, string>

  readonly nativeStyles?: Data

  readonly directives?: Record<string, Directive>

  readonly events?: Record<string, EventValue>

  // 如果 directives 有值，则 lazy 必有值
  readonly lazy?: Record<string, LazyValue>

  readonly transition?: TransitionHooks

  readonly model?: ModelValue

  readonly to?: string

  readonly ref?: string

  readonly key?: string

  readonly text?: string

  readonly html?: string

  readonly children?: VNode[]

}