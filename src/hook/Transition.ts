import Yox from '../Yox'
import VNode from '../vnode/VNode'
import Directive from '../vnode/Directive'

export default interface TransitionHook {
  enter?: (node: Node | Yox, directive: Directive, vnode: VNode) => void
  leave?: (node: Node | Yox, directive: Directive, vnode: VNode) => void
}