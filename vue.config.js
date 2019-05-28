const path = require('path');

module.exports= {


    pluginOptions: {
        electronBuilder: {
            builderOptions: {
            nsis: {
                deleteAppDataOnUninstall: true,
                createDesktopShortcut: true,
                createStartMenuShortcut: true,
                shortcutName: "Demo EMR",
                artifactName: "DemoEMR-Setup-${version}.${ext}"
              }
            }
        }
      },


    outputDir: path.resolve(__dirname, '../server/public'),
devServer:{
    proxy:{

        '/api':{
            target: 'http://localhost:5050'
        }
    }
}

}

