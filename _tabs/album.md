---
icon: fa-solid fa-camera
order: 4
---

> Some interesting memories.

<style>
.album-grid {
  column-count: 3;
  column-gap: 15px;
}
.album-item {
  position: relative;
  break-inside: avoid;	/*避免被拆分*/
  margin-bottom: 15px;
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

<div class="album-grid">
  <div class="album-item">
    <img src="./album/image01.jpg" alt="Photo 1">
    <div class="album-caption">崇礼富龙小镇</div>
  </div>
  <div class="album-item">
    <img src="./album/image01.jpg" alt="Photo 2">
    <div class="album-caption">崇礼富龙小镇</div>
  </div>
  <div class="album-item">
    <img src="./album/image01.jpg" alt="Photo 3">
    <div class="album-caption">崇礼富龙小镇</div>
  </div>
  <div class="album-item">
    <img src="./album/image02.jpg" alt="Photo 4">
    <div class="album-caption">崇礼富龙小镇</div>
  </div>
  <div class="album-item">
    <img src="./album/image01.jpg" alt="Photo 5">
    <div class="album-caption">崇礼富龙小镇</div>
  </div>
  <div class="album-item">
    <img src="./album/image01.jpg" alt="Photo 6">
    <div class="album-caption">崇礼富龙小镇</div>
  </div>
</div>
