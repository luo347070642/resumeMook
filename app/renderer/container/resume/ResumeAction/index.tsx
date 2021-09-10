import React from 'react'
import './index.less'
import { useHistory } from 'react-router'
import ROUTER from '@common/constants/router'
import IButton from '@common/components/Button'

function ResumeAction() {
  const history = useHistory()
  const onBack = () => history.push(ROUTER.root)
  const onExport = () => {}
  return (
    <div styleName='actions'>
      <div styleName='back' onClick={onBack}>
        返回
      </div>
      <IButton size='middle' className='export-btn' onClick={onExport}>
        导出PDF
      </IButton>
    </div>
  )
}
export default ResumeAction
