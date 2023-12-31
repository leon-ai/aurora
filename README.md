<p align="center">
  <img width="800" src="https://getleon.ai/img/aurora-banner.png" />
</p>

<h1 align="center">
  @leon-ai/aurora - <a href="https://www.npmjs.com/package/@leon-ai/aurora"><img src="https://img.shields.io/npm/v/@leon-ai/aurora.svg" alt="npm version"></a>
</h1>

_<p align="center">The UI bricks that power up Leon.</p>_

---

## Installation

```sh
# Install Peer Dependencies
npm install react@^18.2.0 react-dom@^18.2.0 remixicon@^3.4.0 @fontsource/source-sans-pro@^5.0.8

# Install Aurora
npm install @leon-ai/aurora
```

## Usage

```tsx
// Fonts & Icons
import '@fontsource/source-sans-pro/200.css'
import '@fontsource/source-sans-pro/300.css'
import '@fontsource/source-sans-pro/400.css'
import '@fontsource/source-sans-pro/600.css'
import '@fontsource/source-sans-pro/700.css'
import '@fontsource/source-sans-pro/900.css'
import 'remixicon/fonts/remixicon.css'

import '@leon-ai/aurora/style.css'
import { WidgetWrapper, Button } from '@leon-ai/aurora'

export const Example: React.FC = () => {
  return (
    <WidgetWrapper>
      <Button iconName="send-plane">Send</Button>
    </WidgetWrapper>
  )
}
```
