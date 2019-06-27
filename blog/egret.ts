https://blog.csdn.net/y505772146/article/details/89681084

P 层是联接 model 和 view 的。
数据加载在model层，P层调用model层的方法
效果显示在view层处理，P层调用model层的方法，拿到数据后再与view层交互

p层主要任务就是处理各种逻辑啊

我觉得mvp缺点之一就是要写很多的接口很多代码。如果一个activity要做的任务足够少(比如只有一个listview 请求一下网络)完全可以把逻辑直接写在activity里，没必要强行mvp

presenter 主要是做逻辑层，你说的数据加载这些被许多人称为Model层，presenter只是对各种各样的逻辑进行控制

Presenter简单来说就是View和Model之间的桥梁，一方面，在View中调用Presenter的方法实现逻辑控制，然后Presenter去调用Model中的方法去执行具体的数据请求工作，然后通过回调，由Presenter传给View，渲染数据。

https://blog.csdn.net/qq_37199105/article/details/78451886

数据Model在处理数据时，无论是处理本地数据还是网络数据，都是耗时操作，是不能在主线程运行的；而View，是必须在主线程运行的。这就容易产生一个问题，当View关闭退出时，Presenter可能还在异步线程里工作，而且Presenter还持有着View的实例——标准的内存泄露场景

MVP作为一个基础型的结构，核心作用在于辅助我们实行良好的可读性和可维护性，我们可以为一个Presenter提供多种View的实现（例如，一个业务可以同时有全屏Activity和对话框Activity两种形式，分别提供给不同的业务环节，背后却使用同一个Presenter），也可以为一个Presenter提供不同的数据Model（例如，在两个根据后台数据动态绘制界面的Activity实例中，业务逻辑一致，可以使用同一种Presenter，但数据内容不同，就可以使用两个分别注入了不同Model的Presenter实例）
MVP里有Passive View(Presenter通过View的接口操作View，并作为主要的业务驱动方)和Supervisor Controller（Presenter负责大量复杂的View逻辑）两种衍生，
MVP还是一个开放性的结构，你可以根据自己的需要，去规避某些缺陷，或取得某些优势，如何去演化一个适合自己需求的MVP框架，一方面满足需求，一方面保持灵活，完全看自己的发挥了
