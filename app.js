

async function weatherAPI(){
  const response = fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/29485?unitGroup=us&include=days%2Ccurrent%2Chours%2Calerts%2Cevents&key=B8Q4A6P79H9BXDVVQTAWSLFFS&contentType=json", {
  "method": "GET",
  })
const data = (await response).json()
return data
}
 weatherAPI().then(data =>{
   console.log(data)
 })


//key=B8Q4A6P79H9BXDVVQTAWSLFFS

