openNav = () => (document.getElementById("myNav").style.width = "100%");
closeNav = () => (document.getElementById("myNav").style.width = "0%");

const margin = { top: 10, right: 20, bottom: 30, left: 50 };
const width = 1000 - margin.left - margin.right;
const height = 840 - margin.top - margin.bottom;
const xLabelHeight = 50;

d3.csv("https://api-vercel-umber.vercel.app/data", (data) => {
	// Add X axis
	var x = d3.scaleLinear().domain([2004, 2026]).range([0, width]);
	svg
		.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x));

	// Add Y axis - Exp
	const y = d3.scaleLinear().domain([0, 11]).range([height, 0]);
	svg.append("g").call(d3.axisLeft(y));

	// Add a scale for bubble size
	const z = d3.scaleLinear().domain([0, 15]).range([4, 40]);

	// text label for the x axis
	svg
		.append("text")
		.attr("x", 475)
		.attr("y", 840)
		.style("text-anchor", "middle")
		.style("font-size", "18")
		.text("Last used year");

	// text label for the y axis
	svg
		.append("text")
		.attr("x", -400)
		.attr("y", -40)
		.attr("transform", "rotate(-90)")
		.attr("dy", "1em")
		.style("text-anchor", "middle")
		.style("font-size", "18")
		.text("Year of experience");

	// Add a scale for bubble color
	const myColor = d3
		.scaleOrdinal()
		.domain([
			"Javascript",
			"Web development",
			"DevOps",
			"Java",
			"Python",
			"Security",
			"Others",
			"Methodology",
			"ERP",
			"Database",
			"Cloud Computing",
			"DevOps",
			"BI",
			"Machine Intelligence",
			"Real-time Messaging",
			"Message-oriented Architecture",
			"Programming Language",
			"Version Control",
		])
		.range(d3.schemeSet2);

	// -1- Create a tooltip div that is hidden by default:
	const tooltip = d3
		.select("#skills_plot")
		.append("div")
		.style("position", "absolute")
		.style("opacity", 0)
		.attr("class", "tooltip")
		.style("background-color", "black")
		.style("border-radius", "5px")
		.style("padding", "10px")
		.style("color", "white");

	// -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
	const showTooltip = function (d) {
		tooltip.transition().duration(100);
		tooltip
			.style("opacity", 1)
			.html(d.skill)
			.style("left", d3.mouse(this)[0] + 30 + "px")
			.style("top", d3.mouse(this)[1] + 30 + "px");
	};
	const moveTooltip = function (d) {
		tooltip
			.style("left", d3.mouse(this)[0] + 30 + "px")
			.style("top", d3.mouse(this)[1] + 30 + "px");
	};
	const hideTooltip = function (d) {
		tooltip.transition().duration(200).style("opacity", 0);
	};

	// Add dots
	svg
		.append("g")
		.selectAll("dot")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", "bubbles")
		.attr("cx", function (d) {
			return x(d.lastUse);
		})
		.attr("cy", function (d) {
			return y(d.exp);
		})
		.attr("r", function (d) {
			return z(d.competency ** 3 / 100);
		})
		.style("fill", function (d) {
			return myColor(d.category);
		})

		// -3- Trigger the functions
		.on("mouseover", showTooltip)
		.on("mousemove", moveTooltip)
		.on("mouseleave", hideTooltip);
});

// append the svg object to the body of the page
const svg = d3
	.select("#skills_plot")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom + xLabelHeight)
	.style("background-color", "white")
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
