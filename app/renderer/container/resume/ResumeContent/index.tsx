import React from 'react'
import './index.less'
import * as UseTemplateList from './UseTemplates'
import ScrollBox from '@common/components/ScrollBox'

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92
  const height = document.body.clientHeight
  return (
    <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </ScrollBox>
  )
}
export default ResumeContent
