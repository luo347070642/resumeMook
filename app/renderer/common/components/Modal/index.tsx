/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import Modal from '@components/Modal';
 * <Modal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/Modal';
 * <Confirm />
 */
import IDialog from './Dialog'
import IConfirm from './Confirm'

export const Dialog = IDialog
export const Confirm = IConfirm

export default {
  Dialog,
  Confirm,
}
