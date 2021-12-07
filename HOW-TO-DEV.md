# DEV

## Tour and Remarks

```shell
nx g @nrwl/react:lib ui --directory=shared --style=css
nx g @nrwl/react:component topic-button --project=shared-components --style=css
nx g @nrwl/react:storybook-configuration shared-components
nx storybook shared-components
nx build-storybook shared-components
http-server dist/storybook/shared-components
```
