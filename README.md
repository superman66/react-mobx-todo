# React + MobX Todo
## Question
* 什么是 MobX
* 核心概念
* MobX 的出现是为了解决什么痛点
* MobX 优缺点

## 什么是 MobX？
MobX 只做一件事，就是解决 state 到 view 的数据更新问题。

## MobX 核心概念
* observable：将变量变成可观察
* computed： 可以根据现有的状态或其它计算值衍生出的值
* autorun：用于创建响应式函数，而且该函数本身永远不会有观察者时
* @observer：用于将 React 组件转换为响应式组件（该方法由 `mobx-react` 提供）
* action: action 是 mobx 中用于修改状态的行为
