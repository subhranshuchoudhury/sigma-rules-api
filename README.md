# Men Sigma Rule API

- This API provides funny sigma rules from memes.
- Use it for fun, remeber all the rules are from internet.
- Kindly don't take the rules seriously.
---

### [Home Page](http://sigmarule.herokuapp.com "API Home Page")
---

## Fetch all the Sigma Rules:
```js 
const URL = "http://sigmarule.herokuapp.com/sigmarule"
const getPosts = async () => {

    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Error in fetching JSON data, Contact subhranshuchoudhury");
    }
    const data = await response.json();
    return data;

}

getPosts()
    .then(mydata => {
        getRule(mydata);
    })
    .catch(error => {
        alert(error);

    });

function getRule(Rules) {
    console.log(Rules);
} 
```
---

## Fetch random Sigma Rule:

```js

const URL = "http://sigmarule.herokuapp.com/sigmarule/random"
const getPosts = async () => {

    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Error in fetching JSON data, Contact subhranshuchoudhury");
    }
    const data = await response.json();
    return data;

}

getPosts()
    .then(mydata => {
        getRule(mydata);
    })
    .catch(error => {
        alert(error);

    });

function getRule(Rules) {
    console.log(Rules)
}
```
---
## Endpoints:

- [Random Rules](https://sigmarule.herokuapp.com/sigmarule/random "Random one Sigma Rule")
- [All Rules](https://sigmarule.herokuapp.com/sigmarule "All Sigma Rules")
---
Author: [Subhranshu Choudhury](https://about.me/subhranshu "aka Chintu")


