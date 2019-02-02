
var dict = [
    {
        bad: [/(ecma|ecma\s?script|es)\s?(2015|6)/gi],
        good: 'ES6'
    }
];
let replacer;
var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            if (text && text.trim().length) {
                var replacedText = text;

                dict.forEach((item) => {
                    item.bad.forEach((baddie) => { 
                        replacedText = text.replace(baddie, item.good);
                     });
                });

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
