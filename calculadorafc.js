

function Calcular() {
    var salario = parseFloat(document.getElementById("v1").value); 
    var numero = parseFloat(document.getElementById("v2").value);
    var horaExtra = parseFloat(document.getElementById("v3").value);
    var dependentes = parseFloat(document.getElementById("v4").value);
    

    if (isNaN(salario) || isNaN(numero) || isNaN(horaExtra) || isNaN(dependentes)) { 
        alert("Preencha os campos corretamente!");
        return;
    }
     
    var salarioNormal = salario + numero;//Salário  A
    var horaExtra = salarioNormal/220;//Hora normal  B
    var adicionalHoraExtra = horaExtra/2;//Adicional de 50%  C
    var horaExtraSomada = horaExtra+adicionalHoraExtra//hora extra+hora  D
    var quantidadeHoraExtra = horaExtra+numero   
    var horaExtraMes = horaExtraSomada*quantidadeHoraExtra;//Horas extras por mês
    var salarioBruto = salarioNormal + horaExtraMes;//Salário+Hora extra
    var inssconta = calculoINSS(ieniss, salarioBruto); //inss
    var baseIRRF = inssconta-salario-dependentes//base pro imposto de renda
    var irrf = 0 //imposto de renda
    if (baseIRRF <= 1903.98) {
        var irrf = 0
    }
    else if (baseIRRF <= 2826.65, baseIRRF>=1903.98) {
        var part1 = baseIRRF*0.075;
        var irrf = part1-142.80;
        

    }
    else if (baseIRRF <= 3751.05) {
        var part1 = baseIRRF*0.15;
        var irrf = part1-354.80;
        
        

    }
    else if (baseIRRF <= 4664.68) {
        var part1 = baseIRRF*0.225;
        var irrf = part1-646.13;
        
    }
    else if (baseIRRF >= 4664.48) {
        var part1 = baseIRRF*0.2750;
        var irrf = part1-869.36;
    
    
    /*var K = I - J; //salário líquido
    
    var L =  I*12.33;
    var M = H*12.33
    var N = M*0.2;
    if (N>=16754.34) {
        N = 16754.34
    }
   
    var O = L-N;//BASEIRA
    var P =  0;//IMPDEV
    

         if (O<=22847.76) {
       var P = 0
           
    }
    else if (O<=33191.80) {
        var parte1 = O*0.075;
        var P = parte1-1716;
        


    }
    else if (O<=45012.60) {
        var parte1 = O*0.15;
        var P = parte1-4257;

       var P = O*0.15 -4257.57
    }
    else if (O<=55976.16) {
        var parte1 = O*0.225
        var P = parte1-7633.51
       
    }
    else if (O>55976.16) {
        var parte1= O*0.275
       var P = O - 10432.32
    }
    var Q = J*12.33
    var R = Q - P;*/
   
var salarioNormalFormatado =  parseFloat(salarioNormal.toFixed(4));
var horaExtraFormatado =  parseFloat(horaExtra.toFixed(4));
var adicionalHoraExtraFormatado =  parseFloat(adicionalHoraExtra.toFixed(4));
var horaExtraSomadaFormatado =  parseFloat(horaExtraSomada.toFixed(4));
var quantidadeHoraExtraFormatado =  parseFloat(quantidadeHoraExtra.toFixed(4));
var horaExtraMesFormatado =  parseFloat(horaExtraMes.toFixed(4));
var salarioBrutoFormatado =  parseFloat(salarioBruto.toFixed(4));
var inssFormatado =  parseFloat(inssconta.toFixed(4));
var ii =  parseFloat(baseIRRF.toFixed(4));
var jj =  parseFloat(irrf.toFixed(4));














    /*F
      O
      L
      H
      A
      
      1

      B
      I
      M
      E
      S
      T
      R
      E*/
    
      //primeira coluna
      //MESES
      /*é aqui onde eu começo a fazer os meses, começando por desde janeiro até abril */
      //usar o K
      //HEXTRA
      //inss
      //dependentes
      //baseir
      //irrf
      /*acabo*/
      /*agr é de maio, pula julho, e o resto do ano */
      var aplus= salarioNormal*0.05
      var bplus=aplus/220
      var cplus=bplus/2
      var dplus=bplus+cplus
      var eplus=quantidadeHoraExtra
      var fplus= dplus*eplus
      var gplus=aplus+fplus
      var hplus=0
      if (gplus <= 1212) {
        var part1 = gplus*0.075;
        var hplus = part1+90.90;

    
    }
    else if (gplus <= 2427.35, gplus >=1212) {
    
        var part12 =gplus - 1212;
        var part22 = part12*0.09;
        var hplus = part22+109.38;
    }
    else if (gplus <= 3641.03, gplus>=2427.35) {
        var part12 = gplus-2427.35;
        var part22 = part12*0.12;
        var hplus = part22+145.64;
    }
    else if (gplus <= 7087.22, gplus>=3641.03) {
        var part12 = gplus -3641.03;
        var part22 = part1*0.14;
        var hplus = part2+482.47;
        
        
    }
    else if (gplus  >= 7087.22) {
 
        
        var hplus = 828.39;
    }
    var depplus = dependentes*189.59 //USE VALORES INTEIRROS
    var iplus = gplus-inssconta-dependentes//base pro imposto de renda
    var jplus = 0 //imposto de renda
    if (iplus <= 1903.98) {
        var jplus = 0
    }
    else if (iplus <= 2826.65, iplus>=1903.98) {
        var partt12 = iplus*0.075;
        var jplus = partt12-142.80;
        

    }
    else if (iplus <= 3751.05) {
        var partt12 = iplus*0.15;
        var jplus = part1t2-354.80;
        
        

    }
    else if (iplus <= 4664.68) {
        var partt12 = iplus*0.225;
        var jplus = partt12-646.13;
        
    }
    else if (iplus >= 4664.48) {
        var partt12 = iplus*0.2750;
        var jplus = partt12-869.36;

    
    }
   

var aaplus =  parseFloat(aplus.toFixed(4));
var bbplus =  parseFloat(bplus.toFixed(4));
var ccplus =  parseFloat(cplus.toFixed(4));
var ddplus =  parseFloat(dplus.toFixed(4));
var eeplus =  parseFloat(eplus.toFixed(4));
var ffplus =  parseFloat(fplus.toFixed(4));
var ggplus =  parseFloat(gplus.toFixed(4));
var hhplus =  parseFloat(hplus.toFixed(4));
var iiplus =  parseFloat(iplus.toFixed(4));
var jjplus =  parseFloat(jplus.toFixed(4));


      /*ferias */
      var afer= salarioNormal*0.05
      var bfer=afer/220
      var cfer=bfer/2
      var dfer=bfer+cfer
      var efer=0
      var ffer= dfer*efer
      var gfer=afer+ffer
      var hfer=0
      if (gfer <= 1212) {
        var part12fer = gfer*0.075;
        var hfer = part12fer+90.90;

    
    }
    else if (gfer <= 2427.35, gfer >=1212) {
    
        var part12fer = gfer -1212;
        var part22fer = part12fer*0.09;
        var hfer = part22fer+109.38;
    }
    else if (gplus <= 3641.03, gplus>=2427.35) {
        var part12fer = gplus-2427.35;
        var part22fer = part12fer*0.12;
        var hplus = part22fer+145.64;
    }
    else if (gplus <= 7087.22, gplus>=3641.03) {
        var part12fer = gplus -3641.03;
        var part22fer = part12fer*0.14;
        var hplus = part22fer+482.47;
        
        
    }
    else if (gfer  >= 7087.22) {
 
        
        var hfer = 828.39;
    }
    var depfer = dependentes*189.59 //USE VALORES INTEIRROS
    var ifer = gfer-inssconta-dependentes//base pro imposto de renda
    var jfer = 0 //imposto de renda
    if (ifer <= 1903.98) {
        var jfer = 0
    }
    else if (ifer <= 2826.65, ifer>=1903.98) {
        var partt12fer = ifer*0.075;
        var jfer = partt12fer-142.80;
        

    }
    else if (ifer <= 3751.05) {
        var partt12fer = ifer*0.15;
        var jfer = part12fer-354.80;
        
        

    }
    else if (ifer <= 4664.68) {
        var partt1fer = ifer*0.225;
        var jfer = partt1fer-646.13;
        
    }
    else if (ifer >= 4664.48) {
        var partt1fer = ifer*0.2750;
        var jfer = partt1fer-869.36;

    
    }
    var kfer=ifer-jfer

var aafer =  parseFloat(afer.toFixed(4));
var bbfer =  parseFloat(bfer.toFixed(4));
var ccfer =  parseFloat(cfer.toFixed(4));
var ddfer =  parseFloat(dfer.toFixed(4));
var eefer =  parseFloat(efer.toFixed(4));
var fffer =  parseFloat(ffer.toFixed(4));
var ggfer =  parseFloat(gfer.toFixed(4));
var hhfer =  parseFloat(hfer.toFixed(4));
var iifer =  parseFloat(ifer.toFixed(4));
var jjfer =  parseFloat(jfer.toFixed(4));


document.getElementById("ano").innerHTML = salarioNormalFormatado;
document.getElementById('bno').innerHTML = horaExtraFormatado
document.getElementById("cno").innerHTML = adicionalHoraExtraFormatado;
document.getElementById("dno").innerHTML = horaExtraSomadaFormatado;
document.getElementById("eno").innerHTML = quantidadeHoraExtraFormatado;
document.getElementById("fno").innerHTML = horaExtraMesFormatado;
document.getElementById("gno").innerHTML = salarioBrutoFormatado;
document.getElementById("hno").innerHTML = inssFormatado;
document.getElementById("depno").innerHTML = iii;
document.getElementById("ino").innerHTML = ii;
document.getElementById("jno").innerHTML = jj

//aumento
document.getElementById("saplus").innerHTML = aaplus;
document.getElementById('sbplus').innerHTML = bbplus;
document.getElementById("scplus").innerHTML = ccplus;
document.getElementById("sdplus").innerHTML = ddplus;
document.getElementById("seplus").innerHTML = eeplus;
document.getElementById("sfplus").innerHTML = ffplus;
document.getElementById("sgplus").innerHTML = ggplus;
document.getElementById("shplus").innerHTML = hhplus;
document.getElementById("sdepplus").innerHTML = depplus;
document.getElementById("siplus").innerHTML = iiplus;
document.getElementById("sjplus").innerHTML = jjplus;

//ferias
document.getElementById("safer").innerHTML = aafer;
document.getElementById('sbfer').innerHTML = bbfer;
document.getElementById("scfer").innerHTML = ccfer;
document.getElementById("sdfer").innerHTML = ddfer;
document.getElementById("sefer").innerHTML = quantidadeHoraExtra;
document.getElementById("sffer").innerHTML = ffer;
document.getElementById("sgfer").innerHTML = ggfer;
document.getElementById("shfer").innerHTML = hhfer;
document.getElementById("sdepfer").innerHTML = depfer;
document.getElementById("sifer").innerHTML = iifer;
document.getElementById("sjfer").innerHTML = jjfer
//O K
var kfer=ifer-jfer
var K = baseIRRF - irrf; //salário líquido
var kplus= iplus-jplus


//rend trib ano
var rta=K*4+6*kplus+2*kfer

//13 salario
var dt=rta/12

document.getElementById('srta').innerHTML= rta;
document.getElementById('sdt').innerHTML= dt;
      
      
  }
      
    
    
    function Limpar(v1){
		document.getElementById(v1).value = "";
		
    }
  
  function fechar(){
        window.close();
    }

}

function calculoINSS(ieniss, salarioBruto) {
    if (salarioBruto <= 1212) {
        
        var ieniss = (salarioBruto*0.075)+90.90
        return ieniss;

    
    }
    else if (salarioBruto < 2427.35 && salarioBruto >1212) {

        var ieniss = (salarioBruto-1212)*0.09+109.38
        return ieniss;
    }
    else if (salarioBruto < 3641.03 && salarioBruto>2427.35) {

        var ieniss = (salarioBruto-2427.35)*0.12+145.64;
        return ieniss;
    }
    else if (salarioBruto < 7087.22 && salarioBruto>3641.03) {

        var ieniss = (salarioBruto-3641.03)*0.14+482.47;
        return ieniss;
        
        
    }
    else if (salarioBruto  > 7087.22) {

        var ieniss = 828.39;
        return ieniss;
    }
}

document.getElementById("testando").innerHTML ="valor teste:", calculoINSS;
