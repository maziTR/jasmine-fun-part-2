var {LinkedList,Node} = require('../modules/LinkedList');

describe("CreateList", function() {
  it("Should create an object with an array inside", function() {
    var list = new LinkedList();

    expect(list._length).toBe(0);
    expect(list.head).toBe(null);
  });
});

describe("consoleLogAll", function() {
  it("Should log all the data in the list", function() {
    var list = new LinkedList();
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3 = new Node(3);

    list.head = node1;
    node1.next = node2;
    node2.next = node3;
    
    console.log = jasmine.createSpy("log");
    list.consoleLogAll();
    expect(console.log).toHaveBeenCalledWith(node1.data);
    expect(console.log).toHaveBeenCalledWith(node2.data);
    expect(console.log).toHaveBeenCalledWith(node3.data);
  });
});

describe("AddToTheBeginning", function() {
  it("Should add an object to the beginning on the list", function() {
    var list = new LinkedList();
    
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3Data = 3;

    list.head = node1;
    node1.next = node2;
    
    console.log = jasmine.createSpy("log");
    list.AddToTheBeginning(node3Data);
    list.consoleLogAll();
    expect(console.log).toHaveBeenCalledWith(node3Data);
    expect(console.log).toHaveBeenCalledWith(node1.data);
    expect(console.log).toHaveBeenCalledWith(node2.data);
  });
});

 describe("DeleteItem", function() {
  it("Should Delete a selected Item", function() {
    var list = new LinkedList();
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3 = new Node(3);

    list.head = node1;
    node1.next = node2;
    node2.next = node3;

    console.log = jasmine.createSpy("log");
    list.DeleteItem(node2.data);
    list.consoleLogAll();
    expect(console.log).toHaveBeenCalledWith(node1.data);
    expect(console.log).toHaveBeenCalledWith(node3.data);
  });
});


describe("AddToTheEnd", function() {
  it("Should add an object to the end on the list", function() {
    var list = new LinkedList();
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3Data = 3;

    list.head = node1;
    node1.next = node2;

    console.log = jasmine.createSpy("log");
    list.AddToTheEnd(node3Data);
    list.consoleLogAll();
    expect(console.log).toHaveBeenCalledWith(node1.data);
    expect(console.log).toHaveBeenCalledWith(node2.data);
    expect(console.log).toHaveBeenCalledWith(node3Data);
  });
});

describe("RemoveItemByIndex", function() {
  it("Should Remove Item By Index", function() {
    var list = new LinkedList();
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3 = new Node(3);

    list.head = node1;
    node1.next = node2;
    node2.next = node3;

    console.log = jasmine.createSpy("log");
    list.RemoveItemByIndex(1);
    list.consoleLogAll();
    expect(console.log).toHaveBeenCalledWith(node1.data);
    expect(console.log).toHaveBeenCalledWith(node3.data);
  });
}); 