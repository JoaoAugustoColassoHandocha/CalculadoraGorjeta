function calculateTip(event)
{

    event.preventDefault();

    let bill = document.getElementById("bill").value;

    let serviceQual = document.getElementById("serviceQual").value;

    let numOfPeople = document.getElementById("people").value;

    if(bill == " " | serviceQual == "0.0")
    {

        alert("Por favor, preencha as informações solicitadas!")

        return;

    }

    if(numOfPeople == " " | numOfPeople <= 1)
    {

        numOfPeople = 1;

        document.getElementById("each").style.display = "none";

    }

    else
    {

        document.getElementById("each").style.display = "block";

    }

    let total = (bill * serviceQual) / numOfPeople;

    total = total.toFixed(2);

    document.getElementById("tip").innerHTML = total;

    document.getElementById("contaGorjeta").style.display = "block";

    document.getElementById("totalTip").style.display = "block";

}

document.getElementById("contaGorjeta").style.display = "none";

document.getElementById("totalTip").style.display = "none";

document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);