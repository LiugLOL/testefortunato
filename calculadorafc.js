function calculoAno(normal, aumento, ferias) {
    let select = document.querySelector("#opcoes");

    let opcaoSelecionada = select.value;
    if (opcaoSelecionada === "maio") {
        var aumento = 4;
        var aumentoNum = 7
    } else if (opcaoSelecionada === "junho") {
        aumento = 5
        aumentoNum = 6


    }
    let conta = normal * aumento + aumento * aumentoNum + ferias;
    return conta
}
function calculoIRRF(irrfValor) {
    if (irrfValor < 2112) {
        resultadoIrrf = 0
    }
    else if (irrfValor < 2826.65) {
        resultadoIrrf = (irrfValor * 0.075) - 142.80
    }
    else if (irrfValor < 3751.05) {
        resultadoIrrf = (irrfValor * 0.15) - 354.80;
    }
    else if (irrfValor < 4664.68) {
        resultadoIrrf = (irrfValor * 0.225) - 646.13;
    }
    else if (irrfValor > 4664.48) {
        resultadoIrrf = (irrfValor * 0.275) - 869.36;
    }
    return resultadoIrrf
}
function calculoINSS(valorSalariro) {
    if (valorSalariro < 1320) {
        resultadoInss = (valorSalariro * 0.075) + 99
    }
    else if (valorSalariro < 2571.29) {
        resultadoInss = (valorSalariro - 1320) * 0.09 + 112.62
    }
    else if (valorSalariro < 3856.94) {

        resultadoInss = (valorSalariro - 2571.29) * 0.12 + 154.28;
    }
    else if (valorSalariro < 7507.49) {

        resultadoInss = (valorSalariro - 3856.94) * 0.14 + 511.08;
    }
    else if (valorSalariro > 7507.49) {

        resultadoInss = 876.97;
    }
    return resultadoInss;
}
function IrrfAno(descSim, baseCalculo) {

    if (baseCalculo <= 22847.76) {
        descSim = 0


    }
    else if (baseCalculo <= 33191.80) {

        descSim = baseCalculo * 0.075 - 1716;



    }
    else if (baseCalculo <= 45012.60) {
        descSim = baseCalculo * 0.15 - 4257.57

    }
    else if (baseCalculo <= 55976.16) {

        descSim = baseCalculo * 0.225 - 7633.51

    }
    else if (baseCalculo > 55976.16) {

        descSim = baseCalculo * 0.275 - 10432.32

    }
    return descSim

}





function Calculos() {
    let salarioHTML = parseFloat(document.getElementById("salarioHTML").value);
    let numeroHTML = parseFloat(document.getElementById("numeroHTML").value);
    let horaExtraHTML = parseFloat(document.getElementById("horaExtraHTML").value);
    let despesasHTML = parseFloat(document.getElementById("despesasHTML").value);
    let aumentoHTML = parseFloat(document.getElementById("aumentoHTML").value);

    if (isNaN(salarioHTML) || isNaN(numeroHTML) || isNaN(horaExtraHTML) || isNaN(despesasHTML) || isNaN(aumentoHTML)) {
        alert("Preencha os campos corretamente!");
        return;
    }
    //Normal.
    let salario = salarioHTML + numeroHTML;//Salário  A
    let horaNormal = salario / 220;//Hora normal  B
    let adicionalHExtra = horaNormal / 2;//Adicional de 50%  C
    let horaExtra = horaNormal + adicionalHExtra//hora extra+hora  D
    let numeroExtra = horaExtraHTML + numeroHTML
    let horaExtraMes = horaExtra * numeroExtra;//Horas extras por mês
    let salarioBruto = salario + horaExtraMes;//Salário+Hora extra
    let inss = calculoINSS(salarioBruto); //inss
    let baseIrrf = salarioBruto - inss - despesasHTML//base pro imposto de renda
    let irrf = calculoIRRF(baseIrrf) //imposto de renda

    //Aumento.
    let aumento = aumentoHTML / 100;
    let salarioAumento = salario * aumento + salario
    let horaNormalAumento = salarioAumento / 220
    let adicionalHExtraAumento = horaNormalAumento / 2
    let horaExtraAumento = horaNormalAumento + adicionalHExtraAumento
    let numeroExtraAumento = numeroExtra
    let horaExtraMesAumento = horaExtraAumento * numeroExtraAumento
    let salarioBrutoAumento = salarioAumento + horaExtraMesAumento
    let inssAumento = calculoINSS(salarioBrutoAumento)
    let dependentesAumento = despesasHTML
    let baseIrrfAumento = salarioBrutoAumento - inss - despesasHTML
    let irrfAumento = calculoIRRF(baseIrrfAumento);


    //Férias.
    let salarioFerias = salarioAumento * 0.33 + salario
    let horaNormalFerias = salarioFerias / 220
    let adicionalHExtraFerias = horaNormalFerias / 2
    let HoraExtraFerias = horaNormalFerias + adicionalHExtraFerias
    let numeroExtraFerias = numeroExtra
    let horaExtraMesFerias = HoraExtraFerias * numeroExtraFerias
    let salarioBrutoFerias = salarioFerias + horaExtraMesFerias
    let inssFerias = calculoINSS(salarioBrutoFerias)
    let dependentesFerias = despesasHTML
    let baseIrrfFerias = salarioBrutoFerias - inss - despesasHTML
    let irrfFerias = calculoIRRF(baseIrrfFerias)

    //Salários líquidos.
    let salarioLiquido = baseIrrf - irrf
    let salarioLiquidoAumento = baseIrrfAumento - irrfAumento
    let salarioLiquidoFerias = baseIrrfFerias - irrfFerias

    //Declaração simplificada.
    let rendaAno = calculoAno(salario, salarioAumento, salarioFerias);
    let contraPrevINSS = calculoAno(inss, inssAumento, inssFerias)
    let descSim = contraPrevINSS * 0.2
         if (descSim > 16754.34) {
             descSim = 16754.34
        }
    let baseCalculo = rendaAno - descSim
    let ImpDev = baseCalculo - IrrfAno(descSim, baseCalculo);
    let irrfAnual = calculoAno(irrf, irrfAumento, irrfFerias);
    let IrRestante = ImpDev - baseCalculo;



 //Todos os document.getElementById().innerHTML = ;
    //Normal.
    document.getElementById("salario").innerHTML = salario;
    document.getElementById("horaNormal").innerHTML = horaNormal
    document.getElementById("adicionalHExtra").innerHTML = adicionalHExtra;
    document.getElementById("horaExtra").innerHTML = horaExtra;
    document.getElementById("numeroExtra").innerHTML = numeroExtra;
    document.getElementById("horaExtraMes").innerHTML = horaExtraMes;
    document.getElementById("salarioBruto").innerHTML = salarioBruto;
    document.getElementById("inss").innerHTML = inss;
    document.getElementById("dep").innerHTML = despesasHTML;
    document.getElementById("baseIrrf").innerHTML = baseIrrf;
    document.getElementById("irrf").innerHTML = irrf;
    //Aumento.
    document.getElementById("salarioAumento").innerHTML = salarioAumento;
    document.getElementById('horaNormalAumento').innerHTML = horaNormalAumento;
    document.getElementById("adicionalHExtraAumento").innerHTML = adicionalHExtraAumento;
    document.getElementById("horaExtraAumento").innerHTML = horaExtraAumento;
    document.getElementById("numeroExtraAumento").innerHTML = numeroExtraAumento;
    document.getElementById("horaExtraMesAumento").innerHTML = horaExtraMesAumento;
    document.getElementById("salarioBrutoAumento").innerHTML = salarioBrutoAumento;
    document.getElementById("inssAumento").innerHTML = inssAumento;
    document.getElementById("depAumento").innerHTML = dependentesAumento;
    document.getElementById("baseIrrfAumento").innerHTML = baseIrrfAumento;
    document.getElementById("irrfAumento").innerHTML = irrfAumento;
    //Férias.
    document.getElementById("salarioFerias").innerHTML = salarioFerias;
    document.getElementById('horaNormalFerias').innerHTML = horaNormalFerias;
    document.getElementById("adicionalHExtraFerias").innerHTML = adicionalHExtraFerias;
    document.getElementById("HoraExtraFerias").innerHTML = HoraExtraFerias;
    document.getElementById("numeroExtraFerias").innerHTML = numeroExtraFerias;
    document.getElementById("horaExtraMesFerias").innerHTML = horaExtraMesFerias;
    document.getElementById("salarioBrutoFerias").innerHTML = salarioBrutoFerias;
    document.getElementById("inssFerias").innerHTML = inssFerias;
    document.getElementById("dependentesFerias").innerHTML = dependentesFerias;
    document.getElementById("baseIrrfFerias").innerHTML = baseIrrfFerias;
    document.getElementById("irrfFerias").innerHTML = irrfFerias
    //Declaração simplificada.
    document.getElementById("rendaAno").innerHTML = rendaAno;
    document.getElementById("contraPrevINSS").innerHTML = contraPrevINSS;
    document.getElementById("descSim").innerHTML = descSim;
    document.getElementById("baseCalculo").innerHTML = baseCalculo;
    document.getElementById("impDev").innerHTML = ImpDev;
    document.getElementById("irrfAnual").innerHTML = irrfAnual;
    document.getElementById("irRestante").innerHTML = IrRestante;
}



function Limpar(s1) {
    document.getElementById(s1).value = "";

}
