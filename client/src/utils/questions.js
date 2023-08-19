
const interviewTopicsQuiz = [
    {
        title: 'Data Structures and Algorithms',
        questions: [
            {
                question: 'What is the time complexity of insertion sort?',
                options: [
                    { text: 'O(n)', isCorrect: false },
                    { text: 'O(n log n)', isCorrect: false },
                    { text: 'O(n^2)', isCorrect: true },
                    { text: 'O(log n)', isCorrect: false },
                ],
            },
            {
                question: 'What is a stack data structure?',
                options: [
                    { text: 'A linear data structure with First-In-First-Out (FIFO) behavior', isCorrect: false },
                    { text: 'A linear data structure with Last-In-First-Out (LIFO) behavior', isCorrect: true },
                    { text: 'A hierarchical data structure', isCorrect: false },
                    { text: 'A dynamic array', isCorrect: false },
                ],
            },
            {
                question: 'What is the purpose of a hash table?',
                options: [
                    { text: 'To store elements in a sorted order', isCorrect: false },
                    { text: 'To implement a priority queue', isCorrect: false },
                    { text: 'To maintain a collection of unique elements', isCorrect: false },
                    { text: 'To achieve fast data retrieval and storage using key-value pairs', isCorrect: true },
                ],
            },
            {
                question: 'What is a binary tree?',
                options: [
                    { text: 'A tree with three child nodes for each parent node', isCorrect: false },
                    { text: 'A tree with exactly two child nodes for each parent node', isCorrect: true },
                    { text: 'A tree that contains only leaf nodes', isCorrect: false },
                    { text: 'A tree with unbounded branching factor', isCorrect: false },
                ],
            },
            {
                question: 'What is a graph data structure?',
                options: [
                    { text: 'A data structure used for storing multimedia files', isCorrect: false },
                    { text: 'A data structure that represents hierarchical relationships', isCorrect: false },
                    { text: 'A data structure used in database management systems', isCorrect: false },
                    { text: 'A collection of nodes connected by edges to represent complex relationships', isCorrect: true },
                ],
            },
            {
                question: 'What is the worst-case time complexity of a linear search?',
                options: [
                    { text: 'O(n)', isCorrect: true },
                    { text: 'O(log n)', isCorrect: false },
                    { text: 'O(n log n)', isCorrect: false },
                    { text: 'O(1)', isCorrect: false },
                ],
            },
            {
                question: 'What is the difference between a queue and a stack?',
                options: [
                    { text: 'A queue uses Last-In-First-Out (LIFO) behavior, while a stack uses First-In-First-Out (FIFO) behavior', isCorrect: false },
                    { text: 'A queue is a linear data structure, while a stack is a hierarchical data structure', isCorrect: false },
                    { text: 'A queue allows items to be inserted and removed at both ends, while a stack only allows items to be inserted and removed at one end', isCorrect: false },
                    { text: 'A queue uses First-In-First-Out (FIFO) behavior, while a stack uses Last-In-First-Out (LIFO) behavior', isCorrect: true },
                ],
            },
            {
                question: 'What is the purpose of dynamic programming in algorithm design?',
                options: [
                    { text: 'To create dynamic visualizations of algorithm execution', isCorrect: false },
                    { text: 'To implement algorithms that are subject to change', isCorrect: false },
                    { text: 'To optimize the efficiency of recursive algorithms by avoiding redundant computations', isCorrect: true },
                    { text: 'To design algorithms that are easier to understand for beginners', isCorrect: false },
                ],
            },
            {
                question: 'What is a hash collision in the context of hash tables?',
                options: [
                    { text: 'When two hash functions produce the same value for different keys', isCorrect: true },
                    { text: 'When a hash table becomes too large to fit in memory', isCorrect: false },
                    { text: 'When the hash function generates a negative value', isCorrect: false },
                    { text: 'When a hash function generates a value larger than the table size', isCorrect: false },
                ],
            },
            {
                question: 'What is the purpose of the "divide and conquer" strategy in algorithm design?',
                options: [
                    { text: 'To create algorithms that work efficiently with large datasets', isCorrect: false },
                    { text: 'To solve complex problems by breaking them into smaller subproblems and solving each subproblem independently', isCorrect: true },
                    { text: 'To implement algorithms that involve repeated iteration and mutation of data', isCorrect: false },
                    { text: 'To combine multiple algorithms into a single, unified solution', isCorrect: false },
                ],
            },
        ],
    },
    ,
    {
        title: 'System Design',
        questions: [
            {
                question: 'What is horizontal scaling in the context of system design?',
                options: [
                    { text: 'Adding more resources to a single server', isCorrect: false },
                    { text: 'Adding more servers to distribute load', isCorrect: true },
                    { text: 'Reducing the size of the server', isCorrect: false },
                ],
            },
            {
                question: 'What is the CAP theorem in distributed systems?',
                options: [
                    { text: 'Consistency, Availability, Partition Tolerance', isCorrect: true },
                    { text: 'Consistency, Accessibility, Performance', isCorrect: false },
                    { text: 'Caching, Availability, Partition Tolerance', isCorrect: false },
                    { text: 'Concurrency, Availability, Partition Tolerance', isCorrect: false },
                ],
            },

        ],
    },
    {
        title: 'DBMS',
        questions: [
            {
                question: 'What is the purpose of database normalization?',
                options: [
                    { text: 'To speed up database queries', isCorrect: false },
                    { text: 'To reduce data redundancy and improve data integrity', isCorrect: true },
                    { text: 'To add redundancy for backup purposes', isCorrect: false },
                    { text: 'To create complex queries', isCorrect: false },
                ],
            },
            {
                question: 'What is an ACID transaction in the context of a database?',
                options: [
                    { text: 'A transaction that involves audio and video data', isCorrect: false },
                    { text: 'A transaction that involves advanced calculations and indexing', isCorrect: false },
                    { text: 'A transaction that adheres to the principles of Atomicity, Consistency, Isolation, and Durability', isCorrect: true },
                    { text: 'A transaction that uses authentication and encryption', isCorrect: false },
                ],
            },
            {
                question: 'What is the purpose of an SQL WHERE clause?',
                options: [
                    { text: 'To specify the columns to be retrieved in a query', isCorrect: false },
                    { text: 'To combine data from multiple tables', isCorrect: false },
                    { text: 'To filter rows based on a specified condition', isCorrect: true },
                    { text: 'To sort the results in ascending or descending order', isCorrect: false },
                ],
            },
            {
                question: 'What is the difference between a clustered index and a non-clustered index?',
                options: [
                    { text: 'A clustered index determines the sorting order of rows in a table, while a non-clustered index does not', isCorrect: true },
                    { text: 'A clustered index is used for primary keys, while a non-clustered index is used for foreign keys', isCorrect: false },
                    { text: 'A clustered index improves query performance, while a non-clustered index improves data insertion speed', isCorrect: false },
                    { text: 'A clustered index is created automatically, while a non-clustered index requires manual creation', isCorrect: false },
                ],
            },
            {
                question: 'What is a database view?',
                options: [
                    { text: 'A temporary storage area for query results', isCorrect: false },
                    { text: 'A type of NoSQL database', isCorrect: false },
                    { text: 'A virtual table based on the result of a SQL SELECT query', isCorrect: true },
                    { text: 'A table that stores aggregated data for reporting purposes', isCorrect: false },
                ],
            },
            {
                question: 'What is the purpose of database indexing?',
                options: [
                    { text: 'To encrypt sensitive data in the database', isCorrect: false },
                    { text: 'To organize tables hierarchically', isCorrect: false },
                    { text: 'To optimize query performance by providing faster data retrieval', isCorrect: true },
                    { text: 'To generate primary keys automatically', isCorrect: false },
                ],
            },
            {
                question: 'What is a composite key in a database?',
                options: [
                    { text: 'A key that is stored in encrypted form', isCorrect: false },
                    { text: 'A key that consists of multiple attributes, used to uniquely identify records', isCorrect: true },
                    { text: 'A key that is generated using a random algorithm', isCorrect: false },
                    { text: 'A key that is used for authentication purposes', isCorrect: false },
                ],
            },
            {
                question: 'What is the difference between a stored procedure and a function in a database?',
                options: [
                    { text: 'A stored procedure returns a value, while a function does not', isCorrect: false },
                    { text: 'A stored procedure is written in a programming language, while a function is written in SQL', isCorrect: false },
                    { text: 'A stored procedure can modify data, while a function cannot', isCorrect: false },
                    { text: 'A stored procedure can return multiple values, while a function returns a single value', isCorrect: true },
                ],
            },
            {
                question: 'What is data integrity in a database?',
                options: [
                    { text: 'The process of converting data into a readable format', isCorrect: false },
                    { text: 'The quality of data being accurate, consistent, and reliable', isCorrect: true },
                    { text: 'The process of archiving data for long-term storage', isCorrect: false },
                    { text: 'The process of encrypting data for security purposes', isCorrect: false },
                ],
            },
            {
                question: 'What is the purpose of a database trigger?',
                options: [
                    { text: 'To initiate automated email notifications', isCorrect: false },
                    { text: 'To generate random values for new records', isCorrect: false },
                    { text: 'To enforce business rules or perform actions automatically when certain events occur', isCorrect: true },
                    { text: 'To establish relationships between tables', isCorrect: false },
                ],
            },
        ],
    }
    ,
    {
        title: 'OOPS',
        questions: [
            {
                question: 'What is encapsulation in object-oriented programming?',
                options: [
                    { text: 'Hiding implementation details and exposing an interface', isCorrect: true },
                    { text: 'Combining multiple objects into one', isCorrect: false },
                    { text: 'Creating instances of classes', isCorrect: false },
                    { text: 'Inheriting properties from a parent class', isCorrect: false },
                ],
            },
            {
                question: 'What is method overloading?',
                options: [
                    { text: 'Creating multiple methods with the same name in a class', isCorrect: true },
                    { text: 'Creating methods with different names in a class', isCorrect: false },
                    { text: 'Creating methods that can be accessed from outside the class', isCorrect: false },
                    { text: 'Creating methods with different return types in a class', isCorrect: false },
                ],
            },

        ],
    },
];

export default interviewTopicsQuiz;