
let availableKeywords = [
    { keyword: "Html", link: "webdevelopment.html" },
    { keyword: "web development", link: "webdevelopment.html" },
    { keyword: "fullstack web development", link: "webdevelopment.html" },
    { keyword: "backend development", link: "webdevelopment.html" },
    { keyword: "frontened development", link: "webdevelopment.html" },
    { keyword: "JavaScript", link: "javascript.html" },
    { keyword: "c programming", link: "c.html" },
    { keyword: "c language", link: "c.html" },
    { keyword: "c++ programming", link: "c.html" },
    { keyword: "c++ language", link: "c.html" },
    { keyword: "dsa", link: "dsa.html" },
    { keyword: "data structures and algorithms", link: "dsa.html" },
    { keyword: "ai", link: "ai.html" },
    { keyword: "artificial intelligence", link: "ai.html" },
    { keyword: "machine learning", link:"machineLearning.html" },
    { keyword: "ml", link:"machineLearning.html" },
    { keyword: "neural networks", link:"neuralNetworks.html" },
    { keyword: "deep learning", link:"neuralNetworks.html" },
    { keyword: "data science", link:"dataScience.html" },
    { keyword: "data analytics", link:"dataScience.html" },
    { keyword: "data visualisation", link:"dataScience.html" },
    { keyword: "python programming", link:"python.html" },
    { keyword: "operating system", link:"os.html" },
    { keyword: "os", link:"os.html" },
    { keyword: "linux", link:"os.html" },
    { keyword: "coa", link:"coa.html" },
    { keyword: "computer organization and architecture", link:"coa.html" },
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((item) => {
            return item.keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if (!result.length) {
        resultBox.innerHTML = '';
    }
};

function display(result) {
    const content = result.map((item) => {
        return `<li onclick="selectInput(this)">${item.keyword}</a></li>`;
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    const selectedKeyword = list.textContent;
    const selectedItem = availableKeywords.find((item) => item.keyword === selectedKeyword);

    if (selectedItem) {
        window.location.href = selectedItem.link;
    }
}
