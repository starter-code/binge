### Sorting Import Order Convention

```js
// Package imports
import ... 'lodash';
import ... 'react';
import ... 'react-router';

// Webpack imports
import ... 'src/whatever';
import ... 'src/utils';

// Relative path imports
import ... '../../folder/file';
import ... './file-in-same-folder';
```
