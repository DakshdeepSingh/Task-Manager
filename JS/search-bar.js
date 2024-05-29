// Check if browser supports SpeechRecognition
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Create a new instance of SpeechRecognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Set properties for SpeechRecognition
    recognition.lang = 'en-US'; // Set language
    recognition.interimResults = false; // Set interim results to false

    // Event listener for when speech is recognized
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('searchInput').value = transcript;
        document.getElementById('searchMobileInput').value = transcript;
    };

    // Event listener for errors
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    // Event listener for mic button click
    document.getElementById('micButton').addEventListener('click', function() {
        recognition.start();
    });
    
    document.getElementById('micMobileButton').addEventListener('click', function() {
        recognition.start();
    });
} else {
    // If browser doesn't support SpeechRecognition, display a message to the user
    console.error('Speech recognition not supported in this browser');
}

// Function to perform search
function performSearch() {
    const searchText = document.getElementById('searchInput').value.toLowerCase(); // Convert search text to lowercase for case-insensitive search
    const taskContainer = document.getElementById('task_container');
    const tasks = taskContainer.getElementsByClassName('task');

    // Loop through all tasks
    for (let i = 0; i < tasks.length; i++) {
        const title = tasks[i].getElementsByTagName('h3')[0].innerText.toLowerCase(); // Get the title of the task and convert to lowercase
        const taskDiv = tasks[i];

        // If the title contains the search text, display the task, otherwise hide it
        if (title.includes(searchText)) {
            taskDiv.style.display = 'block';
        } else {
            taskDiv.style.display = 'none';
        }
    }
}

function performMobileSearch() {
    const searchText = document.getElementById('searchMobileInput').value.toLowerCase();
    const taskContainer = document.getElementById('task_container');
    const tasks = taskContainer.getElementsByClassName('task');

    // Loop through all tasks
    for (let i = 0; i < tasks.length; i++) {
        const title = tasks[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        const taskDiv = tasks[i];

        // If the title contains the search text, display the task, otherwise hide it
        if (title.includes(searchText)) {
            taskDiv.style.display = 'block';
        } else {
            taskDiv.style.display = 'none';
        }
    }
}

// function performSearch() {
//     const searchText = document.getElementById('searchInput').value.toLowerCase();
//     const taskContainer = document.getElementById('task_container');
//     const tasks = taskContainer.getElementsByClassName('task');

//     // Loop through all tasks
//     for (let i = 0; i < tasks.length; i++) {
//         const titleElement = tasks[i].getElementsByTagName('h3')[0]; // Get the title element
//         const title = titleElement.innerText.toLowerCase(); // Get the text content of the title and convert to lowercase
//         const taskDiv = tasks[i];

//         // If the title contains the search text
//         if (title.includes(searchText)) {
//             taskDiv.style.display = 'block';

//             // Highlight the matched text
//             const index = title.indexOf(searchText);
//             const matchedText = title.substr(index, searchText.length);
//             const highlightedTitle = title.replace(new RegExp(searchText, 'gi'), `<span class="highlight">${matchedText}</span>`);
//             titleElement.innerHTML = highlightedTitle; // Update the title with the highlighted text
//         } else {
//             taskDiv.style.display = 'none';
//         }
//     }
// }