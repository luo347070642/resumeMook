import React from 'react'
import './index.less'
import Logo from '@assets/logo.png'
import { useHistory } from 'react-router'
import { shell } from 'electron'
import { ROUTER_ENTRY } from '@common/constants/router'
import { isHttpsOrHttpUrl } from '@common/utils/router'

function Root() {
  const history = useHistory()

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpsOrHttpUrl(router.url)) {
      shell.openExternal(router.url)
    } else {
      history.push(router.url)
    }
  }
  return (
    <div styleName='root'>
      <div styleName='container'>
        <img src={Logo} alt='' />
        <div styleName='title'>标题</div>
        <div styleName='tips'>这是一个标题介绍</div>
        <div styleName='action'>
          {ROUTER_ENTRY.map((router: TSRouter.Item) => (
            <div styleName='item' key={router.key} onClick={() => onRouterToLink(router)}>
              {router.text}
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
