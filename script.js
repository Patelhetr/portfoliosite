// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Set initial icon based on theme
const icon = themeToggle.querySelector('i');
icon.className = body.getAttribute('data-theme') === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('#name').value;
    const email = this.querySelector('#email').value;
    const message = this.querySelector('#message').value;
    
    // Here you would typically send the data to a server
    console.log({ name, email, message });
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset form
    this.reset();
});

// Animate sections when they come into view
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
// Project Modals
const projectCards = document.querySelectorAll('.project-card');
const modal = document.createElement('div');
modal.className = 'project-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="project-details"></div>
    </div>
`;
document.body.appendChild(modal);

// Project data (you can expand this)
const projectsData = {
    project1: {
        title: "E-Commerce Website",
        description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        image: "assets/project1.jpg",
        details: `<p>This project was built to demonstrate modern e-commerce capabilities. Key features include:</p>
                  <ul>
                      <li>Product catalog with search and filtering</li>
                      <li>User authentication system</li>
                      <li>Shopping cart with persistent storage</li>
                      <li>Payment processing via Stripe</li>
                      <li>Admin dashboard for product management</li>
                  </ul>
                  <p>The frontend was built with React using functional components and hooks, while the backend uses Node.js with Express. MongoDB handles data storage with Mongoose for object modeling.</p>`,
        link: "#"
    },
    project2: {
        title: "Health Tracking App",
        description: "Mobile application for tracking fitness metrics and health data with visualization tools.",
        technologies: ["React Native", "Firebase", "D3.js"],
        image: "assets/project2.jpg",
        details: `<p>A cross-platform mobile application that helps users track their health metrics over time.</p>
                  <ul>
                      <li>Daily activity tracking (steps, calories, etc.)</li>
                      <li>Data visualization with interactive charts</li>
                      <li>Goal setting and progress tracking</li>
                      <li>Cloud sync across devices</li>
                  </ul>`,
        link: "#"
    },
    project3: {
        title: "Analytics Dashboard",
        description: "Business intelligence dashboard with real-time data visualization and reporting tools.",
        technologies: ["Vue.js", "D3.js", "Python", "SQL"],
        image: "assets/project3.jpg",
        details: `<p>Enterprise-grade dashboard for visualizing complex business metrics.</p>
                  <ul>
                      <li>Customizable data widgets</li>
                      <li>Real-time updates via WebSockets</li>
                      <li>Exportable reports in multiple formats</li>
                      <li>Role-based access control</li>
                  </ul>`,
        link: "#"
    }
};

// Open modal when project card is clicked
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectsData[projectId];
        
        const detailsContainer = modal.querySelector('.project-details');
        detailsContainer.innerHTML = `
            <h2>${project.title}</h2>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => 
                    `<span class="tech-badge">${tech}</span>`
                ).join('')}
            </div>
            <div class="project-full-details">
                ${project.details}
            </div>
            <a href="${project.link}" class="submit-btn" target="_blank">View Live Project</a>
        `;
        
        modal.classList.add('active');
    });
});

// Close modal
modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});