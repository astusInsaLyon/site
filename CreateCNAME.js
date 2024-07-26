const fs = require('fs');
const path = require('path');

const cnamePath = path.join(__dirname, 'dist', 'CNAME');
const cnameContent = 'astustc.asso-insa-lyon.fr';

if (!fs.existsSync(cnamePath)) {
  fs.writeFileSync(cnamePath, cnameContent);
  console.log(`CNAME file created with content: ${cnameContent}`);
} else {
  console.log('CNAME file already exists, not overwriting.');
}