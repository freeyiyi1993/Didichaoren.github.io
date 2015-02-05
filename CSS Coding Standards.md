#CSS编码规范

------

##1.语法

- 使用四个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。
- 使用组合选择器时，保持每个独立的选择器占用一行。
- 为了代码的易读性，在每个声明的左括号前增加一个空格。
- 声明块的右括号应该另起一行。
- 每条声明 : 后应该插入一个空格。
- 每条声明应该只占用一行来保证错误报告更加准确。
- 所有声明应该以分号结尾。虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错。
- 逗号分隔的取值，都应该在逗号之后增加一个空格。比如说box-shadow
- 不要在颜色值 rgb() rgba() hsl() hsla()和 rect() 中增加空格，并且不要带有取值前面不必要的 0 (比如，使用 .5 替代 0.5)。This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space).
- 所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。
- 尽可能使用短的十六进制数值，例如使用 #fff 替代 #ffffff。
- 为选择器中的属性取值添加引号，例如 input[type="text"]。 [他们只在某些情况下可有可无，所以都使用引号可以增加一致性](https://mathiasbynens.be/notes/unquoted-attribute-values#css)。
- 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;。

对这里提到的规则有问题吗？参考 Wikipedia 中的 [CSS 语法部分](http://en.wikipedia.org/wiki/Cascading_Style_Sheets#Syntax)。
```css
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
    padding: 15px;
    margin: 0px 0px 15px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 2px #CCC, inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
    padding: 15px;
    margin-bottom: 15px;
    background-color: rgba(0,0,0,.5);
    box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

##2.声明顺序

- 相关的属性声明应该以下面的顺序分组处理：

　1.Positioning
　2.Box model 盒模型
　3.Typographic 排版
　4.Visual 外观

- Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。
- 其他属性只在组件 内部 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。
- 关于完整的属性以及他们的顺序，请参考 [Recess](http://twitter.github.io/recess/)。
```css


.declaration-order {
    /* Positioning */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    /* Box-model */
    display: block;
    float: right;
    width: 100px;
    height: 100px;

    /* Typography */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    /* Visual */
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    /* Misc */
    opacity: 1;
}

// 为了方便查阅， 我把Recess的order贴了一份过来, 引入时间2014-05-05

// css property order
var order = [
    'position'
    , 'top'
    , 'right'
    , 'bottom'
    , 'left'
    , 'z-index'
    , 'display'
    , 'float'
    , 'width'
    , 'height'
    , 'max-width'
    , 'max-height'
    , 'min-width'
    , 'min-height'
    , 'padding'
    , 'padding-top'
    , 'padding-right'
    , 'padding-bottom'
    , 'padding-left'
    , 'margin'
    , 'margin-top'
    , 'margin-right'
    , 'margin-bottom'
    , 'margin-left'
    , 'margin-collapse'
    , 'margin-top-collapse'
    , 'margin-right-collapse'
    , 'margin-bottom-collapse'
    , 'margin-left-collapse'
    , 'overflow'
    , 'overflow-x'
    , 'overflow-y'
    , 'clip'
    , 'clear'
    , 'font'
    , 'font-family'
    , 'font-size'
    , 'font-smoothing'
    , 'osx-font-smoothing'
    , 'font-style'
    , 'font-weight'
    , 'hyphens'
    , 'src'
    , 'line-height'
    , 'letter-spacing'
    , 'word-spacing'
    , 'color'
    , 'text-align'
    , 'text-decoration'
    , 'text-indent'
    , 'text-overflow'
    , 'text-rendering'
    , 'text-size-adjust'
    , 'text-shadow'
    , 'text-transform'
    , 'word-break'
    , 'word-wrap'
    , 'white-space'
    , 'vertical-align'
    , 'list-style'
    , 'list-style-type'
    , 'list-style-position'
    , 'list-style-image'
    , 'pointer-events'
    , 'cursor'
    , 'background'
    , 'background-attachment'
    , 'background-color'
    , 'background-image'
    , 'background-position'
    , 'background-repeat'
    , 'background-size'
    , 'border'
    , 'border-collapse'
    , 'border-top'
    , 'border-right'
    , 'border-bottom'
    , 'border-left'
    , 'border-color'
    , 'border-image'
    , 'border-top-color'
    , 'border-right-color'
    , 'border-bottom-color'
    , 'border-left-color'
    , 'border-spacing'
    , 'border-style'
    , 'border-top-style'
    , 'border-right-style'
    , 'border-bottom-style'
    , 'border-left-style'
    , 'border-width'
    , 'border-top-width'
    , 'border-right-width'
    , 'border-bottom-width'
    , 'border-left-width'
    , 'border-radius'
    , 'border-top-right-radius'
    , 'border-bottom-right-radius'
    , 'border-bottom-left-radius'
    , 'border-top-left-radius'
    , 'border-radius-topright'
    , 'border-radius-bottomright'
    , 'border-radius-bottomleft'
    , 'border-radius-topleft'
    , 'content'
    , 'quotes'
    , 'outline'
    , 'outline-offset'
    , 'opacity'
    , 'filter'
    , 'visibility'
    , 'size'
    , 'zoom'
    , 'transform'
    , 'box-align'
    , 'box-flex'
    , 'box-orient'
    , 'box-pack'
    , 'box-shadow'
    , 'box-sizing'
    , 'table-layout'
    , 'animation'
    , 'animation-delay'
    , 'animation-duration'
    , 'animation-iteration-count'
    , 'animation-name'
    , 'animation-play-state'
    , 'animation-timing-function'
    , 'animation-fill-mode'
    , 'transition'
    , 'transition-delay'
    , 'transition-duration'
    , 'transition-property'
    , 'transition-timing-function'
    , 'background-clip'
    , 'backface-visibility'
    , 'resize'
    , 'appearance'
    , 'user-select'
    , 'interpolation-mode'
    , 'direction'
    , 'marks'
    , 'page'
    , 'set-link-source'
    , 'unicode-bidi'
    , 'speak'
]
```

##3.
