# 添加 50 Ways of Seeing 作品

所有 01–50 栏位已在 `50ways/index.md` 中准备好。已有文字无需重写。

## 图片：上传文件，再启用对应栏位

1. 把图片放进 `50ways` 文件夹。例如第 34 件命名为 `34.jpg`。注意 `.jpg`、`.jpeg`、`.png` 必须与实际文件一致；HEIC 要先导出为 JPEG。
2. 在 VS Code 打开 `50ways/index.md`，搜索 `WORK 34`。
3. 把图片代码前后的 `<!-- ...` 和 `-->` 删除，保留这一行：

```html
<img class="artwork" src="34.jpg" alt="Work 34" loading="lazy">
```

4. 在对应的 `<div class="notes" markdown="1">` 里面写注释，写在提示注释外面。文字自动居中；留空则不显示。
5. 保存，用本地预览检查，然后 commit / push 图片和修改过的文件。

空白占位会在加入图片或视频后自动隐藏。仅上传图片不会自动显示，必须启用上面的图片代码。

## 同一件作品有多张图片

每张图写一行，按顺序排列。例如：

```html
<img class="artwork" src="34-1.jpg" alt="Work 34, image 1" loading="lazy">
<img class="artwork" src="34-2.jpg" alt="Work 34, image 2" loading="lazy">
```

文件名包含空格时，把路径中的空格写成 `%20`。31 已加入一张图片；32 有三张，33 有两张。

## 视频

上传 H.264 视频 / AAC 音频编码的 MP4，在该编号的图片位置加入：

```html
<video class="artwork" controls playsinline preload="none" aria-label="Work 34 video">
  <source src="34.mp4" type="video/mp4">
</video>
```

不要只把 MOV 的扩展名改成 MP4，需要实际转码。视频下方继续使用原来的 notes 区域。

## 用 GitHub 网页手动上传

在 repo 中进入 `50ways` → **Add file → Upload files** 上传图片。
然后打开 `50ways/index.md`，点铅笔编辑，启用对应图片行并填写注释，提交修改。
等 Actions 发布成功后刷新网站。
