import React from 'react'
import './index.less'
import Logo from '@src/assets/logo.png'
import { useHistory } from 'react-router'
import { shell } from 'electron'

function Root() {
  const history = useHistory()

  const onRouterToLink = (text: string) => {
    if (text === '简历') {
      console.log('跳转到简历页面')
      history.push('/resume')
    } else {
      console.log('进入到 github ')
      shell.openExternal('')
    }
  }
  return (
    <div styleName='root'>
      <div styleName='container'>
        <img src={Logo} alt='' />
        <div styleName='title'>标题</div>
        <div styleName='tips'>这是一个标题介绍</div>
        <div styleName='action'>
          {['介绍', '简历', '源码'].map((text, index) => (
            <div styleName='item' key={index} onClick={() => onRouterToLink(text)}>
              {text}
            </div>
          ))}
        </div>
        <div styleName='copyright'>
          <div styleName='footer'>
            <p styleName='copyright'>
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By xxx
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root
