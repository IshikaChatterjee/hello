function calculator(){
    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)

    let oper = document.getElementById("operation").value

    if(oper === 'Add')
    {
        document.getElementById('result').value = n1 + n2
    }

    if(oper === 'Sub')
    {
        document.getElementById('result').value = n1 - n2
    }

    if(oper === 'Mul')
    {
        document.getElementById('result').value = n1 * n2
    }

    if(oper === 'Div')
    {
        document.getElementById('result').value = n1 / n2
    }
}

// float double is used for decimal numbers