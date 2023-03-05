
// node.js file system module, sendo usado para auxiliar na criação dos arquivos com 'writeFile'
const fs = require('fs');

// armazena o conteudo dos arquivos e retorna à main em formato de vetor
function readJson(dataBrandsCorrompido, dataSalesCorrompido){ 
    let dataBrands = require(dataBrandsCorrompido);
    let dataSales = require(dataSalesCorrompido);

    return [dataBrands, dataSales];
}

// recebe os arquivos corrompidos e percorre arrumando os caracteres
function fixBrandAndVehicle(dataSales, dataBrands){
    dataBrands.forEach(element => {
        element.marca = element.marca.replace(/æ/g, 'a');
        element.marca = element.marca.replace(/ø/g, 'o');
        
    });

    dataSales.forEach(element => {
        element.nome = element.nome.replace(/æ/g, 'a');
        element.nome = element.nome.replace(/ø/g, 'o');
           
    });
}

//recebe os dados das vendas e corrige o elemento vendas para Number
function fixSales(dataSales){
    dataSales.forEach(element => {
        element.vendas = Number.parseInt(element.vendas);
    });
}

// cria os arquivos utilizando o modulo fs do node.js
function exportJson(dataSales, dataBrands){   
    let dataSalesJsonString = JSON.stringify(dataSales);
    let dataBrandsJsonString = JSON.stringify(dataBrands);

    fs.writeFile('fixed_DataBase1.json' ,dataSalesJsonString, (err) =>{
        if(err) throw err;
        console.log('JSON Saved');
    });
    fs.writeFile('fixed_DataBase2.json' ,dataBrandsJsonString, (err) =>{
        if(err) throw err;
        console.log('JSON saved');
    });
};

function main(){
    const allData = readJson('./broken_database1.json', './broken_database2.json');
    let dataSales = allData[0];
    let dataBrands = allData[1];
    
    fixBrandAndVehicle(dataSales, dataBrands);
    fixSales(dataSales);
    exportJson(dataSales, dataBrands);
}

main();