let validate = () => {
    let nama = document.getElementById('nama')
    let jumlah = document.getElementById('jumlah')
    let nohp = document.getElementById('nohp')
    let kupon = document.getElementById('kupon')
    let errorMsg = []

    validateNama(nama, errorMsg)
    validateJumlah(jumlah,errorMsg)
    validateNohp(nohp, errorMsg)
    validateKupon(kupon, errorMsg)
    if(errorMsg.length === 0){
        alert('Reservation Success Withcout Coupon!')
    }else{
        alert(errorMsg.join('\n'))
    }
}

let validateNama = (nama, errorMsg) => {
    if(nama.value === ""){
        errorMsg.push('The customer name field is required !')
    }else if(nama.value.length < 4){
        errorMsg.push('The name of the customer must be at least 4 letters or more !')
    }
}

let validateJumlah = (jumlah, errorMsg) =>{
    if(jumlah.value === ""){
        errorMsg.push('Total People in 1 group must be filled !')
    }else if(jumlah.value.length > 2){
        errorMsg.push('Max under 100 People')
    }
}

let validateNohp = (nohp, errorMsg) =>{
    if(nohp.value === ""){
        errorMsg.push('Phone number must be filled !')
    }else if(nohp.value.length < 11){
        errorMsg.push('Phone number must be at least 11 Number')
    }else if(nohp.value.length > 12){
        errorMsg.push('Phone number must be under 13 Number')
    }
}

let validateKupon = (kupon, errorMsg) =>{
    if(kupon.value === ""){
        errorMsg.push('Reservation Success')
    }
    else if(kupon.value == ("QW12E3")){
        errorMsg.push('Reservation Success With Coupon!')
    }
    else if(kupon.value == ("AB12E4")){
        errorMsg.push('Reservation Success With Coupon!')
    }
    else{
        errorMsg.push('Wrong Coupon Code')
    }
}