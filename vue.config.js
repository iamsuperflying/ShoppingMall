const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       .set('@', resolve('src'))
//       .set('assets',resolve('src/assets'))
//       .set('common',resolve('src/common'))
//       .set('components',resolve('src/components'))
//       .set('network',resolve('src/network'))
//       .set('views',resolve('src/views'))
      
//   }
// }


/// vue cli 3.x 写法

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }
// };
