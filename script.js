var language = true;
function changeLanguage(){
  if(language == true){
  language = false
  document.querySelector(".change").innerHTML = "english"
  document.querySelector(".d-sm-inline-block").innerHTML = "خرید یک قهوه"
  document.querySelector("div.mb-3:nth-child(1) > label:nth-child(1)").innerHTML = "انتخاب یک قهوه"
  document.querySelector(".form-select > option:nth-child(1)").innerHTML = "کاپوچینو"
  document.querySelector(".form-select > option:nth-child(2)").innerHTML = "اسپرسو"
  document.querySelector(".form-select > option:nth-child(3)").innerHTML = "هات چاکلت"
  document.querySelector(".form-select > option:nth-child(4)").innerHTML = "کاپوچینو 2"
  document.querySelector("#emailHelp").innerHTML = "هشدار در انتخاب قهوه خود دقت کنید"
  document.querySelector("div.mb-3:nth-child(2) > label:nth-child(1)").innerHTML = "تعداد را انتخاب کنید"
  document.querySelector("div.mb-3:nth-child(2) > span:nth-child(4)").innerHTML = "عدد"
  document.querySelector(".btn").innerHTML = "خرید ! "
  document.querySelector("div.form-check:nth-child(3) > label:nth-child(2)").innerHTML = "زرین پال"
  document.querySelector("div.form-check:nth-child(4) > label:nth-child(2)").innerHTML = "پی پال"
  document.querySelector("#inlineRadio2").setAttribute("style","margin: 10px;")
  document.querySelector("#inlineRadio1").setAttribute("style","margin: 10px;")
  document.querySelector(".form-select").setAttribute("style","padding: 5px 30px;")
  document.querySelector("body").setAttribute("dir","rtl")
  document.querySelector("body").setAttribute("style","font-family: iranyekan2 !important; font-weight: normal;")
  return
  }else{
    language = true
    document.querySelector(".change").innerHTML = "persian"
    document.querySelector("body").setAttribute("dir","ltr")
    document.querySelector(".d-sm-inline-block").innerHTML = "Buy a coffie"
    document.querySelector("div.mb-3:nth-child(1) > label:nth-child(1)").innerHTML = " select a coffie "
    document.querySelector(".form-select > option:nth-child(1)").innerHTML = "Cappuccino"
    document.querySelector(".form-select > option:nth-child(2)").innerHTML = "Espresso"
    document.querySelector(".form-select > option:nth-child(3)").innerHTML = "hot chocolate"
    document.querySelector(".form-select > option:nth-child(4)").innerHTML = "Cappuccino 2"
    document.querySelector("#emailHelp").innerHTML = "Warning: Be careful in your choice"
    document.querySelector("div.mb-3:nth-child(2) > label:nth-child(1)").innerHTML = "select number"
    document.querySelector("div.mb-3:nth-child(2) > span:nth-child(4)").innerHTML = "Number"
    document.querySelector(".btn").innerHTML = "Buy 😊"
    document.querySelector("div.form-check:nth-child(3) > label:nth-child(2)").innerHTML = "zarinpal"
    document.querySelector("div.form-check:nth-child(4) > label:nth-child(2)").innerHTML = "paypal"
    document.querySelector("#inlineRadio2").setAttribute("style","margin: 0px;")
    document.querySelector("#inlineRadio1").setAttribute("style","margin: 0px;")
    document.querySelector(".form-select").setAttribute("style","padding: auto;")
   document.querySelector("body").removeAttribute("style")



    return
  }
}