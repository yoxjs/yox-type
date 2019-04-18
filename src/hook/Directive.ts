import Yox from '../Yox'
import VNode from '../vnode/VNode'
import Directive from '../vnode/Directive'

export default interface DirectiveHook {
  bind: (node: Node | Yox, directive: Directive, vnode: VNode) => void
  update?: (node: Node | Yox, directive: Directive, vnode: VNode, oldVndoe?: VNode) => void
  unbind?: (node: Node | Yox, directive: Directive, vnode: VNode) => void
}