# Imgur-ts
this is just a reimplementation of @rmp135/imgur

## installation
```SH
yarn add @lucasliet/imgur-ts
```

## usage

```TS
import upload from '@lucasliet/imgur-ts';

async function getImageUrl(){
  return await upload('IMAGE_FILE_PATH');
}
```