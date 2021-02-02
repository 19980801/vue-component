module.exports={
  chainWebpack:config=>{
    // 如果你使用的是sass，则此处应该为
    // const oneOfsMap = config.module.rule('sass').oneOfs.store
    // 依此类推，其他的比如stylus等一样用法
    const oneOfsMap = config.module.rule('less').oneOfs.store;
    oneOfsMap.forEach(item=>{
      item.use()
    });
  }
}