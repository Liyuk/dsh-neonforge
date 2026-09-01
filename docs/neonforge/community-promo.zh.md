# DSH｜Neonforge｜后朋克工业控制台视觉皮肤

[English](community-promo.md) | 中文

> ⚠️ 非官方项目，由社区独立开发和维护。DSH Neonforge 未经 DeepSeek 官方审核、推荐或背书。安装前请自行确认项目来源，并阅读插件代码、权限和配置说明。

大家好，我做了一个 DeepSeek Harness Web 视觉皮肤插件：DSH Neonforge。

如果你长时间使用 DSH，会发现它不只是一个聊天窗口。左侧有工作区和多个会话，中央是流式对话和 Composer，旁边还有工具、运行状态、权限模式和 Agent 信息。功能都在，但信息越来越多时，界面的层级和状态不一定足够容易扫描。

所以我做了 Neonforge：保留 DSH 原有的 Agent runtime、会话、工具、权限、工作区和插件组合，只改变视觉层，把工作台改造成一座后朋克杂志拼贴风格的工业控制台。

## 它改变了什么

- 酸绿色主操作色，配合电蓝色套色偏移阴影。
- 墨蓝黑的深色控制室，以及冷纸张灰的浅色纸张与油墨主题。
- 侧栏工作区和会话列表使用更明确的选中态、折角和任务票据视觉。
- 对话区域保持安静，让用户消息、Agent 回复和工具结果成为主要内容。
- Composer、发送按钮、停止按钮和焦点状态使用一致的操作信号。
- 运行、等待、完成、错误和中断使用统一的颜色与状态层级。
- 设置中提供 Neonforge 开关，并支持 Dark / Light 模式切换。
- 支持 `prefers-reduced-motion`，减少动态偏好会关闭装饰性过渡和闪烁。

## 它没有改变什么

Neonforge 只是视觉层，不会替换 DSH 的 Agent loop，也不会修改模型、Provider、权限流程、工作区数据或会话数据。它通过 DSH Web 的插件和主题扩展点加载，使用限定作用域的选择器和语义 token，尽量避免干扰其他插件。

## 截图

### 深色控制台

![DSH Neonforge 深色控制台](assets/neonforge-dark.png)

### 浅色纸张与油墨

![DSH Neonforge 浅色纸张与油墨](assets/neonforge-light.png)

截图中的任务名、模型名、余额、耗时和输入内容属于演示环境；Neonforge 本身不提供这些业务能力。

## 安装

```sh
dsh plugin --profile web add npm:@liyuk/dsh-neonforge
dsh web
```

启动后打开 DSH Settings，选择 **Neonforge 皮肤**，然后可以切换皮肤开关和 Dark / Light 模式。

本地 checkout 安装：

```sh
dsh plugin --profile web add link:./plugins/dsh-neonforge
pnpm run build:neonforge-plugin
dsh web
```

## 项目地址

- GitHub：[Liyuk/dsh-neonforge](https://github.com/Liyuk/dsh-neonforge)
- npm：`@liyuk/dsh-neonforge`
- License：MIT

如果你在 DSH 里使用了 Neonforge，欢迎告诉我：

- 哪个区域最需要更清楚的状态反馈？
- 你更喜欢 Dark 还是 Light？
- 你希望下一步优先优化窄屏、工具状态、工作区，还是更多主题 token？
- 如果发现样式与某个 DSH 版本或其他插件冲突，也欢迎附上 DSH 版本、插件版本和截图反馈。

Neonforge 是一个视觉层实验，也是一种对 DSH 插件能力的尝试：Agent 工作台不只可以增加工具和模型能力，也可以由社区重新定义它的工作氛围。

项目资料：

- [GitHub 仓库](https://github.com/Liyuk/dsh-neonforge)
- [项目总底稿](../../project.md)
- [UI 设计参考](../design/neonforge-ui.md)
