# randomfox.js
 randomfox.js utilizes the randomfox API

# Installation
```bash
npm i @mattplays/randomfox.js
```

# Usage
### Javascript
```javascript
const randomfox = require("@mattplays/randomfox.js");
randomfox().then(({image, link}) => {
    console.log(image, link);
});
```
### Typescript
```typescript
import randomfox from "@mattplays/randomfox.js";
randomfox().then(({image, link}) => {
    console.log(image, link);
});
```

# License
randomfox.js is Licensed under the [MIT License](https://github.com/MattPlays/randomfox.js/blob/main/LICENSE)