const { MSICreator } = require('electron-wix-msi');
const path = require('path');

(async () => {
    // Step 1: Instantiate the MSICreator
    const msiCreator = new MSICreator({
    appDirectory: path.join(__dirname, 'react-electron-workshop-win32-x64'),
    description: 'Photo Viewer',
    exe: 'react-electron-workshop',
    name: 'photo-viewer',
    manufacturer: 'Zac + Milan',
    version: '0.0.1',
    outputDirectory: path.join(__dirname, 'installer')
    });

    // Step 2: Create a .wxs template file
    await msiCreator.create();

    // Step 3: Compile the template to a .msi file
    await msiCreator.compile();
})();
