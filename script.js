const flagCode = {
    "CAD - Canadian Doller" : 'can',
    "JPY - Japanese Yen" : "jpn",
    "ILS - Israeli Shekel" : "isr",
    "CNY - Chinese Yuan" : "chn",
    "IND - Indian Rupee" : "ind",
    "PKR - Pakistani Rupee"  : "pak",
    "USD - American Doller" :  "usa",
    "AUD - Australian Doller" : "aus",
    "LKR - Sri Lankan Rupee" : "lka",
    "NPR - Nepalese Rupee": "npl",
    "RUB - Russian Ruble" : "rus",
    "Bulgaria" : "bgr" ,
    "England" : "gb-eng",
    "Israel" : "isr",
    "Japan" : "jpn"
};

const currencyCode = {
    "CAD - Canadian Doller" : 'CAD',
    "JPY - Japanese Yen" : "JPY",
    "ILS - Israeli Shekel" : "ILS",
    "USD - American Doller" :  "USD",
    "AUD - Australian Doller" : "AUD",
    "CNY - Chinese Yuan" : "CNY",
    "PKR - Pakistani Rupee"  : "PKR",
    "IND - Indian Rupee" : "INR",
    "LKR - Sri Lankan Rupee" : "LKR",
    "NPR - Nepalese Rupee": "NPR",
    "RUB - Russian Ruble" : "RUB",
    "Bulgaria" : "bgr" ,
    "England" : "gb-eng",
    "Israel" : "isr",
    "Japan" : "jpn",
}
let icone = document.getElementById('icone');
let from = document.getElementById('from');
let to = document.getElementById('to');
let fromImg = document.getElementById('from-img');
let toImg = document.getElementById('to-img');
let submitBtn = document.getElementById('submit-btn');
let amount = document.getElementById('amount');
let display = document.getElementById('display');


const changeFromFlag =  ()=>{
    var links = `https://countryflagsapi.com/png/${flagCode[from.value]}`;
    fromImg.src = links;            
}
const changetoFlag =  ()=>{
    var links = `https://countryflagsapi.com/png/${flagCode[to.value]}`;
    toImg.src = links;            
}


icone.addEventListener('click',()=>{
    var tempValue = from.value;
    var links1 = `https://countryflagsapi.com/png/${flagCode[from.value]}`;
    var links2 = `https://countryflagsapi.com/png/${flagCode[to.value]}`;
    
    from.value = to.value;
    to.value = tempValue;
    fromImg.src = links2;
    toImg.src = links1;

})
submitBtn.addEventListener("click",()=>{
    if(amount.value == ""){
        alert("Please Enter Amount");
        return;
    }
    else if(isNaN(amount.value) || amount.value[0] == "0"){
        alert("Please Enter a Valid Amount");
        amount.value = "";
        return;
    }
    
    var amt = parseInt(amount.value);
    var convertedAmt = 0;

    if(from.value == "IND - Indian Rupee" && to.value == "USD - American Doller"){
        convertedAmt = 0.01310393*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.016454056*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 1.6818388*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 0.042496753*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "AUD - Australian Doller"){
        convertedAmt = 0.017781417*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 0.084526532*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 2.4504891*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 4.3936575*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 1.60075*amt;
    }
    else if(from.value == "IND - Indian Rupee" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 1.0592104*amt;    }

    else if(from.value == "CAD - Canadian Doller" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 148.98648*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 102.32721*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 2.5846137*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "USD - American Doller"){
        convertedAmt = 0.79713785*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "AUD - Australian Doller"){
        convertedAmt = 1.080706*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 5.1402636*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "IND - Indian Rupee"){
        convertedAmt = 60.809981*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 266.4001*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 97.095158*amt;
    }
    else if(from.value == "CAD - Canadian Doller" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 97.095158*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "IND - Indian Rupee"){
        convertedAmt = 0.59399102*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.0097709429*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 0.025253458*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "USD - American Doller"){
        convertedAmt = 0.00778502*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "AUD - Australian Doller"){
        convertedAmt = 0.010555008*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 0.050226908*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 1.4564043*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 0.95173508*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 2.6118494*amt;
    }
    else if(from.value == "JPY - Japanese Yen" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 0.63162692*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 57.665017*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.38681782*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 39.585115*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "USD - American Doller"){
        convertedAmt = 0.30823022*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "AUD - Australian Doller"){
        convertedAmt = 0.41809573*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 1.9883819*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "IND - Indian Rupee"){
        convertedAmt = 23.518399*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 37.62424*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 103.24824*amt;
    }
    else if(from.value == "ILS - Israeli Shekel" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 24.968043*amt;
    }
    else if(from.value == "USD - American Doller" && to.value == "IND - Indian Rupee"){
        convertedAmt = 76.278091*amt;
    }
    else if(from.value == "USD - American Doller" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 1.2566103 *amt;
    }
    else if(from.value == "USD - American Doller" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 128.38677 *amt;
    }
    else if(from.value == "USD - American Doller" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 3.2432749*amt;
    }
    else if(from.value == "USD - American Doller" && to.value == "AUD - Australian Doller"){
        convertedAmt = 1.3567211*amt;
    }
    else if(from.value == "USD - American Doller" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 6.4502829*amt;
    }
    else if(from.value == "USD - American Doller" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 187.00425*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 137.87201*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.9263568*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 94.640224*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 2.3921095*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "USD - American Doller"){
        convertedAmt = 0.73751715*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 4.7569234*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "IND - Indian Rupee"){
        convertedAmt = 56.22199*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 89.925535*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 246.84274*amt;
    }
    else if(from.value == "AUD - Australian Doller" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 59.683695*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "IND - Indian Rupee"){
        convertedAmt = 11.819473*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.19475258*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 19.892627*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 0.50293987*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "USD - American Doller"){
        convertedAmt = 0.15505785*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 29.000477*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 18.921392*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 51.932976*amt;
    }
    else if(from.value == "CNY - Chinese Yuan" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 12.593202*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.0067198737*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 0.68537502*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 0.017348101*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "USD - American Doller"){
        convertedAmt = 0.00534686*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "AUD - Australian Doller"){
        convertedAmt = 0.0072544146*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 0.034491718*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "IND - Indian Rupee"){
        convertedAmt = 0.40764087*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 0.65273129*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 1.7915185*amt;
    }
    else if(from.value == "PKR - Pakistani Rupee" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 0.43368951*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.015535074*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 1.58404*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 0.03992891*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "USD - American Doller"){
        convertedAmt = 0.012339043*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "AUD - Australian Doller"){
        convertedAmt = 0.016743426*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 0.07960588*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 2.3080764*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "IND - Indian Rupee"){
        convertedAmt = 0.94146071*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "LKR - Sri Lankan Rupe"){
        convertedAmt = 4.1292104*amt;
    }
    else if(from.value == "RUB - Russian Ruble" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 1.5050655*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.010306388*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 1.0501531*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 0.026580854*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "USD - American Doller"){
        convertedAmt = 0.008191858*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "UD - Australian Doller"){
        convertedAmt = 0.011113951*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 0.052836009*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 1.5321526*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "IND - Indian Rupee"){
        convertedAmt = 0.62470717*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "LKR - Sri Lankan Rupee"){
        convertedAmt = 2.7442444*amt;
    }
    else if(from.value == "NPR - Nepalese Rupee" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 0.66399737*amt;
    }

    
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "CAD - Canadian Doller"){
        convertedAmt = 0.0037566814*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "JPY - Japanese Yen"){
        convertedAmt = 0.38291613*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "ILS - Israeli Shekel"){
        convertedAmt = 0.0096861835*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "USD - American Doller"){
        convertedAmt = 0.0029852046*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "UD - Australian Doller"){
        convertedAmt = 0.004050124*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "CNY - Chinese Yuan"){
        convertedAmt = 0.019255624*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "PKR - Pakistani Rupee"){
        convertedAmt = 0.55823702*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "IND - Indian Rupee"){
        convertedAmt = 0.22765664*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "NPR - Nepalese Rupee"){
        convertedAmt = 0.36442136*amt;
    }
    else if(from.value == "LKR - Sri Lankan Rupee" && to.value == "RUB - Russian Ruble"){
        convertedAmt = 0.24240738*amt;
    }
    else{
        convertedAmt=amt;
    }




    display.innerHTML = `${amt} ${currencyCode[from.value].toUpperCase()} = ${convertedAmt.toFixed(5)} ${currencyCode[to.value].toUpperCase()}`;
    
    
})



