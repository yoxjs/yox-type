import Property from './Property'
import Attribute from './Attribute'
import Directive from './Directive'

import * as type from '../type'

import Yox from '../interface/Yox'
import TransitionHooks from '../hooks/Transition'

export default interface VNode {

  data: type.data

  // 真实节点
  node: Node

  // 组件实际的父组件
  parent?: Yox

  // 渲染节点时的 keypath
  readonly keypath: string

  // 渲染该节点的组件
  readonly context: Yox

  // 元素节点或组件节点的标签名称
  readonly tag?: string | void

  // 是否是 组件节点
  readonly isComponent?: boolean

  // 是否是 注释节点
  readonly isComment?: boolean

  // 是否是 文本节点
  readonly isText?: boolean

  // 是否是 svg 元素
  readonly isSvg?: boolean

  // 是否是 style 元素
  readonly isStyle?: boolean

  readonly isStatic?: boolean

  readonly props?: type.data

  readonly slots?: Record<string, VNode[]>

  readonly nativeProps?: Record<string, Property>

  readonly nativeAttrs?: Record<string, Attribute>

  readonly directives?: Record<string, Directive>

  // 如果 directives 有值，则 lazy 必有值
  readonly lazy?: Record<string, type.lazy>

  readonly transition?: TransitionHooks

  readonly model?: any

  readonly ref?: string

  readonly key?: string

  readonly text?: string

  readonly html?: string

  readonly children?: VNode[]

}