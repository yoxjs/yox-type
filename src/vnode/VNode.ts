import Property from './Property'
import Attribute from './Attribute'
import Directive from './Directive'
import Yox from '../Yox'
import TransitionHooks from '../hooks/Transition'

export default interface VNode {

  node: Node

  data: Record<string, any>

  // 渲染节点时的 keypath
  readonly keypath: string

  // 渲染该节点的上下文
  readonly context: Yox

  // 组件的 parent
  // <Custom>
  //  <Dog />
  // </Custom>
  // 这里 Dog 传入了 Custom 内部，parent 指向实际的父级组件，即 Custom，而不是 context
  readonly parent?: Yox

  readonly tag?: string | void

  readonly isComponent?: boolean

  readonly isComment?: boolean

  readonly isText?: boolean

  readonly isSvg?: boolean

  readonly isStatic?: boolean

  readonly props?: Record<string, any>

  readonly slots?: Record<string, VNode[]>

  readonly nativeProps?: Record<string, Property>

  readonly nativeAttrs?: Record<string, Attribute>

  readonly directives?: Record<string, Directive>

  // 如果 directives 有值，则 lazy 必有值
  readonly lazy?: Record<string, number | boolean>

  readonly transition?: TransitionHooks

  readonly model?: any

  readonly ref?: string

  readonly key?: string

  readonly text?: string

  readonly html?: string

  readonly children?: VNode[]

}