// portfolio_script.js - COMPLETE WORKING VERSION WITHOUT DOCUMENT PREVIEW

document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio script loaded successfully');
    
    /* =============================
       MOBILE MENU
    ============================== */
    console.log('Initializing mobile menu...');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        console.log('Mobile menu elements found');
        
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log('Menu button clicked');
            
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking links
        const navLinksList = document.querySelectorAll('.nav-links a');
        if (navLinksList.length > 0) {
            navLinksList.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    } else {
        console.warn('Mobile menu elements not found. Make sure your HTML has:');
        console.warn('- <button id="mobileMenuBtn"> with hamburger icon');
        console.warn('- <div id="navLinks"> or similar for navigation links');
    }
    
    /* =============================
       FOOTER YEAR
    ============================== */
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
        console.log('Footer year updated to:', currentYear.textContent);
    }
    
    /* =============================
       CONTACT FORM
    ============================== */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        console.log('Contact form found');
        
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[name="name"]')?.value.trim();
            const email = this.querySelector('input[name="email"]')?.value.trim();
            const message = this.querySelector('textarea[name="message"]')?.value.trim();
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields before submitting.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
            
            // Reset form
            this.reset();
            
            console.log('Contact form submitted:', { name, email });
        });
    }
    
    /* =============================
       SMOOTH SCROLL
    ============================== */
    console.log('Setting up smooth scroll...');
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    console.log('Found anchor links:', anchorLinks.length);
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#' || href === '#!') {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                console.log('Scrolling to:', href);
                
                // Calculate header height
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 80;
                
                // Calculate target position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    }
                    document.body.style.overflow = '';
                }
            } else {
                console.warn('Smooth scroll target not found:', href);
            }
        });
    });
    
   
    const projectData = [
  {
    id: 1,
    title: "Introduction to Computing",
    description:
      "A foundational project focused on professional document creation using Microsoft Word, showcasing structured formatting, layout design, and technical documentation skills.",
    technologies: ["Microsoft Word", "Documentation", "Formatting"],
    documents: [
      {
        title: "Assessment 1",
        description:
          "Comprehensive documentation demonstrating proper formatting, layout design, and content organization.",
        url: "documents/cce101/assessment1.pdf",
        fileType: "PDF"
      },
      {
        title: "Assessment 2",
        description:
          "Supplementary documentation highlighting advanced formatting techniques and structured presentation.",
        url: "documents/cce101/assessment2.pdf",
        fileType: "PDF"
      }
    ]
  },

  {
    id: 2,
    title: "Computer Programming 2",
    description:
      "A Java-based project demonstrating Object-Oriented Programming principles such as encapsulation, inheritance, and polymorphism through practical application development.",
    technologies: ["Java", "OOP"],
    documents: [
      {
        title: "Java Programming Project",
        description:
          "Complete Java application implementing core OOP concepts with structured code design.",
        url: "documents/cce103.pdf",
        fileType: "PDF"
      }
    ]
  },

  {
    id: 3,
    title: "Information Management",
    description:
      "A database management project involving system analysis, ER diagram design, and structured SQL-based data management solutions.",
    technologies: ["MySQL", "SQL", "ER Diagram", "Database Design"],
    documents: [
      {
        title: "SWOT Analysis",
        description:
          "System analysis document outlining strengths, weaknesses, opportunities, and threats.",
        url: "documents/cce104/CAMPILAN_PRAC2.jpg",
        fileType: "Image"
      },
      {
        title: "ER Diagrams",
        description:
          "Entity-Relationship diagrams illustrating database structure and relationships.",
        url: "documents/cce104/Final-CCE106-ERD-1.docx",
        fileType: "PDF"
      },
      {
        title: "Case Study",
        description:
          "Detailed case study including SQL queries and database implementation strategies.",
        url: "documents/cce104/G8_casestudy.pdf",
        fileType: "PDF"
      }
    ]
  },

  {
    id: 4,
    title: "Data Structures & Algorithms",
    description:
      "An analytical project focused on hashing techniques and evaluating the efficiency of various data structures and algorithms.",
    technologies: ["Algorithms", "Hashing", "Data Structures"],
    documents: [
      {
        title: "Hashing Implementation",
        description:
          "Documentation and analysis of hashing algorithms and their real-world applications.",
        url: "documents/cce105/Group_F_Hashing.pdf",
        fileType: "PDF"
      }
    ]
  },

  {
    id: 5,
    title: "IT Elective 1",
    description:
      "An in-depth exploration of operating systems, covering system architecture, process management, and resource allocation using virtual environments.",
    technologies: ["VirtualBox", "Ubuntu", "Operating Systems"],
    documents: [
      {
        title: "Operating Systems Lab",
        description:
          "Laboratory exercises and reports focused on operating system concepts and implementation.",
        url: "documents/it_elective_1/Copy of Campilan_Lab_Act#3.pdf",
        fileType: "PDF"
      },
      {
        title: "Ubuntu Overview",
        description:
          "Documentation highlighting Ubuntu installation, configuration, and system usage.",
        url: "documents/it_elective_1/Copy of Campilan_UBUNTUDESKTOP.pdf",
        fileType: "PDF"
      }
    ]
  },

  {
    id: 6,
    title: "IT Elective 2",
    description:
      "A programming-focused project emphasizing Object-Oriented Programming principles for building maintainable and scalable software solutions.",
    technologies: ["OOP", "Java"],
    documents: [
      {
        title: "OOP Implementation",
        description:
          "Project demonstrating object-oriented design and implementation using Java.",
        url: "documents/it_elective_2/Campilan,SJ.pdf",
        fileType: "PDF"
      }
    ]
  },

  {
    id: 7,
    title: "Networking 1",
    description:
      "A network design project centered on creating efficient and secure network topologies for a logistics and delivery system.",
    technologies: ["Networking", "Topology Design"],
    documents: [
      {
        title: "Networking Plan",
        description:
          "Detailed network topology design and implementation plan for a delivery system.",
        url: "documents/networking_1/Networking%20Plan.pdf",
        fileType: "PDF"
      },
      {
        title: "Network Topology",
        description:
          "Visual representation of the proposed network infrastructure.",
        url: "documents/networking_1/J&T network topology.pdf",
        fileType: "PDF"
      }
    ]
  },

  {
    id: 8,
    title: "Human-Computer Interaction",
    description:
      "A user-centered design project focused on usability testing, user behavior analysis, and interface optimization.",
    technologies: ["UI/UX Design", "Usability Testing"],
    documents: [
      {
        title: "HCI Project Report",
        description:
          "Comprehensive report detailing usability testing methods and design improvements.",
        url: "documents/image.png",
        fileType: "Image"
      }
    ]
  },

  {
    id: 9,
    title: "Professional Track for IT 3",
    description:
      "A mobile application development project using Android Studio, emphasizing functional design and real-world usability.",
    technologies: ["Android Studio", "Mobile Development"],
    documents: [
      {
        title: "Mobile App Project",
        description:
          "Complete Android application development documentation and implementation details.",
        url: "documents/it_9a/Emergify%20(1).pdf",
        fileType: "PDF"
      },
      {
        title: "Practicum Output",
        description:
          "Practical application output demonstrating mobile development concepts.",
        url: "documents/it_9a/prac1.png",
        fileType: "Image"
      }
    ]
  },

  {
    id: 10,
    title: "Mobile Development",
    description:
      "A cross-platform mobile development project using Flutter and Dart, focusing on responsive UI design and application functionality.",
    technologies: ["Flutter", "Dart"],
    documents: [
      {
        title: "Practicum 1",
        description:
          "Initial Flutter application development activity and documentation.",
        url: "documents/cce106/Campilan_Activity.pdf",
        fileType: "PDF"
      },
      {
        title: "Practicum 2",
        description:
          "Advanced Flutter development activity demonstrating improved UI and logic handling.",
        url: "documents/cce106/Campilan_Activity 2.pdf",
        fileType: "PDF"
      }
    ]
  }
];

    
    console.log('Loaded project data:', projectData.length, 'projects');
    
    /* =============================
       CREATE MODAL DYNAMICALLY
    ============================== */
    console.log('Creating modal...');
    
    // Check if modal already exists
    let modal = document.getElementById('projectModal');
    
    if (!modal) {
        // Create modal HTML (NO PREVIEW SECTION)
        const modalHTML = `
            <div class="modal" id="projectModal">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <button class="close-modal" aria-label="Close modal">
                        <i class="fas fa-times"></i>
                    </button>
                    <h2 class="modal-title" id="modalTitle">Project Details</h2>
                    <div class="modal-body" id="modalBody">
                        <p>Loading project details...</p>
                    </div>
                </div>
            </div>
        `;
        
        // Insert modal into body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        modal = document.getElementById('projectModal');
        console.log('Modal created successfully');
    }
    
    // Get modal elements
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = modal.querySelector('.close-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    
    /* =============================
       MODAL FUNCTIONS (NO PREVIEW)
    ============================== */
    function openProjectModal(projectId) {
        console.log('Opening modal for project ID:', projectId);
        
        // Find the project
        const project = projectData.find(p => p.id === projectId);
        
        if (!project) {
            console.error('Project not found with ID:', projectId);
            alert('Project details not available.');
            return;
        }
        
        // Update modal content WITHOUT preview section
        modalTitle.textContent = project.title;
        
        modalBody.innerHTML = `
            <div class="project-modal-content">
                <div class="project-description">
                    <h3>Description</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="project-technologies">
                    <h3>Technologies Used</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="project-documents">
                    <h3>Project Documents <span class="document-count">(${project.documents.length} document${project.documents.length !== 1 ? 's' : ''})</span></h3>
                    <div class="documents-list">
                        ${project.documents.map((doc, index) => `
                            <div class="document-item ${doc.isPrimary ? 'primary-doc' : ''}">
                                <div class="doc-icon">
                                    <i class="fas ${getFileIcon(doc.fileType)}"></i>
                                </div>
                                <div class="doc-info">
                                    <h4>${doc.title} ${doc.isPrimary ? '<span class="primary-badge">Primary</span>' : ''}</h4>
                                    <p>${doc.description}</p>
                                    <div class="doc-meta">
                                        <span><i class="fas fa-file"></i> ${doc.fileType}</span>
                                        <span><i class="fas fa-weight-hanging"></i> ${doc.fileSize}</span>
                                        <span><i class="fas fa-copy"></i> ${doc.pages}</span>
                                    </div>
                                </div>
                                <div class="doc-actions">
                                    <a href="${doc.url}" 
                                       class="btn btn-small btn-primary"
                                       download="${doc.title.replace(/\s+/g, '_')}.${doc.fileType.toLowerCase()}"
                                       title="Download ${doc.title}">
                                        <i class="fas fa-download"></i> Download
                                    </a>
                                    ${doc.fileType === 'PDF' || doc.fileType === 'Image' || doc.fileType === 'PPTX' ? `
                                    <a href="${doc.url}" 
                                       class="btn btn-small btn-secondary"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       title="Open ${doc.title} in new tab">
                                        <i class="fas fa-external-link-alt"></i> View
                                    </a>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="project-meta">
                    <h3>Project Details</h3>
                    <div class="meta-grid">
                        <div class="meta-item">
                            <span class="meta-label">Date Completed:</span>
                            <span class="meta-value">${project.date}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Total Documents:</span>
                            <span class="meta-value">${project.documents.length}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Technologies:</span>
                            <span class="meta-value">${project.technologies.join(', ')}</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-actions">
                    ${project.documents.length > 1 ? `
                    <button class="btn btn-primary download-all-btn" onclick="downloadAllDocuments(${projectId})">
                        <i class="fas fa-file-archive"></i> Download All Documents
                    </button>
                    ` : `
                    <a href="${project.documents[0].url}" 
                       class="btn btn-primary" 
                       download="${project.title.replace(/\s+/g, '_')}.${project.documents[0].fileType.toLowerCase()}">
                        <i class="fas fa-download"></i> Download Main Document
                    </a>
                    `}
                    <button class="btn btn-outline close-modal-btn">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        `;
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add active class with slight delay for animation
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Store current active element for focus return
        modal._previousActiveElement = document.activeElement;
        
        // Focus first focusable element in modal
        setTimeout(() => {
            const focusable = modal.querySelector('button, a, input, textarea');
            if (focusable) focusable.focus();
        }, 50);
        
        console.log('Modal opened successfully');
    }
    
    // Helper function for file icons
    function getFileIcon(fileType) {
        const iconMap = {
            'PDF': 'fa-file-pdf',
            'ZIP': 'fa-file-archive',
            'PPTX': 'fa-file-powerpoint',
            'DOCX': 'fa-file-word',
            'JPG': 'fa-file-image',
            'Image': 'fa-file-image',
            'IPYNB': 'fa-file-code',
            'SQL': 'fa-database',
            'APK': 'fa-mobile-alt'
        };
        return iconMap[fileType] || 'fa-file';
    }
    
    // Download all documents function
    window.downloadAllDocuments = function(projectId) {
        const project = projectData.find(p => p.id === projectId);
        if (!project) return;
        
        alert(`Preparing download of ${project.documents.length} documents for "${project.title}".\n\nIn a real implementation, this would create a ZIP file containing:\n\n${project.documents.map(doc => `• ${doc.title} (${doc.fileSize})`).join('\n')}`);
    };
    
    function closeProjectModal() {
        console.log('Closing modal');
        
        modal.classList.remove('active');
        
        // Wait for animation before hiding
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            
            // Return focus to previous element
            if (modal._previousActiveElement) {
                modal._previousActiveElement.focus();
            }
        }, 300);
    }
    
    /* =============================
       MODAL EVENT LISTENERS
    ============================== */
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
    
    // Close modal when clicking close button inside modal body
    modal.addEventListener('click', function (e) {
        if (e.target.classList.contains('close-modal-btn')) {
            closeProjectModal();
        }
    });
    
    /* =============================
       PROJECT BUTTON SETUP
    ============================== */
    console.log('Setting up project buttons...');
    
    // Method 1: Look for buttons with class 'view-project'
    let projectButtons = document.querySelectorAll('.view-project, .project-btn, #projects .btn');
    
    // If no buttons found, look for any button in projects section
    if (projectButtons.length === 0) {
        projectButtons = document.querySelectorAll('#projects button');
    }
    
    // If still no buttons, look for any elements that might be project cards
    if (projectButtons.length === 0) {
        const projectCards = document.querySelectorAll('.project-card, .project-item');
        projectCards.forEach((card, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn view-project-btn';
            btn.textContent = 'View Project';
            btn.setAttribute('data-project-id', index + 1);
            card.appendChild(btn);
        });
        projectButtons = document.querySelectorAll('.view-project-btn');
    }
    
    console.log('Found project buttons:', projectButtons.length);
    
    // Add click event to each button
    projectButtons.forEach((button, index) => {
        // Determine project ID
        let projectId = button.getAttribute('data-project-id');
        
        if (!projectId) {
            // Try to get from parent or calculate
            projectId = index + 1;
        }
        
        // Convert to number
        projectId = parseInt(projectId);
        
        // Verify project exists
        if (projectId > 0 && projectId <= projectData.length) {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                openProjectModal(projectId);
            });
            
            // Add data attribute for reference
            button.setAttribute('data-project-id', projectId);
            
            console.log(`Button ${index + 1} linked to project ID: ${projectId}`);
        } else {
            console.warn(`No project data for ID: ${projectId}`);
            button.style.opacity = '0.5';
            button.style.cursor = 'not-allowed';
            button.addEventListener('click', function (e) {
                e.preventDefault();
                alert('Project details coming soon!');
            });
        }
    });
    
    /* =============================
       ADD CSS FOR MODAL (WITHOUT PREVIEW)
    ============================== */
    if (!document.getElementById('modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal.active {
                opacity: 1;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                position: relative;
                background: white;
                width: 90%;
                max-width: 900px;
                max-height: 90vh;
                margin: 5vh auto;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                overflow-y: auto;
                transform: translateY(-20px);
                transition: transform 0.3s ease;
            }
            
            .modal.active .modal-content {
                transform: translateY(0);
            }
            
            .close-modal {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
                padding: 0.5rem;
                line-height: 1;
                z-index: 10;
            }
            
            .close-modal:hover {
                color: #333;
            }
            
            .modal-title {
                margin-top: 0;
                margin-bottom: 1.5rem;
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 0.5rem;
            }
            
            .project-modal-content > * {
                margin-bottom: 2rem;
            }
            
            .tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-top: 0.5rem;
            }
            
            .tech-tag {
                background: #e8f4fc;
                color: #2980b9;
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 500;
            }
            
            .meta-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            
            .meta-item {
                background: #f8f9fa;
                padding: 1rem;
                border-radius: 5px;
                border-left: 4px solid #3498db;
            }
            
            .meta-label {
                display: block;
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 0.25rem;
            }
            
            .meta-value {
                color: #34495e;
            }
            
            .project-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 1px solid #eee;
            }
            
            .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                padding: 0.75rem 1.5rem;
                border-radius: 5px;
                text-decoration: none;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                border: none;
                font-size: 1rem;
            }
            
            .btn-primary {
                background: #3498db;
                color: white;
            }
            
            .btn-primary:hover {
                background: #2980b9;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
            }
            
            .btn-secondary {
                background: #2ecc71;
                color: white;
            }
            
            .btn-secondary:hover {
                background: #27ae60;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
            }
            
            .btn-outline {
                background: transparent;
                color: #7f8c8d;
                border: 2px solid #bdc3c7;
            }
            
            .btn-outline:hover {
                background: #f8f9fa;
                color: #34495e;
            }
            
            /* Documents list styling - NO PREVIEW */
            .project-documents h3 {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
            
            .document-count {
                font-size: 1rem;
                font-weight: normal;
                color: #7f8c8d;
            }
            
            .documents-list {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            
            .document-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1.25rem;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #3498db;
                transition: all 0.3s ease;
            }
            
            .document-item.primary-doc {
                border-left: 4px solid #2ecc71;
                background: #f0f9f0;
            }
            
            .document-item:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .doc-icon {
                font-size: 1.75rem;
                color: #3498db;
                min-width: 50px;
                text-align: center;
            }
            
            .document-item.primary-doc .doc-icon {
                color: #2ecc71;
            }
            
            .doc-info {
                flex: 1;
            }
            
            .doc-info h4 {
                margin: 0 0 0.5rem 0;
                color: #2c3e50;
                font-size: 1.1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .primary-badge {
                background: #2ecc71;
                color: white;
                padding: 0.25rem 0.5rem;
                border-radius: 3px;
                font-size: 0.75rem;
                font-weight: 600;
            }
            
            .doc-info p {
                margin: 0 0 0.75rem 0;
                color: #666;
                font-size: 0.95rem;
                line-height: 1.4;
            }
            
            .doc-meta {
                display: flex;
                gap: 1.5rem;
                font-size: 0.9rem;
                color: #7f8c8d;
            }
            
            .doc-meta span {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .doc-actions {
                display: flex;
                gap: 0.5rem;
                min-width: 150px;
                justify-content: flex-end;
            }
            
            .btn-small {
                padding: 0.6rem 1rem;
                min-width: 100px;
                font-size: 0.9rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
            
            .btn-small i {
                margin: 0;
            }
            
            .download-all-btn {
                background: linear-gradient(135deg, #3498db, #2ecc71);
            }
            
            .download-all-btn:hover {
                background: linear-gradient(135deg, #2980b9, #27ae60);
                transform: translateY(-2px);
                box-shadow: 0 5px 20px rgba(52, 152, 219, 0.4);
            }
            
            @media (max-width: 768px) {
                .modal-content {
                    width: 95%;
                    padding: 1.5rem;
                    margin: 2vh auto;
                }
                
                .project-actions {
                    flex-direction: column;
                }
                
                .btn {
                    width: 100%;
                    justify-content: center;
                }
                
                .document-item {
                    flex-direction: column;
                    text-align: center;
                    gap: 1rem;
                    padding: 1.5rem;
                }
                
                .doc-icon {
                    font-size: 2rem;
                }
                
                .doc-info h4 {
                    justify-content: center;
                }
                
                .doc-meta {
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .doc-actions {
                    width: 100%;
                    justify-content: center;
                    min-width: auto;
                }
                
                .btn-small {
                    min-width: 120px;
                }
            }
        `;
        document.head.appendChild(modalStyles);
        console.log('Modal styles injected (without preview)');
    }
    
    /* =============================
       DEBUGGING HELPERS
    ============================== */
    console.log('=== PORTFOLIO SCRIPT INITIALIZED ===');
    console.log('Elements found:');
    console.log('- Mobile Menu Button:', mobileMenuBtn ? '✓' : '✗');
    console.log('- Nav Links:', navLinks ? '✓' : '✗');
    console.log('- Contact Form:', contactForm ? '✓' : '✗');
    console.log('- Current Year:', currentYear ? '✓' : '✗');
    console.log('- Project Modal:', modal ? '✓' : '✗');
    console.log('- Project Buttons:', projectButtons.length);
    console.log('====================================');
    
    // Test function to verify script is working
    window.testPortfolioScript = function () {
        console.log('=== TESTING PORTFOLIO SCRIPT ===');
        console.log('1. Mobile menu toggle:', mobileMenuBtn ? 'Available' : 'Missing');
        console.log('2. Project modal:', modal ? 'Available' : 'Missing');
        console.log('3. Project data loaded:', projectData.length, 'projects');
        console.log('4. Try opening project 1 modal...');
        
        if (projectData.length > 0) {
            openProjectModal(1);
            setTimeout(() => {
                console.log('Modal should be open now');
                console.log('Close modal with ESC key or click X button');
            }, 500);
        }
        
        return 'Portfolio script test completed';
    };
    
    // Expose functions for debugging
    window.debugPortfolio = {
        openModal: openProjectModal,
        closeModal: closeProjectModal,
        getProjectData: () => projectData,
        test: () => console.log('Portfolio script is loaded and running')
    };

});



