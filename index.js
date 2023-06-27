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
  const width = 900;
  const height = 400;
  const padding = 50;

  const yScale = d3.scaleLinear()
                   .domain([d3.max(provisionalData, (d) => d.Time), d3.min(provisionalData, (d) => d.Time)])
                   .range([height - padding, padding])
}
