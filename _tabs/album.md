---
icon: fa-solid fa-camera
order: 6
---

<style>
.album-grid {
  column-count: 3;
  column-gap: 15px;
}
.album-item {
  position: relative;
  break-inside: avoid;	
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 8px;
}
.album-grid img {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.album-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 14px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
}
.album-item:hover .album-caption {
  opacity: 1;
  transform: translateY(0);
}
</style>


> breathe in and breathe out  
> loosen up and walk around

<div class="album-grid">
  <div class="album-item">
    <img src="https://cdn.jsdelivr.net/gh/HungrySemiconductor/Pic@update/Urumqi_Tianshan_International_Airport%20(1).JPEG" alt="Photo_Urumqi01">
    <div class="album-caption">乌鲁木齐-天山国际机场</div>
  </div>
  <div class="album-item">
    <img src="https://cdn.jsdelivr.net/gh/HungrySemiconductor/Pic@update/Urumqi_Tianshan_International_Airport%20(2).JPEG" alt="Photo_Urumqi02">
    <div class="album-caption">乌鲁木齐-天山国际机场</div>
  </div>
  <div class="album-item">
    <img src="https://cdn.jsdelivr.net/gh/HungrySemiconductor/Pic@update/Urumqi_Tianshan_International_Airport%20(3).JPEG" alt="Photo_Urumqi03">
    <div class="album-caption">乌鲁木齐-日出</div>
  </div>
  <div class="album-item">
    <img src="https://cdn.jsdelivr.net/gh/HungrySemiconductor/Pic@update/Urumqi_Tianshan_International_Airport%20(4).JPEG" alt="Photo_Urumqi04">
    <div class="album-caption">乌鲁木齐-天山</div>
  </div>
</div>