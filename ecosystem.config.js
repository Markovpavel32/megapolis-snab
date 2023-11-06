module.exports = {
  apps: [
    {
      name: 'megapolis-snab',
      port: '80',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
