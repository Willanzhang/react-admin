import React, { Component } from 'react';
import E from 'wangeditor'

class Ueditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('999999')
    // 创建编辑器
    // const elem = this.refs.editorElem
    const elem = document.querySelector('#div3')
    const editor1 = new E(elem)
    editor1.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ]
    editor1.customConfig.linkImgCallback = function (url) {
      console.log(url, 'yiyiyiyiyiyiyiydasiyiyi') // url 即插入图片的地址
    }

    editor1.customConfig.onchange = function (html) {
      // html 即变化之后的内容
      // console.log(html)
    }

    console.log(editor1.customConfig.emotions, 'editor.customConfig.emotions');
    editor1.customConfig.uploadImgServer = "https://piao.vikduo.com/admin/upload/image"
    editor1.customConfig.uploadImgMaxSize = 2 * 1024 * 1024
    editor1.customConfig.uploadImgHeaders = {
      "user-token": 'manager_token_b9f05308529ac50b664f846f81fd169f',
      "hehe": 'ok'
    }
    // 限制一次最多上传 5 张图片
    editor1.customConfig.uploadImgMaxLength = 3
    editor1.customConfig.uploadImgHooks = {
      before: function (xhr, editor, files) {
        // 图片上传之前触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        // return {
        //     prevent: true,
        //     msg: '放弃上传'
        // }
      },
      success: function (xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        console.log(result, 'result success');
      },
      fail: function (xhr, editor, result) {
        // 图片上传并返回结果，但图片插入错误时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      },
      error: function (xhr, editor) {
        // 图片上传出错时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },
      timeout: function (xhr, editor) {
        // 图片上传超时时触发
        // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      },

      // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      customInsert: function (insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        var url = result.url
        insertImg(url)

        // result 必须是一个 JSON 格式字符串！！！否则报错
      }
    }
  
  editor1.create()
  editor1.txt.html('<p>用 JS 设置的31231312内容</p>')

  // let editor2 = new E('#div3')
  // editor2.create()
  // editor1.customConfig.linkImgCallback = function (url) {
  //   console.log(url, 'erererererererer') // url 即插入图片的地址
  // }
}
componentWillUnmount() {

}
text() {
  // alert(editor1.txt.html())
  // console.log(editor1, 'editor1');
}
initEditor() {

}
render() {
  return (
    <div>
      {/*<div id="div1"></div>*/}
      <button id="btn1" onClick={() => { this.text() }} >获取html</button>
      {/*onClick={()=>{this.text()}}*/}
      <div style={{ padding: '5px 0', color: '#ccc' }}>中间隔离带</div>
      <div id="div2" >
        <p>第一个 demo（菜单和编辑器区域分开）</p>
      </div>
      {/*<div id="div3" ref="editorElem">*/}
      <div id="div3">
        <p>第二个 demo（常规）</p>
      </div>
    </div>
  )
}
}
export default Ueditor;
