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
    document.getElementById("ruleDisplay").innerHTML = `Today's sigma rule: ${Rules.rule}`;
}