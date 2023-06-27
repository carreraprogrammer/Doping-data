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
  const width = 1200;
  const height = 500;
  const padding = 50;

  const parseTime = d3.timeParse("%M:%S");
  
  const yScale = d3.scaleTime()
                   .domain(d3.extent(provisionalData, (d) => parseTime(d.Time)))
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
     .attr("cy", (d) => yScale(parseTime(d.Time)))
     .attr("r", 5);
}

drawChart();