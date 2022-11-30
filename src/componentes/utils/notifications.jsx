import React from 'react'
import { notification } from 'antd';

const notifications = (title, message) => {
  const [api, contextHolder] = notification.useNotification();

  console.log("title: ",title);
  console.log("message: ",message);
  
  const key = 'updatable';

  api.error({
    key,
    message: `${title}`,
    description: `${message}`,
  });
}

export default notifications