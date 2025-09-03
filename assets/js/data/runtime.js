// assets/js/data/runtime.js
// 计算网站运行时间

function calculateRuntime() {
  const startDate = new Date('2025-07-15T00:00:00+08:00'); // 修改为网站上线时间
  const now = new Date();
  
  const diff = now - startDate;	// 计算时间差(毫秒)
  
  // 毫秒 转换为 时、分、秒
  const hours = Math.floor((diff / (1000 * 60 * 60)) + (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  // 计算结果显示在网页上
  document.getElementById('site-runtime').innerHTML = 
    `<strong>${hours}</strong>h <strong>${minutes}</strong>m <strong>${seconds}</strong>s`;
}

// 页面加载时计算并每秒更新一次
document.addEventListener('DOMContentLoaded', function() {
  calculateRuntime();
  setInterval(calculateRuntime, 1000); // 每秒更新一次
});