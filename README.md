React Native Scaled Image
=========================

React Native Scaled Image is a wrapper of Image. With it, you can add images without the need to define both height or width. The dimensions are calculated automatically using the height or width provided to keep the aspect ratio of the image.

## Installation

`npm install react-native-scaled-image`

## How to use

### Local images, passing only height:
```jsx
import { Component } from 'react';
import ScaledImage from 'react-native-scaled-image';

const localImage = require('images/local-image.png');

class CustomView extends Component {

  render() {
    return (
      <ScaledImage source={localImage} height={100} />
    );
  }
}
```

### Local images, passing only width:
```jsx
import { Component } from 'react';
import ScaledImage from 'react-native-scaled-image';

const localImage = require('images/local-image.png');

class CustomView extends Component {

  render() {
    return (
      <ScaledImage source={localImage} width={200} />
    );
  }
}
```

### Remote images:
```jsx
import { Component } from 'react';
import ScaledImage from 'react-native-scaled-image';

const remoteImage = {uri: 'http://facebook.github.io/react-native/img/header_logo.png'};

class CustomView extends Component {

  render() {
    return (
      <ScaledImage source={remoteImage} width={200} />
    );
  }
}
```

## Attributes

Name | Type | Required | Description
----|---|----|------
**source** | ```ImageSourcePropType/object``` | true | This is the actual image that will be shown
**height** | ```number``` | false | The wanted height for the image
**width** | ```number``` | false | The wanted width for the image
**style** | ```object``` | false | The styles used to modify the image, the accepted attributes are the same as [Image](https://facebook.github.io/react-native/docs/image.html#style)
