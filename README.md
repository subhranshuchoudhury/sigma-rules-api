# Men Sigma Rule API

- This API provides funny sigma rules from memes.
- Use it for fun, remeber all the rules are from internet.
- Kindly don't take the rules seriously.
- <b>NOTE: Use "http" protocol for no error. eg. http://sigmarule.herokuapp.com/sigmarule</b>
---

### [Home Page](http://sigmarule.herokuapp.com "API Home Page")
---

## Fetch all the Sigma Rules:
```js 
//#### NOTE: Use "http" protocol for no error. eg. http://sigmarule.herokuapp.com/sigmarule
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
    console.log(Rules); //Rules[index].rule
} 
```
---

## Fetch random Sigma Rule:

```js
//#### NOTE: Use "http" protocol for no error. eg. http://sigmarule.herokuapp.com/sigmarule
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
    console.log(Rules.rule)
}
```
---
## Endpoints:

- [Random Rules](http://sigmarule.herokuapp.com/sigmarule/random "Random one Sigma Rule")
- [All Rules](http://sigmarule.herokuapp.com/sigmarule "All Sigma Rules")

#### NOTE: Use "http" protocol for no error. eg. http://sigmarule.herokuapp.com/sigmarule
---
Author: [Subhranshu Choudhury](https://about.me/subhranshu "aka Chintu")


