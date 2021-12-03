import React from 'react';
import { Text, MessageBar, MessageBarType } from '@fluentui/react';

const LoginAlert: React.FC = () => {
  return (
    <MessageBar
      messageBarType={MessageBarType.info}
      isMultiline={true}
      dismissButtonAriaLabel="Close"
    >
      <Text as="p" block={true}>
        User: test
      </Text>
      <Text as="p" block={true}>
        Password: test
      </Text>
    </MessageBar>
  );
};

export default LoginAlert;
