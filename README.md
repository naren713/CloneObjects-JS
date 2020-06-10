# CloneObjects-JS

- When we use assignment operator, it just assigns the reference to the NewObj
  and both the variables(Objects) point to the same Object.

- Here, we want to create a cloned copy of the Object. There are different ways to clone an object

1. var NewObj = Object.assign({}, OriginalObj);

- The assign() method copies the elements from OriginalObj to NewObj and creates a copy.

- Now these two variables(Objects) do not point to the same Object.

- The "Assign Function" has limitations. It doesn't work for Nested Objects,because it creates a reference to the nested object.

- In other words, **Object.assign()** creates a **Shallow Copy** of the object.

2. **Spread operator:** It is the same as assign() method. It also creates a Shallow copy.

var NewObj = {...OrignalObj}

3. var NewObj = JSON.parse(JSON.stringify(OriginalObj));

- JSON.stringify() => Converts an obj to a string

- JSON.parse() => Converts the string back to an object

- This method also works for Nested Objects as it creates a **Deep Copy**.

* However, if there are any functions inside an object, **Object.assign()** can be used to copy the functions as well, but the **JSON** method cannot copy functions.

4. **Since cloning objects is complex (types, function etc.), most major libraries provide function to clone objects.**

- **You can create your own function to do deep copy or use third party libraries like load Lodash.** https://lodash.com/docs/4.17.15
