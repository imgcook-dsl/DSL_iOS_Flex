module.exports = function(layoutData, options) {
  // console.log(layoutData); // UI 模块结构组成和样式描述等

  var rawJson = JSON.stringify(layoutData);
  const renderData = {"layout":rawJson};
  console.log(renderData);
  return {
    renderData: renderData,
    noTemplate: true // 非必须，用于执行模板渲染后代码格式化配置
  };
}
