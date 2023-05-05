

function Calcular() {
    var s1 = parseFloat(document.getElementById("s1").value); 
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    var s4 = parseFloat(document.getElementById("s4").value);
    

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4)) { 
        alert("Preencha os campos corretamente!");
        return;
    }
     
    var A = s1 + s2;//Salário  A
    var B = A/220;//Hora normal  B
    var C = B/2;//Adicional de 50%  C
    var D = B+C//hora extra+hora  D
    var E = s3+s2   
    var F = D*E;//Horas extras por mês
    var G = A + F;//Salário+Hora extra
    var H = 0; //inss
    if (G <= 1212) {
        var part1 = G*0.075;
        var H = part1+90.90;

    
    }
    else if (G <= 2427.35, G >=1212) {
    
        var part1 = G -1212;
        var part2 = part1*0.09;
        var H = part2+109.38;
    }
    else if (G <= 3641.03, G>=2427.35) {
        var part1 = G-2427.35;
        var part2 = part1*0.12;
        var H = part2+145.64;
    }
    else if (G <= 7087.22, G>=3641.03) {
        var part1 = G -3641.03;
        var part2 = part1*0.14;
        var H = part2+482.47;
        
        
    }
    else if (G  >= 7087.22) {
 
        
        var H = 828.39;
    }
    var iii = s4*189.59 //USE VALORES INTEIRROS
    var I = G-H-s4//base pro imposto de renda
    var J = 0 //imposto de renda
    if (I <= 1903.98) {
        var J = 0
    }
    else if (I <= 2826.65, I>=1903.98) {
        var part1 = I*0.075;
        var J = part1-142.80;
        

    }
    else if (I <= 3751.05) {
        var part1 = I*0.15;
        var J = part1-354.80;
        
        

    }
    else if (I <= 4664.68) {
        var part1 = I*0.225;
        var J = part1-646.13;
        
    }
    else if (I >= 4664.48) {
        var part1 = I*0.2750;
        var J = part1-869.36;

    }
    
    var K = I - J; //salário líquido
    
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
    var R = Q - P;
   
var aa =  parseFloat(A.toFixed(4));
var bb =  parseFloat(B.toFixed(4));
var cc =  parseFloat(C.toFixed(4));
var dd =  parseFloat(D.toFixed(4));
var ee =  parseFloat(E.toFixed(4));
var ff =  parseFloat(F.toFixed(4));
var gg =  parseFloat(G.toFixed(4));
var hh =  parseFloat(H.toFixed(4));
var ii =  parseFloat(I.toFixed(4));
var jj =  parseFloat(J.toFixed(4));
var kk =  parseFloat(K.toFixed(4));
var ll =  parseFloat(L.toFixed(4));
var mm =  parseFloat(M.toFixed(4));
var nn =  parseFloat(N.toFixed(4));
var oo =  parseFloat(O.toFixed(4));
var pp =  parseFloat(P.toFixed(4));
var qq =  parseFloat(Q.toFixed(4));
var rr =  parseFloat(R.toFixed(4));












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
      var aplus= A*0.05
      var bplus=aplus/220
      var cplus=bplus/2
      var dplus=bplus+cplus
      var eplus=E
      var fplus= dplus*eplus
      var gplus=aplus+fplus
      var hplus=0
      if (gplus <= 1212) {
        var part1 = gplus*0.075;
        var hplus = part1+90.90;

    
    }
    else if (gplus <= 2427.35, gplus >=1212) {
    
        var part12 = gplus -1212;
        var part22 = part1*0.09;
        var hplus = part2+109.38;
    }
    else if (gplus <= 3641.03, gplus>=2427.35) {
        var part12 = gplus-2427.35;
        var part22 = part1*0.12;
        var hplus = part2+145.64;
    }
    else if (gplus <= 7087.22, gplus>=3641.03) {
        var part12 = gplus -3641.03;
        var part22 = part1*0.14;
        var hplus = part2+482.47;
        
        
    }
    else if (gplus  >= 7087.22) {
 
        
        var hplus = 828.39;
    }
    var depplus = s4*189.59 //USE VALORES INTEIRROS
    var iplus = gplus-H-s4//base pro imposto de renda
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
        var jplus = part12-354.80;
        
        

    }
    else if (iplus <= 4664.68) {
        var partt1 = iplus*0.225;
        var jplus = partt1-646.13;
        
    }
    else if (iplus >= 4664.48) {
        var partt1 = iplus*0.2750;
        var jplus = partt1-869.36;

    
    }
    var kplus=iplus-jplus

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
var kkplus =  parseFloat(kplus.toFixed(4));

      /*ferias */
      var afer= A*0.05
      var bfer=afer/220
      var cfer=bfer/2
      var dfer=bfer+cfer
      var efer=E
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
        var part12 = gplus -3641.03;
        var part22 = part12fer*0.14;
        var hplus = part22fer+482.47;
        
        
    }
    else if (gfer  >= 7087.22) {
 
        
        var hfer = 828.39;
    }
    var depfer = s4*189.59 //USE VALORES INTEIRROS
    var ifer = gplus-H-s4//base pro imposto de renda
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
var kkfer =  parseFloat(kfer.toFixed(4));

document.getElementById("saidaa").innerHTML = aa;
document.getElementById('saidab').innerHTML = bb
document.getElementById("saidac").innerHTML = cc;
document.getElementById("saidad").innerHTML = dd;
document.getElementById("saidae").innerHTML = ee;
document.getElementById("saidaf").innerHTML = ff;
document.getElementById("saidag").innerHTML = gg;
document.getElementById("saidah").innerHTML = hh;
document.getElementById("saidadep").innerHTML = iii;
document.getElementById("saidai").innerHTML = ii;
document.getElementById("saidaj").innerHTML = jj
document.getElementById("saidak").innerHTML = kk;
//aumento
document.getElementById("saidaaplus").innerHTML = aaplus;
document.getElementById('saidabplus').innerHTML = bbplus;
document.getElementById("saidacplus").innerHTML = ccplus;
document.getElementById("saidadplus").innerHTML = ddplus;
document.getElementById("saidaeplus").innerHTML = eeplus;
document.getElementById("saidafplus").innerHTML = ffplus;
document.getElementById("saidagplus").innerHTML = ggplus;
document.getElementById("saidahplus").innerHTML = hhplus;
document.getElementById("saidadepplus").innerHTML = depplus;
document.getElementById("saidaiplus").innerHTML = iiplus;
document.getElementById("saidajplus").innerHTML = jjplus;
document.getElementById("saidakplus").innerHTML = kkplus;
//ferias
document.getElementById("saidaafer").innerHTML = aafer;
document.getElementById('saidabfer').innerHTML = bbfer;
document.getElementById("saidacfer").innerHTML = ccfer;
document.getElementById("saidadfer").innerHTML = ddfer;
document.getElementById("saidaefer").innerHTML = eefer;
document.getElementById("saidaffer").innerHTML = fffer;
document.getElementById("saidagfer").innerHTML = ggfer;
document.getElementById("saidahfer").innerHTML = hhfer;
document.getElementById("saidadepfer").innerHTML = depfer;
document.getElementById("saidaifer").innerHTML = iifer;
document.getElementById("saidajfer").innerHTML = jjfer
document.getElementById("saidakfer").innerHTML = kkfer;

      
      
  }
      
    
    
    function Limpar(s1){
		document.getElementById(s1).value = "";
		
    }
  
  function fechar(){
        window.close();
    }
