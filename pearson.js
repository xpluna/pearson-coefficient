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
