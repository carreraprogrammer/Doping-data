// Add provisional data

const provisionalData = [
                          {
                            "Time": "36:50",
                            "Place": 1,
                            "Seconds": 2210,
                            "Name": "Marco Pantani",
                            "Year": 1995,
                            "Nationality": "ITA",
                            "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
                            "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
                          },
                          {
                            "Time": "36:55",
                            "Place": 2,
                            "Seconds": 2215,
                            "Name": "Marco Pantani",
                            "Year": 1997,
                            "Nationality": "ITA",
                            "Doping": "Alleged drug use during 1997 due to high hermatocrit levels",
                            "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
                          },
                          {
                            "Time": "37:15",
                            "Place": 3,
                            "Seconds": 2235,
                            "Name": "Marco Pantani",
                            "Year": 1994,
                            "Nationality": "ITA",
                            "Doping": "Alleged drug use during 1994 due to high hermatocrit levels",
                            "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
                          },
                          {
                            "Time": "37:36",
                            "Place": 4,
                            "Seconds": 2256,
                            "Name": "Lance Armstrong",
                            "Year": 2004,
                            "Nationality": "USA",
                            "Doping": "2004 Tour de France title stripped by UCI in 2012",
                            "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
                          }
                        ]

const drawChart = () => {
  const width = 1900;
  const height = 900;
  const padding = 100;

  const parseTime = d3.timeParse("%M:%S");
  
  const yScale = d3.scaleLinear()
                   .domain([d3.min(provisionalData, (d) => d.Seconds) - 1, d3.max(provisionalData, (d) => d.Seconds)])
                   .range([height - padding, padding]);

  const xScale = d3.scaleLinear()
                   .domain([d3.min(provisionalData, (d) => d.Year), d3.max(provisionalData, (d) => d.Year)])
                   .range([padding, width - padding]);

  const svg = d3.select('#dot-chart')
                .append("svg")
                .attr("width", width)
                .attr("height", height);
 
             svg.selectAll("circle")
                .data(provisionalData)
                .enter()
                .append("circle")
                .attr("cx", (d) => xScale(d.Year))
                .attr("cy", (d) => yScale(d.Seconds))
                .attr("r", 5);

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
}

drawChart();


