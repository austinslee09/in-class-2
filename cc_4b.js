let products=[
    {name:"brick", sku:"sku-981", Price: 4.99,Inventory:"90",catagory:"materials"},
    {name:"cat", sku:"sku-872", Price:60.00, Inventory:"25",catagory:"pet"},                       
    {name:"table", sku:"sku-132", Price:849.99, Inventory:"40", catagory:"furnature"},
    {name:"wonton", sku:"sku-901", Price:16.99, Inventory:"70", catagory:"food"},
    {name:"seeds", sku:"sku-343", Price:3.99, Inventory:"100",catagory:"farming"}
]
console.log(products);

for(const product in products){
let discount=0;
switch (product.catagory){
    case "materials":
        discount=.2;
        break;
        case"pet":
        case "furnature":
            discount=.1;
            break;
            case "wonton":
            discount =.15;
            break;
        default:
        discount=0;
}
promoPrice=price*(1-discount)
product.promoPrice=promoPrice;
}
console.log(products)