import DirectiveHooks from '../hooks/Directive'
import * as type from '../../index'

export default interface Directive {

  readonly type: string

  readonly name: string

  // 当前 vnode 所有指令唯一的一个 key
  readonly key: string

  readonly value?: any

  // 必须有 hooks, 不然玩个毛...
  readonly hooks: DirectiveHooks

  // 取值函数
  readonly getter?: type.directiveGetter | void

  // 事件或函数调用式的指令会编译成 handler
  readonly handler?: type.directiveHandler | void

  // 单向绑定的 keypath
  readonly binding?: string | void

  // 单向绑定的 hint，用于区分 attr 和 prop
  readonly hint?: number

  // 作用于 handler，用于限制调用频率
  // 需要外部自己应用 lazy 给 handler
  // lazy 是指令创建完成之后，根据是否有匹配的 lazy 指令加上去的
  lazy?: number | boolean

}