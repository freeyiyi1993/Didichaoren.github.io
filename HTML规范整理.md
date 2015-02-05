#HTML 编码规范  
[1.HTML文件命名](#user-content-1html文件命名-1)

[2.语法](#user-content-2语法)

　　　　[2.1 通用](#user-content-21-通用)
　　　　[2.2 缩进](#user-content-22-缩进)
　　　　[2.3 空格](#user-content-23-空格)
　　　　[2.4 注释](#user-content-24-注释)
　　　　[2.5 命名](#user-content-25-命名)
　　　　[2.6 语句](#user-content-26-语句)
	
　　　　　　　　[2.6.1 头部元素](#user-content-261-头部元素)
　　　　　　　　[2.6.2 文本元素](#user-content-262-文本元素)
　　　　　　　　[2.6.3 媒体元素](#user-content-263-媒体元素)
　　　　　　　　[2.6.4 列表元素](#user-content-264-列表元素)
　　　　　　　　[2.6.5 表单元素](#user-content-265-表单元素)
　　　　　　　　[2.6.6 结构性元素](#user-content-266-结构性元素)
　　　　　　　　
[3.HTML5 doctype](#user-content-3html5-doctype)

[4.语言属性](#user-content-4语言属性)

[5.IE兼容模式](#user-content-5ie-兼容模式)

[6.字符编码](#user-content-6字符编码)

[7.实用高于完美原则](#user-content-7实用高于完美原则)

[8.属性顺序](#user-content-8属性顺序)

[9.Boolean 属性](#user-content-9boolean-属性)

[10.减少标签属性](#user-content-10减少标签属性)

[11.JavaScript 生成标签](#user-content-11javascript-生成标签)

[12.最佳实践](#user-content-12最佳实践)

[13.Sample](#user-content-13sample)

----

##1.HTML文件命名
多个单词组成时，采用下划线连接方式，比如说: `error_report.html`

##2.语法

###2.1 通用
- 在属性上，使用双引号，不要使用单引号。
- 不要在自动闭合标签结尾处使用斜线 - [HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 指出他们是可选的。
- 不要忽略可选的关闭标签（例如，`</li>` 和 `</body>`）。
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
<body>
  <img src="images/company-logo.png" alt="Company">

  <h1 class="hello-world">Hello, world!</h1>
</body>
</html>
```
###2.2 缩进
- 每次缩进两个空格，不要使用tab键进行缩进，也不要把tab键以及空格混合起来进行缩进。
- 嵌套的节点应该缩进（两个空格）。

		<ul>
		  <li>Fantastic
		  <li>Great
		</ul>

- 为每个块级元素或表格元素标签新起一行，并且对每个子元素进行缩进。

		<blockquote>
		  <p><em>Space</em>, the final frontier.</p>
		</blockquote>
		<ul>
		  <li>Moe
		  <li>Larry
		  <li>Curly
		</ul>
		<table>
		  <thead>
		    <tr>
		      <th scope="col">Income</th>
		      <th scope="col">Taxes</th>
		    </tr>
		  <tbody>
		    <tr>
		      <td>$ 5.00</td>
		      <td>$ 4.50</td>
		    </tr>
		</table>

###2.3 空格
######去除比不必要的空格
	<!-- 不推荐 -->
	<p>test                  </p>
	<!-- 推荐 -->
	<p>test</p>
###2.4 注释
######对超过10行的页面模块进行注释, 以降低开发人员的嵌套成本和后期的维护成本
	<div id="sample">
	    ...
	</div> <!-- #sample END -->
	<div class="sample">
	    ...
	</div> <!-- .sample END -->
###2.5 命名
######元素的标签和属性名必须小写, 属性值必须加双引号.
	<!-- 不推荐 -->
	<A HREF='/'>Home</A>
	<!-- 推荐 -->
	<a href="/">Home</a>
###2.6 语句
> ####2.6.1 头部元素

- title 每个页面必须有且仅有一个 title 元素;   
- base 可用场景：首页、频道等大部分链接都为新窗口打开的页面;   
- link 用于引入 css 资源时, 可省去 media(默认为all);   
- style type 默认为 text/css, 可以省去;   
- script type 属性可以省去; 不赞成使用lang属性; 不要使用古老的<!– //–>这种hack脚本, 它用于阻止第一代浏览器(Netscape 1和Mosaic)将脚本显示成文字;
- 根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 `type`，因为 `text/css` 和 `text/javascript` 分别是他们的默认值;
- HTML5 规范链接: [使用 link](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element), [使用 style](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element), [使用 script](http://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)。

		<!-- External CSS -->
		<link rel="stylesheet" href="code-guide.css">

		<!-- In-document CSS -->
		<style>
		  /* ... */
		</style>

		<!-- JavaScript -->
		<script src="code-guide.js"></script>

		<!-- 不推荐 -->
		<link rel="stylesheet" href="//www.google.com/css/maia.css"
		  type="text/css">
		<script src="//www.google.com/js/gweb/analytics/autotrack.js"
		  type="text/javascript"></script>

		<!-- 推荐 -->
		<link rel="stylesheet" href="//www.google.com/css/maia.css">
		<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

> ####2.6.2 文本元素

- a a 存在 href 属性时表示链接, 无 href 属性但有 name 属性表示锚点;   
- em,strong em 表示句意强调, 加与不加会引起语义变化, 可用于表示不同的心情或语调; strong 表示重要性强调, 可用于局部或全局, strong强调的是重要性, 不会改变句意;   
- abbr 表示缩写;  
- sub,sup 主要用于数学和化学公式, sup还可用于脚注;   
- span 本身无特殊含义;   
- ins,del 分别表示从文档中增加(插入)和删除   


> ####2.6.3 媒体元素

- img 请勿将img元素作为定位布局的工具, 不要用他显示空白图片; 给img元素增加alt属性;例如

		<!-- 不推荐 -->
		<img src="spreadsheet.png">
		<!-- 推荐 -->
		<img src="spreadsheet.png" alt="Spreadsheet screenshot.">

> ####2.6.4 列表元素

- dl 表示关联列表, dd是对dt的解释; dt和dd的对应关系比较随意： 一个dt对应多个dd、多个dt对应一个dd、多个dt对应多个dd, 都合法; 可用于名词/单词解释、日程列表、站点目录;   
- ul 表示无序列表;   
- ol 表示有序列表, 可用于排行榜等;   
- li 表示列表项, 必须是ul/ol的子元素;   

> ####2.6.5 表单元素

- 推荐使用 button 代替 input, 但必须声明 type;   
- 推荐使用 fieldset, legend 组织表单   
- 表单元素的 name 不能设定为 action, enctype, method, novalidate, target, submit 会导致表单提交混乱   

> ####2.6.6 结构性元素

- p 表示段落. 只能包含内联元素, 不能包含块级元素;  
- div 本身无特殊含义, 可用于布局. 几乎可以包含任何元素;   
- br 表示换行符;   
- hr 表示水平分割线;   
- h1-h6 表示标题. 其中 h1 用于表示当前页面最重要的内容的标题;   
- blockquote 表示引用, 可以包含多个段落. 请勿纯粹为了缩进而使用 blockquote, 大部分浏览器默认将 blockquote 渲染为带有左右缩进;   
- pre 表示一段格式化好的文本;

##3.HTML5 doctype
在每个 HTML 页面开头使用这个简单地 doctype 来启用标准模式，使其每个浏览器中尽可能一致的展现。(虽然doctype不区分大小写，但是按照惯例，doctype大写。
[关于html属性，大写还是小写的一片文章](http://stackoverflow.com/questions/15594877/is-there-any-benefits-to-use-uppercase-or-lowercase-letters-with-html5-tagname))
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```

##4.语言属性
- 针对HTML5:作者应在html的跟元素上加上这个文件的语言。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。
[阅读更多有关 lang 属性](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element)
- 通过Sitepoint 得到一个[语言代码列表](http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/).
  Sitepoint只是给出了语言代码的大类，比如说中文就只给出了ZH，但是没有区分香港，台湾，大陆等。
  而微软给出的一份细分了zh-cn,zh-hk,zh-tw, Head to Microsoft for a [detail list of language codes](https://msdn.microsoft.com/en-us/library/ms533052%28v=vs.85%29.aspx).
```html
<html lang="en-us">
  <!-- ... -->
</html>
```

##5.IE 兼容模式
Internet Explorer 支持使用一个文档属性标签 `<meta>` 来指出这个页面应当支持的IE的版本。除非另有规定，最好用最新的支持的模式。
(更多信息, [阅读这个 Stack Overflow 文章.](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e)
不同doctype在不同浏览器下的不同渲染模式，[诡异模式总结](https://hsivonen.fi/doctype/)的很到位.)
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

##6.字符编码
通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式。
```html
<head>
  <meta charset="UTF-8">
</head>
```

##7.实用高于完美原则
尽量遵循 HTML 标准和语义，但是不应该以浪费实用性作为代价。任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

##8.属性顺序
HTML 属性应该按照特定的顺序出现以保证易读性。

- `id`
- `class`
- `name`
- `data-*`
- `src`, `for`, `type`, `href`
- `title`, `alt`
- `aria-*`, `role`

Classes 是为高可复用组件设计的，理论上他们应处在第一位。Ids 更加具体而且应该尽量少使用（例如, 页内书签），所以他们处在第二位。但为了突出id的重要性， 把id放到了第一位。
```html
<a id="..." class="..." data-modal="toggle" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

##9.Boolean 属性
- Boolean 属性指不需要声明取值的属性。XHTML 需要每个属性声明取值，但是 HTML5 并不需要。
- 了解更多内容，参考 [WhatWG section on boolean attributes](https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes): 一个元素中 Boolean 属性的存在表示取值 true，不存在则表示取值 false。
- 如果你必须为属性添加并不需要的取值，参照 WhatWG 的指引: 如果属性存在，他的取值必须是空字符串或者 &#91;...&#93; 属性的规范名称，不要在首尾包含空白字符。
- 简而言之，不要为 Boolean 属性添加取值。
```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

##10.减少标签数量
在编写 HTML 代码时，需要尽量避免多余的父节点。很多时候，需要通过迭代和重构来使 HTML 变得更少。
```html
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

##11.JavaScript 生成标签
在 JavaScript 文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。

##12.最佳实践
- 协议 如果链接和当前页面一致则忽略链接的协议部分

		<!-- 不推荐 -->
		<script src="http://www.dreamarts.com/common.js"></script>
		<!-- 推荐 -->
		<script src="//www.dreamarts.com/common.js"></script>

- 使用规范化的html，并使用W3C HTML validator之类的工具来进行检测

		<!-- 不推荐 -->
		<title>Test</title>
		<article>This is only a test.
		 
		<!-- 推荐 -->
		<!DOCTYPE html>
		<meta charset="utf-8">
		<title>Test</title>
		<article>This is only a test.</article>

- 使用语义化的html标签，根据用途来选择标签

		<!-- 不推荐 -->
		<div onclick="goToRecommendations();">All recommendations</div>
		 
		<!-- 推荐 -->
		<a href="recommendations/">All recommendations</a>

- 把多媒体元素可知化。像图片、视频、动画等多媒体元素，要有相关的文字来体现其内容，比如<img> 可以使用alt属性来说明图片内容

		<!-- 不推荐 -->
		<img src="spreadsheet.png">
		 
		<!-- 推荐 -->
		<img src="spreadsheet.png" alt="Spreadsheet screenshot.">

- 确保页面的 结构、样式、行为三者相分离。确保文档或模板中只包含html，把用到的样式都写到样式表文件中，把脚本都写到js文件中。

		<!-- 不推荐 -->
		<!DOCTYPE html>
		<title>HTML sucks</title>
		<link rel="stylesheet" href="base.css" media="screen">
		<link rel="stylesheet" href="grid.css" media="screen">
		<link rel="stylesheet" href="print.css" media="print">
		<h1 style="font-size: 1em;">HTML sucks</h1>
		<p>I’ve read about this on a few sites but now I’m sure:
		  <u>HTML is stupid!!1</u>
		<center>I can’t believe there’s no way to control the styling of
		  my website without doing everything all over again!</center>
		 
		<!-- 推荐 -->
		<!DOCTYPE html>
		<title>My first CSS-only redesign</title>
		<link rel="stylesheet" href="default.css">
		<h1>My first CSS-only redesign</h1>
		<p>I’ve read about this on a few sites but today I’m actually
		  doing it: separating concerns and avoiding anything in the HTML of
		  my website that is presentational.
		<p>It’s awesome!

##13.Sample
	<!doctype html>
	<html>
	    <head>
	        <meta charset="utf-8" />
	        <title>Sample page</title>
	        <link rel="stylesheet" href="css_example_url" />
	    </head>
	    <body>
	        <div id="page">
	            <div id="header">
	                页头
	            </div>
	            <div id="content">
	                主体
	            </div>
	            <div id="footer">
	                页尾
	            </div>
	        </div>
	        <script src="js_example_url"></script>
	        <script>
	        // 你的代码
	        </script>
	    </body>
	</html> 
