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
notion api responses are EXTREMELY deeply nested. tools provides simple flattening of notion responses and simple expansion of properties. beyond that, it exports a wrapper around the notion api for easy configuration.

### example usage

```typescript
import {
  flattenPageResponse,
  expandProperties,
  notion,
} from '@myth-software/tools';

const page = await notion.pages.retrieve({
  page_id,
});

const [person, PROPERTIES] = flattenPageResponse<People>(page);

const properties = expandProperties<People>(person, {
  properties: PROPERTIES,
});

const updatedPerson = await notion.pages.update(
  {
    page_id,
    properties,
  },
  { flattenResponse: true }
);
```

## exports

### assertions

### guards

### flatteners

- **flattenPageResponse** from [page](https://github.com/myth-software/tools/blob/main/src/mocks/set_wildfowl-amaranth/page.mock.json) to [[entity](https://github.com/myth-software/tools/blob/main/src/mocks/set_wildfowl-amaranth/entity.mock.json), [properties](https://github.com/myth-software/tools/blob/main/src/mocks/set_wildfowl-amaranth/properties.mock.json)]
- **flattenPageResponses**
- **flattenExpandedProperties**

### expanders

- **expandProperties** from [entity](https://github.com/myth-software/tools/blob/main/src/mocks/set_wildfowl-amaranth/entity.mock.json) with [properties](https://github.com/myth-software/tools/blob/main/src/mocks/set_wildfowl-amaranth/properties.mock.json) to [expandedProperties](https://github.com/myth-software/tools/blob/main/src/mocks/set_wildfowl-amaranth/expanded-properties.json)

### infrastructure

- **notion**

### types

- **Properties**
- **ToolsConfiguration**
- **ExpandPropertiesConfiguration**
- **EntityMap**
- **all notion api endpoint types**
