

function Calcular() {
    var s1 = parseFloat(document.getElementById("s1").value); 
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) { 
        alert("Preencha os campos corretamente!");
        return;
    }

    var hextrabase = (s3+s2)/30
    var salario = s1 + s2;//Salário  A
    var hora = salario/220;//Hora normal  B
    var horaextra = hora/2;//Adicional de 50%  C
    var hes = horaextra+hora//hora extra+hora  D
   
    var hem = s3;//Horas extras por mês
    var valorhe = salario + hem;//Salário+Hora extra
    var inss = 0; //inss
    if (valorhe <= 1212) {
        var inss = valorhe*0.075
    
    }
    else if (valorhe <= 2427.35) {
    
        var inss = (valorhe-1212)*0.09 + 90.9;
    }
    else if (valorhe <= 3641.03) {
        var inss = (valorhe-2427.35)*0.12 + 109.38;
    }
    else if (valorhe <= 7087.22) {
        var inss = (valorhe-3641.03)*0.14 + 145.64;
    }
    else if (valorhe >= 7087.22) {
        var inss = 828.39;
    }
    var baseirrf = valorhe - inss//base pro imposto de renda
    var irrf = 0 //imposto de renda
    if (baseirrf <= 1903.98) {
        var irrf = 0
    }
    else if (baseirrf <= 2826.65) {
        var irrf = (baseirrf*0.075)-142.8
    }
    else if (baseirrf <= 3751.05) {
        var irrf = baseirrf*0.15-354.8
    }
    else if (baseirrf <= 4664.68) {
        var irrf = baseirrf*0.225-646.13
    }
    else if (baseirrf >= 4664.48) {
        var irrf = baseirrf*0.3750-69.36
    }
    
    var salariol = baseirrf - irrf; //salário líquido
    var inssp = valorhe*0.278; //inss patronal
    var fgts = valorhe*0.08 //FGTS
    var custoemp = valorhe+inssp+fgts //custo da empresa para manter o funcionário


    var rendatot =  baseirrf*12.33;
    var descsim = 0;
    if (rendatot<16754.34)  {
        var descsim = rendatot*0.2

    }    
    else if (rendatot<=22847.76) {
       var descsim = 0
           
    }
    else if (rendatot<=33191.80) {
       var descsim = rendatot*0.075-1716
    }
    else if (rendatot<=45012.60) {
       var descsim = rentatot*0.15 - 4257.57
    }
    else if (rendatot<=55976.16) {
       var descsim = rendatot*0.225 - 7633.51
    }
    else if (rendatot>55976.16) {
       var descsim = rendatot*0.275 - 10432.32
    }
    var baseira = rendatot - descsim;
    var impdev =  0;
    if (baseira<22847.76)  {
        var descsim = rendatot*0.2

    }    
    else if (baseira<=22847.76) {
       var impdev = 0
           
    }
    else if (baseira<=33191.80) {
       var impedv = rendatot*0.075-1716
    }
    else if (baseira<=45012.60) {
       var impdev = rentatot*0.15 - 4257.57
    }
    else if (baseira<=55976.16) {
       var impdev = rendatot*0.225 - 7633.51
    }
    else if (baseira>55976.16) {
       var impdev = rendatot*0.275 - 10432.32
    }
    var irrfa = irrf*12.33
    var irr = irrfa - impdev;


    
    document.getElementById("saidasalario").innerHTML = "Salário:   " + salario;
    document.getElementById('saidahora').innerHTML = "Hora normal:   "+ hora;
    document.getElementById("saidahoraextra").innerHTML = "Adicional de 50%:   "+ horaextra;
    document.getElementById("saidahes").innerHTML = "Hora extra:   " + hes;
    document.getElementById("saidahextrabase").innerHTML = "Horas extras por dia:   " + hextrabase;
    document.getElementById("saidahem").innerHTML = "Horas extras por mês:   " + hem;
    document.getElementById("saidavalorhe").innerHTML = "Hora extra + Salário:   " + valorhe;
    document.getElementById("saidainss").innerHTML = "INSS:   " + inss;
    document.getElementById("saidabaseirrf").innerHTML = "Base p/ Imposto de Renda:   " + baseirrf;
    document.getElementById("saidairrf").innerHTML = "Imposto de Renda:   " + irrf;
    document.getElementById("saidasalariol").innerHTML = "Salário líquido:   " + salariol;
    document.getElementById("saidainssp").innerHTML = "INSS Patronal:   " + inssp;
    document.getElementById("saidafgts").innerHTML = "FGTS:   " + fgts;
    document.getElementById("saidacustoemp").innerHTML = "Custo empresa:  " + custoemp;
    document.getElementById("saidarendatot").innerhtml = "Renda total:  " + rendatot;
    document.getElementById("saidadescsim").innerhtml = "Desconto Simp.:  " + descsim;
    document.getElementById("saidabaseira").innerhtml = "Base cálculo:  " + baseira;
    document.getElementById("saidaimpdev").innerhtml = "Imp. Devido:  " + impdev;
    document.getElementById("saidairrfa").innerhtml = "IRRF Anual:  " + irrfa;
    document.getElementById("saidairr").innerhtml = "IR Restante(PG):  " + irr;
    

      
    
    }
    function Limpar(s1, s2, s3){
		document.getElementById(s1).value = "";
		document.getElementById(s2).value = "";
        document.getElementById(s3).value = "";
    
    }
