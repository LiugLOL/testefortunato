function salarioAnoWow(salario, salarioAumento, salarioFerias) {
    var selectElement = document.getElementById("opcoes");
      
    selectElement.addEventListener("change"), function() {
      var opcaoSelecionada = selectElement.value;
  
      if (opcaoSelecionada === "maio") {
        var aumento = 4;
        var aumentoNum = 7
        return salario*aumento+salarioAumento*aumentoNum+salarioFerias;
     
     
  
      } else if (opcaoSelecionada === "junho") {
        var aumento = 5
        var aumentoNum = 6
        return salario*aumento+salarioAumento*aumentoNum+salarioFerias;
           
      }
    }}
function mesAumento(inss, inssAumento, inssFerias) {
    var selectElement = document.getElementById("opcoes");
      
    selectElement.addEventListener("change", function() {
      var opcaoSelecionada = selectElement.value;
  
      if (opcaoSelecionada === "maio") {
        var aumento = 4;
        var aumentoNum = 7
        return salario*aumento+salarioAumento*aumentoNum+salarioFerias;
     
     
  
      } else if (opcaoSelecionada === "junho") {
        var aumento = 5
        var aumentoNum = 6
        return inss*aumento+inssAumento*aumentoNum+inssFerias;
           
      }

})

}
var selectElement = document.getElementById("opcoes");   
    selectElement.addEventListener("change", function() {
      var opcaoSelecionada = selectElement.value;
  
      if (opcaoSelecionada === "maio") {
        var aumento = 5;
        var aumentoNum = 6
        return aumento, aumentoNum;
       
     
     
  
      } else if (opcaoSelecionada === "junho") {
        var aumento = 6
        var aumentoNum = 5
        return aumento, aumentoNum;
           
      }
   
})

function calculoIRRF(irrfValor) {
    if (irrfValor <= 1903.98) {
        var resultadoIrrf = 0
        return resultadoIrrf
    }
    else if (irrfValor <= 2826.65 && irrfValor>=1903.98) {
    
        var resultadoIrrf = (irrfValor*0.075)-142.80
        return resultadoIrrf

    }
    else if (irrfValor <= 3751.05) {
        var resultadoIrrf = (irrfValor*0.15)-354.80;
        return resultadoIrrf
        

    }
    else if (irrfValor <= 4664.68) {

        var resultadoIrrf = (irrfValor*0.225)-646.13;
        return resultadoIrrf
    }
    else if (irrfValor >= 4664.48) {
        var resultadoIrrf = (irrfValor*0.275)-869.36;
        return resultadoIrrf
    }
    
}
function Calcular() {
    var s1 = parseFloat(document.getElementById("s1").value); 
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    var s4 = parseFloat(document.getElementById("dep").value);
    var s5 = parseFloat(document.getElementById("s5").value);
    var aumento = s5/100;

    

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) { 
        alert("Preencha os campos corretamente!");
        return;
    }
     
    var salario = s1 + s2;//Salário  A
    var horaNormal = salario/220;//Hora normal  B
    var adicionalHExtra = horaNormal/2;//Adicional de 50%  C
    var horaExtra = horaNormal+adicionalHExtra//hora extra+hora  D
    var numeroExtra = s3+s2   
    var horaExtraMes = horaExtra*numeroExtra;//Horas extras por mês
    var salarioBruto = salario + horaExtraMes;//Salário+Hora extra
    var inss = calculoINSS(salarioBruto); //inss
    
    var dependentets = s4//USE VALORES INTEIRROS
    var baseIrrf = salarioBruto-inss-s4//base pro imposto de renda
    var irrf = calculoIRRF(baseIrrf) //imposto de renda
    var salarioL = salarioBruto-irrf
    var salario
  
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
   
var salarioFix =  parseFloat(salario.toFixed(4));
var horaNormalFix =  parseFloat(horaNormal.toFixed(4));
var adicionalHoraExtraFix =  parseFloat(adicionalHExtra.toFixed(4));
var horaExtraFix =  parseFloat(horaExtra.toFixed(4));
var numeroExtrasFix =  parseFloat(numeroExtra.toFixed(4));
var horaExtraMesFix =  parseFloat(horaExtraMes.toFixed(4));
var salarioBrutoFix =  parseFloat(salarioBruto.toFixed(4));
var inssFix =  parseFloat(inss.toFixed(4));
var baseIrrfFix =  parseFloat(baseIrrf.toFixed(4));
var irrfFix =  parseFloat(irrf.toFixed(4));














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
      
      var salarioAumento= salario*aumento+salario
      var horaNormalAumento=salarioAumento/220
      var adicionalHExtraAumento=horaNormalAumento/2
      var horaExtraAumento=horaNormalAumento+adicionalHExtraAumento
      var numeroExtrasAumento=numeroExtra
      var horaExtraMesAumento= horaExtraAumento*numeroExtrasAumento
      var salarioBrutoAumento=salarioAumento+horaExtraMesAumento
      var inssAumento=calculoINSS(salarioBrutoAumento)
      var dependentesAumento = s4*189.59 //USE VALORES INTEIRROS
      var baseIrrfAumento = salarioBrutoAumento-inss-s4//base pro imposto de renda
      var IrrfAumento = calculoIRRF(baseIrrfAumento);



var salarioAumentoFix =  parseFloat(salarioAumento.toFixed(4));
var horaNormalAumentoFix =  parseFloat(horaNormalAumento.toFixed(4));
var adicionalHExtraAumentoFix =  parseFloat(adicionalHExtraAumento.toFixed(4));
var horaExtraAumento =  parseFloat(horaExtraAumento.toFixed(4));
var numeroExtraAumentoFix =  parseFloat(numeroExtrasAumento.toFixed(4));
var horaExtraAumentoFix =  parseFloat(horaExtraMesAumento.toFixed(4));
var salarioBrutoAumentoFix =  parseFloat(salarioBrutoAumento.toFixed(4));
var inssAumentoFix =  parseFloat(inssAumento.toFixed(4));
var baseIrrfAumentoFix =  parseFloat(baseIrrfAumento.toFixed(4));
var IrrfAumentoFix =  parseFloat(IrrfAumento.toFixed(4));


      /*ferias */
      var salarioFerias= salarioAumento*0.33+salario
      var horaNormalFerias=salarioFerias/220
      var adicionalHextraFerias=horaNormalFerias/2
      var HoraExtraFerias=horaNormalFerias+adicionalHextraFerias
      var numeroExtraMesFerias=numeroExtra
      var horaExtraMesFerias= HoraExtraFerias*numeroExtraMesFerias
      var salarioBrutoFerias=salarioFerias+horaExtraMesFerias
      var inssFerias= calculoINSS(salarioBrutoFerias)
      var dependentesFerias = s4*189.59 //USE VALORES INTEIRROS
      var baseIrrfFerias = salarioBrutoFerias-inss-s4//base pro imposto de renda
      var irrfFerias = calculoIRRF(baseIrrfFerias)
      var salarioLiquidoFerias=baseIrrfFerias-irrfFerias

var aafer =  parseFloat(salarioFerias.toFixed(4));
var bbfer =  parseFloat(horaNormalFerias.toFixed(4));
var ccfer =  parseFloat(adicionalHextraFerias.toFixed(4));
var ddfer =  parseFloat(HoraExtraFerias.toFixed(4));
var eefer =  parseFloat(numeroExtraMesFerias.toFixed(4));
var fffer =  parseFloat(horaExtraMesFerias.toFixed(4));
var ggfer =  parseFloat(salarioBrutoFerias.toFixed(4));
var hhfer =  parseFloat(inssFerias.toFixed(4));
var iifer =  parseFloat(baseIrrfFerias.toFixed(4));
var jjfer =  parseFloat(irrfFerias.toFixed(4));


document.getElementById("ano").innerHTML = salarioFix;
document.getElementById('bno').innerHTML = horaNormalFix
document.getElementById("cno").innerHTML = adicionalHoraExtraFix;
document.getElementById("dno").innerHTML = horaExtraFix;
document.getElementById("eno").innerHTML = numeroExtrasFix;
document.getElementById("fno").innerHTML = horaExtraMesFix;
document.getElementById("gno").innerHTML = salarioBrutoFix;
document.getElementById("hno").innerHTML = inssFix;
document.getElementById("depno").innerHTML = dependentets;
document.getElementById("ino").innerHTML = baseIrrfFix;
document.getElementById("jno").innerHTML = irrfFix

//aumento
document.getElementById("saplus").innerHTML = salarioAumentoFix;
document.getElementById('sbplus').innerHTML = horaNormalAumentoFix;
document.getElementById("scplus").innerHTML = adicionalHExtraAumentoFix;
document.getElementById("sdplus").innerHTML = horaExtraAumento;
document.getElementById("seplus").innerHTML = numeroExtraAumentoFix;
document.getElementById("sfplus").innerHTML = horaExtraAumentoFix;
document.getElementById("sgplus").innerHTML = salarioBrutoAumentoFix;
document.getElementById("shplus").innerHTML = inssAumentoFix;
document.getElementById("sdepplus").innerHTML = dependentesAumento;
document.getElementById("siplus").innerHTML = baseIrrfAumentoFix;
document.getElementById("sjplus").innerHTML = IrrfAumentoFix;

//ferias
document.getElementById("safer").innerHTML = aafer;
document.getElementById('sbfer').innerHTML = bbfer;
document.getElementById("scfer").innerHTML = ccfer;
document.getElementById("sdfer").innerHTML = ddfer;
document.getElementById("sefer").innerHTML = numeroExtra;
document.getElementById("sffer").innerHTML = horaExtraMesFerias;
document.getElementById("sgfer").innerHTML = ggfer;
document.getElementById("shfer").innerHTML = hhfer;
document.getElementById("sdepfer").innerHTML = dependentesFerias;
document.getElementById("sifer").innerHTML = iifer;
document.getElementById("sjfer").innerHTML = jjfer
//O K
var salarioLiquidoFerias=baseIrrfFerias-irrfFerias
var salarioLiquido = baseIrrf - irrf; //salário líquido
var salarioLiquidoAumento= baseIrrfAumento-IrrfAumento


//rend trib ano
var rendaTotalAno=salarioLiquido*4+6*salarioLiquidoAumento+2*salarioLiquidoFerias

//13 salario
var decimoTerceiro=rendaTotalAno/12

document.getElementById('srta').innerHTML= rendaTotalAno;
document.getElementById('sdt').innerHTML= decimoTerceiro;
//declaração simpl


var rendaAno = salarioL*aumento+salarioLiquidoAumento*aumentoNum+salarioLiquidoFerias
var contraPrevINSS = inss*aumento+inssAumento*aumentoNum+inssFerias
    var descSim = contraPrevINSS*0.2
    if(descSim>16754.34) {
        var descSim = 16 754.34
        return descSim
    }
    var baseCalculo = rendaAno-descSim
    

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
      
  }
      
    
    
    function Limpar(s1){
		document.getElementById(s1).value = "";
		
    }
  
  function fechar(){
        window.close();
    }
    function calculoINSS(osalario) {
        if (osalario <= 1212) {
            
            var ieniss = (osalario*0.075)+90.90
            return ieniss;
    
        
        }
        else if (osalario < 2427.35 && osalario >1212) {
    
            var ieniss = (osalario-1212)*0.09+109.38
            return ieniss;
        }
        else if (osalario < 3641.03 && osalario>2427.35) {
    
            var ieniss = (osalario-2427.35)*0.12+145.64;
            return ieniss;
        }
        else if (osalario < 7087.22 && osalario>3641.03) {
    
            var ieniss = (osalario-3641.03)*0.14+482.47;
            return ieniss;
            
            
        }
        else if (osalario  > 7087.22) {
    
            var ieniss = 828.39;
            return ieniss;
        }
    }
function login() {
    user = document.getElementById("v1").value;
    senha = document.getElementById("v2").value;

    if(user =="teste" && senha=="teste") {
        alert("feito")
      
        location.href("https://fortunatocontas.com.br/fortunas.html")
    }else {
        alert("tá errado isso aí bobão")
        window.close()
    }


    
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contas financeiras</title>
    <link rel="stylesheet" href="ces.css">
</head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit">

<h1 class="aga1"><a  class="lin" href="https://www.fortunatocontas.com.br">FortunatoContas.com.br</a></h1>
<p class="PE">Coloque o salário, seu número da chamada e número de horas extras para obter as respostas!</p>
<p class="PE"><legend>Esta é a <strong>primeira</strong> folha do 2° bimestre</legend></p>
<p class="PE"><legend>Por favor, <strong>some</strong> todas as despesas e coloque no campo de depesas.</legend></p>


<body>
    
        
    <script src="calculadorafc.js"></script>
    <div class="bang">
    <input type="text" size="15" id="s1" placeholder="Salário" class="buta">
    <input type="text" size="15" id="s2" placeholder="Número" class="buta">
    <input type="text" size="15" id="s3" placeholder="Hora extra" class="buta">
    <input type="text" size="15" id="dep" placeholder="Despesas" class="buta">
    <input type="text" size="15" id="s5" placeholder="Aumento" class="buta"><br>
    <select id="opcoes" class="buta">
        <option value="maio" id="maio">Maio</option>
        <option value="junho" id="junho">Junho</option>
      </select>

      ><br>
    <button type="button" onclick="Calcular('s1', 's2', 's3', 'dep', 's5', 'opcoes')" value="Calcular" class="boton cal">Calcular</button><button  type=button onclick="Limpar('s1')" value="Limpar" class="boton li">Limpar</button><br>
     </div>
     <div class="haha">
     <div class="site">
        <h1>Salário <strong>sem aumento</strong>.</h1>
        
  <article class="di">
    <p class="p">Salário</p><p id="ano" class="re"></p>

  </article>
<article class="di">
    <p class="p" >Hora normal:</p><p class="re" id="bno"></p>
   
</article>
<article class="di">
    <p class="p"> Adicional de 50%:</p><p class="re" id="cno"></p>

</article>
<article class="di">
    <p class="p"> Hora extra:</p><p class="re" id="dno"></p>

    
</article>
<article class="di">
    <p class="p" >Horas extras:</p><p class="re" id="eno"></p>

</article>
<article class="di">
    <p class="p">Total Horas Extras/mês:</p><p class="re" id="fno"></p>
  
</article>
<article class="di">
    <p class="p" >Renda Trib.:</p><p class="re" id="gno"></p>
  
</article>
<article class="di">
    <p class="p">Previência Of.:</p><p class="re" id="hno"></p>
   
</article>
<article class="di">
<p class="p">Dependentes:</p><p class="re" id="depno"></p>
<legend>Dependentes, 189.59xDEPENDENTES</legend>
</article>
<article class="di">
    <p class="p" >Base p/ Imposto de renda:</p><p class="re" id="ino"></p>
  
</article>
<article class="di">
    <p class="p">Imposto de renda:</p><p class="re" id="jno"></p>
   
</article>
<!--agr são com o aumento-->
<br>
<h1>Salário <strong>aumento</strong>.</h1>
<article class="di">
    <p class="p">Salário</p><p id="saplus" class="re"></p>

  </article>
<article class="di">
    <p class="p" >Hora normal:</p><p class="re" id="sbplus"></p>
   
</article>
<article class="di">
    <p class="p"> Adicional de 50%:</p><p class="re" id="scplus"></p>

</article>
<article class="di">
    <p class="p"> Hora extra:</p><p class="re" id="sdplus"></p>

    
</article>
<article class="di">
    <p class="p" >Horas extras:</p><p class="re" id="seplus"></p>

</article>
<article class="di">
    <p class="p">Total Horas Extras/mês:</p><p class="re" id="sfplus"></p>
  
</article>
<article class="di">
    <p class="p" >Renda Trib.:</p><p class="re" id="sgplus"></p>
  
</article>
<article class="di">
    <p class="p">Previência Of.:</p><p class="re" id="shplus"></p>
   
</article>
<article class="di">
<p class="p">Dependentes:</p><p class="re" id="sdepplus"></p>
<legend>Dependentes, 189.59xDEPENDENTES</legend>
</article>
<article class="di">
    <p class="p" >Base p/ Imposto de renda:</p><p class="re" id="siplus"></p>
  
</article>
<article class="di">
    <p class="p">Imposto de renda:</p><p class="re" id="sjplus"></p>
   
</article>
<br>
<!--agora sao as ferias-->
<h1><strong>FÉRIAS</strong></h1><BR>
    <article class="di">
        <p class="p">Salário</p><p id="safer" class="re"></p>
    
      </article>
    <article class="di">
        <p class="p" >Hora normal:</p><p class="re" id="sbfer"></p>
       
    </article>
    <article class="di">
        <p class="p"> Adicional de 50%:</p><p class="re" id="scfer"></p>
    
    </article>
    <article class="di">
        <p class="p"> Hora extra:</p><p class="re" id="sdfer"></p>
    
        
    </article>
    <article class="di">
        <p class="p" >Horas extras:</p><p class="re" id="sefer"></p>
    
    </article>
    <article class="di">
        <p class="p">Total Horas Extras/mês:</p><p class="re" id="sffer"></p>
      
    </article>
    <article class="di">
        <p class="p" >Renda Trib.:</p><p class="re" id="sgfer"></p>
      
    </article>
    <article class="di">
        <p class="p">Previência Of.:</p><p class="re" id="shfer"></p>
       
    </article>
    <article class="di">
    <p class="p">Dependentes:</p><p class="re" id="sdepfer"></p>
    <legend>Dependentes, 189.59xDEPENDENTES</legend>
    </article>
    <article class="di">
        <p class="p" >Base p/ Imposto de renda:</p><p class="re" id="sifer"></p>
      
    </article>
    <article class="di">
        <p class="p">Imposto de renda:</p><p class="re" id="sjfer"></p>
       
    </article>
    <article>
        <h1>DÉCIMO TERCEIRO E RENDA TRIB.</h1>
        <p class="p">Renda trib.</p><p class="re" id="srta"></p>
        <p class="p">13°</p><p class="re" id="sdt"></p>
    </article>


<br><br>

<div class="haha">
<h1 class="obs">OBSERVAÇÃO!</h1><br>
<h4>Caso Imposto Devido dê <STROng>negativo</STROng>, o governo que te paga, e caso dê <strong>positivo</strong>, será vice-versa.</h4><br>
<h4>Agora só teremos a folha da semana e a da última semana.</h4><br><br><br>



<h4>dá uma ajudinha ae e faz um pix, é difícil fazer isso :emojichorando:</h4><br>
<h5>pix:</h5><br><h5>(67) 9 9833-1806</h5>
<br><br>
</div><br><br>

<p class="folhaa"><a href="tabela.html" target="_blank" class="tab">Tabelas com IRRF, INSS, APENAS MENSAIS</p></legend>
<p class="tabel"><a href="first_vers.html" target="_blank" class="tab">Folha da semana passada</p></legend>
<br><br><br><br><br>




</body>

</html>

