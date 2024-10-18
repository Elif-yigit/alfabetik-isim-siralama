let isimler = [];


function listele() {

  let yeniIsim = prompt('Kaç adet isim girmek istersiniz?')
  for(let i =0; i < yeniIsim; i++) {

let isimEkle = prompt('İsim giriniz');
isimler.push(isimEkle);
  }
  isimler.sort();
  console.log(isimler);
  console.log('Kullanıcı isimleri: ' + isimler);
  
}

listele();