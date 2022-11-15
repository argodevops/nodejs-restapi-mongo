db.createUser(
    {
        user: "test",
        pwd: "password",
        roles:[
         {
            role: "readWrite",
            db: "testdb"
         }
       ]
    }
);
db.createCollection('users');
db.users.insert( [
    { _id: 1, name:"user1", pass:"pass"},
    { _id: 2, name:"user2", pass:"pass"},
    { _id: 3, name:"user3", pass:"pass"}
]);

db.createCollection('books');
db.books.insert([
    { _id: 1, name: "Test 1 Book", author: "Tester T", publishDate:"1990-01-03", isbn:"abc123abc123"},
    { _id: 2, name: "Able Book", author: "Able B", publishDate:"1991-01-01", isbn:"cde456abc123"},
    { _id: 3, name: "Mark Book", author: "Mark C", publishDate:"1990-10-11", isbn:"def678abc123"},
    { _id: 4, name: "James Book", author: "James T", publishDate:"1993-04-01", isbn:"hij123abc123"},
    { _id: 5, name: "Debra Book", author: "Debra L", publishDate:"1994-03-01", isbn:"klm123abc123"},
    { _id: 6, name: "Test 2 Book", author: "Tester T", publishDate:"1992-02-01", isbn:"agh123abc123"},
    { _id: 7, name: "Test 3 Book", author: "Tester T", publishDate:"1994-04-01", isbn:"wyu123abc123"},
    { _id: 8, name: "A second book of Able", author: "Able B", publishDate:"1990-01-01", isbn:"xjn123abc123"},
    { _id: 9, name: "The book of James", author: "James T", publishDate:"1990-01-10", isbn:"kgd123abc123"},
    { _id: 10, name: "The final Test", author: "Tester T", publishDate:"1997-07-01", isbn:"fds123abc123"},
]);

db.createCollection('pages');

db.pages.insert([
    { _id: 0, title: "Index", content: "Content for the index page", link: "index"},
    { _id: 1, title: "About", content: "Content for the about page", link: "about"},
    { _id: 2, title: "Category", content: "Content for the category page", link: "category"},
    { _id: 3, title: "Search", content: "Content for the search page", link: "search"}
]);