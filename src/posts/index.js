const posts = [
  {
    id: 'adb-permission',

    title:
      'ADB权限没那么难——普通人也能轻松上手',

    date:
      '2026-08-23',

    description:
      'ADB 并没有想象中那么复杂，这篇文章带你从零了解 Android ADB 权限。',

    content: [
      '很多人第一次接触 ADB 时，会觉得它非常复杂。其实，ADB 本身并没有想象中那么神秘。',

      'ADB 的全称是 Android Debug Bridge，也就是 Android 调试桥。它可以让电脑与 Android 手机之间建立调试连接。',

      '通过 ADB，我们可以完成很多系统级操作，例如查看设备状态、安装应用、调试程序以及执行一些系统命令。',

      '对于普通用户来说，最重要的并不是记住大量命令，而是先理解 ADB 到底是什么，以及它为什么需要相应的权限。',

      '只要把这些基础概念弄清楚，ADB 就没有那么难了。'
    ]
  }
]

export { posts }

export function getPost(id) {
  return posts.find(
    (post) => post.id === id
  )
}
