# Practice Questions

- **Qs 1.** What is the value of age after this code runs?

    ```js
    let age = 23;
    age + 2; // After 2 years
    ```

    **Ans:** `23`

- **Qs 2.** What is the value of avg after the code runs?

    ```js
    let hindi = 80;
    let eng = 90;
    let math = 100;
    let avg = (hindi + eng + math) / 3;
    ```

    **Ans:** `90`

- **Qs 3.** What is the value of each variable in each line of code?

    ```js
    let num = 5;
    let newNum = num++;
    newNum = ++num;
    ```

    **Ans:**
    - 1st line `num = 5`
    - 2nd line `newNum = 5`, `num = 6`
    - 3rd line `newNum = 7`, `num = 7`

- **Qs 4.** Find the errors in the following code?

    a.
    ```js
    let 1age = 5;
    let 2age = 10;
    ```

    b.
    ```js
    let marks = 75;
    let isPass = True;
    ```

    c.
    ```js
    let isPass = 'true';
    ```

    **Ans:** 

    a.
    ```js
    let age1 = 5;
    let age2 = 10;
    ```

    b.
    ```js
    let marks = 75;
    let isPass = true;
    ```

    c.
    ```js
    let isPass = 'true';

    // let isPass = 'true'; it works, but '' and "" used for stings, if the isPass is a boolean variable then it must be let isPass = true;
    ```

- **Qs 5.** Declare your name as a string and print its length in JS

    **Ans:**

    ```js
    let name = "Jomon Joy";

    name.length; // 9
    ```

- **Qs 6:** Declare your first name as a string and print its first character

    **Ans:**

    ```js
    let firstName = "Jomon";

    firstName[0]; // J
    ```

- **Qs 7.** Declare your first name as a string and print its last character

    **Ans:**

    ```js
    let firstName = "Jomon";

    firstName[4]; // N

    firstName[firstName.length-1]; // N
    ```

- **Qs 8.** What is output of following code:

    ```js
    "ABCDEFG"+123
    ```

    **Ans:**

    ```js
    'ABCDEFG123'
    ```

- **Qs 9.** What are lengths of an empty string & a string with a single space?

    **Ans:**

    ```js
    let empty = "";
    empty.length; // 0

    let space = " ";
    space.length; // 1
    ```
