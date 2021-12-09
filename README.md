# Karl Pearson's Coefficient
https://wikipedia.org/wiki/Pearson_correlation_coefficient
## Based on Direct Method:
<div style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
<img style="center" src="https://latex.codecogs.com/svg.image?r&space;=&space;\frac{\mathrm{\sum}&space;dx.dy}{\mathrm{\sqrt{\sum&space;(dx)^2&space;-&space;\sum&space;(dy)^2}}&space;}" title="r = \frac{\mathrm{\sum} dx.dy}{\mathrm{\sqrt{\sum (dx)^2 - \sum (dy)^2}} }" />
</div>

## Code
```js
/* Enter space delimited values */
let x="2 6 8 4 5 6 4",
    y="4 12 16 8 10 12 8";

console.log(((x, y) => {
	x = x.split(" ").map(i => parseInt(i)).filter(j => j.toString() !== "NaN"),
	y = y.split(" ").map(i => parseInt(i)).filter(j => j.toString() !== "NaN");

	let dx = x.map(i => i - x.reduce((i, j) => i + j) / x.length),
		dy = y.map(i => i - y.reduce((i, j) => i + j) / y.length)

	let sigma_dxdy = dx.map((_, i) => _ * dy[i]).reduce((i, j) => i + j);

	let sigma_dx2 = dx.map(i => i*i).reduce((a, b) => a + b),
		sigma_dy2 = dy.map(i => i*i).reduce((a, b) => a + b);

	return sigma_dxdy / ((sigma_dx2 * sigma_dy2) ** .5)
})(x, y));
```
