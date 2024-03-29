var docx = nlp("Jack Ryan is a CIA Analyst in New York");
console.log(docx.data());
// Sentences
console.log(docx.sentences().data());   

// Tokenization
console.log(docx.sentences().terms().out('array'));


// Part of Speech Tagging  + Entities
console.log(docx.sentences().terms().out('tags'));

// Entity Recognition NER

console.log(docx.topics().data());

// Entity Recognition (NER) For People
console.log(docx.topics().people().text());
console.log(docx.people().text());

// Entity Recognition (NER) Firstname & last name
// console.log(docx.people().firstNames().text());
// console.log(docx.people().lastNames().text());

// Entity Recognition (NER) For Places

console.log(docx.places().text());
console.log(docx.topics().places().text());


// Entity Recognition (NER) For Organizations
console.log(docx.topics().organizations().text());


// Working with Nouns  & Verbs

console.log(docx.verbs().data());

var docx2 = nlp("book");
// console.log(docx2.nouns().toLowerCase().text());
// console.log(docx2.nouns().toUpperCase().text());
// console.log(docx2.nouns().toPlural().text());

