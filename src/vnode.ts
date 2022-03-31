import {
  Data,
  Listener,
  LazyValue,
} from './type'

import {
  DirectiveHooks,
  TransitionHooks,
} from './hooks'

import {
  DomApi
} from './api'

import {
  CustomEventInterface,
  YoxInterface,
} from './yox'

export interface DirectiveRuntime {
  args?: (stack: any[]) => any[]
  expr?: (stack: any[]) => any
  stack: any[]
}

export interface EventRuntime {
  args: (stack: any[], event: CustomEventInterface, data?: Data) => any[]
  stack: any[]
}

export interface Directive {

  key: string

  name: string

  ns: string

  runtime: DirectiveRuntime | void

  // 指令修饰符
  readonly modifier: string | void

  // 指令的值，一般是字面量，比如 o-x="1" 中的 1
  // 如果不是字面量，则提供 getter 函数用于取值，同时 value 也会保留字面量
  readonly value?: string | number | boolean

  // 取值函数
  readonly getter?: () => any | void

  // 事件或函数调用式的指令会编译成 handler
  readonly handler?: () => void | void

  // 必须有 hooks
  readonly hooks: DirectiveHooks

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

  // 是否是 组件节点
  readonly isComponent?: boolean

  // 是否是 片段节点
  readonly isFragment?: boolean

  // 是否是 传送门节点
  readonly isPortal?: boolean

  // 是否是 插槽节点
  readonly isSlot?: boolean

  // 是否是 svg 元素
  readonly isSvg?: boolean

  // 是否是 style 元素
  readonly isStyle?: boolean

  // 是否是 option 元素
  readonly isOption?: boolean

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