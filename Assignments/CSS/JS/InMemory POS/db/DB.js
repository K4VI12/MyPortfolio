let customerAr = [
    {name: 'Nimal',cusid: 'C00-001',cusnomber: '+94 76 2656 420',cussalry: '800000.00'},
    {name: 'Kasun',cusid: 'C00-002',cusnomber: '+94 76 2656 420',cussalry: '100000.00'},
    {name: 'Amal',cusid: 'C00-003',cusnomber: '+94 76 2656 420',cussalry: '150000.00'}
];

let item = [
    {itmcode: 'I00-001',itmname: 'Sun Light',itmprice: '150',itmqty: '50'},
    {itmcode: 'I00-002',itmname: 'Signal',itmprice: '180',itmqty: '60'},
    {itmcode: 'I00-003',itmname: 'Milk Packet',itmprice: '550',itmqty: '60'}
];

let orderDB = [
    {oid:"OID-001", date:"2023/10/16", customerID:"C00-001",
        orderDetails:[
            {oid:"OID-001", code:"I00-001", qty:10, unitPrice:145.00},
            {oid:"OID-001", code:"I00-002", qty:2, unitPrice:345.00}
        ]
    }
];