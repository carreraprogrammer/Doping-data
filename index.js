const showTag = () => {
    let dots = document.getElementsByClassName("dot");
    let tags = document.getElementsByClassName("not-show");

    Array.from(dots).forEach((dot, i) => {
        dot.addEventListener("mouseover", () => {
          let tag = tags[i]
          tag.classList.add("show")
        })

        dot.addEventListener("mouseout", () => {
          let tag = tags[i]
          tag.classList.remove("show")
        })
    })  
}

const drawChart = async () => {

  const response = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json');
  const data = await response.json();
  const width = 1300;
  const height = 900;
  const padding = 100;
  
  const yScale = d3.scaleLinear()
                   .domain([d3.max(data, (d) => d.Seconds) + 5, d3.min(data, (d) => d.Seconds)])
                   .range([height - padding, padding]);

  const xScale = d3.scaleLinear()
                   .domain([1993, d3.max(data, (d) => d.Year)])
                   .range([padding, width - padding]);

  const svg = d3.select('#dot-chart')
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale)
                  .tickFormat((d) => {
                    const minutes = Math.floor(d / 60);
                    const seconds = d % 60;
                    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                  });


  svg.append("g")
     .attr("transform", "translate(0," + (height - padding) + ")")
     .call(xAxis);
  
  svg.append("g")
     .attr("transform", "translate(" + padding + ",0)")
     .call(yAxis);

  svg.selectAll("circle")
     .data(data)
     .enter()
     .append("circle")
     .attr("cx", (d) => xScale(d.Year))
     .attr("cy", (d) => yScale(d.Seconds))
     .attr("r", 8)
     .attr("class", "dot")
     .attr("class", (d) => d.Doping ? "dot red" : "dot green")

     svg.selectAll("foreignObject")
     .data(data)
     .enter()
     .append("foreignObject")
     .attr("x", (d) => xScale(d.Year) > width / 2 ? xScale(d.Year) - 300 : xScale(d.Year))
     .attr("y", (d) => yScale(d.Seconds) > height / 2 ? yScale(d.Seconds) - 200 : yScale(d.Seconds))
     .attr("width", 300)
     .attr("height", 150)
     .html((d) => {
       const dopingText = d.Doping ? `<p class="info">"${d.Doping}"</p>` : '';
       return `<div class="text-container">
                 <p class="info">${d.Name}: ${d.Nationality}</p>
                 <p class="info">Year: ${d.Year}</p>
                 ${dopingText}
                 <p class="info">Time: ${d.Time}</p>
               </div>`;
     })
     .attr("class", "not-show");

  d3.select("svg")
    .append("style")
    .text(`
      .text-container {
        height: 100%;
        width: 100%;
        border: 2px solid black;
        background-color: white;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 5px
        align-items: flex-start;
        line-height: 2;
      }
    `);

    svg.append("text")
       .attr("transform", "rotate(-90)")
       .attr("x", -height / 2)
       .attr("y", padding / 2)
       .attr("text-anchor", "middle")
       .text("Time (minutes:seconds)")
       .attr("class", "axis-name");

    svg.append("text")
       .attr("x", width / 2)
       .attr("y", height - padding/4 )
       .attr("text-anchor", "middle")
       .text("Year")
       .attr("class", "axis-name");

     showTag();
     
}

drawChart();


