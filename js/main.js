const myname = +prompt('Bir dan yettigacha bulgan raqam kiriting');
const kunlar = document.querySelector('Hafta kunlari');

switch (myname) {
    case 1:
        console.log('Dushanba');
        break;
    case 2:
        console.log('Seshanba');
        break;
    case 3:
        console.log('Chorshanba');
        break;
    case 4:
        console.log('Payshanba');
        break;
    case 5:
        console.log('Juma');
        break;
    case 6:
        console.log('Shanba');
        break;
    case 7:
        console.log('Yakshanba');
        break;
    default:
        console.log('XATO');
        break;
}