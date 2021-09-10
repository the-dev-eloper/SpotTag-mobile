const data = {

    languages: [
        {
            _id: '1',
             name: "JavaScript", "photo": require('../assets/JS.png') 
        },

        { _id: "2", name: "Python", "photo": require('../assets/JS.png') },
        { _id: "3", name: "HTML", "photo": require('../assets/JS.png') },
        { _id: "4", name: "TypeScript", "photo": require('../assets/JS.png') },
        { _id: "5", name: "CSS", "photo": require('../assets/JS.png') },
        { _id: "6", name: "Dart", "photo": require('../assets/JS.png') }    
    ],

    bugs: [
        {
            name: 'Null is not an object',
            category: 'TypeError',
            language: 'JavaScript',
            reason: 'calling method on null objects',
            testingTool: 'Safari Developer Console',
            solution: 'adding an event listener',
            refLink: 'https://stackoverflow.com/questions/14207922/javascript-error-null-is-not-an-object',
            addedBy: 'Admin',
        },
        {
            name: 'Indentation',
            category: 'non-typo error',
            language: 'Python',
            reason: 'Not following indentation rules',
            testingTool: 'xxx',
            solution: 'Avoid mixing tabs and spaces in the indentation of a given single block',
            refLink: 'https://www.edureka.co/blog/indentation-error-in-python/#:~:text=The%20cause%20of%20Indentation%20Error%20in%20Python,-As%20mentioned%20in&text=Since%20python%20makes%20use%20of,most%20likely%20experience%20this%20error.',
            addedBy: 'Admin',
        },
        {
            name: 'Null is not an object',
            category: 'TypeError Adv',
            language: 'JavaScript',
            reason: 'calling method on null objects',
            testingTool: 'Safari Developer Console',
            solution: 'adding an event listener',
            refLink: 'https://stackoverflow.com/questions/14207922/javascript-error-null-is-not-an-object',
            addedBy: 'Admin',
        }
    ]
};

export default data;