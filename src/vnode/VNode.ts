import Property from './Property'
import Attribute from './Attribute'
import Directive from './Directive'
import Yox from '../Yox'
import TransitionHooks from '../hooks/Transition'

export default interface VNode {

  node: Node

  data: Record<string, any>

  readonly tag?: string

  readonly isComponent?: boolean

  readonly isComment?: boolean

  readonly isText?: boolean

  readonly isSvg?: boolean

  readonly isStatic?: boolean

  readonly props?: Record<string, any>

  readonly slots?: Record<string, string | VNode[]>

  readonly nativeProps?: Record<string, Property>

  readonly nativeAttrs?: Record<string, Attribute>

  readonly directives?: Record<string, Directive>

  readonly transition?: TransitionHooks

  readonly model?: any

  readonly ref?: string

  readonly key?: string

  readonly text?: string

  readonly children?: VNode[]

  // 组件的 parent
  // <Custom>
  //  <Dog />
  // </Custom>
  // 这里 Dog 传入了 Custom 内部，parent 指向实际的父级组件，即 Custom，而不是 instance
  readonly parent?: Yox

  readonly instance?: Yox

  // 渲染节点时的 keypath
  readonly keypath?: string

}