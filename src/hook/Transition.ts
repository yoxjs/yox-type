import Yox from '../Yox'
import VNode from '../vnode/VNode'

export default interface TransitionHook {
  enter?: (node: Node | Yox, vnode: VNode) => void
  leave?: (node: Node | Yox, vnode: VNode) => void
}