const CHART = document.getElementById("lineChart");
let lineChart = new Chart(CHART, {
	type:'line',
	data: {
        labels: ["0M","2M", "6M", "8,5M", "12M"],
        datasets: [
        {
            label: 'TIR de Proyectos ',
            data: [39, 36, 34, 29.5,0],
            steppedLine:true,
            backgroundColor:'rgba(255, 255, 255, 0.2)',
            borderColor:'rgba(255,99,132,1)',
            borderWidth: 3
        },
        {
            label: 'Costo Marginal de Capital',
            data: [16, 16, 16, 16,16],
            backgroundColor:'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 3  
        }

        ],
    }, 
});