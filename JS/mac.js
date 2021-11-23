
function updateMemory(memory, price1) {
    const baseMemoryPrice = document.getElementById(memory);
    const baseMemoryPriceText = baseMemoryPrice.innerText;
    baseMemoryPrice.innerText = price1;
    // updateTotal('total-price',price);
    // console.log(price);
    // return price1;
    updateTotal();

}

function updateStorage(storage, price2) {
    const baseStorage = document.getElementById(storage);
    const baseStorageText = baseStorage.innerText;
    baseStorage.innerText = price2;
    return price2;
}
function updateDelivery(delivery, price3) {
    const freeDelivery = document.getElementById(delivery);
    const freeDeliveryText = freeDelivery.innerText;
    freeDelivery.innerText = price3;
    return price3;

}
function updateTotal() {
    const totalMemory = document.getElementById('extra-memory-price');
    const memoryPrice = parseInt(totalMemory.innerText);
    const total = document.getElementById('total-price');
    const totalatext = total.innerText;

    total.innerText = parseInt(totalatext) + memoryPrice;

    console.log(total);
    // price is increasing problem

}


document.getElementById('memory-button').addEventListener('click', function () {
    const baseMemoryPrice = updateMemory('extra-memory-price', '0');


})
document.getElementById('extra-memory-button').addEventListener('click', function () {
    const extraMemoryPrice = updateMemory('extra-memory-price', '180');



})
// extra storage
document.getElementById('storage-base').addEventListener('click', function () {
    const baseStorage = updateStorage('extra-storage-cost', '0');

})
document.getElementById('storage-x').addEventListener('click', function () {
    const storageX = updateStorage('extra-storage-cost', '100');

})
document.getElementById('storage-2x').addEventListener('click', function () {
    const storage2x = updateStorage('extra-storage-cost', '180');


})
// delivery charge
document.getElementById('delivery-free').addEventListener('click', function () {
    const freeDelivery = updateDelivery('delivery-charge', '0');

})
document.getElementById('delivery-cost').addEventListener('click', function () {
    const chargedDelivery = updateDelivery('delivery-charge', '20');

})

