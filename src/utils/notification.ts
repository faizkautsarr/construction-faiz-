import { notification } from 'ant-design-vue'

type NotificationType = 'success' | 'error'

export const openNotification = (type: NotificationType, message: string, description: string) => {
  notification[type]({
    message: message,
    description: description,
    duration: 2
  })
}
