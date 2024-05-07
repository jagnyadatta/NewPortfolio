// JavaScript to dynamically generate content for career, social, and project sections
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate career details
    function generateCareerDetails() {
        // Sample data, replace with your actual data
        const careerData = [
            { company: 'Company 1', position: 'Position 1', duration: 'Year 1 - Year 2' },
            { company: 'Company 2', position: 'Position 2', duration: 'Year 3 - Year 4' },
            // Add more career details as needed
        ];

        const table = document.getElementById('career-table');

        careerData.forEach(item => {
            const row = table.insertRow();
            row.insertCell(0).textContent = item.company;
            row.insertCell(1).textContent = item.position;
            row.insertCell(2).textContent = item.duration;
        });
    }

    // Function to generate social accounts
    function generateSocialAccounts() {
        // Sample data, replace with your actual data
        const socialData = [
            { name: 'Twitter', icon: 'twitter.png', link: 'https://twitter.com/your_twitter_account' },
            { name: 'GitHub', icon: 'github.png', link: 'https://github.com/your_github_account' },
            // Add more social accounts as needed
        ];

        const socialContainer = document.getElementById('social-accounts');

        socialData.forEach(item => {
            const icon = document.createElement('img');
            icon.src = item.icon;
            icon.alt = item.name;
            const link = document.createElement('a');
            link.href = item.link;
            link.appendChild(icon);
            socialContainer.appendChild(link);
        });
    }

    // Function to generate projects
    function generateProjects() {
        // Sample data, replace with your actual data
        const projectsData = [
            { name: 'Project 1', description: 'Description of Project 1', link: '#' },
            { name: 'Project 2', description: 'Description of Project 2', link: '#' },
            // Add more projects as needed
        ];

        const projectsContainer = document.getElementById('projects-list');

        projectsData.forEach(item => {
            const project = document.createElement('div');
            project.innerHTML = `<h3><a href="${item.link}">${item.name}</a></h3><p>${item.description}</p>`;
            projectsContainer.appendChild(project);
        });
    }

    // Call the functions to generate content
    generateCareerDetails();
    generateSocialAccounts();
    generateProjects();

    // Function to handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Here you can add code to handle form submission, e.g., send data to a server
        alert('Form submitted successfully!');
    });

    // Functionality for "Go to Top" button
    document.getElementById('go-top-btn').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ----------------------------------

// JavaScript for adding active status to navbar menu items based on current section

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function setActiveMenuItem() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjusted for navbar height

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
                const id = section.getAttribute('id');
                const correspondingMenuItem = document.querySelector(`nav ul li a[href="#${id}"]`);

                // Remove active class from all menu items
                document.querySelectorAll('nav ul li a').forEach(item => {
                    item.classList.remove('active');
                });

                // Add active class to corresponding menu item
                correspondingMenuItem.classList.add('active');
            }
        });
    }

    setActiveMenuItem();

    window.addEventListener('scroll', setActiveMenuItem);
});


// ----------------------------------------------------
// JavaScript for adding blur effect on navbar menu click

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add blur class to body
            document.body.classList.add('blur');

            // Remove blur class after a short delay (you can adjust the delay as needed)
            setTimeout(function() {
                document.body.classList.remove('blur');
            }, 500); // 500 milliseconds delay
        });
    });
});

// =============================================
