# Imgur-ts
this is just a reimplementation of @rmp135/imgur

## installation
```SH
yarn add @lucasliet/imgur-ts
```

## usage

```TS
import Imgur from '@lucasliet/imgur-ts';

const api = new Imgur('YOUR_IMGUR_CLIENT_ID');

async function getImageUrl(){
  return await api.upload('IMAGE_FILE_PATH');
}
```