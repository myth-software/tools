# @myth-software/tools

## install

```bash
# npm
npm i -S @myth-software/tools

# yarn
yarn add @myth-software/tools
```

## overview

**summary**  
notion api responses are EXTREMELY deeply nested. tools provides simple flattening of notion responses and simple expansion of properties. beyond that, it exports a wrapper around the notion api.

### watch
<a href="https://www.youtube.com/watch?v=w3FbabgV0jg" target="_blank">![thumbnail](https://myth-software-assets.s3.us-east-2.amazonaws.com/thumbnail.jpg)</a>

## example usage

**flattenPageResponse**

```typescript
import { flattenPageResponse, notion } from '@myth-software/tools';

const page = await notion.pagesRetrieve({
  page_id,
});
const overlay = flattenPageResponse<Overlays>(pageResponse);
```
