# First Contentful Paint
首次内容绘制 代表文档中内容元素（文本、图像、Canvas，或者 SVG）首次渲染


FCP time
(in seconds)	Color-coding	FCP score
(HTTP Archive percentile)
0–2	Green (fast)	75–100
2–4	Orange (moderate)	50–74
Over 4	Red (slow)	0–49



# Time to Interactive
可交互时间  是指页面完全可以进行交互所花费的时间。

This table shows how to interpret your TTI score:

TTI metric
(in seconds)	Color-coding
0–3.8	Green (fast)
3.9–7.3	Orange (moderate)
Over 7.3	Red (slow)



# Speed Index
首屏展现平均值（速度指数） 是显示页面的可见部分的平均时间。它以毫秒为单位表示，会受视图端口大小的影响。

Speed Index
(in seconds)	Color-coding	Speed Index score
0–4.3	Green (fast)	75–100
4.4–5.8	Orange (moderate)	50–74
Over 5.8	Red (slow)	0–49


# Total Blocking Time
累积阻塞时长 TBT是一个衡量用户事件响应的指标。TBT会统计在FCP和TTI时间之间，主线程被阻塞的时间总和。当主线程被阻塞超过50ms导致用户事件无法响应，这样的阻塞时长就会被统计到TBT中。TBT越小说明页面能够更好的快速响应用户事件。

TBT time
(in milliseconds)	Color-coding
0–300	Green (fast)
300-600	Orange (moderate)
Over 600	Red (slow)

# Largest Contentful Paint
最大内容绘制”，用于衡量标准报告视口内可见的最大内容元素的渲染时间。为了提供良好的用户体验，网站应努力在开始加载页面的前 2.5 秒内进行 最大内容渲染 。


LCP time
(in seconds)	Color-coding
0-2.5	Green (fast)
2.5-4	Orange (moderate)
Over 4	Red (slow)

# Cumulative Layout Shift
累计布局偏移 是指网页布局在加载期间的偏移量。得分范围是 0–1，其中 0 表示没有偏移，1 表示最大偏移。

得分范围是 0–1，其中 0 表示没有偏移，1 表示最大偏移。



# Serve images in next-gen formats

提供下一代格式的图像

JPEG 2000, JPEG XR, 和 WebP 与传统的 JPEG、PNG 相比具有高压缩比、高质量的特点。这让图片加载更快，带宽消耗更少。

# Remove unused CSS
删除多余无用的css

从样式表中删除无效规则，并延迟不用于首屏内容的CSS加载，以减少网络活动消耗的不必要字节。

# Remove unused JavaScript
删除多余无用的JavaScript

删除未使用的JavaScript以减少网络加载数据量。

# Efficiently encode images
