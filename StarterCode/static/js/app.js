function buildMetadata(sample) {}

function buildCharts(sample) {}

funtion init() {
    
    buildCharts(firstSample);
    buildMetadata(firstSample); 
}

funtion optionChanged(newSample) {

    buildCharts(newSample);
    buildMetadata(newSample);
}

init();