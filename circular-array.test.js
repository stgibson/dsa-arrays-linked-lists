const CircularArray = require("./circular-array");

describe("addItem", function() {
  it("adds items", function() {
    let circ = new CircularArray();
    circ.addItem("harry");
    circ.addItem("hermoine");
    circ.addItem("ginny");
    circ.addItem("ron");
    // check console for testing printArray()
    circ.printArray();
    expect(circ.arr).toEqual(["harry", "hermoine", "ginny", "ron"]);
  });
});

describe("getByIndex", function() {
  it("gets item by index", function() {
    let circ = new CircularArray();
    circ.addItem("harry");
    circ.addItem("hermoine");
    circ.addItem("ginny");
    circ.addItem("ron");
    expect(circ.getByIndex(2)).toBe("ginny");
    expect(circ.getByIndex(15)).toBe(null);
  });
});

describe("rotate", function() {
  it("rotates to the right with positive numbers", function() {
    let circ = new CircularArray();
    circ.addItem("harry");
    circ.addItem("hermione");
    circ.addItem("ginny");
    circ.addItem("ron");

    circ.rotate(1);

    expect(circ.getByIndex(0)).toBe("hermione");
    expect(circ.getByIndex(1)).toBe("ginny");
    expect(circ.getByIndex(2)).toBe("ron");
    expect(circ.getByIndex(3)).toBe("harry");
  });

  it("rotates to the left with negative numbers", function() {
    let circ = new CircularArray();
    circ.addItem("harry");
    circ.addItem("hermione");
    circ.addItem("ginny");
    circ.addItem("ron");

    circ.rotate(-1);
    
    expect(circ.getByIndex(0)).toBe("ron");
    expect(circ.getByIndex(1)).toBe("harry");
    expect(circ.getByIndex(2)).toBe("hermione");
    expect(circ.getByIndex(3)).toBe("ginny");
  });

  it("rotates more than once around the ring", function() {
    let circ = new CircularArray();
    circ.addItem("harry");
    circ.addItem("hermione");
    circ.addItem("ginny");
    circ.addItem("ron");

    circ.rotate(-17);

    expect(circ.getByIndex(0)).toBe("ron");
    expect(circ.getByIndex(1)).toBe("harry");
    expect(circ.getByIndex(2)).toBe("hermione");
    expect(circ.getByIndex(3)).toBe("ginny");
  });

  it("also allows for adding items after rotation", function() {
    let circ = new CircularArray();
    circ.addItem("harry");
    circ.addItem("hermione");
    circ.addItem("ginny");
    circ.addItem("ron");

    circ.rotate(-2);
    circ.addItem("dobby");

    expect(circ.getByIndex(0)).toBe("ginny");
    expect(circ.getByIndex(1)).toBe("ron");
    expect(circ.getByIndex(2)).toBe("harry");
    expect(circ.getByIndex(3)).toBe("hermione");
    expect(circ.getByIndex(4)).toBe("dobby");
  });
});