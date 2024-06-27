// https://github.com/nativewind/nativewind/pull/860#issuecomment-2081347601
const fs = require('fs');
const path = require('path');

const filePath = path.join('.', 'node_modules', 'nativewind', 'dist', 'metro', 'transformer.js');

fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
        console.error(err);
        return;
    }

    const issue = '`require(\'${config.nativewind.output}\');`';

    if (!content.includes(issue)) {
        console.log('NativeWind fix already applied!');
        return;
    }

    const fix = '`require(\'${config.nativewind.output.replace(/\\\\/g, \'\\\\\\\\\')}\');`';
    const result = content.replace(issue, fix);

    fs.writeFile(filePath, result, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('NativeWind fix applied successfully!');
    });
});