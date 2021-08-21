
function updateMemory(memory,price1) {
    const baseMemoryPrice = document.getElementById(memory);
    const baseMemoryPriceText = baseMemoryPrice.innerText;
    baseMemoryPrice.innerText = price1;
    return price1;

}

function updateStorage(storage,price2) {
    const baseStorage = document.getElementById(storage);
    const baseStorageText = baseStorage.innerText;
    baseStorage.innerText = price2;
    return price2;
}
function updateDelivery(delivery,price3) {
    const freeDelivery = document.getElementById(delivery);
    const freeDeliveryText = freeDelivery.innerText;
    freeDelivery.innerText = price3;
    return price3;


}

document.getElementById('memory-button').addEventListener('click',function(){
    const baseMemoryPrice = updateMemory('extra-memory-price','0');

    

    /* const memoryPrice = document.getElementById('memory-price');
    const memoryPriceText = memoryPrice.innerText;
    memoryPrice.innerText = 1299; */
// extra memory
   /*  const baseMemoryPrice = document.getElementById('extra-memory-price');
    const baseMemoryPriceText = baseMemoryPrice.innerText;
    baseMemoryPrice.innerText = 0; */

})
document.getElementById('extra-memory-button').addEventListener('click',function(){
    const extraMemoryPrice = updateMemory('extra-memory-price','180');
 

    /* const extraMemoryPrice = document.getElementById('extra-memory-price');
    const extraMemoryPriceText = extraMemoryPrice.innerText;
    extraMemoryPrice.innerText = 180; */
})
// extra storage
document.getElementById('storage-base').addEventListener('click',function(){
    const baseStorage = updateStorage('extra-storage-cost', '0');

    /* const baseStorage = document.getElementById('extra-storage-cost');
    const baseStorageText = baseStorage.innerText;
    baseStorage.innerText = 0; */
})
document.getElementById('storage-x').addEventListener('click',function(){
    const storageX = updateStorage('extra-storage-cost','100');

   /*  const storageX = document.getElementById('extra-storage-cost');
    const storageXText = storageX.innerText;
    storageX.innerText = 100; */
})
document.getElementById('storage-2x').addEventListener('click',function(){
     const storage2x = updateStorage('extra-storage-cost','180');

    /* const storage2x = document.getElementById('extra-storage-cost');
    const storage2xText = storage2x.innerText;
    storage2x.innerText = 180; */
})
// delivery charge
document.getElementById('delivery-free').addEventListener('click', function(){
    const freeDelivery = updateDelivery('delivery-charge','0');
    /* const freeDelivery = document.getElementById('delivery-charge');
    const freeDeliveryText = freeDelivery.innerText;
    freeDelivery.innerText = 0; */
})
document.getElementById('delivery-cost').addEventListener('click', function(){
    const chargedDelivery = updateDelivery('delivery-charge','20');
    /* const chargedDelivery = document.getElementById('delivery-charge');
    const chargedDeliveryText = chargedDelivery.innerText;
    chargedDelivery.innerText = 20; */
})
// const totalPrice = document.getElementById('total-price');
//     const totalPriceText = totalPrice.innerText;
//     console.log(totalPriceText);

