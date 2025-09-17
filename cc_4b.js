let products=[
    {name:"brick", sku:"sku-981", price: .99,Inventory:"90",catagory:"materials"},
    {name:"cat", sku:"sku-872", price:6, Inventory:"25",catagory:"pet"},                       
    {name:"table", sku:"sku-132", price:8, Inventory:"40", catagory:"furnature"},
    {name:"wonton", sku:"sku-901", price:16, Inventory:"70", catagory:"food"},
    {name:"seeds", sku:"sku-343", price:4, Inventory:"100",catagory:"farming"}
]
console.log(products);

for(const product in products){
let discount=0
switch(product.catagory){
    case "materials":
        discount=.20
        break
        case "pet":
        case "furnature":
            discount=.15
            break
            case "food":
                discount=.10
                break
                default:
                    discount=0;
}
letpromoPrice= product.price-(product.price*discount);
product.promoPrice=promoPrice.toFixed(2);
}